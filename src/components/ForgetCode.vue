<template>
  <div>
    <div class="input">
      <p>手机号码/账号</p>
      <input type="text" placeholder="请输入手机号码" v-model="phoneNumber">
        <el-icon class="el-icon-circle-check" :class="{'myicon':userNameOff}"/>
    </div>
    <div class="input">
      <p>验证码</p>
      <input type="text" placeholder="请输入短信密码" v-model="verifyCode">
      <button >获取验证码</button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      phoneNumber: '',
      userNameOff: false,
      verifyCode: ''
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
    },
    verifyCode: function (code) {

    }
  }
}
</script>
<style scoped>
.input{
  /* width:556px; */
  /* width:500px; */
  height:40px;
  display:flex;
  align-items:center;
  justify-content:flex-start;
  /* border:1px solid red; */
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
  /* border:1px solid red; */
}
.input input{
  margin-left:10px;
  width:300px;
  height:38px;
  border-style:none;
  border-bottom:2px solid #8AC0FE;
  outline:none;
  /* border:1px solid red; */
}
.input button{
  width:100px;
  height:30px;
  border:2px solid #91C4FE;
  color:#1B84FC;
  font-size:10px;
  background-color:transparent;
  margin-left:10px;
  outline:none;
}
</style>
