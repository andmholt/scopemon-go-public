import axios from 'axios'
import { getIP } from '../utils/ip'

const API = axios.create({ baseURL: 'http://' + getIP() + '/api/user' })

// axios interceptor
/*API.interceptors.request.use((config) => {
    const token = localStorage.getItem('authToken')
    if (token)
        config.headers.common['X-Auth-Token'] = token
    return config
})*/

// gets leaderboard data
const getLeaderboard = async () => {
    try {
        const res = await API.get(
            '/getLeaderboard'
        )
        return res.data
    } catch (error) {
        console.log(error)
        return error
    }
}

// gets trophies given userID
const getTrophies = async (userID) => {
    try {
        const res = await API.get(
            '/getTrophies/' + userID
        )
        return res.data
    } catch (error) {
        console.log(error)
        return error
    }
}

// gets user data
const getUserFromEmail = async (userEmail) => {
    try {
        const res = await API.get(
            '/getFromEmail/' + userEmail
        )
        return res.data
    } catch (error) {
        console.log(error)
        return error
    }
}

// gets user from userID
const getUserFromID = async (userID) => {
    try {
        const res = await API.get(
            '/getFromUserID/' + userID
        )
        return res.data
    } catch (error) {
        console.log(error)
        return error
    }
}

// gets all users
const getAll = async () => {
    try {
        const res = await API.get(
            '/getAll'
        )
        console.log(res.data)
        return res.data
    } catch (error) {
        console.log(error)
        return error
    }
}

export {
    getUserFromEmail,
    getUserFromID,
    getAll,
    getLeaderboard,
}