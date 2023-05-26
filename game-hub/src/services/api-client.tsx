import axios from 'axios'

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'd66c573936d4438dbfe098fb729000bc',
  },
})
