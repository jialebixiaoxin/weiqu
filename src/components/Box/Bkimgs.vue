<template>
        <div class="bkimgs"><img :src="img"></div>
</template>
<script>
export default {
    name:'Bkimgs',
    data(){
        return{}
    },
    props:['img'],
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
</style>