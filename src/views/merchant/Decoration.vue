<template>
  <div class="decoration">
    <div class="left">店铺logo</div>
    <div class="right">
      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove">
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
      <el-button type="primary">保存</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      dialogImageUrl: '',
      dialogVisible: false
    }
  },
  methods: {
    handleRemove (file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    }
  }
}
</script>
<style scoped lang="less">
.decoration{
  line-height:normal;
  text-align:left;
  display:flex;
  .left{
    margin-right:20px;
  }
  .right{
    button{
      margin-top:20px;
    }
  }
}
</style>
