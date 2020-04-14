import Vue from 'vue'
import VueRouter from 'vue-router'
import Tasklist from '@/views/Tasklist.vue'
import TaskShow from '@/views/TaskShow.vue'
import TaskCreate from '@/views/TaskCreate.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Tasklist
  },
  {
    path: '/tasks',
    name: 'tasks',
    component: Tasklist
  },
  {
    path: '/tasks/:id',
    name: 'task-show',
    component: TaskShow,
    props: true
  },
  {
    path: '/tasks/create',
    name: 'task-create',
    component: TaskCreate
  }
]

const router = new VueRouter({
  routes
})

export default router
