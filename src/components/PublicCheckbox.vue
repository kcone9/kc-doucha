<template>
  <div class="nav">
    <div class="left">
        <el-radio-group v-model="orderValues" ref="kc">
          <el-radio-button v-for="(item,i) of orderCheckList" :label="item" :key="i"></el-radio-button>
        </el-radio-group>
      </div>
      <div class="right">
        <el-select v-model="selectValues" placeholder="请选择" class="select">
          <el-option
            v-for="(item, i) of selectList"
            :key="i"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <el-input v-model="searchValues" placeholder="请输入内容" class="input"></el-input>
        <el-button type="primary" @click="checkBtn">确定</el-button>
      </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      orderValues: '',
      selectValues: '',
      searchValues: ''
    }
  },
  methods: {
    checkBtn () {
      this.$emit('checkboxEvent', this.selectValues, this.searchValues)
    },
    radioBoxBtn () {
      var element = this.$refs.kc.$vnode.elm.getElementsByClassName('el-radio-button__inner')
      element.forEach((value, key) => {
        value.setAttribute('data-myid', key)
        value.onclick = (e) => {
          this.$emit('radioEvent', parseInt(e.target.getAttribute('data-myid')))
        }
      })
    }
  },
  mounted () {
    this.radioBoxBtn()
  },
  created () {
    this.orderValues = this.orderValue
    this.selectValues = this.selectValue
    this.searchValues = this.searchValue
  },
  props: ['orderValue', 'orderCheckList', 'selectValue', 'selectList', 'searchValue']
}
</script>
<style scoped>

</style>
