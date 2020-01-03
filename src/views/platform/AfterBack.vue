<template>
  <div class="publicLine">
    <div class="item">
      <p class="title">退款处理</p>
      <div class="content">
        <div class="conItem">
          <div class="con">
            <p class="conTitle">退款类型</p>
            <p class="conSub">取消订单</p>
          </div>
          <div class="con">
            <p class="conTitle">取消订单号</p>
            <p class="conSub">dfdf23232</p>
          </div>
        </div>
        <div class="conItem">
          <div class="con">
            <p class="conTitle">退款所属商家</p>
            <p class="conSub">三只松鼠</p>
          </div>
          <div class="con">
            <p class="conTitle">订单金额</p>
            <p class="conSub">120</p>
          </div>
        </div>
        <div class="conItem">
          <div class="con">
            <p class="conTitle">商家退款</p>
            <p class="conSub">120</p>
          </div>
          <div class="con">
            <p class="conTitle">实属退款</p>
            <p class="conSub">120</p>
          </div>
        </div>
      </div>
    </div>
    <div class="item">
      <p class="title">退款</p>
      <div class="content">
        <el-form ref="form" label-width="80px">
          <el-form-item label="实需退款">
            <p>120</p>
          </el-form-item>
          <el-form-item label="退款方式">
            <el-radio v-model="radio" label="1">线下退回</el-radio>
            <el-radio v-model="radio" label="2">原路返回</el-radio>
          </el-form-item>
          <el-form-item label="收款银行">
            <el-input style="width:300px" v-model="bankInput" placeholder="请输入退款银行"></el-input>
          </el-form-item>
          <el-form-item label="退款账户">
            <el-input style="width:300px" v-model="accInput" placeholder="请输入退款账户"></el-input>
          </el-form-item>
          <el-form-item label="退款人">
            <el-input style="width:100px" v-model="peopleInput" placeholder="请输入退款人"></el-input>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      radio: '',
      bankInput: '',
      accInput: '',
      peopleInput: ''
    }
  }
}
</script>
<style scoped lang="less">
.publicLine{
  .item{
    margin-bottom:40px;
    .title{
      color:#434345;
      font-size:17px;
      border-bottom:1px solid #E6E6E7;
      padding-bottom:22px;
      font-weight:600;
      letter-spacing:1px;
    }
    .content{
      .conItem{
        margin:20px 0;
        width:600px;
        // border:1px solid red;
        display:flex;
        .con{
          width:50%;
          display:flex;
          flex-wrap:nowrap;
          justify-content:space-between;
          // border:1px solid red;
          p{
            width:50%;
            letter-spacing:0.5px;
          }
          .conTitle{
            color:#2E2E2E;
            font-size:15px;
            font-weight:bold;
          }
          .conSub{
            color:#909090;
            font-size:15px;
          }
        }
      }
      form{
        margin-top:20px;
      }
    }
  }
}
</style>
