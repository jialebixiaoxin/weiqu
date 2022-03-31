<template>
  <div>
    <InfoHead
      :img="info.back_image"
      :title="info.title"
      :subtitle="info.subtitle"
    ></InfoHead>
    <ProduceHead :getType="getType"></ProduceHead>
    <span v-if="producelist.length > 0">
      <ProduceContent :list="producelist"></ProduceContent>
      <div class="pagination">
        <el-pagination
          background
          :hide-on-single-page="true"
          prev-text="上一页"
          next-text="下一页"
          :page-size="num"
          layout="prev, pager, next"
          :total="total"
          :current-page="limit"
          @current-change="handleCurrentChange"
        >
        </el-pagination>
      </div>
    </span>
    <div class="noneimg" v-else>
      <div class="nonecontent">
        <img src="./images/none.jpeg" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
import InfoHead from "@/components/Info/InfoHead.vue";
import ProduceHead from "@/components/Header/ProduceHead.vue";
import ProduceContent from "@/views/Produce/ProduceContent.vue";
export default {
  name: "Produce",
  data() {
    return {
      limit: 1,
      producelist: [],
      total: 0,
      type: "",
      num: 0,
      info: [],
    };
  },
  methods: {
    getType(type) {
      this.type = type;
      this.limit = 1;
      this.getProduceList();
    },
    async getProduceList() {
      let type = this.type;
      let limit = this.limit;
      let params = {
        type: type,
        limit: limit,
      };
      let result = await this.$API.reqGetProduceList(params);
      //如果成功：组件当中存储支付信息
      if (result.code == 1) {
        let rd = result.data;
        this.producelist = rd.producelist;
        this.total = rd.total;
        this.limit = rd.limit;
        this.num = rd.num;
        this.info = rd.info;
      }
    },

    handleCurrentChange(val) {
      this.limit = val;
      this.getProduceList();
    },
  },
  mounted() {
    let type = this.$route.query.type ? this.$route.query.type : "";
    this.type = type;
    this.getProduceList();
  },
  updated() {
    let id = this.$route.query.id ? this.$route.query.id : 0;
  },
  components: { InfoHead, ProduceHead, ProduceContent },
};
</script>
<style scoped>
.pagination {
  width: 100%;
  padding: 20px 0px;
  text-align: center;
}
::v-deep .el-pagination.is-background .el-pager li:not(.disabled) {
  background-color: rgb(30, 41, 51);
  color: rgba(255, 255, 255, 0.64);
}
::v-deep .el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: #4f75ff;
  color: #fff;
}
::v-deep .el-pagination.is-background .btn-prev {
  background: rgb(53, 67, 80);
  padding: 0px 10px;
  color: rgba(255, 255, 255, 0.64);
}
::v-deep .el-pagination.is-background .btn-next {
  background: rgb(53, 67, 80);
  padding: 0px 10px;
  color: rgba(255, 255, 255, 0.64);
}
::v-deep.el-pagination.is-background .btn-prev:disabled {
  color: rgba(255, 255, 255, 0.24);
}
::v-deep.el-pagination.is-background .btn-next:disabled {
  color: rgba(255, 255, 255, 0.24);
}
.noneimg {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.nonecontent{
  width: 465px;
  height: 400px;
}
.noneimg img {
  width: 100%;
  height: 100%;
}
</style>