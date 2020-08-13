import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home/Home'
import Homecon1 from '../components/home/home2/Homecon1'
import Homecon2 from '../components/home/home2/Homecon2'
import Homecon3 from '../components/home/home2/Homecon3'
import Search from '../components/search/Search'
import Login from '../components/login/Login'
import Detail from '../components/detail/Detail'
import User from '../components/user/User'
import Usercon1 from '../components/user/user2/Usercon1'
import Usercon2 from '../components/user/user3/Usercon2'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      
      component: Home,
      children:[
     { path:'/',component:Homecon1},
     { path:'home2',component:Homecon2},
     { path:'home3',component:Homecon3}
      ]
    },
    {
    	path: '/search',
      
      component: Search,
     
    },
    {
    	path: '/detail',
      
      component: Detail,
     
    },
     {
    	path: '/login',
      
      component: Login,
     
    },
    {
      path: '/user',
      
      component: User,
      children:[
     { path:'/',component:Usercon1},
     { path:'usercon2',component:Usercon2}
     
      ]
    }
  ]
})
