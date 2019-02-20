// 入口文件
import Vue from 'vue'

import { Header } from 'mint-ui';

//导入vue router
import VueRouter from 'vue-router'
//安装路由
Vue.use(VueRouter)
// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
// 导入扩展图标样式
import './lib/mui/css/icons-extra.css'

import VueResource from 'vue-resource'
Vue.use(VueResource)
import app from './App.vue'
Vue.component(Header.name, Header);

//导入router.js
import router from './router.js'
var vm = new Vue({
    el:'#app',
    render: c => c(app),
    router
})