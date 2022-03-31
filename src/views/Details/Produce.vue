<template>
  <div class="info">
    <div class="b-img"><img :src="img" :alt="title" /></div>
    <div class="htitle">
      <div class="left">
        <div style="display: flex">
          <p class="line"></p>
          <p class="title">{{ title }}</p>
        </div>
        <p class="author">作者：{{ author }}</p>
        <p class="introduction">简介：{{ introduction }}</p>
        <p class="labels"  v-if="label">
          <span class="label" v-for="(item , index) in label" :key="index" v-html="item">{{item}}</span>
        </p>
      </div>
      <div class="right">
          <img :src="img" :alt="introduction">
      </div>
    </div>
    <div class="center" v-html="content"></div>
  </div>
</template>
<script>
export default {
  name: "Produce",
  data() {
    return {
    };
  },
  props:['img','title','introduction','content','author','label']
};
</script>
<style scoped>
.info {
  min-height: 100vh;
}
.b-img {
  width: 100%;
  height: 350px;
  overflow: hidden;
}
.b-img img {
  width: 100%;
  margin-top: -5%;
  opacity: 0.6;
  filter:blur(15px);
}
.htitle {
  display: flex;
  position: absolute;
  top: 128px;
  margin-left: 18.8%;
  width: 62.4%;
  justify-content: space-between;
}
.left {
  display: flex;
  flex-direction: column;
  width: 70%;
}
.line {
  width: 8px;
  height: 31px;
  margin-top: 4px;
  background-color: rgb(6, 110, 233);
}
.title {
  font-size: 32px;
  margin-left: 16px;
  line-height: 36px;
  color: rgb(255, 255, 255);
}
.author {
  color: rgba(255, 255, 255, 0.64);
  margin-top: 60px;
  font-size: 16px;
}
.introduction {
  color: rgba(255, 255, 255, 0.64);
  margin-top: 16px;
  font-size: 16px;
  height: 32px;
}
.labels {
  margin-top: 22px;
  color: rgba(255, 255, 255, 0.64);
}
.label {
  padding: 8px 16px;
  background-color: rgb(255, 255, 255, 0.08);
  margin-top: 16px;
  margin-right: 12px;
  font-size: 14px;
}
.right {
    width: 316px;
    height: 198px;
}
.right img{
    width: 100%;
    height: 100%;
}
.center {
  color: rgb(255, 255, 255);
  width: 62.4%;
  margin-left: 18.8%;
  margin-top: 48px;
}
</style>