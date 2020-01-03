<template>
  <div class="publicLine">
    <pcheckbox :orderValue="navValue" :orderCheckList="navList" :selectValue="selectValue"
      :selectList="selectList" :searchValue="searchValue" @checkboxEvent="checkboxEvent" @radioEvent="radioEvent"/>
    <el-table
      :data="tableData" border
      stripe
      style="width: 100%">
      <el-table-column
        label="订单编号">
        <template slot-scope="item">
          <el-checkbox v-model="item.row.cb" @change="tableCheck(item.row.id)">{{item.row.id}}</el-checkbox>
        </template>
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="item">
          <p class="tableCursor" @click="openDialog(item.row.id,item.state)">查看</p>
        </template>
      </el-table-column>
      <el-table-column
        label="描述图">
        <img src="../../assets/image/user.png" alt="" style="width:64px;height:64px" >
      </el-table-column>
      <el-table-column
        prop="name"
        label="商品名称">
      </el-table-column>
      <el-table-column
        prop="buyname"
        label="买家姓名">
      </el-table-column>
      <el-table-column
        prop="address"
        label="发货地址">
      </el-table-column>
      <el-table-column
        prop="settime"
        label="创建时间">
      </el-table-column>
      <el-table-column
        prop="price"
        label="单价">
      </el-table-column>
      <el-table-column
        prop="count"
        label="数量">
      </el-table-column>
      <el-table-column
        prop="payment"
        label="实付">
      </el-table-column>
      <el-table-column
        prop="state"
        label="订单状态">
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="item">
          <p class="tableCursor" @click="operDo(item.row.state,item.row.id)">{{item.row.oper}}</p>
        </template>
      </el-table-column>
    </el-table>
    <ppage :total="total" :selectAll="selectAll" ref="page"
    :type="selectDelBtn" @messgaeAlert="messgaeAlert" @messageTrue="messageTrue"
    @selectAllDo="selectAllDo"/>
    <el-dialog :title="form.id" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="收货人" label-width="150px">
          {{form.userName}}
        </el-form-item>
        <el-form-item label="订单状态" label-width="150px">
          {{form.state}}
        </el-form-item>
        <el-form-item label="订单数量" label-width="150px">
          {{form.count}}
        </el-form-item>
        <el-form-item label="单价" label-width="150px">
          {{form.price}}
        </el-form-item>
        <el-form-item label="实付" label-width="150px">
          {{form.payment}}
        </el-form-item>
        <el-form-item label="发货时间" label-width="150px">
          {{form.devTime}}
        </el-form-item>
        <el-form-item label="收货人" label-width="150px">
          {{form.takePerson}}
        </el-form-item>
        <el-form-item label="收货地址" label-width="150px">
          {{form.devAdds}}
        </el-form-item>
        <el-form-item label="收货号码" label-width="150px">
          {{form.phone}}
        </el-form-item>
        <el-form-item label="买家留言" label-width="150px">
          {{form.phone}}
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="填写快递信息" :visible.sync="dialogExpressValue">
      <el-form>
        <el-form-item label="买家姓名" label-width="200px">
          {{express.userName}}
        </el-form-item>
        <el-form-item label="发货地址" label-width="200px">
          {{express.adds}}
        </el-form-item>
        <el-form-item label="收货手机" label-width="200px">
          {{express.phone}}
        </el-form-item>
        <el-form-item label="选择物流" label-width="200px">
          <el-select v-model="express.expressName" placeholder="请选择物流公司" style="width:100px">
            <el-option label="申通" value="shanghai"></el-option>
            <el-option label="顺丰" value="beijing"></el-option>
            <el-option label="百世" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="请输入快递单号" label-width="200px">
          <el-input v-model="express.expressCode" autocomplete="off"/>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogExpressValue = false">确定发货</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { MessageBox, Message } from 'element-ui'
export default {
  data () {
    return {
      navList: ['全部', '待付款', '代发货', '待收货', '已完成'],
      navValue: '全部',
      tableData: [],
      searchValue: '',
      searchInput: '',
      selectValue: '',
      selectList: [{ value: 0, label: '订单名称' }, { value: 1, label: '发货地址' }, { value: 2, label: '订单编号' }],
      selectAll: false,
      total: 12,
      selectDelBtn: 'info',
      dialogFormVisible: false,
      dialogExpressValue: false,
      form: { id: '', userName: '', state: '', count: '', price: '', payment: '', devTime: '', takePerson: '', devAdds: '广东省广州市XXX', phone: '1533XXXX', message: '顺丰快递越快越好' },
      express: { userName: '', adds: '', phone: '', expressName: '', expressCode: '' }
    }
  },
  methods: {
    init () {
      var list = [{ buyname: '渣渣辉', name: '铁观音', address: '广州市天河区', settime: '2019-11-24', price: 120, count: 2, payment: 240, state: '待发货', oper: '填写快递单号' }, { buyname: '陈小春', name: '龙井茶', address: '广州市黄埔区', settime: '2019-11-25', price: 24, count: 1, payment: 24, state: '待收货', oper: '等待买家收货' }, { buyname: '周星驰', name: '茉绿茶', address: '广州市天越秀区', settime: '2019-11-26', price: 563, count: 1, payment: 563, state: '待付款', oper: '取消订单' }]
      list.forEach((value, key) => {
        value.id = key
        value.cb = false
        if (value.state === '代发货') {
          value.text = '填写快递单号'
        } else if (value.state === '代收货') {
          value.text = '查看'
        } else if (value.state === '代付款') {
          value.text = '取消订单'
        }
      })
      this.tableData = list
    },
    checkboxEvent (value1, value2) {
      console.log(value1, value2)
    },
    radioEvent (key) {
      console.log(key)
    },
    operDo (key, i) {
      if (key === '待付款') {
        this.messageTrue('是否取消该订单?', '订单已关闭', '操作取消')
      } else if (key === '待发货') {
        this.express.userName = this.tableData[i].buyname
        this.express.adds = this.tableData[i].address
        this.express.phone = '1588XXX'
        this.dialogExpressValue = true
      }
    },
    openDialog (key) {
      this.form.id = '订单编号：' + this.tableData[key].id
      this.form.userName = this.tableData[key].buyname
      this.form.state = this.tableData[key].state
      this.form.count = this.tableData[key].count
      this.form.price = this.tableData[key].price
      this.form.payment = this.tableData[key].payment
      this.form.devTime = this.tableData[key].settime
      this.form.takePerson = this.tableData[key].buyname
      this.dialogFormVisible = true
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
        // this.checkedAll = true
        this.$refs.page.selectAlls = true
      } else if (i === (index - 1)) {
        // this.checkedAll = false
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
    messageTrue (title, success, info) {
      if (title === undefined || title === null) {
        title = '此操作将永久删除该文件, 是否继续?'
        success = '删除成功'
        info = '已取消删除'
      }
      MessageBox.confirm(title, '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.messgaeAlert('success', success)
      }).catch(() => {
        this.messgaeAlert('info', info)
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
.tableCursor{
  cursor:pointer;
  color:#409EFF;
}
</style>
