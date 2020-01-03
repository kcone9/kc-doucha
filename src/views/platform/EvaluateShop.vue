<template>
  <div class="publicLine">
    <pcheckbox :orderValue="evaluateTypeValue" :orderCheckList="evaluateTypeList" :selectValue="selectValue"
    :selectList="selectList" :searchValue="searchValue" @checkboxEvent="checkboxEvent" @radioEvent="radioEvent"/>
    <el-table
      :data="tableData"
      stripe border
      style="width: 100%">
      <el-table-column
        label="编号"
        width="180">
        <template slot-scope="scope">
          <el-checkbox v-model="scope.row.cb" @change="tableCheck(scope.row.id)">{{scope.row.id}}</el-checkbox>
        </template>
      </el-table-column>
      <el-table-column
        label="用户id"
        width="180">
        <template slot-scope="item">
          {{item.row.id}}
        </template>
      </el-table-column>
      <el-table-column
        prop="code"
        label="商品名"
        width="180">
        <template slot-scope="item">
          {{item.row.productName}}
        </template>
      </el-table-column>
      <el-table-column
        label="用户名">
        <template slot-scope="item" style="width:100%">
          {{item.row.userName}}
        </template>
      </el-table-column>
      <el-table-column
        label="商品描述">
        <template slot-scope="item">
          <p class="privateComment">{{item.row.des}}</p>
        </template>
      </el-table-column>
      <el-table-column
        label="服务态度">
        <template slot-scope="item">
          {{item.row.attitu}}
        </template>
      </el-table-column>
      <el-table-column
        label="发货速度">
        <template slot-scope="item">
          {{item.row.speed}}
        </template>
      </el-table-column>
      <el-table-column
        label="配送服务">
        <template slot-scope="item">
          {{item.row.deliver}}
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
      total: 12,
      evaluateTypeValue: '全部',
      evaluateTypeList: ['全部', '5星', '4星', '3星', '2星', '1星'],
      selectList: [{ value: 0, label: '用户名' }, { value: 1, label: '店铺名' }, { value: 2, label: '订单号' }],
      selectValue: '',
      searchValue: '',
      selectAll: false,
      tableData: [],
      selectDelBtn: 'info'
    }
  },
  methods: {
    init () {
      var list = [{ productName: '三只松鼠', userName: '王小虎', des: '太好吃了', attitu: '3', speed: '5', deliver: '4' }, { productName: '普洱茶', userName: '张成', des: '好喝不上火', attitu: '1', speed: '4', deliver: '1' }, { productName: '铁观音', userName: '卢本伟', des: '不错不错，下次再来', attitu: '2', speed: '4', deliver: '4' }, { productName: '茉绿茶', userName: '何美美', des: '美颜，瘦身', attitu: '4', speed: '3', deliver: '1' }]
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
