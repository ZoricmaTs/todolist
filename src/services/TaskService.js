import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://localhost:3000',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getTasks() {
    return apiClient.get('/tasks')
  },
  getTask(id) {
    return apiClient.get('/tasks/' + id)
  },
  updateTask(task) {
    return apiClient.put('/tasks/' + task.id, task)
  },
  updateSubTask(subtask) {
    return apiClient.put('/subtasks/' + subtask.id, subtask)
  },
  addTask(task) {
    return apiClient.post('/tasks/', task)
  },
  addSubTask(subtask) {
    return apiClient.post('/subtasks/', subtask)
  },
  deleteTask(task) {
    return apiClient.delete('/tasks/' + task.id, task)
  },
  getSubTasks(task_id) {
    return apiClient.get('/subtasks/?task_id=' + task_id)
  },
  getSubtask(id) {
    return apiClient.get('/subtasks/' + id)
  }
}
