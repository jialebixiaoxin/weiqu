<template>
  <div id="produceinfo">
    <HeadInfo :title="info.title" :subtitle="info.subtitle"></HeadInfo>
    <VueSlickCarousel
      class="content"
      ref="carousel"
      v-bind="settings"
      v-if="list.length>0"
    >
      <ProduceBox v-for="item in list" :key="item.id" :img="item.thumb_image" :title="item.title" :content="item.introduction" :id="item.id"></ProduceBox>
    </VueSlickCarousel>
    <More type="produce"></More>
    <Bkimgs v-if="info.home_back_image" :img="info.home_back_image"></Bkimgs>
  </div>
</template>
<script>
import ProduceBox from "@/components/Box/ProduceBox.vue";
import HeadInfo from "@/components/Box/HeadInfo.vue";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import Bkimgs from '@/components/Box/Bkimgs'
import More from "@/components/More";
export default {
  name: "ProduceInfo",
  data() {
    return {
      settings: {
        dots: true,
        focusOnSelect: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        touchThreshold: 5,
        initialSlide:0,
        rows:1,
        touchMove:false,
      },
    };
  },
  props:['list','info'],
  components: { ProduceBox, HeadInfo, VueSlickCarousel ,Bkimgs,More},
  // methods: {
  //   async getHomePList() {
  //     let params = {
  //       type: 'home',
  //     };
  //     let result = await this.$API.reqProduceList(params);
  //     //如果成功：组件当中存储支付信息
  //     if (result.code == 1) {
  //       this.homePList = result.data.homeproducelist;
  //     }
  //   },
  // },
  // mounted(){
  //     this.getHomePList();
  // }
};
</script>
<style scoped>
.content {
  width: 80%;
  margin-left: 9%;
  height: 310px;
  margin-top: 20px;
}
</style>