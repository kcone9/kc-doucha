<template>
  <div class="publicLine">
    <!-- <div class="nav">
      <div class="left">
        <el-radio-group v-model="orderValue">
          <el-radio-button v-for="(item,i) of orderCheckList" :label="item" :key="i"></el-radio-button>
        </el-radio-group>
      </div>
      <div class="right">
        <el-select v-model="selectValue" placeholder="请选择" class="select">
          <el-option
            v-for="item in selectList"
            :key="item.value"
            :label="item.text"
            :value="item.value">
          </el-option>
        </el-select>
        <el-input v-model="searchValue" placeholder="请输入内容" class="input"></el-input>
        <el-button type="primary">确定</el-button>
      </div>
    </div> -->
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
    <!-- <div class="foot">
      <div class="left">
          <el-checkbox v-model="selectAll" @change="selectAllBtn()">全选</el-checkbox>
          <el-button :type="selectDelBtn" @click="del">删除</el-button>
        </div>
        <div class="right">
          <el-pagination background
            layout="prev, pager, next,jumper"
            :total="50">
          </el-pagination>
          <el-button type="primary" size="small">确定</el-button>
          <p>当前<span>{{total}}</span>共页</p>
        </div>
    </div> -->
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
      selectList: [{ value: 0, label: '商品名称' }, { value: 1, label: '买家姓名' }, { value: 2, label: '订单编号' }],
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
// .publicLine{
//   position:relative;
//   .nav{
//     display:flex;
//     justify-content:space-between;
//     margin-bottom:20px;
//     .right{
//       display:flex;
//       .input{
//         width:200px;
//         margin:0 10px;
//       }
//       .select{
//         width:100px;
//       }
//     }
//   }
//   .foot{
//     position:absolute;
//     left:0;
//     bottom:0;
//     width:100%;
//     height:100px;
//     display:flex;
//     align-items:center;
//     justify-content:space-between;
//     // border:1px solid red;
//     .left{
//       button{
//         margin-left:10px;
//       }
//     }
//     .right{
//       display:flex;
//       align-items:center;
//       button{
//         margin:0 10px;
//       }
//       p{
//         font-size:13px;
//         color:#606266;
//         font-weight:400;
//         span{
//           margin:0 4px;
//         }
//       }
//     }
//   }
// }
</style>
