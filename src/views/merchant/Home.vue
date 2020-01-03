<template>
  <div>
    <el-container>
      <el-header>
        <div class="left">
          <p>商家管理后台</p>
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
              <img src="../../assets/image/user.png" alt="">
              <p>用户名</p>
            </div>
          </div>
        </div>
      </el-header>
      <el-container>
        <el-aside width="204px" >
          <el-menu
          unique-opened
          :default-active="defaultAactive"
          class="el-menu-vertical-demo"
          @select="menuSelect"
          background-color="#262C3A"
          text-color="#fff"
          active-text-color="#4984D8"
          width="200px"
          ><!--:default-openeds="openeds"-->
          <el-submenu index="1x">
            <template slot="title">
              <i class="el-icon-reading"></i>
              <span>基础信息</span>
            </template>
            <el-menu-item-group >
              <el-menu-item index="0" >商家账号信息</el-menu-item>
              <el-menu-item index="1">店铺信息</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2x">
            <template slot="title">
              <i class="el-icon-shopping-bag-2"></i>
              <span>商品管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2">商品列表</el-menu-item>
              <el-menu-item index="3">添加商品</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="4">
            <i class="el-icon-set-up"></i>
            <span slot="title">店铺装修</span>
          </el-menu-item>
          <el-menu-item index="5">
            <i class="el-icon-notebook-1"></i>
            <span slot="title">订单列表</span>
          </el-menu-item>
          <el-submenu index="5x">
            <template slot="title">
              <i class="el-icon-chat-dot-square"></i>
              <span>评价列表</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="6">订单评分</el-menu-item>
              <el-menu-item index="7">店铺评分</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="8">
            <i class="el-icon-truck"></i>
            <span slot="title">售后管理</span>
          </el-menu-item>
          <el-menu-item index="9">
            <i class="el-icon-document-add"></i>
            <span slot="title">发放代金券</span>
          </el-menu-item>
        </el-menu>
        </el-aside>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'kcone',
      isCollapse: true,
      navList: [{ name: '商家账号信息', path: '/home' }, { name: '店铺信息', path: '/home/basicshop' }],
      breadList: [{ name: '首页', path: '/home' }, { name: '买家账号', path: '/home/basicshop' }],
      shopList: [],
      // openeds: ['1'],
      defaultAactive: '0'
    }
  },
  methods: {
    init () {
      var list = [{ path: '/merchant' }, { path: '/merchant/basicshop' }, { path: '/merchant/shoplist' }, { path: '/merchant/shopadd' }, { path: '/merchant/decoration' }, { path: '/merchant/orderlist' }, { path: '/merchant/evaluatelist' }, { path: '/merchant/evaluateshop' }, { path: '/merchant/afterlist' }, { path: '/merchant/chitlist' }]
      list.forEach((value, key) => {
        value.index = key.toString()
      })
      for (var value of list) {
        if (value.path === this.$route.path) {
          this.defaultAactive = value.index
          break
        }
      }
      this.shopList = list
    },
    menuSelect (key, keyPath) {
      var ids = parseInt(key)
      if (this.shopList[ids].path !== this.$route.path) {
        this.$router.push(this.shopList[ids].path)
      }
    },
    breadEvent () {}
  },
  created () {
    this.init()
  }
}
</script>
<style scoped lang='less'>
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
    background-color:#262C3A;
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
.el-container{
  height:900px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
    min-height: 400px;
  }
.el-aside {
  background-color: #262C3A;
  text-align: center;
}
.el-main {
  background-color: #fff;
  color: #333;
  text-align: center;
  line-height:normal;
}
</style>
