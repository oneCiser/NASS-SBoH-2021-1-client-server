import axios from 'axios';
import Auth from './auth';
import URL_p from '../configuration/enviroment';

class Admin{
    constructor(){
        this.URL = URL_p.base + URL_p.admin;
    }
    async getUser(){
        const user = Auth.getUser();
        
        const opt = {
            method:'GET',
            url:this.URL + 'users',
            headers:{
                'Content-Type':'application/json',
                'Authorization':`Bearer ${user.access_token}`
            },
        }
        
        return axios(
            opt 
        )
    }

}
export default new Admin();