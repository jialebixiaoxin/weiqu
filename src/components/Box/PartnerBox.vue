<template>
    <div class="partnerbox">
        <img :src="img" alt="">
    </div>
</template>
<script>
export default {
    name:'PartnerBox',
    data(){
        return{}
    },
    props:['img']
}
</script>
<style scoped>
.partnerbox{
    width: 340px;
    height: 114px;
    margin: 21.5px 30px;
    overflow: hidden;
    /* transform: skewX(-10deg); */
    animation-name: leaves;
    animation-duration: 0.5s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
}
.partnerbox img{
    width: 340px;
    height: 114px;
}
.partnerbox:hover{
    animation-name: hovers;
    animation-duration: 0.5s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
}
@keyframes hovers {
  from {
    margin-top: 0px;
  }
  to {
    margin-top: -10px;
  }
}
@keyframes leaves {
  from {
    margin-top: -10px;
  }
  to {
    margin-top: 0px;
  }
}
</style>