<template>
  <router-link
    class="task-link"
    :to="{ name: 'task-show', params: { id: task.id } }"
  >
    <div class="task-card -shadow">
      <h4 class="title">{{ task.name }}</h4>
    </div>
  </router-link>
</template>
<script>
export default {
  props: {
    task: Object
  }
}
</script>
<style scoped>
.task-card {
  padding: 20px;
  margin-bottom: 24px;
  transition: all 0.2s linear;
  cursor: pointer;
}
.task-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2), 0 1px 15px 0 rgba(0, 0, 0, 0.19);
}
.task-card > .title {
  margin: 0;
}
.task-link {
  color: black;
  text-decoration: none;
  font-weight: 100;
}
</style>
