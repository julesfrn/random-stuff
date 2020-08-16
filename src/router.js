import Vue from 'vue'
import VueRouter from 'vue-router'
import VClock from './views/VClock.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: VClock
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
