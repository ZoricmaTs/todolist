import axios from 'axios'

const authtoken = '?login=user111&api_token=111'

const apiClient = axios.create({
  baseURL: 'http://127.0.0.1:8080/api',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})
//http://127.0.0.1:8080/api/ task?list_id=2 &api_token=111 &login=user111
export default {
  getTasks() {
    return apiClient.get('/list?login=user111&api_token=111')
  },
  getTask(id) {
    return apiClient.get('/tasks?login=user111&api_token=111' + id)
  },
  updateTask(task) {
    return apiClient.put('/tasks/' + task.id, task)
  },
  updateSubTask(subtask) {
    return apiClient.put('/subtasks/' + subtask.id, subtask)
  },
  completedSubTask(subtask) {
    return apiClient.put('/subtasks/' + subtask.id, subtask)
  },
  addTask(task) {
    return apiClient.post('/tasks/?login=user111&api_token=111' + task)
  },
  addSubTask(subtask) {
    return apiClient.post('/subtasks/', subtask)
  },
  deleteTask(task) {
    return apiClient.delete('/tasks/' + task.id, task)
  },
  deleteSubTask(task_id) {
    return apiClient.delete('/subtasks/?task_id=' + task_id)
  },
  getSubTasks(task_id) {
    return apiClient.get('/subtasks/?task_id=' + task_id)
  },
  getSubtask(id) {
    return apiClient.get('/subtasks/' + id)
  }
}
