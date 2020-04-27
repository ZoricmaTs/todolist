<template>
  <form v-on:submit.prevent="register">
    <div class="authorization">
      <h1 class="tasklist-heading">Регистрация</h1>
      <input class="task-input" type="text" name="name" placeholder="Имя" v-model="name" required />
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
  </form>
</template>

<script>
import TaskService from '@/services/TaskService.js'

export default {
  name: 'register',
  data() {
    return {
      name: '',
      email: '',
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
        this.name,
        this.email,
        this.password,
        this.password_confirmation
      )
        .then(response => {
          if (response.data.success == false) {
            const errorList = response.data['0']
            let message = ''

            if (typeof errorList.email !== 'undefined') {
              message += errorList.email[0] + '\n'
            }
            if (typeof errorList.password !== 'undefined') {
              message += errorList.password[0] + '\n'
            }
            if (typeof errorList.password_confirmation !== 'undefined') {
              message += errorList.password_confirmation[0] + '\n'
            }
            if (typeof errorList.name !== 'undefined') {
              message += errorList.name[0] + '\n'
            }
            if (message !== '') {
              alert(message)
            }
          } else {
            alert('Вы успешно зарегистрированы')
            this.$router.push({ name: 'home' })
          }
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
