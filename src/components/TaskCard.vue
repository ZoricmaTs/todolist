<template>
  <router-link
    class="task-link task-card"
    :class="{
      empty: task.status == 0,
      completed: task.status == 2,
      uncompleted: task.status == 1
    }"
    :to="{ name: 'task-show', params: { id: task.id } }"
  >
    <div class="task-container">
      <span class="task-heading">{{ task.name }}</span>
      <div class="task-btn-container">
        <button
          type="button"
          class="btn btn-edit material-icons"
          :class="{
            uncompleted: task.status == 1
          }"
        >create</button>
        <button
          type="button"
          class="btn btn-remove material-icons"
          :class="{
            uncompleted: task.status == 1
          }"
        >close</button>
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
<style>
.completed {
  background-color: #6ae356;
  border: 1px solid #4e9243;
}
.uncompleted {
  background: rgba(255, 255, 255, 0.5);
  border: 1px solid #4e9243;
}
/*.material-icons + .uncompleted {
  color: white;
}*/
.empty {
  background-color: white;
  border: 1px solid #4e9243;
}
.btn {
  border: none;
  background-color: transparent;
  outline: none;
}
.material-icons {
  color: #4e9243;
}
.task-heading {
  color: #6f6f6f;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
}
.task-card {
  display: block;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 10px 5px 10px 25px;
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
}
.task-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.task-btn-container {
}
</style>
