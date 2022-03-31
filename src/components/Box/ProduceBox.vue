<template>
  <!-- 产品与案例盒子 -->
  <div id="producebox" @click="jump(id)">
    <div class="background-img">
      <img :src="img" alt="" />
    </div>
    <div class="end">
      <div class="left-h"></div>
      <div class="text">
        <p class="title">{{ title }}</p>
        <p class="content" v-if="content">{{ content }}</p>
      </div>
    </div>
    <div class="mask">
      <div class="m-con">
        <p>查看项目</p>
        <p class="colum"></p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ProduceBox",
  data() {
    return {};
  },
  props: ["img", "title", "content","id"],
  methods: {
    jump(ids) {
      this.$router.push({
        name: "details",
        query: {
          type: "produce",
          id: ids,
        },
      });
    },
  },
};
</script>
<style scoped>
#producebox {
  width: 403px;
  height: 297px;
  margin-left: 30px;
    cursor: pointer;
}
.background-img {
  width: 333px;
  height: 200px;
  transform: skewX(-10deg);
  overflow: hidden;
}
.background-img img {
  width: 367px;
  height: 200px;
  margin-left: -16px;
  transform: skewX(10deg);
}
#producebox:hover .mask{
    animation-name: hovers;
    animation-duration: 0.5s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
}
.mask{
  opacity: 0;
  position: absolute;
  margin-left: -1px;
  top: 0px;
  z-index: 7;
  text-align: center;
  width: 335px;
  height: 200px;
  overflow: hidden;
  transform: skewX(-10deg);
}
@keyframes hovers {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes leaves {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.m-con{
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgba(0, 0, 0,0.8);
  color: #fff;
}
.mask p{
  transform: skewX(10deg);
}
.colum{
  width: 88px;
  height: 1px;
  background-color: #fff;
  margin-top: 18px;
}
.end {
  display: flex;
  margin-top: 24px;
}
.left-h {
  width: 10px;
  height: 47px;
  background-color: rgb(6, 110, 233);
  transform: skewX(-10deg);
  margin-left: -20px;
}
.text {
  padding: 0px 18px;
  width: 90%;
}
.title {
  font-size: 16px;
  width: 95%;
  color: #fff;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.content {
  margin-top: 10px;
  width: 90%;
  font-size: 14px;
  /* color: #fff; */
  color: rgba(255, 255, 255, 0.64);
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>