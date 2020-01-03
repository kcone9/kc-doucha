<template>
  <div class="publicLine">
    <pcheckbox :orderValue="orderValue" :orderCheckList="orderCheckList" :selectValue="selectValue"
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
        prop="id"
        label="订单编号">
      </el-table-column>
      <el-table-column
        label="描述图">
        <img src="../../assets/public/user.png" style="width:64px;height:64px" alt="">
      </el-table-column>
      <el-table-column
        prop="shopName"
        label="商品名称">
      </el-table-column>
      <el-table-column
        prop="buyName"
        label="买家姓名">
      </el-table-column>
      <el-table-column
        prop="deliverAdds"
        label="发货地址">
      </el-table-column>
      <el-table-column
        prop="doneTime"
        label="完成时间">
      </el-table-column>
      <el-table-column
        prop="state"
        label="订单状态">
      </el-table-column>
      <el-table-column
        prop="count"
        label="交易额">
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
      orderValue: '全部',
      orderCheckList: ['全部', '待付款', '代发货', '待收货', '已完成'],
      selectValue: '',
      selectList: [{ value: 1, label: '商品名称' }, { value: 2, label: '买家姓名' }, { value: 3, label: '订单编号' }],
      searchValue: '',
      selectAll: false,
      total: 5,
      tableData: '',
      selectDelBtn: 'info'
    }
  },
  methods: {
    init () {
      var list = [{ shopName: '咖啡豆', buyName: '张元', deliverAdds: '广东省广州市', setTime: '2019-12-25', doneTime: '2019-12-26', state: '完成', count: 123 }, { shopName: '东坡茶', buyName: '李永光', deliverAdds: '山东青海', setTime: '2019-12-25', doneTime: '待完成', state: '待发货', count: 260 }, { shopName: '菠萝差', buyName: '王长浩', deliverAdds: '浙江江苏', setTime: '2019-12-25', doneTime: '待完成', state: '待收货', count: 320 }]
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
        // console.log(this.$refs.page.selectAlls=true)
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
