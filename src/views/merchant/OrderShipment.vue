<template>
  <div class="publicLine">
    <div class="item">
      <div class="left">
        <p class="key">买家姓名</p>
      </div>
      <div class="right">
        <p class="value">张天</p>
      </div>
    </div>
    <div class="item">
      <div class="left">
        <p class="key">发货地址</p>
      </div>
      <div class="right">
        <p class="value">广东省广州市天河区XXXX</p>
      </div>
    </div>
    <div class="item">
      <div class="one">
        <p class="key1">选择物流</p>
        <el-select v-model="logisticValue" placeholder="请选择" class="select">
          <el-option
            v-for="item in logisticOption"
            :key="item.value"
            :label="item.text"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="two">
        <p class="key2">输入物流编号</p>
        <el-input v-model="logisticCode" placeholder="请输入内容"></el-input>
      </div>
    </div>
    <div class="btn">
      <el-button type="primary">确定发货</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      logisticOption: [{ value: 1, text: '顺丰' }, { value: 2, text: '韵达' }, { value: 3, text: '百世' }],
      logisticValue: '',
      logisticCode: ''
    }
  }
}
</script>
<style scoped lang="less">
.publicLine{
  .item{
    width:600px;
    display:flex;
    // justify-content:space-between;
    // border: 1px solid red;
    margin:20px 0;
    .left{
      p{
        color:#4E4E50;
        font-size:17px;
        font-weight:600;
        width:100px;
        // border: 1px solid red;
      }
    }
    .right{
      p{
        font-size:17px;
        color:#939393;
      }
    }
    .one,.two{
      display:flex;
      align-items:center;
      p{
        color:#4E4E50;
        font-size:17px;
        font-weight:600;
      }
      .key1{
        width:100px;
      }
      .key2{
        width:160px;
      }
      .select{
        width:100px;
      }
    }
    .two{
      margin-left:30px;
    }
  }
}
</style>
