import Vue from 'vue'
import VueRouter from 'vue-router'
import VClock from './views/VClock.vue'
import VHome from './views/VHome.vue'
import VWeather from './views/VWeather.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: VHome
  },
  {
    path: '/horloge',
    name: 'Horloge',
    component: VClock
  },
  {
    path: '/meteo',
    name: 'Météo',
    component: VWeather
  }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
