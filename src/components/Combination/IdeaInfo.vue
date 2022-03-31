<template>
    <div class="ideainfo">
        <HeadInfo :title="info.title" :subtitle="info.subtitle"></HeadInfo>
        <div class="content">
            <IdeaBox v-for="(item,index) in list" :key="index" :img="item"></IdeaBox>
        </div>
        <Bkimgs v-if="info.home_back_image" :img="info.home_back_image"></Bkimgs>
    </div>
</template>
<script>
import HeadInfo from '@/components/Box/HeadInfo.vue'
import IdeaBox from '@/components/Box/IdeaBox.vue'
import Bkimgs from '@/components/Box/Bkimgs'
export default {
    name:'IdeaInfo',
    data(){
        return{
        }
    },
    components:{HeadInfo ,IdeaBox,Bkimgs},
    props:['list','info']
}
</script>
<style scoped>
.content{
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>