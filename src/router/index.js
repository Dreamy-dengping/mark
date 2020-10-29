import { createRouter, createWebHistory } from 'vue-router'
const  Home=()=> import('@/views/home/Home') ;
const  Category=()=> import('@/views/category/Category') ;
const  Profile=()=> import('@/views/profile/Profile') ;
const  Shop=()=> import('@/views/shop/Shop') ;
const Detail=()=>import('@/views/detail/Detail')

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/shop',
    component: Shop
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path:'/detail',
    component:Detail,
  }



]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
