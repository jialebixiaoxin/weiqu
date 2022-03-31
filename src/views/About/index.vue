<template>
    <div>
        <InfoHead :img="info.back_image" :title="info.title" :subtitle="info.subtitle"></InfoHead>
        <div class="box">
            <p class="name">{{content.name}}</p>
            <p class="auther" v-for="(item , index) in content.supplement" :key="index">{{index}} <span class="maohao">:</span> {{item}}</p>
            <p class="introduce">{{content.introduce}}</p>
            <div class="contens" v-html="content.content"></div>
        </div>
    </div>
</template>
<script>
import InfoHead from "@/components/Info/InfoHead.vue";
export default {
    name:'About',
    data(){
        return{
            content:[],
            info:[],
        }
    },
    components:{InfoHead},
    methods:{
        async getAbout() {
            let result = await this.$API.reqGetAbout();
            //如果成功：组件当中存储支付信息
            if (result.code == 1) {
                let rd = result.data;
                this.content = rd.content;
                this.info = rd.info;
            }
        },
    },
    mounted(){
        this.getAbout();
    }
}
</script>
<style scoped>
.box{
    width: 70%;
    margin-left: 15%;
    margin-top: 50px;
    margin-bottom: 50px;
    height: 100%;
    color: red;
}
.name{
    color: rgb(255, 255, 255);
    font-size: 24px;
}
.auther{
    margin-top: 16px;
    color: rgb(118, 118, 118);
}
.maohao{
    padding: 0px 6px 0px 2px;
}
.introduce{
    width: 100%;
    margin-top: 48px;
    font-size: 16px;
    color: rgb(255, 255, 255);
    line-height: 32px;
}
.contens{
    margin-top: 48px;
    color: #FFF;
}
</style>