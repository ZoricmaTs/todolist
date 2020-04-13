<template>
  <div>
    <h1 class="tasklist-heading">Список задач</h1>
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
