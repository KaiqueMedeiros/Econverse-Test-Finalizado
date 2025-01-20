import axios from 'axios'

const api = axios.create({
  baseURL: 'https://econverse.digital/teste-front-end/junior.json',
})

export default api
