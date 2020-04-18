import Vue from 'vue'
import VueRouter from 'vue-router'
import App from '@/App.vue'
import Tasklist from '@/views/Tasklist.vue'
import TaskShow from '@/views/TaskShow.vue'
import TaskCreate from '@/views/TaskCreate.vue'
import TaskEdit from '@/views/TaskEdit.vue'
import TaskRemove from '@/views/TaskRemove.vue'
import SubTaskEdit from '@/views/SubTaskEdit.vue'
import SubTaskCreate from '@/views/SubTaskCreate.vue'
import SubTaskRemove from '@/views/SubTaskRemove.vue'

Vue.use(VueRouter)

const routes = [
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
  },
  {
    path: '/tasks/edit/:id',
    name: 'task-edit',
    component: TaskEdit,
    props: true
  },
  {
    path: '/tasks/remove/:id',
    name: 'task-remove',
    component: TaskRemove,
    props: true
  },
  {
    path: '/subtasks/:id',
    name: 'subtask-edit',
    component: SubTaskEdit,
    props: true
  },
  {
    path: '/subtasks/create/:task_id',
    name: 'subtask-create',
    component: SubTaskCreate,
    props: true
  },
  {
    path: '/subtasks/remove/:task_id',
    name: 'subtask-remove',
    component: SubTaskRemove,
    props: true
  }
]

const router = new VueRouter({
  routes
})

export default router
