import axios from 'axios'
import { getIP } from '../utils/ip'

const API = axios.create({ baseURL: 'http://' + getIP() + '/api/auth' })

// axios interceptor
/*API.interceptors.request.use((config) => {
    const token = localStorage.getItem('authToken')
    if (token)
        config.headers.common['X-Auth-Token'] = token
    return config
})*/

// handle load user
const load = async () => {
    try {
        const res = await API.get(
            '/load',
        )
        return res
    } catch (error) {
        console.log(error)
        return error
    }
}

// handle user log in
const logIn = async (email, password) => {
    try {
        const res = await API.post(
            '/logIn',
            {
                email: email,
                password: password,
            }
        )
        return res
    } catch (error) {
        console.log(error)
        return error
    }
}

// handle user sign up
const signUp = async (username, email, password) => {
    try {
        const res = await API.post(
            '/signUp',
            {
                username: username,
                email: email,
                password: password,
            }
        )
        return res
    } catch (error) {
        console.log(error)
        return error
    }
}

export {
    load,
    logIn,
    signUp,
}