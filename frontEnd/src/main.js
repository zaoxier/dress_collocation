import 'babel-polyfill';
import Vue from 'vue';
import App from './App';
import routes from './router/index.js';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import vueQuillEditor from 'vue-quill-editor';
import 'element-ui/lib/theme-chalk/index.css';
import store from './vuex/store';
import filter from './assets/js/filter';
import 'assets/css/global.css';
import 'assets/css/base.css';
import './.htaccess';
import client from './client';
//  require styles 引入样式
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';

Vue.use(ElementUI)
Vue.use(vueQuillEditor)
Vue.use(VueRouter)

const router = new VueRouter(routes)
window.client = client

new Vue({
  el: '#app',
  template: '<App/>',
  filters: filter,
  router,
  store,
  components: { App }
}).$mount('#app')
