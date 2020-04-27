<template>
  <div class="task-create">
    <div class="task-header">
      <h1 class="task-heading__green">Редактирование задачи</h1>
    </div>
    <label class="task-label"></label>
    <input
      class="task-input"
      type="text"
      name="name"
      placeholder="введите наименование задачи"
      v-model="task.name"
      required
    />
    <div class="buttons-container">
      <router-link class :to="{ name: 'tasks' }">
        <button type="button" class="btn btn-grey">Отмена</button>
        <button type="button" class="btn btn-green" @click="updateTask">
          Готово
        </button>
      </router-link>
    </div>
  </div>
</template>
<script>
import TaskService from '@/services/TaskService.js'
export default {
  props: ['id'],
  data() {
    return {
      taskname: '',
      task: {}
    }
  },
  methods: {
    updateTask() {
      TaskService.updateTask(this.task)
        .then(response => {
          if (response.data['success'] == false) {
            alert('Произошла ошибка')
          } else {
            alert('Задача успешно обновлена')
          }
          console.log(response.data)
        })
        .catch(error => {
          if (error.response.status == 401) {
            alert('Авторизуйтесь пожалуйста')
            localStorage.token = ''
            this.$router.push({ name: 'home' })
          } else {
            console.log('Произошла ошибка: ' + error.response.data)
          }
        })
    }
  },
  created() {
    TaskService.getTask(this.id)
      .then(response => {
        this.taskname = response.data['0'][0].name
        const serverTask = response.data['0'][0]
        this.task = {
          id: serverTask.id,
          name: serverTask.name
        }
      })
      .catch(error => {
        if (error.response.status == 401) {
          alert('Авторизуйтесь пожалуйста')
          localStorage.token = ''
          this.$router.push({ name: 'home' })
        } else {
          console.log('Произошла ошибка: ' + error.response.data)
        }
      })
  }
}
</script>
