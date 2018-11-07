<template>
    <div>
        <head-top></head-top>
        <section class="data_section">
            <header class="section_title">数据统计</header>
            <el-row :gutter="20" style="margin-bottom: 10px;">
                <el-col :span="4">
                    <div class="data_list today_head">
                        <span class="data_num head">当日数据：</span>
                    </div>
                </el-col>
                <el-col :span="4">
                    <div class="data_list">
                        <span class="data_num">{{newUsersCount}}</span> 新增用户</div>
                </el-col>
                <el-col :span="4">
                    <div class="data_list">
                        <span class="data_num">{{newOrdersCount}}</span> 新增订单</div>
                </el-col>
                <el-col :span="4">
                    <div class="data_list">
                        <span class="data_num">{{newAdminCount}}</span> 新增管理员</div>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="4">
                    <div class="data_list all_head">
                        <span class="data_num head">总数据：</span>
                    </div>
                </el-col>
                <el-col :span="4">
                    <div class="data_list">
                        <span class="data_num">{{allUserCount}}</span> 注册用户</div>
                </el-col>
                <el-col :span="4">
                    <div class="data_list">
                        <span class="data_num">{{allOrderCount}}</span> 订单</div>
                </el-col>
                <el-col :span="4">
                    <div class="data_list">
                        <span class="data_num">{{allAdminCount}}</span> 管理员</div>
                </el-col>
            </el-row>
        </section>
        <!--图表信息-->

    </div>
</template>

<script>
export default {
  //从mock获取数据填充页面
  data() {
    return {
      //设置参数初始值为null
      newUsersCount: null,
      newOrdersCount: null,
      newAdminCount: null,
      allUserCount: null,
      allOrderCount: null,
      allAdminCount: null
    };
  },
  mounted() {
    //router到此页面即刻请求网络
    this.getDataFromMock();
  },

  methods: {
    //实例化view中中绑定字段
    async getDataFromMock() {
      this.$fetch('/main', '', response => {
        console.log("main:" + JSON.stringify(response.data));
        this.newUsersCount = response.data.newUsersCount;
        this.newOrdersCount = response.data.newOrdersCount;
        this.newAdminCount = response.data.newAdminCount;
        this.allUserCount = response.data.allUserCount;
        this.allOrderCount = response.data.allOrderCount;
        this.allAdminCount = response.data.allAdminCount;
      });
    }
  }
};
</script>

<style lang="less">
@import "../../style/mixin"; //"./"当前目录，"../父级目录"
.data_section {
  padding: 20px;
  margin-bottom: 40px;
  .section_title {
    text-align: center;
    font-size: 30px;
    margin-bottom: 10px;
  }
  .data_list {
    //data——list节点添加必要属性
    text-align: center;
    font-size: 14px;
    color: #666;
    border-radius: 6px;
    background: #e5e9f2;
    .data_num {
      color: #333;
      font-size: 20px;
    }
    .head {
      border-radius: 6px;
      font-size: 20px;
      padding: 4px 0;
      color: #fff;
      display: inline-block;
    }
  }
  .today_head {
    background: #ff9800;
  }
  .all_head {
    background: #20a0ff;
  }
}
.wan {
  .sc(16px, #333);
}
</style>
