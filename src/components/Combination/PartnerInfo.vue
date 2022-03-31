<template>
    <div>
        <HeadInfo :title="info.title" :subtitle="info.subtitle"></HeadInfo>
        <div class="content">
            <PartnerBox v-for="item in list" :key="item.id" :img="item.thumb_images"></PartnerBox>
        </div>
        <Bkimgs v-if="info.home_back_image" :img="info.home_back_image"></Bkimgs>
    </div>
</template>
<script>
import HeadInfo from '@/components/Box/HeadInfo.vue'
import PartnerBox from '@/components/Box/PartnerBox.vue'
import Bkimgs from '@/components/Box/Bkimgs'
export default {
    name:'PartnerInfo',
    data(){
        return{
            title:'合作伙伴',
            subtitle:'COOPERATIVE PARTNER',
        }
    },
    components:{HeadInfo,PartnerBox,Bkimgs},
    props:['list','info']
}
</script>
<style scoped>
.content{
    padding: 0px 340px;
    display: flex;
    flex-wrap:wrap;
}
</style>