<template>
  <div class="publicLine">
    <psearch :selectValue="selectValue" :options="options" :searchInout="searchInout" @searchEvent="searchEvent"/>
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
        prop="id"
        label="商家id"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="公司名称">
      </el-table-column>
      <el-table-column
        prop="businessCode"
        label="营业执照">
      </el-table-column>
      <el-table-column
        prop="person"
        label="法人">
      </el-table-column>
      <el-table-column
        prop="idCard"
        label="身份证">
      </el-table-column>
      <el-table-column
        prop="area"
        label="地区">
      </el-table-column>
      <el-table-column
        label="详细地址">
      <template slot-scope="item">
        <p class="privateComment">{{item.row.site}}</p>
      </template>
      </el-table-column>
      <el-table-column
        prop="phone"
        label="联系电话">
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
      selectValue: '',
      options: [{ value: 1, label: '公司名称' }, { value: 2, label: '法人' }, { value: 3, label: '地区' }],
      searchInout: '',
      selectAll: '',
      total: 12,
      tableData: [],
      selectDelBtn: 'info'
    }
  },
  methods: {
    init () {
      var list = [{ name: '魅族科技', businessCode: '45sfdfd', person: '王思聪', idCard: '4545dfdf', area: '天河', site: '天河区XXX街', phone: '5933XXXXX' }, { name: '小米科技', businessCode: '45sfdfd', person: '雷军', idCard: '4545dfdf', area: '朝阳', site: '朝阳区XXX街', phone: '5933XXXXX' }, { name: '锤子科技', businessCode: '45sfdfd', person: '罗永浩', idCard: '4545dfdf', area: '平康区', site: '平康区XXX街', phone: '5933XXXXX' }]
      list.forEach((value, key) => {
        value.cb = false
        value.id = key
      })
      this.tableData = list
    },
    searchEvent (value1, value2) {
      console.log(value1, value2)
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
  },
  components: {
  }
}
</script>
<style scoped lang="less">
// .privateComment{
//   overflow:hidden;
//   text-overflow:ellipsis;
//   -webkit-box-orient: vertical;
//   -webkit-line-clamp: 2;
//   display:-webkit-box;
//   width:100%;
// }
// .publicLine{
//   position:relative;
//   .search{
//     margin-bottom:10px;
//     .input{
//       width:200px;
//       margin-right:20px;
//     }
//     .select{
//       margin-right:10px;
//       width:100px;
//     }
//   }
//   .foot{
//     position:absolute;
//     left:0;
//     bottom:0;
//     width:100%;
//     // height:100px;
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
