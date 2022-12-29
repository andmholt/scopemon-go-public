import axios from 'axios'
import { getIP } from '../utils/ip'

const API = axios.create({baseURL: 'http://' + getIP() + '/api/captures' }) // Tuka Server
const CLOUD = axios.create({baseURL: "https://api.cloudinary.com/v1_1/scopemon-go" }) // Cloudinary Server

const cloudinaryCapturePost = async (img) => {

    // create FormData and append all relevant parameters
    let formData = new FormData()
    formData.append('file', `data:image/jpg;base64,${img.base64}`)
    formData.append('api_key', 938735144651717)
    formData.append('upload_preset', "capture_img")
    //formData.append('upload_preset', 'capture_img')

    try {
        console.log("DFNIWA")
        const res = await CLOUD.post(
            '/image/upload/',
            formData
        )
        console.log("--------------------asdasdgasdg-----------")
        console.log(res.data.url)
        console.log("1111-------------------------")
        return res
    } catch (error) {
        console.log(error.response.data)
        return error
    }
    // let file = img;
    //let reader = new FileReader();

    // reader.onloadend = async (e) => {
    //     // create FormData and append all relevant parameters
    //     let formData = new FormData()
    //     formData.append('file', img)
    //     formData.append('api_key', 938735144651717)
    //     formData.append('upload_preset', "capture_img")
    //     //formData.append('upload_preset', 'capture_img')

    //     console.log(img)
    //     try {
    //         console.log("DFNIWA")
    //         const res = await CLOUD.post(
    //             '/image/upload/',
    //             formData
    //         )
    //         console.log("--------------------asdasdgasdg-----------")
    //         console.log(res)
    //         console.log("1111-------------------------")
    //         return res
    //     } catch (error) {
    //         console.log(error)
    //         return error
    //     }
    // }

    // reader.readAsDataURL(file);
}

const newCapture = async (imgURL, userID, capturedID) => {

    const cloudPost = await cloudinaryCapturePost(imgURL)

    // console.log("-------------------------------")
    // console.log(cloudPost)
    // console.log("-------------------------")

    // console.log(cloudPost)
    // if (cloudPost != null) {
    //     return
    // }

    try {
        const res = await API.post(
            '/new', {
                capturedID: capturedID,
                userID: userID,
                imgURL: cloudPost.data.url,
            }
        )
        return res
    } catch (error) {
        console.log(error)
        return error
    }
}

export {
    newCapture
}