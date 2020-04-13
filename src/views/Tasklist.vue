<template>
  <div>
    <h1>Tasks Listing</h1>
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
