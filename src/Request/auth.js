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

    async CreateUser(username, email, name, type_user, maxsize, access_token){

        const opt = {
            method:'POST',
            url:this.URL,
            headers:{
                'Content-Type':'application/json',
                'Authorization':`Bearer ${access_token}`

            },
            data:{
                username,
                email,
                name,
                type_user,
                maxsize
            }
        }
    }
}

export default new Auth();
