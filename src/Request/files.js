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
    async upload(file,path){
        const formData = new FormData();
        formData.append('file',file,file.name);
        formData.append('url',path);
        const user = Auth.getUser();
        const opt = {
            method:'POST',
            url:this.URL + 'upload',
            headers:{
                'Content-Type': 'multipart/form-data',
                'Authorization':`Bearer ${user.access_token}`
            },
            data:formData
        }
        
           return axios(
                opt
            )
    }
    async delete(_id){
        const user = Auth.getUser();
        const opt = {
            method:'POST',
            url:this.URL + 'remove',
            headers:{
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${user.access_token}`
            },
            data:{
                _id
            }
        }
        
           return axios(
                opt
            )
    }
    async deleteFolder(folder){
        const user = Auth.getUser();
        const opt = {
            method:'DELETE',
            url:this.URL + 'folder',
            headers:{
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${user.access_token}`
            },
            data:{
                folder
            }
        }
        
           return axios(
                opt
            )
    }
    async renameFile(_id, name, url){
        const user = Auth.getUser();
        const opt = {
            method:'POST',
            url:this.URL + 'move',
            headers:{
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${user.access_token}`
            },
            data:{
                _id,
                name,
                url
            }
        }
        
           return axios(
                opt
            )
    }
    async renameFolder(oldFolder,newFolder){
        const user = Auth.getUser();
        const opt = {
            method:'PUT',
            url:this.URL + 'folder',
            headers:{
                'Content-Type': 'application/json',
                'Authorization':`Bearer ${user.access_token}`
            },
            data:{
                oldFolder,
                newFolder
            }
        }
        
           return axios(
                opt
            )
    }
}

export default new File();