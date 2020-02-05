import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter)

const home = () => import('../views/home/Home');
const category = () => import('../views/category/Category');
const shopCart = () => import('../views/shopCart/ShopCart');
const profile = () => import('../views/profile/Profile');
const detail = () => import('../views/detail/Detail')



// 重写push 解决路由跳转相同地址时，控制台报错问题
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return routerPush.call(this, location).catch(error => error)
}


const routes = [
  {
    path: '',
    redirect: '/home'
  },
  {
    path: '/category',
    component: category
  },
  {
    path: '/shopCart',
    component: shopCart
  },
  {
    path: '/profile',
    component: profile
  },
  {
    path: '/home',
    component: home
  },
  {
    // path: '/detail',
    path: '/detail', //使用此方式进行路由传参，会导致图片等资源无法显示
    component: detail,
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

// 导航卫士


router.beforeEach()
export default router;
