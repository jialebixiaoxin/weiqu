<template>
    <div class="info">
        <div>
            <div class="b-img"><img :src="img" alt=""></div>
            <div class="htitle">
                <p class="left"></p>
                <div class="right">
                    <p class="title">{{title}}</p>
                    <p class="subtitle">{{subtitle}}</p>
                </div>
            </div>
        </div>
        <div class="center" v-html="content"></div>
    </div>
</template>
<script>
export default {
    name:'Service',
    data(){
        return{
        }
    },
    props:['img','title','subtitle','content']
}
</script>
<style scoped>
.info{
    min-height: 100vh;
}
.b-img{
    width: 100%;
    height: 350px;
    overflow: hidden;
}
.b-img img{
    width: 100%;
    margin-top: -3%;
    /* height: 100%; */
    opacity: 0.6;
    filter:blur(20px);
}
.htitle{
    display: flex;
    position: absolute;
    top: 257px;
    margin-left: 18.8%;
}
.left{
    width: 6px;
    height: 58px;
    background-color: rgb(6, 110, 233);
}
.right{
    color: rgb(255, 255, 255);
    margin-left: 16px;
}
.title{
    font-size: 32px;
}
.subtitle{
    font-size: 20px;
    margin-top: 8px;
}
.center{
    color: rgb(255, 255, 255);
    width: 62.4%;
    margin-left: 18.8%;
    margin-top: 48px;
}
</style>