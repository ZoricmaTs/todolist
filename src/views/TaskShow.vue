<template>
  <div>
    <h1 class="tasklist-heading">Просмотр задачи</h1>
    <div class="task-create">
      <div class="addsubtask-block">
        <h2 class="title task-heading__green addsubtask-block">{{ taskname }}</h2>
        <router-link :to="{ name: 'subtask-create', params: { task_id: this.id } }">
          <button
            type="button"
            class="btn material-icons material-icons__color_green md-36 btn-add"
          >add_circle</button>
        </router-link>
      </div>

      <SubTaskCard
        class="subtask-container"
        v-for="subtask in subtasks"
        :key="subtask.id"
        :subtask="subtask"
      ></SubTaskCard>
      <router-link to="/">
        <button type="button" class="btn btn-grey btn-return">Назад</button>
      </router-link>
    </div>
  </div>
</template>
<script>
import SubTaskCard from '@/components/SubTaskCard.vue'
import TaskService from '@/services/TaskService.js'
export default {
  components: {
    SubTaskCard
  },
  props: ['id'],
  data() {
    return {
      subtasks: [],
      taskname: ''
    }
  },
  created() {
    TaskService.getTask(this.id)
      .then(response => {
        //this.task = response.data
        this.taskname = response.data['0'][0].name
        console.log(response.data['0'][0].tasks)
        let serverSubtasks = response.data['0'][0].tasks
        serverSubtasks.forEach(serverSubtask => {
          let subtask = {
            task_id: serverSubtask.id,
            name: serverSubtask.name,
            description: serverSubtask.description,
            status: serverSubtask.mark == 1 ? true : false,
            importance: serverSubtask.urgency == 1 ? true : false,
            created_date: serverSubtask.created_at,
            edit_date: serverSubtask.updated_at
          }
          this.subtasks.push(subtask)
        })
        console.log(response.data['0'][0].tasks)
      })
      .catch(errors => {
        console.log('ERROR: ' + errors.response)
      })

    /*TaskService.getSubTasks(this.id)
      .then(response => {
        console.log(response.data['0'][0].name)
        this.subtasks = response.data
      })
      .catch(errors => {
        console.log('ERROR: ' + errors.response)
      })*/
  }
}
</script>

<style lang="scss">
.unInportance {
}
.addsubtask-block {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.btn-add {
  cursor: pointer;
}
.btn-return {
  align-self: flex-start;
}
.material-icons__color_red {
  color: #eb5757;
}
.task-btn-container {
  display: flex;
  flex-direction: row;

  width: 100px;
}
.subtask-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  width: 570px;
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
.subtask-name {
  width: 400px;
}
</style>
