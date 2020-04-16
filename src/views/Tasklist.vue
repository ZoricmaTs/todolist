<template>
  <div class="tasklist-container">
    <h1 class="tasklist-heading">Список задач</h1>
    <div class="container">
      <router-link class :to="{ name: 'task-create' }">
        <button
          type="button"
          class="btn btn-add-circle material-icons material-icons__color_green md-36"
        >add_circle</button>
      </router-link>

      <select class="filter">
        <i class="filter-btn material-icons material-icons__color_green">arrow_drop_down</i>
        <option v-for="task in tasks" :key="task.status" :task="task">{{ task.status }}</option>
      </select>
    </div>

    <TaskCard class="task" v-for="task in tasks" :key="task.id" :task="task"></TaskCard>
  </div>
</template>

<script>
import TaskCard from '@/components/TaskCard.vue'
import TaskService from '@/services/TaskService.js'

export default {
  components: {
    TaskCard
  },
  data() {
    return {
      tasks: []
    }
  },
  created() {
    TaskService.getTasks()
      .then(response => {
        this.tasks = response.data
      })
      .catch(errors => {
        console.log('ERROR: ' + errors.response)
      })
  }
}
</script>

<style lang="scss">
body {
  background: url(../assets/tasklistbackground.jpg) no-repeat;
  background-size: 100% auto;
}
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 50px;
  vertical-align: top;
}

.btn-add-circle {
  width: 81px;
  height: 40px;
  background: #ffffff;
  /* Зеленый */
  cursor: pointer;
  border: 1px solid #4e9243;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
}

.filter {
  display: inline;
  vertical-align: top;
  font-style: normal;
  font-weight: normal;
  margin-top: 0;
  font-size: 14px;
  width: 93px;
  height: 40px;
  padding-right: 20px;
  cursor: pointer;
  border: 1px solid #4e9243;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  outline: none;
}

/*
.btn-add-circle + .material-icons {
  font-size: 24px;
}*/
/*
.material-icons.md-24 {
  font-size: 24px;
}*/
.tasklist-heading {
  display: block;
  font-weight: bold;
  font-size: 64px;
  line-height: 94px;
  text-align: center;
  letter-spacing: 0.1em;
  border-bottom: 3px solid #ffffff;
  margin-bottom: 40px;
  color: #ffffff;
}
</style>
