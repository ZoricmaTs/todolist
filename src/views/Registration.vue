<template>
  <div class="authorization">
    <h1 class="tasklist-heading">Регистрация</h1>
    <input class="task-input" type="text" name="name" placeholder="Логин" v-model="login" required />
    <input
      class="task-input"
      type="password"
      name="password"
      placeholder="Пароль"
      v-model="password"
      required
    />
    <input
      class="task-input"
      type="password"
      name="password-confirmation"
      placeholder="Повторите пароль"
      v-model="password_confirmation"
      required
    />
    <div>
      <span>Есть аккаунт?</span>
      <router-link to="/">Войти</router-link>
    </div>
    <button
      type="button"
      class="btn btn-green btn-authorization"
      @click="register"
    >Зарегистрироваться</button>
  </div>
</template>

<script>
import TaskService from '@/services/TaskService.js'

export default {
  name: 'register',
  data() {
    return {
      login: '',
      password: '',
      password_confirmation: ''
    }
  },
  methods: {
    validate_pass(pass) {
      var pass_length = 6
      var rule1 = /admin/i
      var rule2 = /^[a-zA-Z0-9]+$/
      var rule3 = /[a-z]/
      var rule4 = /[A-Z]/
      var rule5 = /[0-9]/

      if (
        rule1.test(pass) ||
        !rule2.test(pass) ||
        !rule3.test(pass) ||
        !rule4.test(pass) ||
        !rule5.test(pass) ||
        pass.length < pass_length
      ) {
        alert('Пароль ' + pass + ' не соответствует требованиям безопасности')
        return false
      }
      return true
    },

    register() {
      /* if (!validate_pass(this.password)) {
        return
      }*/
      TaskService.register(
        this.login,
        this.password,
        this.password_confirmation
      )
        .then(response => {
          alert('Вы успешно зарегистрированы')
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
