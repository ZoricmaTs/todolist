import Vue from 'vue'
import VueRouter from 'vue-router'
import Tasklist from '@/views/Tasklist.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Tasklist',
    component: Tasklist
  }
]

const router = new VueRouter({
  routes
})

export default router
