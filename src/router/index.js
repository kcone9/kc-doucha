import Vue from 'vue'
import VueRouter from 'vue-router'
const routes = [
  {
    path: '/',
    name: 'main',
    redirect: '/platform'
  },
  {
    path: '/platform',
    name: 'platForm',
    component: () => import('@/views/platform/Home'),
    children: [
      {
        path: '/platform',
        name: 'accountList',
        component: () => import('@/views/platform/AccountList')
      },
      {
        path: '/platform/accshoplist',
        name: 'accShopList',
        component: () => import('@/views/platform/AccShopList')
      },
      {
        path: '/platform/orderlist',
        name: 'orderLists',
        component: () => import('@/views/platform/OrderList')
      },
      {
        path: '/platform/orderdetail',
        name: 'orderDetail',
        component: () => import('@/views/platform/OrderDetail')
      },
      {
        path: '/platform/shoplist',
        name: 'shopLists',
        component: () => import('@/views/platform/ShopList')
      },
      {
        path: '/platform/shopdetail',
        name: 'shopDetails',
        component: () => import('@/views/platform/ShopDetail')
      },
      {
        path: '/platform/chitlist',
        name: 'chitLists',
        component: () => import('@/views/platform/ChitList')
      },
      {
        path: '/platform/evaluateuser',
        name: 'evaluateUser',
        component: () => import('@/views/platform/EvaluateUser')
      },
      {
        path: '/platform/evaluateshop',
        name: 'evaluateShops',
        component: () => import('@/views/platform/EvaluateShop')
      },
      {
        path: '/platform/afterlist',
        name: 'afterLists',
        component: () => import('@/views/platform/AfterList')
      },
      {
        path: '/platform/afterdesc',
        name: 'afterDesc',
        component: () => import('@/views/platform/AfterDesc')
      },
      {
        path: '/platform/afterback',
        name: 'afterBack',
        component: () => import('@/views/platform/AfterBack')
      }
    ]
  },
  {
    path: '/platlogin',
    name: 'platLogin',
    component: () => import('@/views/platform/Login')
  },
  {
    path: '/merchant',
    name: 'Home',
    component: () => import('@/views/merchant/Home'),
    children: [
      {
        path: '/merchant',
        name: 'basic',
        component: () => import('@/views/merchant/BasicMessage')
      },
      {
        path: '/merchant/basicshop',
        name: 'basicShop',
        component: () => import('@/views/merchant/BasicShop')
      },
      {
        path: '/merchant/shoplist',
        name: 'shopList',
        component: () => import('@/views/merchant/ShopList')
      },
      {
        path: '/merchant/shopdetail',
        name: 'shopDetail',
        component: () => import('@/views/merchant/ShopDetail')
      },
      {
        path: '/merchant/shopafter',
        name: 'shopAfter',
        component: () => import('@/views/merchant/ShopAfter')
      },
      {
        path: '/merchant/shopadd',
        name: 'shopAdd',
        component: () => import('@/views/merchant/ShopAdd')
      },
      {
        path: '/merchant/decoration',
        name: 'Decoration',
        component: () => import('@/views/merchant/Decoration')
      },
      {
        path: '/merchant/orderlist',
        name: 'orderList',
        component: () => import('@/views/merchant/OrderList')
      },
      {
        path: '/merchant/orderlook',
        name: 'orderLook',
        component: () => import('@/views/merchant/OrderLook')
      },
      {
        path: '/merchant/ordershipment',
        name: 'orderShipment',
        component: () => import('@/views/merchant/OrderShipment')
      },
      {
        path: '/merchant/evaluatelist',
        name: 'evaluateList',
        component: () => import('@/views/merchant/EvaluateList')
      },
      {
        path: '/merchant/evaluateshop',
        name: 'evaluateShop',
        component: () => import('@/views/merchant/EvaluateShopList')
      },
      {
        path: '/merchant/afterlist',
        name: 'afterList',
        component: () => import('@/views/merchant/AfterList')
      },
      {
        path: '/merchant/afterdes',
        name: 'afterDes',
        component: () => import('@/views/merchant/AfterDes')
      },
      {
        path: '/merchant/chitset',
        name: 'chitSet',
        component: () => import('@/views/merchant/ChitSet')
      },
      {
        path: '/merchant/chitlist',
        name: 'chitList',
        component: () => import('@/views/merchant/ChitList')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/merchant/Login')
  },
  {
    path: '/forget',
    name: 'Forget',
    component: () => import('@/views/merchant/Forget'),
    children: [{
      path: '/forget',
      name: 'forgetCode',
      component: () => import('@/components/ForgetCode')
    },
    {
      path: '/forget/newpass',
      name: 'ForgetNewPass',
      component: () => import('@/components/ForgetNewPass')
    }
    ]
  },
  {
    path: '/basic',
    name: '/BasicMessage',
    component: () => import('@/views/merchant/BasicMessage')
  }
]
Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
export default router
// 访问模块时延迟加载 component: () => import(/* webpackChunkName: 'about' */ '../views/About.vue')
