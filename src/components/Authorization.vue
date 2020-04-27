<template>
  <form v-on:submit.prevent="getRole">
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

      <button type="submit" class="btn btn-green btn-authorization">Готово</button>
    </div>
  </form>
</template>
<!-- @click="getRole"-->
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
          if (response.data.success == false) {
            alert(response.data.message)
          } else {
            localStorage.token = response.data.api_token
            localStorage.email = this.email
            this.$parent.changeTodoListVisible()
          }
        })
        .catch(error => {
          if (error.response.status == 401) {
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
