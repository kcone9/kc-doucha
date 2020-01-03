<template>
  <div class="publicLine">
    <pcheckbox :orderValue="evaluateTyValue" :orderCheckList="afterTypeList" :selectValue="selectValue"
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
        <el-button type="primary">查看</el-button>
      </el-table-column>
      <el-table-column
        label="订单id">
        <template slot-scope="item">
          {{item.row.id}}
        </template>
      </el-table-column>
      <el-table-column
        prop="userName"
        label="用户名">
      </el-table-column>
      <el-table-column
        prop="shop"
        label="退换商品">
      </el-table-column>
      <el-table-column
        prop="shopName"
        label="退/换店铺">
      </el-table-column>
      <el-table-column
        label="退/换理由">
        <template slot-scope="item">
          <p class="privateComment">{{item.row.excuse}}</p>
        </template>
      </el-table-column>
      <el-table-column
        prop="state"
        label="售后状态">
      </el-table-column>
      <el-table-column
        label="备注">
        <template slot-scope="item">
          <p class="privateComment">{{item.row.remark}}</p>
        </template>
      </el-table-column>
    </el-table>
    <ppage :total="total" :selectAll="selectAll" ref="page"
    :type="selectDelBtn" @messgaeAlert="messgaeAlert" @messageTrue="messageTrue"
    @selectAllDo="selectAllDo"/>
  </div>
</template>
<script>
import { MessageBox, Message } from 'element-ui'
export default {
  data () {
    return {
      afterTypeList: ['全部', '换货', '退货'],
      evaluateTyValue: '全部',
      selectValue: '',
      selectList: [{ value: 1, label: '用户名' }, { vlaue: 1, label: '商品名' }],
      searchValue: '',
      selectAll: false,
      total: 50,
      tableData: [],
      selectDelBtn: 'info'
    }
  },
  methods: {
    init () {
      var list = [{ shopName: '三只松鼠', userName: '王小虎', shop: '夏威夷果', excuse: '质量不行', state: '待处理', remark: '处理用户售后请求' }, { shopName: '世纪铁观音旗舰店', userName: '里昂', shop: '粉红色铁观音', excuse: '不够甜', state: '等待买家发货', remark: '等待买家寄货' }, { shopName: '王老吉旗舰店', userName: '张桐', shop: '王老吉一箱', excuse: '太便宜', state: '等待商家收货', remark: '待收买家快递' }, { shopName: '绿茶广州店', userName: 'pipa酱', shop: '绿茶一箱', excuse: '味道太淡', state: '商家已收货', remark: '确认是否退/换' }, { shopName: '潮州海产', userName: '李春天', shop: '咸鱼干', excuse: '太闲了', state: '处理完毕', remark: '售后流程结束' }]
      list.forEach((value, key) => {
        value.cb = false
        value.id = key
      })
      this.tableData = list
    },
    checkboxEvent (value1, value2) {
      console.log(value1, value2)
    },
    radioEvent (key) {
      console.log(key)
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
        // this.selectAll = false
        this.$refs.page.selectAlls = false
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
    selectAllBtn () {
      if (this.selectAll) {
        this.selectAllDo(true)
      } else { this.selectAllDo(false) }
    },
    selectAllDo (boolean) {
      for (var value of this.tableData) {
        value.cb = boolean
      }
      if (boolean) this.selectDelBtn = 'primary'
      else this.selectDelBtn = 'info'
    },
    del () {
      this.selectDelBtn === 'info' ? this.messgaeAlert('info', '您未选择任何选项') : this.messageTrue()
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
</style>
