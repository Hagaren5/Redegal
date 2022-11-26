import axios from 'axios'

const instance = axios.create({
    baseURL: "https://front-test-api.herokuapp.com"
})

export default instance