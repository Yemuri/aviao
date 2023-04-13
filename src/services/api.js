import axios from 'axios'

const api = axios.create({
    baseURL: 'https://airlabs.co/api/v9/'
})

export default api