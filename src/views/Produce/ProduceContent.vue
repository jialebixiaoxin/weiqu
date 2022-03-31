<template>
    <div class="content">
        <InfoContent v-for="item in list" :key="item.id" :id="item.id" :title="item.title" :subtitle="item.introduction" :img="item.thumb_image"></InfoContent>
    </div>
</template>
<script>
import InfoContent from '@/components/Info/InfoContent.vue'
export default {
    name:'ProduceContent',
    data(){
        return{
        }
    },
    components:{InfoContent},
    props:['list']
}
</script>
<style scoped>
.content{
    width: 98%;
    margin-left: 1%;
    display: flex;
    flex-wrap: wrap;
}
</style>