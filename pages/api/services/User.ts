import {
    UserLogin
} from "../../../util/types";
import axios from "axios";
import {url} from '../../../util/url'

let token: string
if (typeof localStorage !== 'undefined') {
  token = localStorage.getItem('token')
    ? localStorage.getItem('token') || ''
    : ''
}

export class UserServices {
    async login(body: UserLogin) {
        let response = await axios.post(`${url}/user/login`, body);
        return response.data;

    } 
}