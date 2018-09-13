// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
// import App from './App'
// import myapp from './myapp'
import router from './router'
import echarts from 'echarts'
import iView from 'iview'
// import Login from './components/login'
import MainApp from './mainApp.vue'
import IllDetails from './components/illdetails.vue'
// import IllDetails from './components/map/prospecialworldmap.vue'

// 配置ivew
import 'iview/dist/styles/iview.css'
import VueRouter from 'vue-router'
import '../semantic/out/semantic.min.css'
import '../semantic/out/semantic.min.js'

Vue.use(VueRouter)
Vue.use(iView)

// The routing configuration
// const RouterConfig = {
//     routes: Routers
// };
// const router = new VueRouter(RouterConfig);

Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // components: { App },
  // template: '<App/>'
  render: h => h(MainApp)
})
