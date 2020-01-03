<template>
  <div class="foot">
    <div class="left">
      <el-checkbox v-model="selectAlls" @change="selectAllBtn()">全选</el-checkbox>
      <el-button :type="type" @click="del">删除</el-button>
    </div>
    <div class="right">
      <el-pagination background
        layout="prev, pager, next,jumper"
        :total="50">
      </el-pagination>
      <el-button type="primary" size="small">确定</el-button>
      <p>当前<span>{{total}}</span>共页</p>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      selectAlls: false
    }
  },
  methods: {
    init () {
      this.selectAlls = this.selectAll
    },
    selectAllBtn () {
      if (this.selectAlls) {
        this.$emit('selectAllDo', true)
      } else {
        this.$emit('selectAllDo', false)
      }
    },
    del () {
      this.type === 'info' ? this.$emit('messgaeAlert', 'info', '您未选择任何选项') : this.$emit('messageTrue')
    }
  },
  created () {
    this.init()
  },
  props: ['total', 'selectAll', 'type']
}
</script>
<style scoped>

</style>
