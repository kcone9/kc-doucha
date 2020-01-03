<template>
  <div class="login">
    <div class="container">
      <p class="title">找回密码</p>
      <el-steps :active="active" finish-status="success" align-center >
        <el-step title="身份验证" :status="act1" ></el-step>
        <el-step title="重置密码" :status="act2"></el-step>
        <el-step title="完成" :status="act3"></el-step>
      </el-steps>
      <router-view/>
      <el-button @click="nextClick" round type="primary">下一步</el-button>
    </div>
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%"
      :before-close="handleClose">
      <span>密码已经重置，请返回重新登录</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="handleClose">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data () {
    return {
      active: 1,
      act1: '',
      act2: 'wait',
      act3: 'wait',
      dialogVisible: false
    }
  },
  methods: {
    init () {},
    nextClick () {
      if (this.active === 1) {
        this.active = 2
        this.act1 = 'finish'
        this.act2 = ''
        this.act3 = 'wait'
        this.$router.push('/forget/newpass')
      } else if (this.active === 2) {
        this.active = 3
        this.act1 = 'finish'
        this.act2 = 'finish'
        this.act3 = ''
        this.dialogVisible = true
      } else if (this.active === 3) {
        this.act1 = 'finish'
        this.act2 = 'finish'
        this.act3 = 'finish'
      }
    },
    handleClose (done) {
      this.dialogVisible = false
      this.$router.push('/login')
    }
  },
  created () {
    this.init()
  }
}
</script>
<style scoped>
.login{
  width:100vw;
  height:100vh;
  /* border:1px solid red; */
  display:flex;
  justify-content:center;
  align-items:center;
  background-color:#F2F6F9;
}
.login .container{
  width:700px;
  height:480px;
  /* border:1px solid red; */
  margin-bottom:150px;
  background-color:#fff;
  display:flex;
  flex-direction:column;
  align-items:center;
}
.login .container .el-steps{
  width:556px;
  height:80px;
}
.login .container .title{
  font-size:26px;
  color:#5F5F5F;
  letter-spacing:1px;
  font-weight:700;
  margin:20px 0;
}
/*.login .container .input{
  width:556px;
  height:40px;
  display:flex;
  align-items:center;
  margin-top:28px;
}
.login .container .input .el-icon-circle-check{
  color:#CAD1DB;
  font-size:20px;
  margin-left:10px;
  font-weight:600;
}
.login .container .input .myicon{
  color:#71C76F;
}
.login .container .input p{
  width:18%;
  font-size:14px;
  text-align:right;
  color:#7A889E;
}
.login .container .input input{
  margin-left:10px;
  width:50%;
  height:38px;
  border-style:none;
  border-bottom:2px solid #8AC0FE;
  outline:none;
}
.login .container .input button{
  width:16%;
  height:30px;
  border:2px solid #91C4FE;
  color:#1B84FC;
  font-size:10px;
  background-color:transparent;
  margin-left:10px;
  outline:none;
}*/
.login .container .el-button{
  width:200px;
  margin-top:26px;
}
</style>
