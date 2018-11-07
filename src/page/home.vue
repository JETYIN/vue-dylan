<template>
    <div class="manage_page fillcontain">
        <el-row style="height: 100%;">
            <el-col :span="4" style="min-height: 100%; background-color: #324057;">
                <el-menu :default-active="defaultActive" router>
                    <el-menu-item index="home">
                        <!--修改首页地址wei首页内容，即首页不会再跳转-->
                        <i class="el-icon-menu"></i>首页</el-menu-item>
                    <el-submenu index="2">
                        <template slot="title">
                            <i class="el-icon-document"></i>数据管理</template>
                        <el-menu-item index="userList">用户列表</el-menu-item>
                        <el-menu-item index="shopList">商家列表</el-menu-item>
                        <el-menu-item index="foodList">食品列表</el-menu-item>
                        <el-menu-item index="orderList">订单列表</el-menu-item>
                        <el-menu-item index="adminList">管理员列表</el-menu-item>
                    </el-submenu>
                    <el-submenu index="3">
                        <template slot="title">
                            <i class="el-icon-plus"></i>添加数据</template>
                        <el-menu-item index="addShop">添加商铺</el-menu-item>
                        <el-menu-item index="addGoods">添加商品</el-menu-item>
                    </el-submenu>
                    <el-submenu index="4">
                        <template slot="title">
                            <i class="el-icon-star-on"></i>图表</template>
                        <el-menu-item index="visitor">用户分布</el-menu-item>
                        <!-- <el-menu-item index="newMember">用户数据</el-menu-item> -->
                    </el-submenu>
                    <el-submenu index="5">
                        <template slot="title">
                            <i class="el-icon-edit"></i>编辑</template>
                        <!-- <el-menu-item index="uploadImg">上传图片</el-menu-item> -->
                        <el-menu-item index="vueEdit">文本编辑</el-menu-item>
                    </el-submenu>
                    <el-submenu index="6">
                        <template slot="title">
                            <i class="el-icon-setting"></i>设置</template>
                        <el-menu-item index="adminSet">管理员设置</el-menu-item>
                        <!-- <el-menu-item index="sendMessage">发送通知</el-menu-item> -->
                    </el-submenu>
                    <el-submenu index="7">
                        <template slot="title">
                            <i class="el-icon-warning"></i>说明</template>
                        <el-menu-item index="explain">关于</el-menu-item>
                    </el-submenu>
                    <!--权限分配-->
                   <el-submenu index="8">
                        <template slot="title">
                           <i class="el-icon-edit"></i>权限</template>
                        <el-menu-item index="addPermission">权限分配</el-menu-item>
                        <el-menu-item index="structureAdmin">人员结构</el-menu-item>
                    </el-submenu>
                </el-menu>
            </el-col>
            <el-col :span="20" style="height: 100%;overflow: auto;">
                <!--header start,path应为当页面路由地址-->
                <div class="header_container">
                    <el-breadcrumb separator="/">
                        <!--此处设置的分割符号将会显示在页面如:首页/数据管理/用户列表-->
                        <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
                        <el-breadcrumb-item v-for="(item, index) in $route.meta" :key="index">{{item}}</el-breadcrumb-item>
                    </el-breadcrumb>
                    
                    <el-dropdown @command="handleCommand" menu-align='start'>
                        <span class="avator">{{user_name}}<img :src="this.userAvatar" /></span>
                        <!--img只能在其中通过此方式使用-->
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item command="home">首页</el-dropdown-item>
                            <!--command 事件触发-->
                            <el-dropdown-item command="logout">退出</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
                <!--header end，header不变，路由页面变化-->
                <keep-alive>
                    <router-view></router-view>
                </keep-alive>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
  data() {
    //FIXXME用户数据通过全局session拿
    return {
      userAvatar: "http://pic.616pic.com/ys_b_img/00/06/40/yBLDRz0LCW.jpg", //用户图片
      user_name: "test_123"
    };
  },
  methods: {
    handleCommand(command) {
      //统一处理el-dropdown的事件处理,事件定义到按照command进行
      console.log("current event:" + command);
      switch (command) {
        case "home":
          this.$router.push("/home");
          break;
        case "logout": //处理退出事件
          this.$fetch("/logout", "", response => {
            console.log(JSON.stringify(response));
            this.$message({
              type: "success",
              message: "登出成功"
            });
            this.$router.push("/");
          });

          break;
      }
    }
  }
};
</script>


<style lang="less" scoped>
@import "../style/mixin";
.manage_page {
}
.el-menu {
  background-color: #324057;
}
.header_container {
  background-color: #324057;
  height: 60px;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
}
.user {
  padding-right: 50px;
}
.avator {
  .wh(36px, 36px);
  padding-right: 20px;
  align-items: center;
  color: #fff;
  img {
    //可设置class内的节点
    width: 36px;
    height: 36px;
    border-radius: 20px;
    margin: 5px 0px 0px 5px;
  }
}
.el-dropdown-menu__item {
  text-align: center;
  color: #324057;
}
</style>
