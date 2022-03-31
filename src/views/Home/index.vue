<template>
  <div id="home" @mousewheel="rollScroll($event)">
    <el-carousel
      trigger="click"
      height="100vh"
      direction="vertical"
      :autoplay="false"
      ref="carousel"
      :loop="false"
    >
      <el-carousel-item v-if="bannerlist">
        <Banner :list="bannerlist"></Banner>
      </el-carousel-item>
      <el-carousel-item v-if="producelist && produceinfo !=''">
          <ProduceInfo :list="producelist" :info="produceinfo"></ProduceInfo>
      </el-carousel-item>
      <el-carousel-item v-if="serviceinfo && servicelist !=''">
          <ServiceInfo :list="servicelist" :info="serviceinfo"></ServiceInfo>
      </el-carousel-item>
      <el-carousel-item v-if="aboutinfo && aboutcontent">
          <AboutInfo :content="aboutcontent" :info="aboutinfo"></AboutInfo>
      </el-carousel-item>
      <el-carousel-item v-if="ideainfo && idealist !=''">
          <IdeaInfo :list="idealist" :info="ideainfo"></IdeaInfo>
      </el-carousel-item>
      <el-carousel-item  v-if="partnerinfo && partnerlist !=''">
          <PartnerInfo :list="partnerlist" :info="partnerinfo"></PartnerInfo>
      </el-carousel-item>
      <el-carousel-item v-if="usinfo && uscontent !=''">
          <UsInfo :content="uscontent" :info="usinfo"></UsInfo>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
import Banner from "@/components/Banner";
import ProduceInfo from "@/components/Combination/ProduceInfo";
import ServiceInfo from "@/components/Combination/ServiceInfo";
import AboutInfo from "@/components/Combination/AboutInfo";
import IdeaInfo from "@/components/Combination/IdeaInfo";
import PartnerInfo from "@/components/Combination/PartnerInfo";
import UsInfo from "@/components/Combination/UsInfo";
export default {
  name: "Home",
  data() {
    return {
      bannerlist:[],
      producelist:[],
      produceinfo:[],
      serviceinfo:[],
      servicelist:[],
      aboutcontent:[],
      aboutinfo:[],
      idealist:[],
      ideainfo:[],
      partnerlist:[],
      partnerinfo:[],
      uscontent:[],
      usinfo:[],
    };
  },
  components: { Banner , ProduceInfo , ServiceInfo , AboutInfo , IdeaInfo ,PartnerInfo ,UsInfo},
  methods: {
    rollScroll(event) {
      let _that = this;
      // chrome、ie使用的wheelDelta，火狐使用detail
      let scrollVal = event.wheelDelta || event.detail;
      // 节流
      if (!_that.timeOut) {
        _that.timeOut = setTimeout(() => {
          _that.timeOut = null;
          scrollVal > 0
            ? _that.$refs.carousel.prev()
            : _that.$refs.carousel.next();
        }, 300);
      } else {
      }
    },
    async getHomeList() {
      let result = await this.$API.reqHomeList();
      //如果成功：组件当中存储支付信息
      if (result.code == 1) {
        let rd = result.data;
        // banner
        this.bannerlist = rd.bannerlist
        // 产品与案例
        this.producelist = rd.producelist
        this.produceinfo = rd.produceinfo
        // 服务
        this.servicelist = rd.servicelist
        this.serviceinfo = rd.serviceinfo
        // 关于
        this.aboutcontent = rd.aboutcontent
        this.aboutinfo = rd.aboutinfo
        // 理念
        this.idealist = rd.idealist
        this.ideainfo = rd.ideainfo
        // 合作伙伴
        this.partnerlist = rd.partnerlist
        this.partnerinfo = rd.partnerinfo
        // 联系我们
        this.uscontent = rd.uscontent
        this.usinfo = rd.usinfo
      }
    },
  },
  beforeMount() {
    this.getHomeList();
  },
};
</script>
<style scoped>
</style>