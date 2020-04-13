<template>
  <div>
    <h1 class="tasklist-heading">Список задач</h1>
    <div class="container">
      <button class="btn btn-add-circle material-icons md-36">
        add_circle
      </button>
      <select v-model="selectedCategory" class="filter"
        ><i class="filter-btn material-icons">arrow_drop_down</i>
        <option v-for="task in tasks" :key="task.status" :task="task">{{
          task.status
        }}</option>
      </select>
    </div>

    <TaskCard v-for="task in tasks" :key="task.id" :task="task"></TaskCard>
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

<style lang="scss" scoped>
.container {
  margin-bottom: 50px;
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
  width: 560px;
  color: #ffffff;
}
</style>
