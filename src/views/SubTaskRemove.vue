<template>
  <div class="task-create">
    <div class="task-header">
      <h1 class="task-heading__green">Удаление подзадачи</h1>
    </div>
    <span class="task-heading__alarm">
      Вы точно хотите удалить "{{ subtaskname }}" из списка “{{
      taskname
      }}”?
    </span>

    <div class="buttons-container">
      <router-link class :to="{ name: 'task-show', params: { id: this.task_id } }">
        <button type="button" class="btn btn-grey">Отмена</button>
      </router-link>
      <button type="button" class="btn btn-green" @click="deleteSubTask">Удалить</button>
    </div>
  </div>
</template>

<script>
import TaskService from '@/services/TaskService.js'
export default {
  props: ['id', 'task_id'],
  data() {
    return {
      taskname: '',
      subtaskname: ''
    }
  },
  methods: {
    deleteSubTask() {
      TaskService.deleteSubTask(this.id)
        .then(response => {
          alert('Подадача успешно удалена')
          this.$router.push({
            name: 'task-show',
            params: { id: this.task_id }
          })
        })
        .catch(error => {
          if (error.response.status == 401) {
            alert('Авторизуйтесь пожалуйста')
            localStorage.token = ''
            localStorage.email = ''
            this.$router.push({ name: 'home' })
          } else {
            console.log('Произошла ошибка: ' + error.response.data)
          }
        })
    }
  },
  created() {
    TaskService.getTask(this.task_id)
      .then(response => {
        this.taskname = response.data['0'][0].name
        const subtasks = response.data['0'][0].tasks
        const subtask = subtasks.find(subtask => subtask.id === this.id)
        this.subtaskname = subtask.name
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

<style lang="scss" scoped></style>
