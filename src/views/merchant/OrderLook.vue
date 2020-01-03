<template>
  <div class="orderlook">
    <div class="item">
      <div class="left">
        <p class="key">订单编号</p>
        <p class="value">fghfhfdfgdf56564dg</p>
      </div>
      <div class="right">
        <p class="key">发货时间</p>
        <p class="value">2019-12-25</p>
      </div>
    </div>
    <div class="item">
      <div class="left">
        <p class="key">下单用户</p>
        <p class="value">kcone</p>
      </div>
      <div class="right">
        <p class="key">发货人</p>
        <p class="value">憨憨</p>
      </div>
    </div>
    <div class="item">
      <div class="left">
        <p class="key">订单状态</p>
        <p class="value">以发货</p>
      </div>
      <div class="right">
        <p class="key">发货地址</p>
        <p class="value">广东省广州市华农大学</p>
      </div>
    </div>
    <div class="item">
      <div class="left">
        <p class="key">订单数量</p>
        <p class="value">2</p>
      </div>
      <div class="right">
        <p class="key">发货人手机</p>
        <p class="value">1533XXXXXX</p>
      </div>
    </div>
    <div class="item">
      <div class="left">
        <p class="key">单价</p>
        <p class="value">2</p>
      </div>
      <div class="right">
        <p class="key">买家留言</p>
        <p class="textarea">请发申通快递请发申通快递请发申通快递请发申通快递请发申通快递请发申通快递</p>
      </div>
    </div>
    <div class="item">
      <div class="left">
        <p class="key">实付</p>
        <p class="value">230</p>
      </div>
      <div class="right">
        <p class="key">总金额</p>
        <p class="value">230</p>
      </div>
    </div>
    <div class="btn">
      <el-button type="danger">返回订单列表</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      buyLeave: ''
    }
  }
}
</script>
<style scoped lang="less">
.orderlook{
  width:100%;
  height:100%;
  // border:1px solid red;
  line-height:normal;
  .item{
    // border:1px solid red;
    width:900px;
    display:flex;
    justify-content:space-between;
    .left,.right{
      display:flex;
      width:50%;
      // border:1px solid red;
      margin:20px 0;
      .key{
        color:#4E4E50;
        font-size:17px;
        font-weight:600;
        width:25%;
        // border:1px solid red;
        text-align:left;
      }
      .value{
        font-size:17px;
        color:#939393;
      }
      .textarea{
        width:75%;
        text-align:left;
        font-size:17px;
        color:#939393;
      }
    }
  }
  .btn{
    text-align:left;
    margin-top:20px;
  }
}
</style>
