// 当前模块： API进行统一管理
// 引入二次封装
import requests from "./request";

//三级联动的接口
///api/product/getBaseCategoryList  get 无参数

export const reqBannerList = () =>
    // 发请求 axios 发请求返回结果Promise 对象
    requests({
        url: '/index/bannerlist',
        method: 'post'
    });
export const reqProduceList = (params) =>
    // 发请求 axios 发请求返回结果Promise 对象
    requests({
        url: '/index/producelist',
        method: 'post',
        data: params,
    });
// 获取首页列表
export const reqHomeList = () =>
    // 发请求 axios 发请求返回结果Promise 对象
    requests({
        url: '/index/gethomelist',
        method: 'post',
    });
// 获取产品列表
export const reqGetProduceList = (params) =>
    // 发请求 axios 发请求返回结果Promise 对象
    requests({
        url: '/index/getproducelist',
        method: 'post',
        data: params,
    });
// 获取服务列表
export const reqGetService = () =>
    // 发请求 axios 发请求返回结果Promise 对象
    requests({
        url: '/index/getservice',
        method: 'post',
    });
// 获取理念列表
export const reqGetIdea = () =>
    // 发请求 axios 发请求返回结果Promise 对象
    requests({
        url: '/index/getidea',
        method: 'post',
    });
// 获取关于
export const reqGetAbout = () =>
    // 发请求 axios 发请求返回结果Promise 对象
    requests({
        url: '/index/getabout',
        method: 'post',
    });
// 获取详细
export const reqGetInfo = (params) =>
    // 发请求 axios 发请求返回结果Promise 对象
    requests({
        url: '/index/getinfo',
        method: 'post',
        data:params
    });