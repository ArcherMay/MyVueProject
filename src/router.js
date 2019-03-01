import VueRouter from 'vue-router'

import HomeContainer from './components/tabber/HomeContainer.vue'
import MemberContainer from './components/tabber/MemberContainer.vue'
import SearchContainer from './components/tabber/SearchContainer.vue'
import ShopcarContainer from './components/tabber/ShopcarContainer.vue'
import NewList from './components/news/NewList.vue'
import NewInfo from './components/news/NewInfo.vue'
import PhotoList from './components/photos/PhotoList.vue'
// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    {path:'/',redirect:'/home'},
    {path:'/home',component:HomeContainer},
    {path:'/member',component:MemberContainer},
    {path:'/search',component:SearchContainer},
    {path:'/shopcar',component:ShopcarContainer},
    {path:'/home/newList',component:NewList},
    {path:'/home/newInfo',component:NewInfo},
    {path:'/home/photolist',component:PhotoList}
  ],
  linkActiveClass:'mui-active'
})

// 把路由对象暴露出去
export default router