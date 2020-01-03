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
        label="店铺id">
      </el-table-column>
      <el-table-column
        prop="name"
        label="店铺名">
      </el-table-column>
      <el-table-column
        label="店铺logo">
        <img src="../../assets/public/user.png" style="width:64px;height:64px" alt="">
      </el-table-column>
      <el-table-column
        label="店铺介绍">
        <template slot-scope="item">
          <p class="privateComment">{{item.row.desc}}</p>
        </template>
      </el-table-column>
      <el-table-column
        prop="state"
        label="状态">
      </el-table-column>
      <el-table-column
        prop="phone"
        label="联系电话">
      </el-table-column>
      <el-table-column
        prop="email"
        label="邮箱">
      </el-table-column>
      <el-table-column
        prop="idCard"
        label="身份证">
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
      options: [{ value: 1, label: '店铺名' }, { value: 2, label: '店主' }, { value: 3, label: '店铺id' }],
      searchInout: '',
      selectAll: false,
      total: '',
      tableData: [],
      selectDelBtn: 'info'
    }
  },
  methods: {
    init () {
      var list = [{ name: '魅族科技', person: '王思聪', desc: '手机届清流公司', state: '有效', phone: '5933XXXXX', email: '12@qw.com', idCard: '12211dsds' }, { name: '万达集团', person: '老王', desc: '大型地产公司', state: '无效', phone: '5933XXXXX', email: '12@qw.com', idCard: '12211dsds' }, { name: '格力集团', person: '董姐', desc: '空调霸主', state: '有效', phone: '5933XXXXX', email: '12@qw.com', idCard: '12211dsds' }]
      list.forEach((value, key) => {
        value.cb = false
        value.id = key
      })
      this.tableData = list
    },
    searchEvent (value1, value2) {
      // 子组件传递过来的数据
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
<style scoped lang='less'>
</style>
