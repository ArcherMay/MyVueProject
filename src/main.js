// 入口文件
import Vue from 'vue'

import { Header,Swipe,SwipeItem,Button} from 'mint-ui';

Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name,Button);
//导入vue router
import VueRouter from 'vue-router'
//安装路由
Vue.use(VueRouter)
// 导入 MUI 的样式
import './lib/mui/css/mui.min.css'
// 导入扩展图标样式
import './lib/mui/css/icons-extra.css'

//导入格式化的时间插件
import moment from 'moment'

//定义全局的过滤器
Vue.filter('dateFormat',function(dataStr, pattern = "YYYY-MM-DD HH:mm:ss"){
    return moment(dataStr).format(pattern)
})

import VueResource from 'vue-resource'
Vue.use(VueResource)
import app from './App.vue'


//导入router.js
import router from './router.js'
var vm = new Vue({
    el:'#app',
    render: c => c(app),
    router
})