//配置路由相关的信息
import Vue from 'vue'
import VueRouter from 'vue-router'


const Home = () => import('../components/home')
const HomeNews = () => import('../components/HomeNews')
const HomeMes = () => import('../components/HomeMes')

const About = () => import('../components/about')
const User = () => import('../components/user')

const Profile = () => import('../components/profile')


//1.通过Vue.use（插件），安装插件
Vue.use(VueRouter)

const routes = [ //默认路由
  {
    //当路径为空时默认跳转到首页
    path: '/',
    redirect: '/home',
    meta: {
      title: '首页'
    },
    
    //懒加载形式
    component: Home,
  },
  {
    path: '/home',
    component: Home,
    meta: {
      title: '首页'
    },
    children: [
     
      {
        path: 'news',
        component: HomeNews
      },
      {
        path: 'mes',
        component: HomeMes
      }

    ]

  },
  {
    path: '/about',
    component: About,
    meta: {
      title: '关于'
    },
  },
  {
    path: '/user/:id',
    component: User,
    meta: {
      title: '用户'
    },
  },
  {
    path: '/profile',
    component: Profile,
    meta: {
      title: '档案'
    },
  }
]
//2.创建VueRouter对象
const router = new VueRouter({
  //配置路由与组件的映射关系
  routes,
  mode: 'history',
  linkActiveClass: 'active'

})
const originalPush = VueRouter.prototype.push
   VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}

//导航守卫
//前置守卫    跳转前调用
router.beforeEach((to, from, next) => {
 
  document.title=to.matched[0].meta.title

  next()

})

// //后置守卫   跳转后调用
// router.afterEach( route => {

//   // console.log(route)
  
// })


//3.将router对象传入到vue实例中
export default router