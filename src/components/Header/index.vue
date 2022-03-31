<template>
  <div id="header">
    <div class="content">
      <router-link to="/home"><img id="logo" src="../images/logo.png" alt="logo图片" /></router-link>
      <ul class="top">
        <li class="topli">
            <router-link class="one" active-class="active" to="/home">
                首页
            </router-link>
        </li>
        <li class="topli">
          <router-link class="one" active-class="active" to="/produce">产品与案例</router-link>
          <ul class="topChild">
            <router-link active-class="active" to="/produce?type=vr"><li class="two" @click="jump('vr')"><a href="javascript:void(0)" >VR/AR</a></li></router-link>
            <router-link active-class="active" to="/produce?type=xu"><li class="two" @click="jump('xu')"><a href="javascript:void(0)">虚拟仿真</a></li></router-link>
            <router-link active-class="active" to="/produce?type=num"><li class="two" @click="jump('num')"><a href="javascript:void(0)">数字孪生</a></li></router-link>
            <router-link active-class="active" to="/produce?type=duo"><li class="two" @click="jump('duo')"><a href="javascript:void(0)">多媒体交互</a></li></router-link>
            <router-link active-class="active" to="/produce?type=dong"><li class="two" @click="jump('dong')"><a href="javascript:void(0)">工业动画</a></li></router-link>
          </ul>
        </li>
        <li class="topli">
          <router-link to="/service" active-class="active" class="one">服务</router-link>

          <!-- <ul class="topChild">
            <li class="two"><a>产业新闻</a></li>
            <li class="two"><a>公司新闻</a></li>
          </ul> -->
        </li>
        <li class="topli">
          <router-link to="/idea"  active-class="active" class="one">公司理念</router-link>
        </li>
        <li class="topli">
          <router-link to="/about" active-class="active" class="one">关于维趣</router-link>
        </li>
      </ul>
      <img class="phone" src="../images/phone.png" alt="联系方式">
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
        activeIndex2: '1'
    };
  },
  methods:{
    jump(type){
      this.$bus.$emit('jump',type)
    }
  }
};
</script>
<style scoped>

#header {
  width: 100%;
  position: fixed;
  background: rgb(30, 41, 51);
  z-index: 99;
  height:64px;
}
.content {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
#logo {
  width: 291px;
  height: 64px;
}
.top {
  display: flex;
  height: 100%;
}
.topli{
  height: 64px;
  line-height: 64px;
  margin:0px 1px;
}
.one{
    font-size: 14px;
    padding: 23px 64px 22px ;
}
.topli:hover .one {
  background: #455666;
  color:#fff;
  height: 100%;
  box-shadow: 0px -4px 1px rgba(0,0,0,0.16) inset;
}
.topChild {
  transition: all 0.5s;
  transform: rotateX(-90deg);
  transform-origin: left top;
  opacity: 0;
  background: rgba(0, 0, 0, 0.4);
  font-size: 14px;
  box-shadow: 0px 20px 30px rgb(0 0 0 / 30%);
}
.two{
  width: 180px;
  cursor: pointer;
  height: 48px;
  background: rgb(19, 30, 40);
  line-height: 48px;
  padding-left: 20px;
}
.top li:hover .topChild {
  transform: rotateX(0deg);
  opacity: 1;
}
.two:hover {
  background: #455666;
}
.topChild li:hover a {
  color: #fff;
}
.active {
  background-color: #455666;
  color: #fff;
  box-shadow: 0px -4px 1px rgba(0,0,0,0.16) inset;
}
.phone{
    width: 226px;
    height: 64px;
}
</style>