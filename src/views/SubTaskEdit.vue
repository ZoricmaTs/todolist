<template>
  <div class="task-create">
    <div class="task-header">
      <h1 class="task-heading__green">Редактирование подзадачи</h1>
    </div>
    <label class="task-label"></label>
    <input
      class="task-input"
      type="text"
      name="name"
      placeholder="введите наименование подзадачи"
      v-model="subtask.name"
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
export default {
  props: ['id'],
  data() {
    return {
      task: {},
      subtask: []
    }
  },
  methods: {
    updateTask() {
      // alert(this.task)

      TaskService.updateTask(this.task)
        .then(response => {
          console.log(response.data) // For now, logs out the response
        })
        .catch(error => {
          console.log('There was an error:', error.response) // Logs out the error
        })
    }
  },
  created() {
    TaskService.getTask(this.id)
      .then(response => {
        this.task = response.data
      })
      .catch(errors => {
        console.log('ERROR: ' + errors.response)
      })
  }
}
</script>

<style lang="scss" scoped></style>
