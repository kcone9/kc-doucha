<template>
  <div>
    <el-aside width="204px" >
      <el-menu
      unique-opened
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#262C3A"
      text-color="#fff"
      active-text-color="#4984D8"
      width="200px"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-reading"></i>
            <span>基础信息</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">商家账号信息</el-menu-item>
            <el-menu-item index="1-2">店铺信息</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-shopping-bag-2"></i>
            <span>商品管理</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">商品列表</el-menu-item>
            <el-menu-item index="1-2">添加商品</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="3">
          <i class="el-icon-set-up"></i>
          <span slot="title">店铺装修</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-notebook-1"></i>
          <span slot="title">订单列表</span>
        </el-menu-item>
        <el-submenu index="5">
          <template slot="title">
            <i class="el-icon-chat-dot-square"></i>
            <span>评价列表</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">订单评分</el-menu-item>
            <el-menu-item index="1-2">店铺评分</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-menu-item index="6">
          <i class="el-icon-truck"></i>
          <span slot="title">售后管理</span>
        </el-menu-item>
        <el-menu-item index="7">
          <i class="el-icon-document-add"></i>
          <span slot="title">发放代金券</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
  </div>
</template>
<script>
export default {
  data () {
    return {
      isCollapse: true
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style scoped lang='less'>
.el-aside {
  background-color: #262C3A;
  text-align: center;
  height:100%;
  width:200px;
  border:1px solid red;
  color:#fff;
}
</style>
