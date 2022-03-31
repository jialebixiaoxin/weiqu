

//配置路由的地方
import Vue from 'vue'
import VueRouter from 'vue-router'
//使用插件
Vue.use(VueRouter);

//引入路由组件
import Home from '@/views/Home'
import Produce from '@/views/Produce'
import Service from '@/views/Service'
import Idea from '@/views/Idea'
import About from '@/views/About'
import Details from '@/views/Details'

//先把VueRouter原型对象的push保存一份
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace
VueRouter.prototype.push = function(location,resolve,reject){
    // alert('123')
    if(resolve && reject){
        //call||apply区别：
        /* 
        相同点：，都可以调用函数一次，都可以篡改函数的上下文一次
        不同点：call与apply传递参数：call传递参数用都好隔开，apply方法执行，传递数组
        */
        originPush.call(this,location,resolve,reject)//不可以直接originPush(),因为其中的this指的是windos
    }else{
        originPush.call(this,location,()=>{},()=>{})
    }
}
//重写replace
VueRouter.prototype.replace = function(location,resolve,reject){
    if(resolve && reject){
        originReplace.call(this,location,resolve,reject)
    }else{
        originReplace.call(this,location,()=>{},()=>{})
    }
}
//配置路由
export default new VueRouter({
    //配置路由
    routes:[
        {
            name:'home',
            path:"/home",
            component:Home,
        },
        {
            name:'produce',
            path:"/produce",
            component:Produce,
            props:function($route){
                return {type:$route.query.type}
            },
        },
        {
            name:'service',
            path:"/service",
            component:Service,
            props:function($route){
                return {type:$route.query.type}
            },
        },
        {
            name:'idea',
            path:"/idea",
            component:Idea,
        },
        {
            name:'about',
            path:"/about",
            component:About,
        },
        {
            name:'details',
            path:"/details",
            component:Details,
            props:function($route){
                return {type:$route.query.type,id:$route.query.id}
            },
        },
        {
            path:'*',
            redirect:"/home",

        }
    ]
})