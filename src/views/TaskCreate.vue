<template>
  <div class="task-create">
    <div class="task-header">
      <h1 class="task-heading__green">Добавление задачи</h1>
    </div>
    <label class="task-label">Наименование задачи</label>
    <input
      class="task-input"
      type="text"
      name="name"
      placeholder="введите наименование задачи"
      v-model="task.name"
      required
    />
    <input type="hidden" v-model="task.status" />
    <div class="buttons-container">
      <router-link class :to="{ name: 'tasks' }">
        <button type="button" class="btn btn-grey">Отмена</button>
        <button type="button" class="btn btn-green" @click="addTask">Готово</button>
      </router-link>
    </div>
  </div>
</template>
<script>
import TaskService from '@/services/TaskService.js'
export default {
  data() {
    return {
      task: {
        created_date: '03.11.2020 10:25',
        edit_date: '04.11.2020 10:25',
        status: 0,
        statusname: 'нет подзадач'
      }
    }
  },
  methods: {
    addTask() {
      // alert(this.task)

      TaskService.addTask(this.task)
        .then(response => {
          console.log(response.data) // For now, logs out the response
        })
        .catch(error => {
          console.log('There was an error:', error.response) // Logs out the error
        })
    }
  },
  created() {}
}
</script>

<style lang="scss">
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
.task-heading__green {
  align-items: center;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  color: #4e9243;
  text-align: center;
  line-height: 35px;
  letter-spacing: 0.1em;
  border-bottom: 3px solid #4e9243;
  margin-bottom: 25px;
}

.task-label {
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  margin-bottom: 5px;
}
.task-input {
  border: 1px solid #4e9243;
  box-sizing: border-box;
  border-radius: 6px;
  padding: 10px;
  margin-bottom: 35px;
  outline: none;
}
input:required:focus {
  border: 1px solid #eb5757;
  outline: none;
}

.buttons-container {
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
}
.btn-green {
  background: #4e9243;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.29);
  border-radius: 6px;
  color: #ffffff;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  padding: 5px 15px;
  cursor: pointer;
  &:hover,
  &:focus {
    background: #1abd00;
    box-sizing: border-box;
  }
  &:active {
    background: #3a6a32;
    box-sizing: border-box;
  }
}
.btn-grey {
  background: grey;
  box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.29);
  border-radius: 6px;
  color: #ffffff;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 14px;
  padding: 5px 15px;
  margin-right: 20px;
  cursor: pointer;
  &:hover,
  &:focus {
    background: darkgray;
    box-sizing: border-box;
  }
  &:active {
    background: #6f6f6f;
    box-sizing: border-box;
  }
}
</style>
