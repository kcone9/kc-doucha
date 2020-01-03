<template>
  <div class="basic">
    <div class="table" v-if="off">
      <div class="item" v-for="(item,i) of  list" :key="i">
        <div class="left">
          <p>{{item.key}}</p>
        </div>
        <div class="right">
          <p v-show="!item.img">{{item.value}}</p>
          <img v-show="item.img" src="../../assets/image/logo.png" width="160px" height="120px" alt="">
        </div>
      </div>
    </div>
    <div class="btn" v-if="off">
      <el-button type="danger" @click="after">修改</el-button>
    </div>
    <div class="table" v-if="!off">
      <div class="item" v-for="(item,i) of list" :key="i">
        <div class="left">
          <p>{{item.key}}</p>
        </div>
        <div class="right">
          <el-input v-show="!item.area && !item.img" v-model="item.value" :placeholder="'请输入'+item.key"></el-input>
          <el-input v-show="item.area"
            type="textarea"
            :rows="2"
            v-model="item.value">
          </el-input>
          <el-upload v-show="item.img" class="avatar-uploader" action="https://上传的地址" :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
            <img v-if="imageUrl" :src="imageUrl" class="avatar">
            <div class="text">
              <p class="red">logo</p>
              <p>640*630</p>
              <p>500kb以内</p>
            </div>
          </el-upload>
        </div>
      </div>
    </div>
    <div class="btn" v-if="!off">
      <el-button type="primary" @click="afterselect(true)">保存修改</el-button>
      <el-button type="danger" @click="afterselect(false)">取消修改</el-button>
    </div>
  </div>
</template>
<script>
import { Loading } from 'element-ui'
export default {
  data () {
    return {
      list: [],
      off: true,
      imageUrl: ''
    }
  },
  methods: {
    init () { // 本地路径图片无法显示，暂且不绑定变量
      var list = [{ key: '店铺名', value: '生之圆' }, { key: '店铺logon', value: 'https://img-blog.csdnimg.cn/20191216172544126.png' }, { key: '店铺介绍', value: '非诚勿扰,非诚勿扰,非诚勿扰,非诚勿扰,非诚勿扰,非诚勿扰,非诚勿扰,非诚勿扰,非诚勿扰,非诚勿扰,非诚勿扰,' }, { key: '开店时间', value: '2019-8-19' }, { key: '店主姓名', value: '46000XXXXX' }, { key: '联系电话', value: '1533XXXX' }, { key: '邮箱', value: '122@qq.com' }, { key: '地区', value: '天河' }, { key: '详细地址', value: '华农大学' }]
      list.forEach((value, key) => {
        value.img = false
        value.area = false
        if (key === 1) {
          value.img = true
        } else if (key === 2) {
          value.area = true
        }
      })
      this.list = list
    },
    after () {
      this.off = false
    },
    handleAvatarSuccess (res, file) {
      this.imageUrl = URL.createObjectURL(file.raw)
      console.log(res, file) // 因为action是远程地址，不可空，此处还不能获得结果，会报错
    },
    beforeAvatarUpload (file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2
      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M
    },
    afterselect (boolean) {
      if (boolean) {
        var loading = Loading.service({
          lock: true,
          text: '保存中',
          spinner: 'el-icon-loading',
          background: 'rgba(0,0,0,0.3)'
        })
        setTimeout(() => {
          loading.close()
          this.off = true
        }, 1000)
      } else {
        this.off = true
      }
    }
  },
  created () {
    this.init()
  }
}
</script>
<style scoped lang="less">
.basic{
  line-height:normal;
  width:100%;
  height:100%;
  // border:1px solid red;
  .table{
    width:50%;
    height:700px;
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
        textarea{
          width:400px;
          height:60px;
          resize:none;
          padding:8px;
        }
      }
    }
  }
  .btn{
    text-align:left;
    padding-left:100px;
  }
}
.avatar-uploader{
  border:1px solid #F1F1F1;
  border-radius:5px;
  width:80px;
  height:80px;
  .el-upload{
    cursor: pointer;
    position: relative;
    overflow: hidden;
    width:80px;
    height:80px;
    .text{
      width:80px;
      height:80px;
      display:flex;
      flex-direction:column;
      justify-content:space-around;
      align-items:center;
      padding:4px 0;
      background-color:#F1F1F1;
      border:1px solid #ccc;
      border-radius: 6px;
      top:0;
      .red{
        color:#F3736E;
        font-size:17px;
        font-weight:600;
      }
      p{
        color:#CCCCCC;
        font-size:12px;
        letter-spacing:1px;
      }
    }
  }
  .el-upload:hover {
    border-color: #409EFF;
  }
}
// .avatar-uploader-icon {
//   font-size: 28px;
//   color: #8c939d;
//   width: 80px;
//   height: 80px;
//   line-height: 80px;
//   text-align: center;
// }
.avatar {
  width: 80px;
  height: 80px;
  display: block;
}
</style>
