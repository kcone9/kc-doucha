<template>
  <div>
    <div class="input">
      <p>新密码</p>
      <input type="password" placeholder="请输入手机号码" v-model="phoneNumber">
      <el-icon class="el-icon-circle-check" :class="{'myicon':userNameOff}"/>
    </div>
    <div class="input">
      <p>确定新密码</p>
      <input type="password" placeholder="请再输一次">
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      phoneNumber: '',
      userNameOff: false
    }
  },
  watch: {
    phoneNumber: function (number) {
      if (number.length === 11) {
        if (!this.userNameOff) {
          this.userNameOff = true
        }
      } else {
        if (this.userNameOff) {
          this.userNameOff = false
        }
      }
    }
  }
}
</script>
<style scoped>
.input{
  /* width:556px; */
  height:40px;
  display:flex;
  align-items:center;
  margin-top:28px;
}
.input .el-icon-circle-check{
  color:#CAD1DB;
  font-size:20px;
  margin-left:10px;
  font-weight:600;
}
.input .myicon{
  color:#71C76F;
}
.input p{
  width:110px;
  font-size:14px;
  text-align:right;
  color:#7A889E;
}
.input input{
  margin-left:10px;
  width:300px;
  height:38px;
  border-style:none;
  border-bottom:2px solid #8AC0FE;
  outline:none;
}
</style>
