<template>
  <router-link
    class="task-link"
    :to="{ name: 'task-show', params: { id: task.id } }"
  >
    <div
      class="task-card -shadow"
      :class="{
        empty: task.status == 0,
        completed: task.status == 2,
        uncompleted: task.status == 1
      }"
    >
      <span class="task-heading">{{ task.name }}</span>
      <div>
        <button class="btn btn-edit material-icons">create</button>
        <button class="btn btn-remove material-icons">close</button>
      </div>
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
.completed {
  background-color: #6ae356;
  border: 1px solid #4e9243;
}
.uncompleted {
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid #4e9243;
}
.empty {
  background-color: white;
  border: 1px solid #4e9243;
}
.btn {
  border: none;
  background-color: transparent;
}
.material-icons {
  color: #4e9243;
}
.task-heading {
  color: #6f6f6f;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 28px;
}
.task-card {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 25px;
  transition: all 0.2s linear;
  cursor: pointer;
  width: 560px;
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
