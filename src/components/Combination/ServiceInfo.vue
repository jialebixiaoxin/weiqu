<template>
  <div class="serviceinfo">
    <HeadInfo :title="info.title" :subtitle="info.subtitle"></HeadInfo>
    <!-- <ServiceBox></ServiceBox> -->

    <VueSlickCarousel
      class="content"
      ref="carousel"
      v-bind="settings"
      v-if="list.length > 0"
    >
      <ServiceBox
        v-for="(item , index) in list"
        :key="item.id"
        :id="item.id"
        :img="item.thumb_image"
        :title="item.title"
        :subtitle="item.subtitle"
        :content="item.introduction"
        :Isstyle="index%2==0?'1':'0'"
      ></ServiceBox>
    </VueSlickCarousel>
    <More type="service"></More>
    <Bkimgs v-if="info.home_back_image" :img="info.home_back_image"></Bkimgs>
  </div>
</template>
<script>
import ServiceBox from "@/components/Box/ServiceBox.vue";
import HeadInfo from "@/components/Box/HeadInfo.vue";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
import Bkimgs from '@/components/Box/Bkimgs'
import More from "@/components/More";
export default {
  name: "ServiceInfo",
  data() {
    return {
      settings: {
        dots: true,
        focusOnSelect: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        touchThreshold: 1,
        initialSlide: 0,
        rows: 2,
        touchMove: false,
      },
    };
  },
  components: { ServiceBox, HeadInfo, VueSlickCarousel ,Bkimgs , More},
  props:['list','info'],
};
</script>
<style scoped>
.content {
  width: 80%;
  margin-left: 8%;
}
</style>