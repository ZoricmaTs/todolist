<template>
  <div class>
    <span class="material-icons material-icons__color_red" v-if="subtask.importance">priority_high</span>
    <span style="width: 24px" v-else></span>
    <label class="check option-check">
      <input
        class="check__input"
        type="checkbox"
        v-model="subtask.status"
        @change="completedSubTask"
      />
      <span class="check__box"></span>
      <div class="check__text-block">
        <span class="check__text subtask-name">{{ subtask.name }}</span>
      </div>
    </label>
    <div class="task-btn-container">
      <router-link
        :to="{
          name: 'subtask-edit',
          params: { id: subtask.id }
        }"
      >
        <button type="button" class="btn btn-edit material-icons material-icons__color_green">create</button>
      </router-link>
      <button type="button" class="btn btn-remove material-icons material-icons__color_green">close</button>
    </div>
  </div>
</template>
<script>
import TaskService from '@/services/TaskService.js'
export default {
  props: {
    subtask: Object
  },
  methods: {
    completedSubTask() {
      // this.subtask.status = newval
      TaskService.completedSubTask(this.subtask)
    }
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
