<template>
  <div class="login">
    <div class="pad">
      <img class="decorate" src="../../assets/platform/image/platlogin.png" alt="">
      <div class="container">
        <div class="top">
          <div class="label">
            <svg t="1576807223861" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2024" width="32" height="32"><path d="M669.3 369.4c9.8 0 19.6 0 29.4 1.6C671 245.2 536.9 152 383.2 152 211.6 152 71 269.7 71 416.8c0 85 45.8 156.9 124.2 210.9l-31.1 93.2L273.6 667c39.2 8.2 70.3 16.3 109.5 16.3 9.8 0 19.6 0 31.1-1.6-6.5-21.3-9.8-42.5-9.8-65.4 0.1-135.7 116.2-246.9 264.9-246.9z m-168.4-85c24.5 0 39.2 16.3 39.2 39.2 0 22.9-16.3 39.2-39.2 39.2-24.5 0-47.4-16.4-47.4-39.2 0-24.5 24.6-39.2 47.4-39.2z m-216.3 73.1c-24.7 0-47.8-16.2-47.8-38.8 0-24.3 24.7-38.8 47.8-38.8s39.5 16.2 39.5 38.8c0.1 22.7-16.4 38.8-39.5 38.8z" fill="#24DB5A" p-id="2025"></path><path d="M953.8 613c0-125.9-124.2-227.2-264.8-227.2-148.8 0-266.5 103-266.5 227.2 0 125.9 117.7 227.2 266.5 227.2 31.1 0 62.1-8.2 93.2-16.3l85 47.4-22.9-78.5c62.1-47.4 109.5-109.5 109.5-179.8z m-351.5-39.2c-14.7 0-31.1-14.7-31.1-31.1 0-14.7 16.3-31.1 31.1-31.1 22.9 0 39.2 16.3 39.2 31.1 0 16.4-14.7 31.1-39.2 31.1z m178-7.6c-14.8 0-31.3-14.6-31.3-30.7 0-14.6 16.5-30.7 31.3-30.7 23.1 0 39.5 16.2 39.5 30.7 0 16.2-16.4 30.7-39.5 30.7z" fill="#24DB5A" p-id="2026"></path></svg>
            <p>微信扫码登录</p>
            <img class="rightIcon"  src="../../assets/public/login_labelIcon.png" alt="">
          </div>
          <img src="../../assets/public/login_twoCode.png" alt="">
        </div>
        <div class="middle">
          <p class="title">商家登录</p>
          <el-input placeholder="请输入内容" ref="myinput1" maxlength="16" minlength="8" prefix-icon="el-icon-mobile-phone" v-model="userName" clearable>
          </el-input>
          <el-input placeholder="请输入密码" ref="myinput2" maxlength="16" minlength="8" prefix-icon="el-icon-lock" v-model="userPass" show-password></el-input>
          <el-button type="primary" round color="#0076FC">登录</el-button>
          <div class="select">
              <div class="one">
                <p>其他账号登录</p>
                <svg t="1576809685842" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3456" width="28" height="28"><path d="M512.268258 64.433103c-247.183323 0-447.569968 200.380501-447.569968 447.563825 0 247.189467 200.385621 447.570992 447.569968 447.570992s447.569968-200.380501 447.569968-447.569968c0-247.184347-200.386645-447.564849-447.569968-447.564849z m252.85872 584.692787c-18.997168 16.287968-43.668709-53.628042-47.2134-42.875198-8.642616 26.161294-12.695154 43.646184-38.148944 72.127602-1.35972 1.521494 29.43056 12.647032 38.148944 36.396051 8.346713 22.756875 24.596797 58.811973-81.725503 70.125906-62.389428 6.635801-107.471099-33.244533-111.964932-32.85648-8.325212 0.734126-4.618747 0-13.568528 0-7.321804 0-7.807126 0.534468-14.69685 0-1.899307-0.140272-22.632985 32.85648-115.364231 32.85648-71.878798 0-90.48177-45.243445-76.032701-70.125906 14.464428-24.877342 38.579999-32.122354 35.176604-36.06636-16.73643-19.39546-28.287904-40.1404-35.176604-58.882621-1.705793-4.666869-3.135137-9.209848-4.262434-13.574672-2.611931-10.008479-22.627866 58.76385-44.111028 42.875198-21.483162-15.883533-19.567472-56.309597-5.659014-95.003248 14.033372-39.006959 49.37687-76.562049 49.771065-84.854496 1.412962-30.849665-3.044011-35.975235 0-44.078263 6.780169-18.149391 15.034732-11.190043 15.034733-20.609788 0-118.64476 88.172909-214.829571 196.933079-214.829571 108.755051 0 196.928984 96.184811 196.928984 214.829571 0 4.554242 11.815637 0 17.474651 20.609788 1.165181 4.256291 1.968931 20.684531 0.58771 44.078263-0.658358 11.238165 29.954789 24.914202 45.777913 84.854496 15.845649 59.945414 0 88.215912-7.909514 95.003248z" fill="#68A5E1" p-id="3457"></path></svg>
              </div>
              <div class="two">
                <p>忘记密码</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      userName: '',
      userPass: ''
    }
  },
  methods: {
    init () {
      this.$refs.myinput1.$refs.input.style.borderRadius = '20px'
      this.$refs.myinput2.$refs.input.style.borderRadius = '20px'
    }
  },
  mounted () {
    this.init()
  }
}
</script>
<style scoped lang="less">
.login{
  background:linear-gradient(#68CAF9, #5E72E3);
  // border:1px solid red;
  width:100vw;
  height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;
  .pad{
    width:800px;
    height:600px;
    // border:1px solid red;
    background-color:#fff;
    border-radius:4px;
    padding:13px;
    display:flex;
    .decorate{
      width:400px;
      height:100%;
    }
    .container{
      flex:1;
      .top{
        width:100%;
        height:100px;
        /* border:1px solid red; */
        display:flex;
        justify-content:flex-end;
        img{
          width:52px;
          height:52px;
        }
        .label{
          display:flex;
          border:1px solid #C3C3C3;
          width:140px;
          height:34px;
          align-items:center;
          justify-content:space-around;
          border-radius:4px;
          position:relative;
          margin-right:7px;
          .rightIcon{
            width:14px;
            height:26px;
            position:absolute;
            right:-13.5px;
            z-index:1;
          }
          p{
            font-size:14px;
            color:#7B8A9F;
          }
        }
      }
      .middle{
        width:100%;
        height:420px;
        /* border:1px solid red; */
        display:flex;
        justify-content:center;
        flex-direction:column;
        align-items:center;
        .select{
          width:300px;
          display:flex;
          align-items:center;
          justify-content:space-between;
          margin-top:26px;
          font-size:14px;
          .one{
            display:flex;
            align-items:center;
            cursor:pointer;
            p{
              color:#A3A9BC;
            }
            .icon{
              margin-left:10px;
            }
          }
          .two{
            p{
              color:#0077FC;
              cursor:pointer;
            }
          }
        }
        .el-input{
          width:300px;
          margin-top:26px;
        }
        .el-button{
          width:300px;
          margin-top:26px;
        }
        .title{
          font-size:26px;
          font-weight:700;
          color:#4C4C4C;
          letter-spacing:2px;
        }
      }
    }
  }
}
</style>
