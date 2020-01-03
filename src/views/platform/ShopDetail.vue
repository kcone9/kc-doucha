<template>
  <div class="publicLine">
    <el-form  label-width="80px">
      <el-form-item label="商品名称">
        潮州单茶
      </el-form-item>
      <el-form-item label="描述图片">
        <img src="../../assets/public/user.png" alt="" style="width:64px;height:64px;">
      </el-form-item>
      <el-form-item label="店铺名称">
        东方红茶树
      </el-form-item>
      <el-form-item label="商品编号">
        sdsdsd4545
      </el-form-item>
      <el-form-item label="库存">
        258
      </el-form-item>
      <el-form-item label="商品分类">
        茶类
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data () {
    return {}
  }
}
</script>
<style scoped lang="less">
.publicLine{
  .el-form{
    .el-form-item__label{
      color:red;
    }
  }
}
</style>
