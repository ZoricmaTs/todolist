<template>
  <div>
    <input class="task-input" type="text" name="name" placeholder="Логин" v-model="login" required />
    <input
      class="task-input"
      type="password"
      name="password"
      placeholder="Пароль"
      v-model="password"
      required
    />

    <button type="button" class="btn btn-green" @click="getRole">Готово</button>
  </div>
</template>

<script>
import TaskService from '@/services/TaskService.js'

export default {
  props: ['changeTodoListVisible'],
  name: 'authorization',
  data() {
    return {
      login: '',
      password: ''
    }
  },
  methods: {
    getRole() {
      if (this.login === 'admin' && this.password === 'admin') {
        localStorage.login = this.login
        localStorage.token = this.password

        this.$parent.changeTodoListVisible()
      } else {
        alert('Неверный пароль или логин')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
body {
  background: url(../assets/signinbackground.jpg) no-repeat;
  background-size: 100% auto;
}
</style>
