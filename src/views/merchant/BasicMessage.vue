<template>
  <div class="basic">
    <div class="table">
      <div class="item" v-for="(item,i) of  list" :key="i">
        <div class="left">
          <p>{{item.key}}</p>
        </div>
        <div class="right">
          <p v-show="item.cb">{{item.value}}</p>
          <!-- <input type="text" v-model="item.value"> -->
          <el-input v-show="!item.cb" v-model="item.value" :placeholder="item.value"></el-input>
        </div>
      </div>
    </div>
    <div class="btn">
      <el-button v-show="!btnOff" type="primary" @click="after(true)">保存</el-button>
      <el-button v-show="btnOff" type="danger" @click="after(false)">修改</el-button>
    </div>
  </div>
</template>
<script>
import { Message, Loading } from 'element-ui'
export default {
  data () {
    return {
      list: [],
      btnOff: true
    }
  },
  methods: {
    init () {
      var list = [{ key: '公司名称', value: '营业执照' }, { key: '法人', value: '李' }, { key: '身份证', value: '4600XXX' }, { key: '地区', value: '天河' }, { key: '详细地址', value: '广州市天河区XXXXX' }, { key: '联系电话', value: '1533XXXX' }]
      for (var value of list) {
        value.cb = true
      }
      this.list = list
    },
    after (boolean) {
      if (boolean) {
        this.test()
      } else {
        this.btnOff = false
      }
      for (var value of this.list) {
        value.cb = boolean
      }
    },
    test () {
      var loading = Loading.service({
        lock: true,
        text: '保存中',
        spinner: 'el-icon-loading',
        background: 'rgba(0,0,0,0.3)'
      })
      setTimeout(() => {
        loading.close()
        this.btnOff = true
        Message({
          message: '保存成功',
          type: 'success'
        })
      }, 1000)
    }
  },
  created () {
    this.init()
  }
}
</script>
<style scoped lang='less'>
.basic{
  line-height:normal;
  width:100%;
  height:100%;
  // border:1px solid red;
  .table{
    width:50%;
    height:500px;
    // border:1px solid red;
    padding-left:100px;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
    .item{
      display:flex;
      align-items:center;
      // padding:10px 0;
      height:40px;
      // border:1px solid red;
      .left{
        width:100px;
        // border:1px solid red;
        color:#414143;
        font-size:17px;
        font-weight:600;
        text-align:left;
      }
      .right{
        color:#929292;
        font-size:15px;
        flex:1;
        text-align:left;
        input{
          height:36px;
          text-indent:10px;
          width:70%;
        }
      }
    }
  }
  .btn{
    display:flex;
    justify-content:flex-start;
    padding-left:100px;
    .el-button{
      margin:0;
      margin-right:10px;
    }
  }
}

</style>
