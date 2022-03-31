module.exports ={
    //关闭 eslint
    lintOnSave:false,
    // 代理跨域
    devServer: {
        proxy: {
            '/api':{
                target:'http://jialebixiaoxin.top',//服务器地址
                // pathRewrite: {
                //     '^/api':''
                // }//路径重写
            }
        }
    }
}