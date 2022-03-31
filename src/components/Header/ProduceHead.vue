<template>
  <div class="header">
    <div
      class="content"
      :class="type == '' ? 'active' : ''"
      @click="jumps('')"
      >全部</div
    >
    <div class="content" @click="jumps('vr')" :class="type == 'vr' ? 'active' : ''">VR/AR</div>
    <div class="content" @click="jumps('xu')" :class="type == 'xu' ? 'active' : ''">虚拟仿真</div>
    <div class="content" @click="jumps('num')" :class="type == 'num' ? 'active' : ''">数字孪生</div>
    <div class="content" @click="jumps('duo')" :class="type == 'duo' ? 'active' : ''">多媒体交互</div>
    <div class="content" @click="jumps('dong')" :class="type == 'dong' ? 'active' : ''">工业动画</div>
  </div>
</template>
<script>
export default {
  name: "ProduceHead",
  data() {
    return {
      type:'',
    };
  },
  methods:{
    jumps(type){
      this.type=type
      this.getType(type)
      if(type!=''){
        this.$router.push({
            name: 'produce',
            query:{
                type:type,
            }
        });
      }else{
        this.$router.push({
            name: 'produce',
        });
      }
    }
  },
  mounted(){
    this.type = this.$route.query.type?this.$route.query.type:''
    this.$bus.$on('jump',(data)=>{
      this.type= data
      this.getType(data)
		})
  },
  props:['getType']
};
</script>
<style scoped>
.header {
  width: 100%;
  height: 100%;
  color: rgba(255, 255, 255, 0.56);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 0px;
  font-size: 14px;
}
.content {
  margin: 0px 10px;
  width: 123px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  background-color: rgb(19, 30, 40);
    cursor: pointer;
}
.active {
  background-color: #455666;
  color: #fff;
}
</style>