import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

//引入路由
import router from "@/router"

// 默认样式
import '@/assets/style/resrt.css'

// 引入 elementui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

// 引入仓库(Vuex)
import store from '@/store'

//统一引入
import * as API from '@/api';
new Vue({
  render: h => h(App),
  router,
  store,
  //全局事件总线$bus配置
  beforeCreate() {
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
  },
}).$mount('#app')
