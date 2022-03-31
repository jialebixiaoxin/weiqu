<template>
    <div>
        <InfoHead :img="info.back_image" :title="info.title" :subtitle="info.subtitle"></InfoHead>
        <div class="box" v-if="list !=''">
            <InfoService v-for="(item , index) in list" :key="item.id" :id="item.id" :index="index+1" :img="item.info_image" :title="item.title"></InfoService>
        </div>
    </div>
</template>
<script>
import InfoHead from "@/components/Info/InfoHead.vue";
import InfoService from "@/components/Info/InfoService.vue";
export default {
    name:'Service',
    data(){
        return{
            list:[],
            info:[],
        }
    },
    components:{InfoHead,InfoService},
    methods:{
        async getService() {
            let result = await this.$API.reqGetService();
            //如果成功：组件当中存储支付信息
            if (result.code == 1) {
                let rd = result.data;
                this.list = rd.list;
                this.info = rd.info;
            }
        },
    },
    mounted(){
        this.getService();
    }
}
</script>
<style scoped>
.box{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
}
</style>