<template>
  <div class="task-create">
    <div class="task-header">
      <h1 class="task-heading__green">Добавление подзадачи</h1>
    </div>
    <label class="task-label">Наименование подзадачи</label>
    <input
      class="task-input"
      type="text"
      name="name"
      placeholder="введите наименование подзадачи"
      v-model="subtask.name"
      required
    />

    <label class="description__label" id="description">Краткое описание</label>
    <textarea
      class="description__textarea"
      for="description"
      required="required"
      :value="subtask.description"
    ></textarea>

    <span>Дата создания подзадачи: {{ subtask.created_date }}</span>
    <label class="check option-check">
      <input class="check__input" type="checkbox" v-model="subtask.importance" />
      <span class="check__box"></span>
      <div class="check__text-block">
        <span class="check__text">Срочность</span>
      </div>
    </label>
    <div class="buttons-container">
      <router-link :to="{ name: 'task-show', params: { id: task_id } }">
        <button type="button" class="btn btn-grey">Отмена</button>
        <button type="button" class="btn btn-green" @click="addSubTask">Готово</button>
      </router-link>
    </div>
  </div>
</template>
<script>
import TaskService from '@/services/TaskService.js'
export default {
  props: ['task_id'],

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
    addSubTask() {
      TaskService.addSubTask(this.subtask)
        .then(response => {
          console.log(response.data)
          // For now, logs out the response
        })
        .catch(error => {
          console.log('There was an error:', error.response) // Logs out the error
        })
    },

    completedSubTask() {
      // this.subtask.status = newval
      TaskService.completedSubTask(this.subtask)
    },

    created() {}
  }
}
</script>

<style lang="scss" scoped></style>
