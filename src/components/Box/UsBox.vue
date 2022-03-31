<template>
    <div class="usbox">
        <div class="left">
            <div class="head">
                <div class="comlogo"><img :src="content.logo_image" alt="LOGO"></div>
                <div class="com">
                    <p class="title">{{content.title}}</p>
                    <p class="subtitle">{{content.subtitle}}</p>
                </div>
            </div>
            <p class="text">地点：{{address}}</p>
            <p class="text">电话：{{num}}</p>
            <p class="text">手机：{{phone}}</p>
            <p class="text">邮箱：{{email}}</p>
        </div>
        <div class="right">
            <div class="wxcode"><img :src="content.code_image" alt="二维码"></div>
            <div class="icons">
                <img class="icon" src="../images/wb.png" alt="微博">
                <img class="icon" src="../images/QQ.png" alt="QQ">
                <img class="icon" src="../images/wx.png" alt="微信">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'UsBox',
    data(){
        return{
            title:'维趣数字传媒有限公司',
            subtitle:'Qingdao Virtual Digital Media Co., Ltd.',
            address:'青岛市李沧区金水路铜川路216号思路协创中心 - 10F',
            num:'18678997969',
            phone:'18678997969',
            email:'19113728@qq.com',
        }
    },
    props:['content'],
}
</script>
<style scoped>
.usbox{
    width: 60%;
    display: flex;
    justify-content: space-between;
    margin-left: 20%;
}
.head{
    display: flex;
}
.comlogo{
    width: 100px;
    height: 50px;
    /* background-color: red; */
}
.comlogo img{
    width: 100%;
    height: 100%;
}
.com{
    margin-left: 20px;
    color: #fff;
}
.title{
    font-size: 16px;
}
.subtitle{
    font-size: 8px;
    margin-top: 10px;
}
.address{
    margin-top: 67px;
}
.text{
    font-size: 16px;
    color: #FFF;
    margin-top: 20px;
}
.right{
    text-align: right;
}
.wxcode{
    width: 97px;
    height: 97px;
    background-color: red;
    margin-left: 150px;
}
.wxcode img{
    width: 100%;
    height: 100%;
}
.icons{
    margin-top: 92px;
    width: 242px;
    height: 64px;
    display: flex;
    justify-content: space-between;
}
</style>