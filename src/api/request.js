import axios from 'axios'

async function post(request){
    let payload = {
        method: 'post',
        url: request.url,
        data: request.data,
        headers: {'Content-Type': 'application/json'}
    }
    let response = await axios(payload)
    return response.data
}

async function get(request){
    let payload = {
        method: 'get',
        url: request.url,
        params: request.data,
        headers: {'Content-Type': 'application/json'}
    }
    let response = await axios(payload)
    return response.data
}

export default requests = {
    post,
    get
}