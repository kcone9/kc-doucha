<template>
  <div class="search">
    <el-select v-model="selectValues" placeholder="请选择" class="select">
        <el-option
          v-for="(item,i) of options"
          :key="i"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <el-input class="input"
        placeholder="请输入内容"
        v-model="searchInouts"
        prefix-icon="el-icon-search"
        clearable>
      </el-input>
      <el-button type="primary" @click="searchBtn">确定</el-button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      selectValues: '',
      searchInouts: ''
    }
  },
  methods: {
    init () {
      this.selectValues = this.selectValue
      this.searchInouts = this.searchInout
    },
    searchBtn () {
      this.$emit('searchEvent', this.selectValues, this.searchInouts)
    }
  },
  created () {
    this.init()
  },
  props: ['selectValue', 'options', 'searchInout']
}
</script>
<style scoped lang="less">

</style>
