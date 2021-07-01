// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "babel-polyfill" // es6支持
import Vue from 'vue'
import App from './App'
import router from './router'
// import Vuex from 'vuex'
// Vue.use(Vuex)
import store from './store'
import ElementUI from 'element-ui'; //引入elemenui
Vue.use(ElementUI)
import '../static/element-ui/index.css'; // 引入elementui样式
// import 'element-ui/lib/theme-chalk/index.css';
import api from './data/api.js' // 引入axios,注意无法再其他组件中使用
Vue.prototype.$api = api;

import {baseURL} from './config';
Vue.prototype.baseURL = baseURL;

Vue.config.productionTip = false

//全局自动注入data/api下所有接口方法 固定写法 采用 vue 自带的 require.context的方法，读取的js文件
const dataFiles = require.context('./data/api', true, /\.js$/)
const data = dataFiles.keys().reduce((data, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = dataFiles(modulePath)
  data[moduleName] = value.default
  return data
}, {})
Vue.prototype.$apiData = data;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
