<template>
    <div class="box" @click="jump(id)">
        <div class="aa">
            <div class="header"><img :src="img" :alt="title"></div>
            <div class="content">
                <span class="left"><span>{{index}}</span></span>
                <span class="right">{{title}}</span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'InfoService',
    data(){
        return{
        }
    },
    props:['index','img','title','id'],
    methods:{
        jump(ids){
            this.$router.push({
                name:'details',
                query:{
                    type:'service',
                    id:ids,
                }
            })
        }
    }
}
</script>
<style scoped>
.box{
    width: 354px;
    height: 508px;
    margin:20px 9px;
    overflow: hidden;
    cursor: pointer;
}
.aa:hover .left{
    background-color: rgb(6, 110, 233);
}
.aa:hover .right{
    background-color: rgba(6, 110, 233,0.32);
}
.header{
    width: 354px;
    height: 444px;
    margin: 0px;
    padding: 0px;
}
.header img{
    width: 100%;
    height: 100%;
}
.content{
    display: flex;
    width: 354px;
    height: 48px;
    margin-top: 16px;
}
.left{
    flex: 3;
    background-color: rgb(41, 49, 56);
    margin-left: -5px;
    transform: skewX(-10deg);
    color: rgba(255, 255, 255,.64);
    display: flex;
    justify-content: center;
    align-items: center;
}
.left span{
    transform: skewX(10deg);
}
.right{
    flex: 10;
    background-color: rgb(23, 31, 39);
    color: rgba(255, 255, 255,.64);
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: -10px;
}
</style>