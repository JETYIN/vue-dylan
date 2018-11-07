<template>
    <div class="fillcontain">
        <div class="table_container">
            <el-table :data="tableData" highlight-current-row style="width: 100%">
                <el-table-column type="index" width="100">
                </el-table-column>
                <el-table-column property="time" label="注册日期" width="220">
                </el-table-column>
                <el-table-column property="username" label="用户姓名" width="220">
                </el-table-column>
                <el-table-column property="address" label="注册地址">
                </el-table-column>
            </el-table>
            <div class="Pagination" style="text-align: left;margin-top: 10px;">
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-size="10" layout="total, prev, pager, next" :total="userAccount">
                </el-pagination>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          time: "2016-05-02",
          username: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          time: "2016-05-04",
          username: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          time: "2016-05-01",
          username: "王小虎",
          city: "上海市普陀区金沙江路 1519 弄"
        },
        {
          time: "2016-05-03",
          username: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ],
      userAccount: 100,
      offset: 0,
      currentPage: 1
    };
  },
  created() {
    this.initData();
  },
  methods: {
    async initData() {
      console.log("initData,currentPage:" + this.currentPage);
      this.$fetch("/userlist", "", response => {
        console.log("userlist:" + JSON.stringify(response.data));
        this.tableData = response.data;
        // this.userAccount = response.allcount; //用户数量
      });
    },
    handleCurrentChange(val) {//页面切换需要更新请求任务

      this.currentPage = val;
      this.offset = (val - 1) * this.limit;
      this.initData();
    }
  }
};
</script>


<style lang="less">
@import "../../style/mixin";
.table_container {
  padding: 20px;
}
</style>
