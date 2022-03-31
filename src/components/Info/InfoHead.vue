<template>
    <div class="header">
        <img :src="img" alt="">
        <div class="content">
            <p class="title">{{title}}</p>
            <p class="doc">·</p>
            <p class="subtitle">{{subtitle}}</p>
        </div>
    </div>
</template>
<script>
export default {
    name:'InfoHead',
    data(){
        return{
        }
    },
    props:['img','title','subtitle',]
}
</script>
<style scoped>
.header{
    width: 100%;
    height: 360px;
    overflow: hidden;
}
.header img{
    width: 100%;
    height: 100%;
    animation-name: example;
    animation-duration: 8s;
    animation-iteration-count: 1;
}
@keyframes example {
  0%   {
      transform: scale(1.2);
  }
  100% {
      transform: scale(1);
  }
}
.content{
    position: absolute;
    text-align: center;
    top: 183px;
    width: 100%;
}
.title{
    color: #FFF;
    font-size: 32px;
}
.doc{
    color: rgb(6, 110, 233);
    font-size: 50px;
}
.subtitle{
    color: rgba(255, 255, 255,0.56);
}
</style>