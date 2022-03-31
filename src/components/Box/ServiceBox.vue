<template>
<div>
    <div class="style1-servicebox box" @click="jump(id)" v-if="Isstyle==1">
        <div class="style1-left">
            <p class="style1-title">{{title}}</p>
            <p class="style1-subtitle">{{subtitle.toLocaleUpperCase()}}</p>
        </div>
        <div class="style1-center">
            <p class="style1-content">{{content}}</p>
        </div>
        <div class="style1-right">
            <img :src="img" :alt="subtitle">
        </div>
    </div>
    <div class="style2-servicebox box"  @click="jump(id)" v-else>
        <div class="style2-left">
            <img :src="img" :alt="subtitle">
        </div>
        <div class="style2-center">
            <p class="style2-content">{{content}}</p>
        </div>
        <div class="style2-right">
            <p class="style2-title">{{title}}</p>
            <p class="style2-subtitle">{{subtitle.toLocaleUpperCase()}}</p>
        </div>
    </div>
</div>
</template>
<script>
export default {
    name:'ServiceBox',
    data(){
        return{
        }
    },
    props:['title','subtitle','content','img','Isstyle','id'],
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
.style1-servicebox{
    width:1201.5px;
    height:149px;
    overflow: hidden;
    display: flex;
    margin-left: 10%;
    border-left: 4px solid rgb(6, 110, 233);
    margin-bottom: 56px;
}
.style1-left{
    width: 249px;
    height: 149px;
    transform: skewX(-10deg);
    background-color: #293138;
    margin-left: -14px;
    text-align: center;
}
.style1-left p{
    transform: skewX(10deg);
}
.style1-title{
    font-size: 24px;
    color: #FFF;
    margin-top: 47px;
}
.style1-subtitle{
    margin-top: 8px;
    font-size: 16px;
    color: #FFF;
}
.style1-center{
    width: 520px;
    height: 149px;
    background-color: #171F27;
    transform: skewX(-10deg);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 37px;
    margin-left: -1px;
}
.style1-content{
    font-size: 16px;
    color: #fff;
    line-height:22px;
    transform: skewX(10deg);
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
}
.style1-right{
    margin-left: 40px;
    margin-right: -14px;
    width: 430px;
    height: 149px;
    transform: skewX(-10deg);
}
.style1-right img{
    width: 100%;
    height: 100%;
}
/* 样式二 */

.style2-servicebox{
    width:1201.5px;
    height:149px;
    overflow: hidden;
    display: flex;
    margin-left: 10%;
    border-right: 4px solid #fff;
}
.style2-left{
    margin-right: 40px;
    margin-left: -14px;
    width: 430px;
    height: 149px;
    transform: skewX(10deg);
}
.style2-left img{
    width: 100%;
    height: 100%;
}
.style2-center{
    width: 520px;
    height: 149px;
    background-color: rgba(6, 110, 233,0.16);
    transform: skewX(10deg);
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0px 37px;
    margin-left: -1px;
}
.style2-content{
    font-size: 16px;
    color: #fff;
    line-height:22px;
    transform: skewX(-10deg);
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
}
.style2-right{
    width: 249px;
    height: 149px;
    transform: skewX(10deg);
    background-color: rgb(6, 110, 233);
    margin-right: -14px;
    text-align: center;
}
.style2-right p{
    transform: skewX(-10deg);
}
.style2-title{
    font-size: 24px;
    color: #FFF;
    margin-top: 47px;
}
.style2-subtitle{
    margin-top: 8px;
    font-size: 16px;
    color: #FFF;
}
.box{
    cursor: pointer;
}
</style>