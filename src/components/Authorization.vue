<template>
  <div class="authorization">
    <h1 class="tasklist-heading">Вход</h1>
    <input
      class="task-input"
      type="email"
      name="email"
      placeholder="Электронная почта"
      v-model="email"
      required
    />
    <input
      class="task-input"
      type="password"
      name="password"
      placeholder="Пароль"
      v-model="password"
      required
    />
    <div>
      <span>Нет аккаунта?</span>
      <router-link to="/register">Зарегистрироваться</router-link>
    </div>

    <button type="button" class="btn btn-green btn-authorization" @click="getRole">Готово</button>
  </div>
</template>

<script>
import TaskService from '@/services/TaskService.js'

export default {
  props: ['changeTodoListVisible'],
  name: 'authorization',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    getRole() {
      TaskService.login(this.email, this.password)
        .then(response => {
          //localStorage.name = this.name
          //localStorage.email = this.email
          localStorage.token = response.data.api_token
          //localStorage.userId = response.data.user.id
          this.$parent.changeTodoListVisible()
        })
        .catch(error => {
          if (error.response.status == 401) {
            //alert(error.response.data.error)
            alert('Указан неверный пароль или логин')
          }
        })
    }
  }
}
</script>

<style lang="scss" scoped>
.authorization {
  display: flex;
  flex-direction: column;
}
.btn-authorization {
  align-self: flex-end;
}
</style>
