<template>
  <div class="task-create">
    <div class="task-header">
      <h1 class="task-heading__green">Удаление задачи</h1>
    </div>
    <h2 class="task-heading__alarm">Вы точно хотите удалить “Задача {{ taskname }}”?</h2>
    <span class="task-heading__alarm-text">Внимание!</span>
    <span class="task-heading__alarm-text">Все подзадачи данного списка будут удалены.</span>
    <div class="buttons-container">
      <router-link class :to="{ name: 'tasks' }">
        <button type="button" class="btn btn-grey">Отмена</button>
      </router-link>
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
      taskname: ''
    }
  },
  methods: {
    deleteTask() {
      TaskService.deleteTask(this.id)
        .then(response => {
          alert('Задача успешно удалена')
          this.$router.push({ name: 'tasks' })
          console.log('задача', response.data)
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
    TaskService.getTask(this.id)
      .then(response => {
        console.log(response.data)
        this.taskname = response.data['0'][0].name
        // this.task = response.data
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
