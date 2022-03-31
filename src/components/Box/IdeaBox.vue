<template>
    <div class="ideabox">
        <img :src="img" alt="">
    </div>
</template>
<script>
export default {
    name:'IdeaBox',
    props:['img']
}
</script>
<style scoped>
.ideabox{
    width: 378px;
    height: 466px;
    padding: 10px 21px;
    animation-name: leaves;
    animation-duration: 0.3s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
}
.ideabox img{
    width: 378px;
    height: 466px;
}

.ideabox:hover{
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
    margin-top: -20px;
  }
}
@keyframes leaves {
  from {
    margin-top: -20px;
  }
  to {
    margin-top: 0px;
  }
}
</style>