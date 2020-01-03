<template>
  <div class="publicLine">
    <pcheckbox :orderValue="chitTyValue" :orderCheckList="chitTypeList" :selectValue="selectValue"
    :selectList="selectList" :searchValue="searchValue" @checkboxEvent="checkboxEvent" @radioEvent="radioEvent"/>
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
        <el-button type="primary">查看</el-button>
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
      total: 30,
      tableData: '',
      selectDelBtn: 'info'
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
