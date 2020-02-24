import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
import toast from "./components/common/toast"
// import Popup from "./components/common/popup" //local
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';



Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()
Vue.use(toast,ViewUI)

new Vue({
  router,
  store,
  render: h => h(App),

}).$mount('#app')
