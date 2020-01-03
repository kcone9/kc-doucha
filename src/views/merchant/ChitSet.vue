<template>
  <div class="publicLine">
    <div class="item">
      <div class="left">添加代金券</div>
      <div class="right">
        <el-input class="input"
          placeholder="请输入代金券名称"
          v-model="input"
          clearable>
        </el-input>
      </div>
    </div>
    <div class="item">
      <div class="left">代金券描述</div>
      <div class="right">
        <el-input class="textarea"
          type="textarea"
          :rows="3"
          placeholder="请输入内容"
          v-model="textarea">
        </el-input>
      </div>
    </div>
    <div class="item">
      <div class="left">代金券条件</div>
      <div class="right">
        <div class="clause">
          满<el-input v-model="fullInput" class="clauseinput" placeholder="满金额"></el-input>
          减<el-input v-model="loseInput" class="clauseinput" placeholder="减金额"></el-input>
        </div>
      </div>
    </div>
    <div class="item">
      <div class="left">发放平台</div>
      <div class="right">
        <div class="subsidyContainer">
          <el-radio v-model="platformRadio" label="1">pc</el-radio>
          <el-radio v-model="platformRadio" label="2">wap</el-radio>
        </div>
      </div>
    </div>
    <div class="item">
      <div class="left">发放数量</div>
      <div class="right">
        <el-input v-model="countInput" placeholder="10" class="countInput"/>
      </div>
    </div>
    <div class="item">
      <div class="left">报名时间</div>
      <div class="right">
        <div class="signTime">
          <p>请选择日期范围</p>
          <el-date-picker class="datetime"
            v-model="dateInput"
            type="daterange"
            range-separator=""
            start-placeholder="开始日期"
            end-placeholder="结束日期">
          </el-date-picker>
          <p class="last">请选择时间范围</p>
          <el-time-picker class="datetime"
            is-range
            v-model="timeInput"
            range-separator=""
            start-placeholder="开始时间"
            end-placeholder="结束时间"
            placeholder="选择时间范围">
          </el-time-picker>
        </div>
      </div>
    </div>
    <div class="btn">
      <el-button type="primary">确定发放</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      input: '',
      textarea: '',
      fullInput: '',
      loseInput: '',
      subsidyInput: '',
      platformRadio: '1',
      countInput: '',
      dateInput: '',
      timeInput: ''
    }
  }
}
</script>
<style scoped lang="less">
.publicLine{
  .item{
    display:flex;
    align-items:center;
    margin-bottom:20px;
    .left{
      color:#444446;
      font-size:17px;
      font-weight:600;
      margin-right:20px;
    }
    .right{
      .input{
        width:220px;
      }
      .countInput{
        width:70px;
      }
      .textarea{
        width:220px;
      }
      .clause{
        display:flex;
        align-items:center;
        .clauseinput{
          width:80px;
          margin:0 10px;
        }
      }
      .signTime{
        display:flex;
        align-items:center;
        p{
          margin-right:20px;
        }
        .last{
          margin-left:10px;
        }
        .datetime{
          width:200px;
        }
      }
    }
  }
}
</style>
