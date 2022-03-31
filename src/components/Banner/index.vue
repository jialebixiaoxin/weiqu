<template>
  <div id="banner">
    <el-carousel trigger="click" height="100vh" @change="ChangeBanner">
      <el-carousel-item v-for="(item, index) in list" :key="index">
        <div class="all">
          <img :src="item.bk_image" class="img" alt="" />
          <span class="introduction" v-if="index == bannerNum">
            <p class="title">{{ item.title }}</p>
            <p class="content">{{ item.content }}</p>
            <p class="click" @click="jump(`${item.belong}`)"><span>查看详细</span></p>
          </span>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
// import { mapState } from "vuex";
export default {
  name: "Banner",
  data() {
    return {
      bannerNum: 0,
    };
  },
  methods: {
    ChangeBanner(newIndex) {
      this.bannerNum = newIndex;
    },
    jump(ids) {
      this.$router.push({
        name: "details",
        query: {
          type: "service",
          id: ids,
        },
      });
    },
  },
  props: ["list"],
  // computed:{
  //   ...mapState({
  //     bannerlist:(state)=>{
  //       return state.home.bannerlist
  //     }
  //   }),
  // }
};
</script>
<style scoped>
/* 修改指示器 start */
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
div /deep/ .el-carousel__indicators {
  left: unset;
  transform: unset;
  right: 50%;
}
div /deep/ .el-carousel__button {
  width: 50px;
  height: 2px;
  border: none;
  border-radius: 10%;
  background-color: #cdcdcd;
}
div /deep/ .is-active .el-carousel__button {
  background: #fff;
}
/* 修改指示器 end */
#banner {
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}
.img {
  width: 100%;
}
.all {
  width: 100%;
}
.introduction {
  font-family: "HELVETICANEUELTPRO-THEX", "微软雅黑";
  position: absolute;
  z-index: 99;
  top: 36vh;
  left: 200px;
  width: 100%;
  height: 20vh;
  margin-left: 110px;
}
.title {
  color: #fff;
  font-size: 32px;
  width: 30%;
  animation: myfirst 1s;
  -webkit-animation: myfirst 1s; /* Safari and Chrome */
}
.content {
  width: 366px;
  margin-top: 20px;
  color: #fff;
  font-size: 14px;
  line-height: 24px;
}
@keyframes myfirst {
  from {
    opacity: 0;
    padding-top: 50px;
  }
  to {
    opacity: 1;
    padding-top: 0px;
  }
}

@-webkit-keyframes myfirst /* Safari 与 Chrome */ {
  from {
    opacity: 0;
    padding-top: 90px;
  }
  to {
    opacity: 1;
    padding-top: 0px;
  }
}
@keyframes mycontent {
  from {
    opacity: 0;
    padding-top: 90px;
  }
  to {
    opacity: 1;
    padding-top: 12px;
  }
}

.click {
  margin-top: 44px;
  margin-left: 10px;
  width: 322px;
  height: 40px;
  color: #fff;
  transform: skewX(-10deg);
  border: 1px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.click span {
  transform: skewX(10deg);
}
.click:hover {
  background-color: #066ee9;
  border: 1px solid #066ee9;
}
</style>