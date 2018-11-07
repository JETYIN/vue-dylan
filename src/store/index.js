import Vue from 'vue';
import vuex from 'vuex';

Vue.use(vuex);//vuex中一般用于处理登录态登录信息

export default new vuex.Store({//多个组件状态较多，可使用module将不同组件属性下分

    state() {
        show: false
    },
    module:{//处理多个组件的状态,此处引入js，js中定义组件状态
        
    },
    mutations:{//用于处理一个组件的多个状态

    }
    
})


