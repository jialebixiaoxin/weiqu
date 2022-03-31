<template>
    <div class="aboutinfo">
        <HeadInfo :title="info.title" :subtitle="info.subtitle"></HeadInfo>
        <div class="contents">
            <p class="l"></p>
            <p class="title">{{content.title}}</p>
            <p class="content">{{content.introduce}}</p>
        </div>
        <!-- <div class="bkimgs" v-if="info.home_back_image"><img :src="info.home_back_image" alt=""></div> -->
        <More type="about"></More>
        <Bkimgs v-if="info.home_back_image" :img="info.home_back_image"></Bkimgs>
    </div>
</template>
<script>
import HeadInfo from '@/components/Box/HeadInfo.vue'
import Bkimgs from '@/components/Box/Bkimgs'
import More from "@/components/More";
export default {
    name:'AboutInfo',
    data(){
        return{
        }
    },
    components:{HeadInfo,Bkimgs,More},
    props:['info','content']
}
</script>
<style scoped>
/* .aboutinfo{
} */
.contents{
    width: 34.8%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-left:32.6%;
}
.l{
    width: 1.5px;
    height: 100px;
    background-color: #fff;
}
.title{
    margin-top: 42px;
    color: #fff;
    font-size: 24px;
}
.content{
    margin-top: 32px;
    color: rgb(255, 255, 255,0.72);
    font-size: 16px;
    line-height: 20px;
}
</style>