import Vue from 'vue'
import VueRouter from 'vue-router'
import "../../node_modules/nprogress/nprogress.css"
Vue.use(VueRouter)

const routes = [

  {
    path: '/entertainment',
    name: 'entertainment',
    component: () => import(/* webpackChunkName: "entertainment" */ '@/components/entertainment')
  },
  {
    path: '/history',
    name: 'history',
    component: () => import(/* webpackChunkName: "history" */ '@/components/history')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
