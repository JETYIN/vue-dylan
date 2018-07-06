import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const login = r => require.ensure([], () => r(require('@/page/login')), 'login');//webpack的加载，在需要的时候才加载
const home = r => require.ensure([], () => r(require('@/page/home')), 'home');
const homepage = r => require.ensure([], () => r(require('@/page/homePage')), 'homepage');
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
      component: homepage
    }]
  }
]

export default new Router({
  routes
})
