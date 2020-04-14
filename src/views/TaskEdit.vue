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
      v-model="task.id"
      required
    />
    <div class="buttons-container">
      <button type="button" class="btn btn-grey">Отмена</button>
      <button type="button" class="btn btn-green">Готово</button>
    </div>
  </div>
</template>
<script>
import TaskService from '@/services/TaskService.js'
import axios from 'axios'
export default {
  props: ['id'],
  data() {
    return {
      task: {}
    }
  },
  created() {
    axios
      .put('http://localhost:3000/tasks/id', {}) // Does a get request
      .then(response => {
        console.log(response.data) // For now, logs out the response
      })
      .catch(error => {
        console.log('There was an error:', error.response) // Logs out the error
      })
  }
}
</script>
