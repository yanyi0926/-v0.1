import Vue from 'vue';
import App from './App.vue';
// 引入vuerouter
import VueRouter from 'vue-router';
// 引入路由器
import router from './route'

Vue.config.productionTip = false;
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  beforeCreate() {
		Vue.prototype.$bus = this //安装全局事件总线，$bus就是当前应用的vm;
	},
  router
}).$mount('#app')
