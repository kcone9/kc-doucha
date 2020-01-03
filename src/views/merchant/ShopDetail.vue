<template>
  <div class="shopdetail">
    <div class="item">
      <div class="left">
        <p>商品编号</p>
      </div>
      <div class="right">
        <p>ddfhdk34353kljl3434</p>
      </div>
    </div>
    <div class="item">
      <div class="left">
        <p>描述图片</p>
      </div>
      <div class="des">
        <img src="../../assets/image/comment1.png" alt="">
        <img src="../../assets/image/comment2.png" alt="">
        <img src="../../assets/image/comment3.png" alt="">
      </div>
    </div>
    <div class="item">
      <div class="left">
        <p>商品名称</p>
      </div>
      <div class="right">
        <p>潮州绿茶</p>
      </div>
    </div>
    <div class="item">
      <div class="left">
        <p>价格</p>
      </div>
      <div class="right">
        <p>123</p>
      </div>
    </div>
    <div class="item">
      <div class="left">
        <p>库存</p>
      </div>
      <div class="right">
        <p>342</p>
      </div>
    </div>
    <div class="item">
      <div class="left">
        <p>商品状态</p>
      </div>
      <div class="right">
        <p>在售</p>
      </div>
    </div>
    <div class="btn">
      <el-button type="primary">返回商品列表</el-button>
      <el-button type="danger">修改</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  }
}
</script>
<style scoped lang="less">
.shopdetail{
  line-height:normal;
  .item{
    display:flex;
    margin-bottom:40px;
    .left{
      width:140px;
      display:flex;
      align-items:center;
      p{
        color:#444446;
        font-size:17px;
        font-weight:600;
      }
    }
    .right{
      .titleInput{
        width:400px;
      }
      .classelect{
        width:100px;
      }
    }
    .des{
      img{
        width:88px;
        height:88px;
        border-radius:50%;
        margin-right:20px;
      }
    }
  }
  .btn{
    text-align:left;
  }
}
</style>
