<template>
  <div class="task-create">
    <div class="task-header">
      <h1 class="task-heading__green">Удаление подзадачи</h1>
    </div>
    <span
      class="task-heading__alarm"
    >Вы точно хотите удалить "{{ subtaskname }}" из списка “{{ taskname }}”?</span>

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
          this.$router.push({
            name: 'task-show',
            params: { id: this.task_id }
          })
        })
        .catch(errors => {
          console.log('ERROR: ' + errors.response)
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

      .catch(errors => {
        console.log('ERROR: ' + errors.response)
      })
  }
}
</script>

<style lang="scss" scoped></style>
