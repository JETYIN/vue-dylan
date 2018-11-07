<template>
    <div class="fillcontain">
        <div class="table_container">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column type="expand">
                    <template slot-scope="props">
                        <el-form label-position="left" inline class="demo-table-expand">
                            <el-form-item label="食品名称">
                                <span>{{ props.row.foodname }}</span>
                            </el-form-item>
                            <el-form-item label="餐馆名称">
                                <span>{{ props.row.shop}}</span>
                            </el-form-item>
                            <el-form-item label="食品 ID">
                                <span>{{ props.row.foodId }}</span>
                            </el-form-item>
                            <el-form-item label="餐馆 ID">
                                <span>{{ props.row.shopId }}</span>
                            </el-form-item>
                            <el-form-item label="食品介绍">
                                <span>{{ props.row.info }}</span>
                            </el-form-item>
                            <el-form-item label="餐馆地址">
                                <span>{{ props.row.address }}</span>
                            </el-form-item>
                            <el-form-item label="食品评分">
                                <span>{{ props.row.rate }}</span>
                            </el-form-item>
                            <el-form-item label="食品分类">
                                <span>{{ props.row.categroy }}</span>
                            </el-form-item>
                            <el-form-item label="月销量">
                                <span>{{ props.row.count }}</span>
                            </el-form-item>
                        </el-form>
                    </template>
                </el-table-column>
                <el-table-column label="食品名称" prop="foodname">
                </el-table-column>
                <el-table-column label="食品介绍" prop="info">
                </el-table-column>
                <el-table-column label="评分" prop="rate">
                </el-table-column>
                <el-table-column label="操作" width="160">
                    <template slot-scope="scope">
                        <el-button size="small" @click="handleEdit(scope.row)">编辑</el-button>
                        <el-button size="small" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
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
      tableData: []
    };
  },
  mounted() {
    this.initData();
  },
  methods: {
    async initData() {
      this.$fetch("foodlist", "", response => {
        this.tableData = response.data;
      });
    },
    handleEdit() {
      this.$confirm("此页面暂未开启", "提示", {
        type: "warning"
      });
    },
    handleDelete(index, row) {
      //操作对应页面标签
      //删除记录--权限
      this.$confirm("确认要删除吗?", "提示", {
        type: "warning"
      }).then(() => {
        this.$fetch("/deleteshop", "", response => {
          this.tableData.slice(index, 1);
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
</style>
