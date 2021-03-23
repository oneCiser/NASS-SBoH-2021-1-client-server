import axios from 'axios';
import Auth from './auth';
import URL from '../configuration/enviroment';
class File{
    constructor(){
        this.URL = URL.base + URL.file;
    }
    async getImages(){
        const user = this.Auth.getUser();
        const opt = {
            method:'GET',
            url:this.URL + 'images',
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