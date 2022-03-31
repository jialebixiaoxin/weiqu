
<template>
    <div class="box" @click="jump(id)">
        <img :src="img" alt="">
        <div class="content">
            <div class="title"><p class="line"> </p><p>{{title}}</p></div>
            <p class="contents">{{subtitle}}</p>
        </div>
    </div>
</template>
<script>
export default {
     name:'InfoContent',
    data(){
        return{
        }
    },
    props:['title','subtitle','img','id'],
    methods:{
        jump(ids){
            this.$router.push({
                name:'details',
                query:{
                    type:'produce',
                    id:ids,
                }
            })
        }
    }
}
</script>
<style scoped>
.box{
    width: 355px;
    height: 260px;
    margin: 16px 9px;
    cursor: pointer;
}
.box img{
    width: 100%;
    height: 100%;
    vertical-align : bottom;
}
.box:hover .content{
    display: block;
}
.content{
    position: relative;
    width: 355px;
    height: 260px;
    top: -260px;
    background-color: rgba(14, 16, 21,0.9);
    display: none;
}
.line{
    width: 4px;
    height: 16px;
    background-color: rgb(6, 110, 233);
    margin-left: 10px;
    margin-right: 10px;
}
.title{
    display: flex;
    padding-top: 100px;
    color: rgb(255, 255, 255);
}
.contents{
    width: 90%;
    margin-top: 12px;
    padding: 0px 5%;
    color: rgba(255, 255, 255,0.64);
}
</style>