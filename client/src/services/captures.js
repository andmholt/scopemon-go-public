import axios from 'axios'
import { getIP } from '../utils/ip'

const API = axios.create({ baseURL: 'http://' + getIP() + '/api/captures' })

// gets all captures
const getAll = async () => {
    try {
        const res = await API.get(
            '/get'
        )
        console.log('res.data', res.data)
        return res.data
    } catch (error) {
        console.log(error)
        return error
    }
}

// verifies a capture
const verify = async (captureID, userID) => {
    try {
        const res = await API.post(
            '/verify', {
                captureID: captureID,
                userID: userID,
            }
        )
        return res
    } catch (error) {
        console.log(error)
        return error
    }
}

// nullifies a capture
const nullify = async (captureID, userID) => {
    try {
        const res = await API.post(
            '/nullify', {
                captureID: captureID,
                userID: userID,
            }
        )
        return res
    } catch (error) {
        console.log(error)
        return error
    }
}

const newCapture = async (imgURL, userID, capturedID) => {
    try {
        const res = await API.post(
            '/new', {
                capturedID: capturedID,
                userID: userID,
                imgURL: imgURL,
            }
        )
        return res
    } catch (error) {
        console.log(error)
        return error
    }
}

export {
    getAll,
    verify,
    nullify,
    newCapture
}