<template>
  <div class="publicLine">
    <el-form ref="form" label-width="80px" >
      <el-form-item label="订单编号">
        <p>4654dfdf</p>
      </el-form-item>
      <el-form-item label="商品名称">
        <p>潮州茶叶</p>
      </el-form-item>
      <el-form-item label="描述图片" >
        <img src="../../assets/public/user.png" alt="" style="width:64px;height:64px">
      </el-form-item>
      <el-form-item label="发货地址">
        <p>广东省广州市华农</p>
      </el-form-item>
      <el-form-item label="发货人">
        <p>李应酬</p>
      </el-form-item>
      <el-form-item label="付款时间">
        <p>2019-4-4</p>
      </el-form-item>
      <el-form-item label="订单状态">
        <p>完成</p>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">返回订单列表</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      form: {
        name: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit')
    }
  }
}
</script>
<style scoped lang="less">
.publicLine{
  display:flex;
  // align-items:center;
  justify-content:flex-start;
  .el-form{
    width:400px;
    // margin-bottom:100px;
  }
}
</style>
