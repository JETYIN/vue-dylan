import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = r => require.ensure([], () => r(require('@/page/login')), 'login');//webpack的加载，在需要的时候才加载
const home = r => require.ensure([], () => r(require('@/page/home')), 'home');
//home下的二级界面
const mainpage = r => require.ensure([], () => r(require('@/page/home/mainpage')), 'mainpage');//抽屉栏的右侧菜单选项都以home/形式存在
const userList = r => require.ensure([], () => r(require('@/page/home/userList')), 'userList');
const shopList = r => require.ensure([], () => r(require('@/page/home/shopList')), 'shopList');
const foodList = r => require.ensure([], () => r(require('@/page/home/foodList')), 'foodList');
const orderList = r => require.ensure([], () => r(require('@/page/home/orderList')), 'orderList');
const adminList = r => require.ensure([], () => r(require('@/page/home/adminList')), 'adminList');
//添加数据
const addShop = r => require.ensure([], () => r(require('@/page/home/addShop')), 'addShop');
const addGoods = r => require.ensure([], () => r(require('@/page/home/addGoods')), 'addGoods');

//图表分析
const visitor = r => require.ensure([], () => r(require('@/page/home/visitor')), 'visitor');
//编辑
const vueEdit = r => require.ensure([], () => r(require('@/page/home/vueEdit')), 'vueEdit');
//设置
const adminSet = r => require.ensure([], () => r(require('@/page/home/adminSet')), 'adminSet');
//说明
const explain = r => require.ensure([], () => r(require('@/page/home/explain')), 'explain');
//定义路由界面.一般将routes提出进行创建，方便管理,路由第一个设置的为启动的第一个界面
const routes = [
  // '/'标示程序的入口界面既是启动时localhost:8080/#/
  {
    path: '/',
    name: 'login',
    component: login
  }, {
    path: '/home',
    name: 'home',
    component: home,
    children: [{//二级路由，将在主页面中router-view触发
      path: '',
      component: mainpage
    }, {
      path: '/userList',
      component: userList,
      meta: ['数据管理', '用户列表'],
    }, {
      path: '/shopList',
      component: shopList,
      meta: ['数据管理', '商家列表'],
    }, {
      path: '/foodList',
      component: foodList,
      meta: ['数据管理', '食品列表'],
    }, {
      path: '/orderList',
      component: orderList,
      meta: ['数据管理', '订单列表'],
    }, {
      path: '/adminList',
      component: adminList,
      meta: ['数据管理', '管理员列表'],
    }, {
      path: '/addShop',
      component: addShop,
      meta: ['添加数据', '添加商铺'],
    }, {
      path: '/addGoods',
      component: addGoods,
      meta: ['添加数据', '添加商品',]
    }, {
      path: '/visitor',
      component: visitor,
      meta: ['图表', '用户分析',]
    }, {
      path: '/vueEdit',
      component: vueEdit,
      meta: ['编辑', '文本编辑',]
    }, {
      path: '/adminSet',
      component: adminSet,
      meta: ['设置', '管理员设置',]
    }, {
      path: '/explain',
      component: explain,
      meta: ['说明', '关于',]
    }]
  }
]

export default new Router({//导出routes集合
  routes
})
