<template>
  <div>
    <h1 class="tasklist-heading">Просмотр задачи</h1>
    <div class="task-create">
      <h2 class="title task-heading__green">{{ task.name }}</h2>
      <div
        class="subtask-container"
        v-for="subtask in subtasks"
        :key="subtask.id"
        :subtask="subtask"
      >
        <label class="check option-check">
          <input class="check__input" type="checkbox" />
          <span class="check__box"></span>
          <div class="check__text-block">
            <span class="check__text">{{ subtask.name }}</span>
          </div>
        </label>
        <div class="task-btn-container">
          <button type="button" class="btn btn-edit material-icons">create</button>
          <button type="button" class="btn btn-remove material-icons">close</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TaskService from '@/services/TaskService.js'
export default {
  props: ['id'],
  data() {
    return {
      task: {},
      subtasks: []
    }
  },
  created() {
    TaskService.getTask(this.id)
      .then(response => {
        this.task = response.data
      })
      .catch(errors => {
        console.log('ERROR: ' + errors.response)
      })

    TaskService.getSubTasks(this.id)
      .then(response => {
        this.subtasks = response.data
      })
      .catch(errors => {
        console.log('ERROR: ' + errors.response)
      })
  }
}
</script>

<style lang="scss">
.subtask-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.option-check {
  display: flex;
  flex-direction: row;
  margin-bottom: 13px;
}
.check {
  padding-left: 20px;
  &__input {
    position: absolute;
    width: 1px; /*firefox*/
    height: 1px; /*firefox*/
    overflow: hidden; /*firefox*/
    clip: rect(0 0 0 0); /*firefox*/
  }

  &__box {
    position: absolute;
    margin-top: 5px;
    margin-left: -20px;
    /* Primary Color */
    cursor: pointer;
    width: 20px;
    height: 20px;
    background: #ffffff;
    border: 1px solid #4e9243;
    box-sizing: border-box;
    border-radius: 4px;
  }
  &__box-point {
    position: absolute;
    margin-top: 0px;
    margin-left: -20px;
    width: 10.43px;
    height: 10px;
    border-radius: 10px;

    background: rgba(31, 32, 65, 0.25);
  }
  &__text {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
  }

  &__input:checked + &__box {
    fill: white;
    background: url('../assets/checked.svg') center no-repeat;
    text-decoration: line-through;
  }
}
</style>
