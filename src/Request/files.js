import axios from 'axios';
import Auth from './auth';
import URL_p from '../configuration/enviroment';
class File{
    constructor(){
        this.URL = URL_p.base + URL_p.file;
    }
    async getImages(){
        const user = Auth.getUser();
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
    async getDirectory(){
        const user = Auth.getUser();
        const opt = {
            method:'GET',
            url:this.URL + 'files',
            headers:{
                'Content-Type':'application/json',
                'Authorization':`Bearer ${user.access_token}`
            },
        }
        
           return axios(
                opt
            )
    }

    fetchImg(url){
        
        const user = Auth.getUser();
        const opt = {
            method:'GET',
            url:url,
            headers:{
                'Content-Type':'application/json',
                'Authorization':`Bearer ${user.access_token}`,
            },
        }
        return new Promise((resolve, reject) => {
            axios(opt)
            .then(res => {
                var objectUrl = `data:image/png;base64,${res.data}`;
                resolve({objectUrl});
            })
            .catch(err => reject(err)); 
        })
    }
    
    getImg(url){
        const blob = this.fetchImg(url)
        .then(objectUrl => {
            
            return objectUrl
        })
        .catch(err => console.log(err));
        
        return blob
        
    }
}

export default new File();