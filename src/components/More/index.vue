<template>
    <div class="box">
        <div class="content" @click="jump(type)">
            MORE
        </div>
    </div>
</template>
<script>
export default {
    name:'More',
    data(){
        return{
        }
    },
    methods:{
        jump(type){
            this.$router.push({
                name: type,
            });
        }
    },
    props:['type']
}
</script>
<style scoped>
.box{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.content{
    margin-top: 100px;
    width: 245px;
    height: 47px;
    overflow: hidden;
    transform: skewX(-10deg);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    color: #FFF;
    border: 1px solid rgb(255, 255, 255);
    animation-name: leave;
    animation-duration: 0.2s;
    animation-iteration-count: 1;
    cursor: pointer;
}
.content:hover{
    animation-name: hovers;
    animation-duration: 0.5s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
}
@keyframes hovers {
  from {
    opacity: 1;
    margin-top: 100px;
  }
  to {
    opacity: 1;
    margin-top: 94px;
    box-shadow: 4px 4px 4px #888888;;
  }
}
@keyframes leave {
  from {
    opacity: 1;
    margin-top: 96px;
    box-shadow: 4px 4px 4px #888888;;
  }
  to {
    opacity: 1;
    margin-top: 100px;
  }
}
</style>