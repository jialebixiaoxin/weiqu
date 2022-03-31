<template>
    <div>
        <HeadInfo :title="info.title" :subtitle="info.subtitle"></HeadInfo>
        <div class="content">
            <UsBox :content="content"></UsBox>
        </div>
        <Bkimgs v-if="info.home_back_image" :img="info.home_back_image"></Bkimgs>
    </div>
</template>
<script>
import HeadInfo from '@/components/Box/HeadInfo.vue'
import UsBox from '@/components/Box/UsBox.vue'
import Bkimgs from '@/components/Box/Bkimgs'
export default {
    name:'UsInfo',
    data(){
        return{
        }
    },
    components:{
        HeadInfo,UsBox,Bkimgs
    },
    props:['info','content']
}
</script>
<style scoped>

.bkimgs{
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0px;
    z-index: -1;
}
.bkimgs img{
    width: 100%;
    height: 100%;
}
.content{
    margin-top: 80px;
}
</style>