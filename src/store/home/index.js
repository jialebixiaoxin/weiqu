import {reqBannerList} from "@/api";
import {reqProduceList} from "@/api";

// home 模块的小仓库
const state = {
    // state 中数据默认初始值别瞎写，服务器返回的对象->起始值就是对象，服务器返回的数组->起始值就是数组
    // bannerlist:[],
};
const mutations = {
    // GETBANNERLIST(state,data){
    //     state.bannerlist = data
    // },
};
const actions = {
    // 通过 API 里面的接口函数调用，向服务器发请求，获取服务器的数据
    // 获取轮播图
    // async getbannerlist(context){
    //     let result = await reqBannerList();
    //     if(result.code == 1){
    //         context.commit("GETBANNERLIST",result.data.list)
    //     }
    // },
};
const getters = {};
export default {
    state,
    mutations,
    actions,
    getters,
}