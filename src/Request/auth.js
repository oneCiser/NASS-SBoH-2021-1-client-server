import axios from 'axios';
import URL from '../configuration/enviroment';
class Auth {
    constructor(){
        this.URL = URL.base + URL.auth;
    }
    async Login(username, password) {
        const opt = {
            method:'POST',
            url:this.URL + 'login',
            headers:{'Content-Type':'application/json'},
            data:{
                username:username,
                password:password
            }
        }
    
        
           return axios(
                opt
            )
        
        
    }

    async CreateUser(){

    }
}

export default new Auth();
