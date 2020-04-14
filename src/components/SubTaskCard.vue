<template>
  <div class="task-container task-card">
    <span class="task-heading">{{ task.name }}</span>

    <div class="task-btn-container">
      <router-link :to="{ name: 'subtask-edit', params: { id: task.id } }">
        <button type="button" class="btn btn-edit material-icons">create</button>
      </router-link>

      <button type="button" class="btn btn-remove material-icons">close</button>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    subtask: Object
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
.btn-edit,
.btn-remove {
  height: 30px;
  border: 1px solid #4e9243;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
  }
}
.btn-edit:hover,
.btn-remove:hover {
}

.btn-edit {
  margin-right: 10px;
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
  padding: 10px 10px 10px 25px;
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
  align-items: center;
}
.task-container:first-of-type {
  border-radius: 10px 10px 0px 0px;
}
.task-container:last-child {
  border-radius: 0px 0px 10px 10px;
}
.task-btn-container {
  display: block;
}
</style>
