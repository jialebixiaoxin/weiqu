<template>
    <div>
        <InfoHead :img="info.back_image" :title="info.title" :subtitle="info.subtitle"></InfoHead>
        <div class="content">
            <IdeaBox v-for="(item , index) in list" :key="index" :img="item"></IdeaBox>
        </div>
    </div>
</template>
<script>
import InfoHead from "@/components/Info/InfoHead.vue";
import IdeaBox from "@/components/Box/IdeaBox.vue";
export default {
    name:'Idea',
    data(){
        return{
            list:[],
            info:[],
        }
    },
    components:{InfoHead , IdeaBox},
    methods:{
        async getIdea() {
            let result = await this.$API.reqGetIdea();
            //如果成功：组件当中存储支付信息
            if (result.code == 1) {
                let rd = result.data;
                this.list = rd.list;
                this.info = rd.info;
            }
        },
    },
    mounted(){
        this.getIdea();
    }
}
</script>
<style scoped>
.content{
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
}
</style>