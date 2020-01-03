<template>
  <div class="publicLine">
    <pcheckbox :orderValue="shopValue" :orderCheckList="shopCheckList" :selectValue="selectValue"
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
          <el-button :type="item.row.state=='未审核'?'warning':'info'">{{item.row.state=='未审核'?'审核':'查看'}}</el-button>
        </template>
      </el-table-column>
      <el-table-column
        prop="id"
        label="商品id">
      </el-table-column>
      <el-table-column
        prop="shopName"
        label="商品名">
      </el-table-column>
      <el-table-column
        prop="shopImg"
        label="描述图">
        <img src="../../assets/public/user.png" style="width:64px;height:64px" alt="">
      </el-table-column>
      <el-table-column
        prop="shopIssue"
        label="发布店铺">
      </el-table-column>
      <el-table-column
        prop="price"
        label="售价">
      </el-table-column>
      <el-table-column
        prop="state"
        label="审核状态">
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
      shopValue: '全部',
      shopCheckList: ['全部', '待审核', '已审核', '未通过'],
      searchValue: '',
      selectList: [{ value: 0, label: '商品名' }, { value: 1, label: '店铺' }, { value: 2, label: '编号' }],
      selectValue: '',
      selectAll: false,
      total: 12,
      tableData: [],
      selectDelBtn: 'info'
    }
  },
  methods: {
    init () {
      var list = [{ shopName: '咖啡豆', shopIssue: '猫咖旗舰店', price: 230, state: '通过' }, { shopName: '运动鞋', shopIssue: '李宁旗舰店', price: 98, state: '未审核' }, { shopName: '棒球帽', shopIssue: '优衣库旗舰店', price: 120, state: '未通过' }]
      list.forEach((value, key) => {
        value.cb = false
        value.id = key
      })
      this.tableData = list
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
        this.$refs.page.selectAlls = true
      } else if (i === (index - 1)) {
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
    checkboxEvent (value1, value2) {
      console.log(value1, value2)
    },
    radioEvent (key) {
      console.log(key)
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
