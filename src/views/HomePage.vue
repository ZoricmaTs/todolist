<template>
  <div>
    <Authorization v-if="!isShowTodolist" @changeTodoListVisible="changeTodoListVisible" />
    <Tasklist v-if="isShowTodolist"></Tasklist>
  </div>
</template>

<script>
import Tasklist from '@/views/Tasklist.vue'
import Authorization from '@/components/Authorization.vue'

import TaskService from '@/services/TaskService.js'

export default {
  name: 'App',
  components: {
    Authorization,
    Tasklist
  },

  data() {
    return {
      isShowTodolist: localStorage.token !== '',
      token: '',
      login: ''
    }
  },

  mounted() {
    if (localStorage.token) {
      this.token = localStorage.token
    }
    if (localStorage.login) {
      this.login = localStorage.login
    }
  },
  methods: {
    changeTodoListVisible() {
      this.isShowTodolist = true
      if (localStorage.token) {
        this.token = localStorage.token
      }
      if (localStorage.login) {
        this.login = localStorage.login
      }
      location.reload()
    }
  }
}
</script>

<style lang="scss" scoped></style>
