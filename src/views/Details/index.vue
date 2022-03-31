<template>
  <div>
      <!-- :img="info.thumb_image" :title="info." :subtitle="info." :content="info." -->
      <Service v-if="type=='service'"  :img="info.thumb_image" :title="info.title" :subtitle="info.subtitle" :content="info.content"></Service>
      <Produce v-if="type=='produce'" :img="info.thumb_image" :title="info.title" :introduction="info.introduction" :content="info.content" :author="info.author" :label="info.labels"></Produce>
  </div>
</template>
<script>
import Service from '@/views/Details/Service.vue'
import Produce from '@/views/Details/Produce.vue'
export default {
  name: "Details",
  data() {
    return {
        type:'',
        id:0,
        info:[],
    };
  },
  components:{Service,Produce},
  methods: {
    async getInfo() {
      let id = this.id;
      let type = this.type;
      let params = {
        id: id,
        type:type,
      };
      let result = await this.$API.reqGetInfo(params);
      //如果成功：组件当中存储支付信息
      if (result.code == 1) {
          let rd = result.data;
          this.info = rd.info;
      }
    },
  },
  mounted(){
    let type = this.$route.query.type ? this.$route.query.type : "";
    this.type = type;
    let id = this.$route.query.id ? this.$route.query.id :0;
    this.id = id;
    this.getInfo();
    
  }
};
</script>
<style scoped>
</style>