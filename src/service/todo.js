
import axios from '../utils/axios'



export function todolist(data) {
    return axios.post('/todolist', data);
}

export function createtodo(data) {
    return axios.post('/todo', data);
}




