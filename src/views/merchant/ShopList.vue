<template>
  <div class="publicLine">
    <psearch :selectValue="selectSelect" :options="options" :searchInout="searchInout" @searchEvent="searchEvent"/>
    <el-table
      :data="tableData"
      stripe border
      style="width: 100%">
      <el-table-column
        label="编号">
        <template slot-scope="scope">
          <el-checkbox v-model="scope.row.cb"  @change="tableCheck(scope.row.id)">{{scope.row.id}}</el-checkbox>
        </template>
      </el-table-column>
      <el-table-column
        label="操作">
        <template slot-scope="item">
          <el-button type="primary" @click="shopDetail(item.row.id)">查看</el-button>
        </template>
      </el-table-column>
      <el-table-column
        prop="code"
        label="商品编码">
      </el-table-column>
      <el-table-column
        label="描述图">
        <img src="../../assets/image/comment1.png" alt="" style="width:64px;height:64px">
      </el-table-column>
      <el-table-column
        prop="product"
        label="商品名称">
      </el-table-column>
      <el-table-column
        prop="type"
        label="类型">
      </el-table-column>
      <el-table-column
        prop="price"
        label="价格">
      </el-table-column>
      <el-table-column
        prop="count"
        label="成交数量">
      </el-table-column>
      <el-table-column
        prop="state"
        label="销售状态">
        <template slot-scope="item">
          <p :style="{'color':item.row.color}">{{item.row.state}}</p>
        </template>
      </el-table-column>
    </el-table>
    <ppage :total="total" :selectAll="selectAll" ref="page"
    :type="selectDelBtn" @messgaeAlert="messgaeAlert" @messageTrue="messageTrue"
    @selectAllDo="selectAllDo"/>
    <el-dialog :title="dialogObj.title" :visible.sync="dialogFormVisible">
      <el-form>
        <el-form-item label="商品编码" label-width="120px">{{dialogObj.code}}</el-form-item>
        <el-form-item label="描述图" label-width="120px">
          <div class="desImg">
            <img src="../../assets/image/comment1.png" alt="">
            <img src="../../assets/image/comment2.png" alt="">
            <img src="../../assets/image/comment3.png" alt="">
          </div>
        </el-form-item>
        <el-form-item label="商品名称" label-width="120px"><el-input v-model="dialogObj.product" :placeholder="dialogObj.product" style="width:300px"/></el-form-item>
        <el-form-item label="类型" label-width="120px">
          <el-select v-model="dialogObj.type" :placeholder="dialogObj.type" style="width:100px">
            <el-option v-for="(item,i) of dialogType" :key="i" :value="item"/>
          </el-select>
        </el-form-item>
        <el-form-item label="价格" label-width="120px"><el-input v-model="dialogObj.price" :placeholder="dialogObj.price" style="width:100px"/></el-form-item>
        <el-form-item label="成交数量" label-width="120px">{{dialogObj.count}}</el-form-item>
        <el-form-item label="销售状态" label-width="120px">
          <el-select v-model="dialogObj.state" placeholder="请选择" style="width:100px">
            <el-option value="在售"></el-option>
            <el-option value="待售"></el-option>
            <el-option value="售迹"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogOff()">保存修改</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { MessageBox, Message } from 'element-ui'
export default {
  data () {
    return {
      searchInout: '',
      off: false,
      tableData: [],
      selectAll: false,
      selectDelBtn: 'info',
      total: 50,
      totalPage: 10,
      selectSelect: '',
      dialogFormVisible: false,
      dialogType: ['植物', '茶类', '餐巾纸', '洗漱类'],
      dialogObj: { name: '', code: '', type: '', product: '', price: '', count: '', state: '' },
      options: [{ value: 0, label: '商品名' }, { value: 1, label: '编号' }, { value: 2, label: '价格' }]
    }
  },
  methods: {
    init () {
      var tablelist = [{ code: 'abx', product: '向日葵', type: '植物', price: '123', count: 12, state: '在售' }, { code: 'gff', product: '菊花茶', type: '茶类', price: '123', count: 12, state: '在售' }, { code: 'weew', product: '餐巾纸', type: '纸巾类', price: '123', count: 12, state: '待售' }, { code: 'sds', product: '洗头水', type: '洗漱类', price: '123', count: 12, state: '售迹' }]
      tablelist.forEach((value, key) => {
        value.cb = false
        value.id = key
        value.handle = 'pointer'
        if (value.state === '在售') {
          value.color = '#67C23A'
        } else if (value.state === '待售') {
          value.color = '#E6A23C'
        } else {
          value.color = '#F56C6C'
        }
      })
      this.tableData = tablelist
    },
    searchEvent (value1, value2) {
      console.log(value1, value2)
    },
    messageTrue () {
      MessageBox.confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        var list = []
        this.tableData.forEach((value, key) => {
          if (value.cb) {
            list.push(value.id)
          }
        })
        for (var value of list) {
          this.tableData = this.tableData.filter(item => item.id !== value)
        }
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
    shopDetail (key) {
      this.dialogObj.title = '编号：' + this.tableData[key].code
      this.dialogObj.name = this.tableData[key].name
      this.dialogObj.code = this.tableData[key].code
      this.dialogObj.product = this.tableData[key].product
      this.dialogObj.price = this.tableData[key].price
      this.dialogObj.count = this.tableData[key].count
      this.dialogObj.state = this.tableData[key].state
      this.dialogObj.type = this.tableData[key].type
      this.dialogFormVisible = true
    },
    dialogOff () {
      this.dialogFormVisible = false
    }
  },
  created () {
    this.init()
  }
}
</script>
<style scoped lang="less">
.desImg{
  img{
    width:64px;
    height:64px;
    border-radius:50%;
    margin-right:20px;
    cursor:pointer;
  }
}
</style>
