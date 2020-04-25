import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'http://www.host1813334.hostland.pro/public/api',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: `Bearer ${localStorage.token}`
  }
})

const apiClientPost = axios.create({
  baseURL: 'http://www.host1813334.hostland.pro/public/api',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: `Bearer ${localStorage.token}`
  }
})

const userId = `${localStorage.userId}`
const credential = `token=${localStorage.token}`

export default {
  login(email, password) {
    var bodyFormData = new FormData() //+
    bodyFormData.set('email', email)
    bodyFormData.set('password', password)
    return apiClientPost.post(`/login`, bodyFormData)
  },
  register(name, email, password, password_confirmation) {
    var bodyFormData = new FormData() //+
    bodyFormData.set('name', name)
    bodyFormData.set('email', email)
    bodyFormData.set('password', password)
    bodyFormData.set('password_confirmation', password_confirmation)
    return apiClientPost.post(`/user`, bodyFormData)
  },
  getTasks() {
    return apiClient.get(`/list`) //+
  },
  getTasksByStatus(status) {
    return apiClient.get('/tasks/?status=' + status)
  },
  getTask(id) {
    //console.log(id)
    return apiClient.get('/list/' + id) //поменяла
  },
  updateTask(id) {
    return apiClient.put('/list/' + id, task)
  },
  updateSubTask(subtask) {
    return apiClient.put('/subtasks/' + subtask.id, subtask)
  },
  completedSubTask(subtask) {
    return apiClient.put('/subtasks/' + subtask.id, subtask)
  },
  addTask(task) {
    //+
    var bodyFormData = new FormData()
    bodyFormData.set('name', task.name)
    bodyFormData.set('description', 'zzz')
    return apiClientPost.post(`/list`, bodyFormData)
  },
  addSubTask(subtask) {
    return apiClient.post('/subtasks/', subtask)
  },
  deleteTask(id) {
    return apiClient.delete('/list/' + id)
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
