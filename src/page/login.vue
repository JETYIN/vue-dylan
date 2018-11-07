<template>
  <div class="login_page fillcontain">
    <transition name="form-fade" mode="in-out">
      <section class="form_contianer" v-show="showLogin">
        <div class="manage_tip">
          <p>server page</p>
        </div>
        <el-form :model="loginForm" :rules="logn_rules" ref="loginForm">
          <el-form-item prop="username">
            <el-input v-model="loginForm.username" placeholder="用户名">
              <span>dsfsf</span>
            </el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input type="password" placeholder="密码" v-model="loginForm.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm()" class="submit_btn">登陆</el-button>
          </el-form-item>
        </el-form>
        <p class="tip">温馨提示：</p>
        <p class="tip">未登录过的新用户，自动注册</p>
        <p class="tip">注册过的用户可凭账号密码登录</p>
      </section>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
        username: "admin", //设置默认的用户名密码
        password: "123456"
      },
      logn_rules: {
        username: [
          { required: true, message: "用户名不能为空", trigger: "blur" }
        ],
        password: [{ required: true, message: "密码不能为空", trigger: "blur" }]
      },
      showLogin: false ,//控制是否显示登陆页面
      fullscreenLoading:false
    };
  },
  mounted() {
    //控制登陆界面显示
    this.showLogin = true;
  },

  methods: {
    //登陆按钮触发
    submitForm() {
      //点击登录触发按钮，此处未插入el-form中的loginForm用户登录数据
      //auth-moudle
      var _this = this;
      this.postRequest('/auth/login/form', {//后端接口
          username: this.loginForm.username,
          password: this.loginForm.password
        }).then(resp=> {
          if (resp && resp.status == 200) {
            var data = resp.data;
          
            _this.$store.commit('login', data.obj);
            var path = _this.$route.query.redirect;
            _this.$router
              .replace({path: path == '/' || path == undefined ? '/home' : path});
          }
        });
    }
  }
};
</script>

<style lang="less" scoped>
@import "../style/mixin";
.login_page {
  position: absolute; //absolute去掉backgroud-color将不会生效

  background-color: #324057;
}
.manage_tip {
  position: absolute;
  width: 100%;
  top: -100px;
  left: 0;
  p {
    font-size: 34px;
    color: #fff;
  }
}
.form_contianer {
  .wh(320px, 240px);
  .ctp(320px, 240px);
  padding: 25px;
  border-radius: 5px;
  text-align: center;
  background-color: #fff;
  .submit_btn {
    width: 100%;
    font-size: 16px;
  }
}
.tip {
  font-size: 12px;
  color: red;
}
.form-fade-enter-active,
.form-fade-leave-active {
  transition: all 1s;
}
.form-fade-enter,
.form-fade-leave-active {
  transform: translate3d(0, -50px, 0);
  opacity: 0;
}
</style>
