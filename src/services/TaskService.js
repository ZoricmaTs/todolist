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
  getTasks(token) {
    const apiClient2 = axios.create({
      baseURL: 'http://www.host1813334.hostland.pro/public/api',
      withCredentials: false,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    })

    return apiClient2.get(`/list`) //+
  },
  getTasksByStatus(status) {
    return apiClient.get('/tasks/?status=' + status) //для фильтра
  },
  getTask(id) {
    //console.log(id)
    return apiClient.get('/list/' + id) //поменяла
  },
  updateTask(task) {
    var bodyFormData = new FormData()
    bodyFormData.set('id', task.id)
    bodyFormData.set('name', task.name)
    bodyFormData.set('description', 'zzz')
    return apiClient.post('/list/update', bodyFormData)
  },
  updateSubTask(subtask) {
    var bodyFormData = new FormData()
    bodyFormData.set('id', subtask.id)
    bodyFormData.set('name', subtask.name)
    bodyFormData.set('listt_id', subtask.task_id)
    bodyFormData.set('description', subtask.description)
    bodyFormData.set('urgency', subtask.importance == true ? 1 : 0)
    bodyFormData.set('name', subtask.name)
    return apiClient.post('/task/update', bodyFormData)
  },
  completedSubTask(id) {
    return apiClient.put('/task/' + id)
  },
  addTask(task) {
    //+
    var bodyFormData = new FormData()
    bodyFormData.set('name', task.name)
    bodyFormData.set('description', 'zzz')
    return apiClientPost.post(`/list`, bodyFormData)
  },
  addSubTask(subtask) {
    var bodyFormData = new FormData()
    bodyFormData.set('name', subtask.name)
    bodyFormData.set('listt_id', subtask.task_id)
    bodyFormData.set('description', subtask.description)
    bodyFormData.set('urgency', subtask.importance == true ? 1 : 0)
    bodyFormData.set('name', subtask.name)
    return apiClient.post('/task', bodyFormData) //??
  },
  deleteTask(id) {
    return apiClient.delete('/list/' + id)
  },
  deleteSubTask(id) {
    return apiClient.delete('/task/' + id)
  },
  getSubTasks(task_id) {
    return apiClient.get('/subtasks/?task_id=' + task_id)
  },
  getSubtask(id) {
    return apiClient.get('/task/' + id)
  }
}
