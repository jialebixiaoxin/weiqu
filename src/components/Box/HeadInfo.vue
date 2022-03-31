<template>
  <div class="info">
    <p><span  class="title">{{ title }}</span></p>
    <p class="subtitle">{{ subtitle}}</p>
  </div>
</template>
<script>
export default {
  name: "HeadInfo",
  data() {
    return {
    };
  },
  props:['title','subtitle'],
};
</script>
<style scoped>
.info {
  width: 100%;
  height: 100%;
  padding: 168px 0px 105px 0px;
  text-align: center;
}
.title{
    padding: 0px 12px;
    font-size: 24px;
    color: #fff;
    border-bottom: 4px solid rgb(6, 110, 233);
}
.subtitle{
    margin-top: 28px;
    color: rgba(255, 255, 255,0.64);
    font-size: 18;
}
</style>