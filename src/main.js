// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import Element from 'element-ui';//import element-ui
import 'element-ui/lib/theme-chalk/index.css';//引入element css
import store from './store';//引入store/index中封装的vuex

Vue.config.productionTip = false;
Vue.use(Element);//使用Element-ui,参数列表中可设置语言

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})