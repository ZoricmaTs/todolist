<template>
  <div class="task-create">
    <div class="task-header">
      <h1 class="task-heading__green">Удаление подзадачи</h1>
    </div>
    <span class="task-heading__alarm">
      Вы точно хотите удалить Подзадача “{{ subtask.name }}” из списка задач “{{
      task_name
      }}”?
    </span>

    <div class="buttons-container">
      <router-link class :to="{ name: 'task-show', params: { id: subtask.task_id } }">
        <button type="button" class="btn btn-grey">Отмена</button>

        <button type="button" class="btn btn-green" @click="deleteSubTask">Удалить</button>
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
      subtask: {
        task_id: this.task_id,
        name: '',
        created_date: '03.11.2020 10:25',
        edit_date: '04.11.2020 10:25',
        status: false,
        importance: false,
        description: ''
      },
      task_name: ''
    }
  },
  methods: {
    deleteSubTask() {
      // alert(this.task)

      TaskService.deleteSubTask(this.subtask)
        .then(response => {
          this.subtask = response.data
          TaskService.deleteTask(this.subtask.task_id)
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
  },
  created() {
    TaskService.getTask(this.id)
      .then(response => {
        //this.task = response.data
        this.taskname = response.data['0'][0].name
        console.log(response.data['0'][0].tasks)
        let serverSubtasks = response.data['0'][0].tasks
        serverSubtasks.forEach(serverSubtask => {
          let subtask = {
            task_id: serverSubtask.id,
            name: serverSubtask.name,
            description: serverSubtask.description,
            status: serverSubtask.mark == 1 ? true : false,
            importance: serverSubtask.urgency == 1 ? true : false,
            created_date: serverSubtask.created_at,
            edit_date: serverSubtask.updated_at
          }
          this.subtasks.push(subtask)
        })
        console.log(response.data['0'][0].tasks)
      })
      .catch(errors => {
        console.log('ERROR: ' + errors.response)
      })
  }
}
</script>

<style lang="scss" scoped></style>
