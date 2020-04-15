<template>
  <div class="task-create">
    <div class="task-header">
      <h1 class="task-heading__green">Редактирование подзадачи</h1>
    </div>
    <span class="subtask-text">Наименование задачи</span>
    <h2 class="title task-heading__green-border-none">{{ task_name }}</h2>
    <label class="task-label" id="created_date">Дата создания подзадачи:</label>
    <span>{{ subtask.created_date }}</span>
    <span class="subtask-text">Наименование подзадачи</span>
    <label class="task-label" id="name"></label>
    <input
      class="task-input"
      type="text"
      name="name"
      placeholder="введите новое наименование подзадачи"
      v-model="subtask.name"
      required
    />
    <label class="check option-check">
      <input class="check__input" type="checkbox" v-model="subtask.importance" />
      <span class="check__box"></span>
      <div class="check__text-block">
        <span class="check__text">Срочность</span>
      </div>
    </label>

    <div class="buttons-container">
      <router-link :to="{ name: 'task-show', params: { id: subtask.task_id } }">
        <!-- <router-link class :to="{ name: 'task-show' }">-->
        <button type="button" class="btn btn-grey">Отмена</button>
        <button type="button" class="btn btn-green" @click="updateSubTask">Готово</button>
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
      subtask: {},
      task_name: ''
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
    },
    updateSubTask() {
      // alert(this.task)

      TaskService.updateSubTask(this.subtask)
        .then(response => {
          console.log(response.data) // For now, logs out the response
        })
        .catch(error => {
          console.log('There was an error:', error.response) // Logs out the error
        })
    }
  },
  created() {
    TaskService.getSubtask(this.id)
      .then(response => {
        this.subtask = response.data
        TaskService.getTask(this.subtask.task_id)
          .then(response => {
            this.task_name = response.data.name
          })
          .catch(errors => {
            console.log('ERROR: ' + errors.response)
          })
      })
      .catch(errors => {
        console.log('ERROR: ' + errors.response)
      })
  }
}
</script>

<style lang="scss" scoped>
.task-heading__green-border-none {
  align-items: center;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  color: #4e9243;
  text-align: center;
  line-height: 35px;
  letter-spacing: 0.1em;
  margin-bottom: 25px;
}
</style>
