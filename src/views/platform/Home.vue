<template>
  <div>
      <el-header>
        <div class="left">
          <p>平台管理后台</p>
        </div>
        <div class="right">
          <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: item.path }" v-for="(item,i) of breadList" :key="i">{{item.name}}</el-breadcrumb-item>
          </el-breadcrumb>
          <div class="handle">
            <div class="one">
              <svg t="1577066374067" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2409" width="32" height="32"><path d="M653.329602 261.679792c-10.95023-5.935639-24.561263-1.944433-30.59924 8.903458s-1.944433 24.561263 8.903458 30.59924C726.194683 352.965821 784.937038 452.131921 784.937038 559.792125c0 162.513692-132.221467 294.735159-294.735159 294.735159S195.46672 722.305817 195.46672 559.792125c0-110.935039 61.30082-211.329202 159.955227-262.191485 11.052568-5.730961 15.35079-19.239656 9.722167-30.292225-5.730961-11.052568-19.239656-15.35079-30.292225-9.722167-54.648811 28.143114-100.701179 70.613632-133.244853 122.908655-33.464721 53.727763-51.169298 115.744953-51.169298 179.297222 0 45.847691 9.005797 90.364981 26.710374 132.221467 17.090546 40.423746 41.651809 76.753948 72.762742 107.96722 31.213272 31.213272 67.543474 55.672197 107.96722 72.762742C399.836898 890.55047 444.354187 899.556266 490.201879 899.556266c45.847691 0 90.364981-9.005797 132.221467-26.710374 40.423746-17.090546 76.753948-41.651809 107.96722-72.762742 31.213272-31.213272 55.672197-67.543474 72.762742-107.96722C820.960224 650.157106 829.96602 605.639816 829.96602 559.792125 829.96602 435.655407 762.320208 321.445533 653.329602 261.679792z" p-id="2410"></path><path d="M490.201879 616.078353c12.485309 0 22.514491-10.029182 22.514491-22.514491L512.71637 160.671597c0-12.485309-10.029182-22.514491-22.514491-22.514491s-22.514491 10.029182-22.514491 22.514491l0 432.892265C467.687388 606.04917 477.71657 616.078353 490.201879 616.078353z" p-id="2411"></path></svg>
              <p>退出系统</p>
            </div>
            <div class="two">
              <img src="../../assets/public/user.png" alt="">
              <p>用户名</p>
            </div>
          </div>
        </div>
      </el-header>
      <el-container  >
        <el-aside width="204px">
          <el-menu
          unique-opened
          :default-active="defaultActive"
          class="el-menu-vertical-demo"
          @select="menuSelect"
          background-color="#5C9AFF"
          width="200px"
          text-color="#fff"
          active-text-color="#FFD04B"
          ><!--:default-openeds="openeds"-->
          <el-submenu index="1x">
            <template slot="title">
              <i class="el-icon-reading"></i>
              <span>账号管理</span>
            </template>
            <el-menu-item-group >
              <el-menu-item index="0" >商家/企业入驻表</el-menu-item>
              <el-menu-item index="1">商家账号列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="2">
            <i class="el-icon-set-up"></i>
            <span slot="title">订单列表</span>
          </el-menu-item>
          <el-menu-item index="3">
            <i class="el-icon-notebook-1"></i>
            <span slot="title">商品列表</span>
          </el-menu-item>
          <el-submenu index="4x">
            <template slot="title">
              <i class="el-icon-chat-dot-square"></i>
              <span>评价列表</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="4">订单评分</el-menu-item>
              <el-menu-item index="5">店铺评分</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="6">
            <i class="el-icon-truck"></i>
            <span slot="title">售后管理</span>
          </el-menu-item>
          <el-menu-item index="7">
            <i class="el-icon-document-add"></i>
            <span slot="title">代金券列表</span>
          </el-menu-item>
        </el-menu>
        </el-aside>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
  </div>
</template>
<script>
export default {
  data () {
    return {
      breadList: [{ name: '首页', path: '/home' }, { name: '买家账号', path: '/home/basicshop' }],
      openeds: ['1x'],
      defaultActive: '0',
      nav: []
    }
  },
  methods: {
    init () {
      var list = [{ path: '/platform' }, { path: '/platform/accshoplist' }, { path: '/platform/orderlist' }, { path: '/platform/shoplist' }, { path: '/platform/evaluateuser' }, { path: '/platform/evaluateshop' }, { path: '/platform/afterlist' }, { path: '/platform/chitlist' }]
      list.forEach((value, key) => {
        value.index = key.toString()
      })
      for (var value of list) {
        if (this.$route.path === value.path) {
          this.defaultActive = value.index
          break
        }
      }
      this.nav = list
    },
    menuSelect (key, keyPath) {
      var idx = parseInt(key)
      if (this.$route.path !== this.nav[idx].path) {
        this.$router.push(this.nav[idx].path)
      }
    }
  },
  created () {
    this.init()
  },
  mounted () {
  }
}
</script>
<style scoped lang="less">
.el-header{
  background-color: #fff;
  color: #333;
  text-align: center;
  line-height: 60px;
  padding:0;
  display:flex;
  width:100%;
  /* border-bottom:1px solid #D4D5D7; */
  .left{
    width:203px;
    background-color:#5C9AFF;
    font-size:17px;
    font-weight:600;
    letter-spacing:2px;
    z-index:1;
    position:relative;
    box-sizing:content-box;
    height:100%;
    p{
      color:#fff;
    }
  }
  .right{
    flex:1;
    display:flex;
    align-items:center;
    justify-content:space-between;
    padding-left:30px;
    border-bottom:1px solid #D4D5D7;
    .handle{
      display:flex;
      width:220px;
      justify-content:space-between;
      padding-right:30px;
      .one{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        cursor:pointer;
        p{
          line-height:normal;
          font-size:13px;
        }
      }
      .two{
        display:flex;
        align-items:center;
        cursor:pointer;
        p{
          color:#030303;
          font-weight:600;
          font-size:16px;
        }
        img{
          width:42px;
          height:42px;
          margin-right:5px;
        }
      }
    }
  }
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    min-height: 400px;
  }
.el-container{
  height:800px;
}
.el-main {
  background-color: #fff;
  color: #333;
  text-align: center;
}
 .el-aside {
  background-color: #5C9AFF;
  text-align: center;
  .el-menu-item i{
    color:#fff;
  }
}

</style>
