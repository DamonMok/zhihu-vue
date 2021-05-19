import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const Login = () => import('views/login/Login')
const Home = () => import('views/home/Home')

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// 导航首页：判断是否已经登录
router.beforeEach((to, from, next) => {
  if (to.path === '/login') return next()

  const token = window.sessionStorage.getItem('token')
  if (!token) return next('/login')

  next()
})

export default router
