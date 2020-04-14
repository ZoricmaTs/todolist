<template>
  <div class="task-create">
    <div class="task-header">
      <h1 class="task-heading__green">Удаление задачи</h1>
    </div>
    <h2 class="task-heading__alarm">Вы точно хотите удалить “Задача {{ task.name }}”?</h2>
    <span class="task-heading__alarm-text">Внимание!</span>
    <span class="task-heading__alarm-text">Все подзадачи данного списка будут удалены.</span>
    <div class="buttons-container">
      <button type="button" class="btn btn-grey">Отмена</button>
      <button type="button" class="btn btn-green" @click="deleteTask">Удалить</button>
    </div>
  </div>
</template>

<script>
import TaskService from '@/services/TaskService.js'
export default {
  props: ['id'],
  data() {
    return {
      task: {}
    }
  },
  methods: {
    deleteTask() {
      // alert(this.task)

      TaskService.deleteTask(this.task)
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

<style lang="scss" scoped>
.task-create {
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #ffffff;
  padding: 10px 25px 20px 25px;
  background: #ffffff;
  box-shadow: 0px 10px 11px rgba(0, 0, 0, 0.3);
  border-radius: 15px;
}

.task-heading__alarm {
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 16px;
  margin-bottom: 20px;
}

.task-heading__alarm-text {
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  color: #5b5b5b;
}
.task-heading__alarm-text:last-of-type {
  margin-bottom: 20px;
}
</style>
