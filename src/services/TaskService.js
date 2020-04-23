import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://fessan.ru/api',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

const apiClientPost = axios.create({
  baseURL: 'http://fessan.ru/api',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded'
  }
})

const userId = `${localStorage.userId}`
const credential = `token=${localStorage.token}`

export default {
  login(login, password) {
    return apiClient.post(`/login?login=${login}&password=${password}`)
  },
  register(login, password, password_confirmation) {
    return apiClient.post(
      `/register?login=${login}&password=${password}&password_confirmation=${password_confirmation}`
    )
  },
  getTasks() {
    console.log(userId, credential)
    return apiClient.get(`/tasks/${userId}/title/asc?${credential}`)
  },
  getTasksByStatus(status) {
    return apiClient.get('/tasks/?status=' + status)
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
  completedSubTask(subtask) {
    return apiClient.put('/subtasks/' + subtask.id, subtask)
  },
  addTask(task) {
    var bodyFormData = new FormData()
    bodyFormData.set('title', task.name)
    bodyFormData.set('details', 'sss')
    bodyFormData.set('hard', 1)

    return apiClientPost.post(`/tasks/create/${userId}`, {
      title: task.name,
      hard: 1,
      details: 'd',
      token: localStorage.token
    })
  },
  addSubTask(subtask) {
    return apiClient.post('/subtasks/', subtask)
  },
  deleteTask(task) {
    return apiClient.delete('/tasks/' + task.id, task)
  },
  deleteSubTask(subtask) {
    return apiClient.delete('/subtasks/' + subtask.id, subtask)
  },
  getSubTasks(task_id) {
    return apiClient.get('/subtasks/?task_id=' + task_id)
  },
  getSubtask(id) {
    return apiClient.get('/subtasks/' + id)
  }
}
