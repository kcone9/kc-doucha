<template>
  <div class="publicLine">
    <div class="nav">
      <div class="left">
          <el-radio-group v-model="chitTyValue" ref="kc">
            <el-radio-button v-for="(item,i) of chitTypeList" :label="item" :key="i"></el-radio-button>
          </el-radio-group>
          <el-button @click="chitAddBtn" type="success" style="margin-left:30px" icon="el-icon-plus">发放代金券</el-button>
        </div>
        <div class="right">
          <el-select v-model="selectValue" placeholder="请选择" class="select">
            <el-option
              v-for="(item, i) of selectList"
              :key="i"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
          <el-input v-model="searchValue" placeholder="请输入内容" class="input"></el-input>
          <el-button type="primary" @click="checkBtn">确定</el-button>
        </div>
    </div>
    <el-table
      :data="tableData"
      stripe border
      style="width: 100%">
      <el-table-column
        label="代金券编号">
        <template slot-scope="scope">
          <el-checkbox v-model="scope.row.cb" @change="tableCheck(scope.row.id)">{{scope.row.id}}</el-checkbox>
        </template>
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="item">
          <el-button type="primary" @click="chitDetail(item.row.id)">查看</el-button>
        </template>
      </el-table-column>
      <el-table-column
        prop="name"
        label="名称">
      </el-table-column>
      <el-table-column
        label="描述">
        <template slot-scope="scope">
          <p class="privateComment">{{scope.row.desc}}</p>
        </template>
      </el-table-column>
      <el-table-column
        prop="deduct"
        label="满减金额">
      </el-table-column>
      <el-table-column
        prop="count"
        label="发放数量">
      </el-table-column>
      <el-table-column
        prop="receive"
        label="领取数量">
      </el-table-column>
    </el-table>
    <el-dialog title="发放代金券" :visible.sync="dialogAfterAdd">
      <el-form >
        <el-form-item label="活动名称" label-width="100px">
          sdhskdhks
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogAfterAdd = false">确定发放</el-button>
      </div>
    </el-dialog>
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
      chitTyValue: '全部',
      chitTypeList: ['全部', '有效', '失效'],
      selectValue: '',
      selectList: [{ value: 0, label: '代金券名称' }, { value: 1, label: '代金券金额' }],
      searchValue: '',
      selectAll: false,
      total: 12,
      selectDelBtn: 'info',
      dialogAfterAdd: false
    }
  },
  methods: {
    init () {
      var list = [{ name: '中秋大促', desc: '中秋八折，限时三天', deduct: '100', count: '200', receive: '58' }, { name: '双十一', desc: '错过一年在等一年', deduct: '200', count: '300', receive: '145' }, { name: '双十二', desc: '年前大满减', deduct: '200', count: '220', receive: '87' }, { name: '圣诞狂欢', desc: '平安夜，圣诞节购礼享八折', deduct: '450', count: '260', receive: '78' }, { name: '元旦比心', desc: '今年大促买新礼品迎新年', deduct: '265', count: '100', receive: '45' }]
      list.forEach((value, key) => {
        value.cb = false
        value.id = key
      })
      this.tableData = list
    },
    chitAddBtn () {
      this.dialogAfterAdd = true
    },
    checkBtn () {
      console.log(355)
    },
    chitDetail (key) {
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

</style>
