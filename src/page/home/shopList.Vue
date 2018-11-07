<template>
    <div class="fillcontain">

        <div class="table_container">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column type="expand">
                    <template slot-scope="props">
                        <el-form label-position="left" inline class="demo-table-expand">
                            <el-form-item label="店铺名称">
                                <span>{{ props.row.shopname }}</span>
                            </el-form-item>
                            <el-form-item label="店铺地址">
                                <span>{{ props.row.address }}</span>
                            </el-form-item>
                            <el-form-item label="店铺介绍">
                                <span>{{ props.row.info }}</span>
                            </el-form-item>
                            <el-form-item label="店铺 ID">
                                <span>{{ props.row.id }}</span>
                            </el-form-item>
                            <el-form-item label="联系电话">
                                <span>{{ props.row.phone }}</span>
                            </el-form-item>
                            <el-form-item label="评分">
                                <span>{{ props.row.rating }}</span>
                            </el-form-item>
                            <el-form-item label="销售量">
                                <span>{{ props.row.recent_order_num }}</span>
                            </el-form-item>
                            <el-form-item label="分类">
                                <span>{{ props.row.category }}</span>
                            </el-form-item>
                        </el-form>
                    </template>
                </el-table-column>
                <el-table-column label="店铺名称" prop="shopname">
                </el-table-column>
                <el-table-column label="店铺地址" prop="address">
                </el-table-column>
                <el-table-column label="店铺介绍" prop="info">
                </el-table-column>
                <el-table-column label="操作" width="285">
                    <template slot-scope="scope">
                        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                        <el-button size="mini" type="Success" @click="addFood(scope.$index, scope.row)">添加食品</el-button>
                        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="Pagination">
                <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage" :page-size="20" layout="total, prev, pager, next" :total="count">
                </el-pagination>
            </div>

        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [],
      count: 110,
      offset: 0,
      currentPage: 1
    };
  },
  mounted() {
    this.initData();
  },
  methods: {
    async initData() {
      this.$fetch("/shoplist", "", response => {
        this.tableData = response.data;
      });
    },
    handleCurrentChange(val) {
      //页面切换需要更新请求任务
      this.currentPage = val;
      this.offset = (val - 1) * this.limit;
      this.initData();
    },

    //设置右侧编辑界面--弹出提示页面
    handleEdit() {
      //编辑
      this.$confirm("该页面还未完成", "提示", {
        type: "warning"
      });
    },
    addFood() {
      //添加食品
      this.$confirm("该页面还未完成", "提示", {
        type: "warning"
      });
    },
    async handleDelete(index, row) {
      this.$confirm("确认删除该记录吗?", "提示", {
        type: "warning"
      }).then(() => {
        this.$fetch("/deleteshop", "", response => {
          this.$message({
            type: "success",
            message: "删除店铺成功"
          });
          this.tableData.splice(index, 1); //删除数据tab表中的index--一般删除后会重新请求数据库
        });
      });
    }
  }
};
</script>


<style lang="less">
@import "../../style/mixin";
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
.table_container {
  padding: 20px;
}
.Pagination {
  display: flex;
  justify-content: flex-start;
  margin-top: 8px;
}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #20a0ff;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 120px;
  height: 120px;
  line-height: 120px;
  text-align: center;
}
.avatar {
  width: 120px;
  height: 120px;
  display: block;
}
</style>