<template>
  <div class="task-create">
    <div class="task-header">
      <h1 class="task-heading__green">Редактирование подзадачи</h1>
    </div>
    <span class="subtask-text">Наименование задачи</span>
    <h2 class="title task-heading__green-border-none">{{ taskname }}</h2>
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
    <label class="description__label" id="description">Краткое описание</label>
    <textarea
      class="description__textarea"
      for="description"
      required="required"
      v-model="subtask.description"
    ></textarea>

    <span class="task-label" id="created_date">Дата создания подзадачи: {{ subtask.created_date }}</span>
    <label class="check option-check">
      <input class="check__input" type="checkbox" v-model="subtask.importance" />
      <span class="check__box"></span>
      <div class="check__text-block">
        <span class="check__text">Срочность</span>
      </div>
    </label>

    <div class="buttons-container">
      <router-link :to="{ name: 'task-show', params: { id: subtask.task_id } }">
        <button type="button" class="btn btn-grey">Отмена</button>
      </router-link>
      <button type="button" class="btn btn-green" @click="updateSubTask">Готово</button>
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
      taskname: ''
    }
  },
  methods: {
    updateSubTask() {
      TaskService.updateSubTask(this.subtask)
        .then(response => {
          this.$router.push({
            name: 'task-show',
            params: { id: this.subtask.task_id }
          })
          // console.log(response.data)
        })
        .catch(error => {
          console.log('There was an error:', error.response) // Logs out the error
        })
    }
  },
  created() {
    TaskService.getSubtask(this.id)
      .then(response => {
        var serverSubtask = response.data['0']
        this.subtask = {
          id: serverSubtask.id,
          task_id: serverSubtask.listt_id,
          name: serverSubtask.name,
          description: serverSubtask.description,
          importance: serverSubtask.urgency == 1 ? true : false,
          created_date: serverSubtask.created_at,
          edit_date: serverSubtask.updated_at
        }

        TaskService.getTask(serverSubtask.listt_id)
          .then(response => {
            this.taskname = response.data['0'][0].name
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

<style lang="scss">
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
.description__textarea {
  border: 1px solid #4e9243;
  box-sizing: border-box;
  border-radius: 6px;
  padding: 10px;
  margin-bottom: 35px;
  outline: none;
}
.description__label {
}
</style>
