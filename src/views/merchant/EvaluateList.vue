<template>
  <div class="publicLine">
    <pcheckbox :orderValue="evaluateTypeValue" :orderCheckList="evaluateTypeList" :selectValue="selectValue"
      :selectList="selectList" :searchValue="searchValue" @checkboxEvent="checkboxEvent" @radioEvent="radioEvent"/>
    <el-table
      :data="tableData"
      stripe border
      style="width: 100%">
      <el-table-column
        label="编号">
        <template slot-scope="scope">
          <el-checkbox v-model="scope.row.cb" @change="tableCheck(scope.row.id)">{{scope.row.id}}</el-checkbox>
        </template>
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="item">
          <el-button size="mini" @click="lookBtn(item.row.id)">查看</el-button>
          <el-button size="mini" v-show="item.row.ifReply==0" @click="vendoReply(item.row.id)">回复</el-button>
        </template>
      </el-table-column>
      <el-table-column
        prop="code"
        label="用户名">
        <template slot-scope="item">
          {{item.row.name}}
        </template>
      </el-table-column>
      <el-table-column
        label="评价内容">
        <template slot-scope="item" style="width:100%">
          <p class="privateComment">{{item.row.comment}}</p>
        </template>
      </el-table-column>
      <el-table-column
        label="评价时间"
        prop="time">
      </el-table-column>
      <el-table-column
        label="是否回复">
        <template slot-scope="item">
          {{item.row.ifReply==1?'是':'否'}}
        </template>
      </el-table-column>
      <el-table-column
        label="显示状态">
        <template slot-scope="item">
          {{item.row.ifShow==1?'是':'否'}}
        </template>
      </el-table-column>
      <el-table-column
        label="评价结果">
        <template slot-scope="item">
          {{item.row.result}}
        </template>
      </el-table-column>
    </el-table>
    <el-dialog :title="dialogReplyTitle" :visible.sync="dialogReply">
      <el-form>
        <el-form-item label="回复内容">
          <el-input type="textarea" rows="3" v-model="dialogReplyText" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogReplyBtn" :loading="dialogReplyButton">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog :title="dialogLookTitle" :visible.sync="dialogLook">
      <el-form :model="dialogLookForm">
        <el-form-item label="订单编号" label-width="120px">
          {{dialogLookForm.userId}}
        </el-form-item>
        <el-form-item label="用户名" label-width="120px">
          {{dialogLookForm.userName}}
        </el-form-item>
        <el-form-item label="用户名" label-width="120px">
          {{dialogLookForm.userName}}
        </el-form-item>
        <el-form-item label="评论图片" label-width="120px">
          <div class="commentimg">
            <img src="../../assets/public/user.png" alt="">
            <img src="../../assets/public/user.png" alt="">
          </div>
        </el-form-item>
        <el-form-item label="评价内容" label-width="120px">
          {{dialogLookForm.comment}}
        </el-form-item>
        <el-form-item label="评价时间" label-width="120px">
          {{dialogLookForm.time}}
        </el-form-item>
        <el-form-item label="评价结果" label-width="120px">
          {{dialogLookForm.result}}
        </el-form-item>
        <el-form-item label="商家是否回复" label-width="120px">
          {{dialogLookForm.ifReply==1?'是':'否'}}
        </el-form-item>
        <el-form-item label="回复内容" v-show="dialogLookForm.ifReply==1" label-width="120px">
          {{dialogLookForm.replyText}}
        </el-form-item>
        <el-form-item label="是否隐藏评论" label-width="120px">
          <el-switch @change="switchEvent(dialogLookForm.ifShow)"
            v-model="dialogLookForm.ifShow"
            active-color="#409EFF"
            inactive-color="#DCDFE6">
          </el-switch>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogLook = false">确 定</el-button>
      </div>
    </el-dialog>
    <ppage :total="total" :selectAll="selectAll" ref="page"
    :type="selectDelBtn" @messgaeAlert="messgaeAlert" @messageTrue="messageTrue"
    @selectAllDo="selectAllDo"/>
  </div>
</template>
<script>
import { MessageBox, Message, Loading } from 'element-ui'
export default {
  data () {
    return {
      evaluateTypeList: ['全部', '好评', '中评', '差评'],
      evaluateTypeValue: '全部',
      selectList: [{ value: 0, label: '用户名' }, { value: 1, label: '店铺名' }, { value: 2, label: '订单号' }],
      selectValue: '',
      searchValue: '',
      selectAll: false,
      total: 12,
      tableData: [],
      tableDataConst: [],
      selectDelBtn: 'info',
      dialogReply: false,
      dialogReplyText: '',
      dialogReplyTitle: '',
      dialogReplyButton: false,
      dialogReplyId: null,
      dialogLook: false,
      dialogLookTitle: '',
      dialogLookForm: {
        userId: 1,
        userName: '',
        comment: '',
        time: '',
        result: '中评',
        ifReply: null,
        ReplyText: '',
        ifShow: null
      }
    }
  },
  methods: {
    init () {
      var list = [{ name: '王小虎', comment: '太好吃了太好吃了太好吃了太好吃了太好吃了太好吃了太好吃了', time: '2019-12-3', result: '中评', ifReply: 1, ifShow: 1 }, { name: '李幽', comment: '全网第一', time: '2019-12-3', result: '好评', ifReply: 0, ifShow: 1 }, { name: '渣渣辉', comment: '辣条太好吃了', time: '2019-12-12', result: '差评', ifReply: 1, ifShow: 1 }, { name: '王小虎', comment: '买家未评论，系统默认好评', time: '2019-11-6', result: '好评', ifReply: 0, ifShow: 1 }]
      list.forEach((value, key) => {
        value.cb = false
        value.id = key
        switch (value.result) {
          case '好评':
            value.resultId = 1
            break
          case '中评':
            value.resultId = 2
            break
          case '差评':
            value.resultId = 3
            break
          default :
            value.resultId = 0
        }
      })
      this.tableDataConst = list
      this.tableData = list
    },
    switchEvent (boolean) {
      var loading = Loading.service({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.3)'
      })
      setTimeout(() => {
        loading.close()
        boolean ? this.messgaeAlert('info', '评论已隐藏') : this.messgaeAlert('success', '评论已显示')
        boolean ? this.forEachTarget(0) : this.forEachTarget(1)
      }, 1000)
    },
    forEachTarget (number) {
      this.tableData.forEach((value, id) => {
        if (value.id === this.dialogReplyId) {
          value.ifShow = number
        }
      })
    },
    vendoReply (key) {
      this.tableData.forEach((value, id) => {
        if (value.id === key) {
          this.dialogReplyTitle = '回复买家：' + value.name
          this.dialogReplyId = key
          this.dialogReply = true
          return false
        }
      })
    },
    dialogReplyBtn () {
      if (this.dialogReplyText.length !== 0) {
        this.dialogReplyButton = true
        setTimeout(() => {
          this.messgaeAlert('success', '回复成功')
          this.dialogReply = false
          this.dialogReplyButton = false
          this.tableData.forEach((value, key) => {
            if (value.id === this.dialogReplyId) {
              // this.tableData[this.dialogReplyId].ifReply = 1
              value.replyText = this.dialogReplyText
              this.dialogReplyText = ''
              value.ifReply = 1
              return false
            }
          })
        }, 1000)
      } else {
        this.messgaeAlert('info', '未输入字符')
      }
    },
    lookBtn (key) {
      this.dialogReplyId = key
      this.tableData.forEach((value, id) => {
        if (value.id === key) {
          this.dialogLookTitle = '订单编号' + value.id
          this.dialogLookForm.userId = value.id
          this.dialogLookForm.userName = value.name
          this.dialogLookForm.comment = value.comment
          this.dialogLookForm.time = value.time
          this.dialogLookForm.result = value.result
          this.dialogLookForm.ifReply = value.ifReply
          switch (value.ifShow) {
            case 1:
              this.dialogLookForm.ifShow = false
              break
            case 0:
              this.dialogLookForm.ifShow = true
          }
          this.dialogLook = true
          if (value.replyText) {
            this.dialogLookForm.replyText = value.replyText
          }
          return false
        }
      })
    },
    checkboxEvent (value1, value2) {
      console.log(value1, value2)
    },
    radioEvent (key) {
      var list = []
      if (key !== 0) {
        this.tableDataConst.forEach((value, id) => {
          if (key === value.resultId) {
            list.push(value)
          }
        })
        this.tableData = list
      } else {
        this.tableData = this.tableDataConst
      }
    },
    tableCheck (key) {
      var index = this.tableData.length
      var i = 0
      for (var value of this.tableData) {
        if (value.cb) {
          i = i + 1
        }
      }
      if (index === i) {
        // this.selectAll = true
        this.$refs.page.selectAlls = true
      } else if (i === (index - 1)) {
        this.$refs.page.selectAlls = false
        // this.selectAll = false
      }
      for (var item of this.tableData) {
        if (item.cb) {
          this.selectDelBtn = 'primary'
          break
        } else {
          this.selectDelBtn = 'info'
        }
      }
    },
    selectAllDo (boolean) {
      for (var value of this.tableData) {
        value.cb = boolean
      }
      if (boolean) this.selectDelBtn = 'primary'
      else this.selectDelBtn = 'info'
    },
    messageTrue () {
      MessageBox.confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.messgaeAlert('success', '删除成功')
      }).catch(() => {
        this.messgaeAlert('info', '已取消删除')
      })
    },
    messgaeAlert (type, text) {
      Message({
        type: type,
        message: text
      })
    }
  },
  created () {
    this.init()
  }
}
</script>
<style scoped lang="less">
.commentimg{
  display:flex;
  align-items:center;
  img{
    width:64px;
    height:64px;
    margin-right:10px;
  }
}
</style>
