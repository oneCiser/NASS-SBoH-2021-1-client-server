import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import makeTree from './TreeMaker';
import TableFiles from './TableFiles';
import NavFiles from './NavFiles';
import {File} from '../../Request';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
import Path from './Path';


export default function FileVisor(props){
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
    const [directory, setDirectory] = useState(null);
    
    useEffect(() => {
        reload()
        
    },[]);
    let reload = () => {
        File.getDirectory()
        .then((res) => {
            var tmpUser = {...user}
            tmpUser.directory = res.data.files;
            tmpUser['size'] = tmpUser.directory.reduce((acc, el) => acc + el.size, 0)
            setUser(tmpUser)
            setDirectory([makeTree(res.data.files)]);
        })
        .catch((error) => {
            console.log(error);
        })
    }

;
    const onClickPath = (index) => {
        
        const tmp = [...directory];
        tmp.splice(index + 1,tmp.length - index + 1);
        setDirectory(tmp);
    } 
    const onClick = (index, file) => {
        var tmp = [...directory];
        if(file.children){
            tmp.push(file);
        }

        setDirectory(tmp);

    }

    let newFolder = (folder) => {
        var tmp = [...directory];
        var currentFolder = {...tmp[tmp.length-1]};
        var found = false;
        for (let i = 0; i < currentFolder.children.length; i++) {
            
            if(currentFolder.children[i].children &&
                currentFolder.children[i].name == folder.name
                )
            {
                found = true;
                break;
            }
            
            
        }
        
        if(!found){
            currentFolder.children.push(folder);
            console.log(tmp)
            setDirectory(tmp);
        }

    }
    let newFile = (file) => {
        let path = [];
        directory.forEach((element, i) => {
            if(i > 0) path.push(element.name)
        });
        var tmp = [...directory];
        var currentFolder = {...tmp[tmp.length-1]};
        const url = path.join('/');
        File.upload(file, url)
        .then(res => {
            currentFolder.children.push(res.data);
            tmp[tmp.length-1] = currentFolder;
            setDirectory(tmp);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    let deleteFile = (index, _id) => {
        
        var tmp = [...directory];
        var currentFolder = {...tmp[tmp.length-1]}; 
        

        if(_id){
            File.delete(_id);
        }
        else{
            let path = [];
            directory.forEach((element, i) => {
                if(i > 0) path.push(element.name)
            });
            path.push(currentFolder.children[index].name)
            const url = path.join('/');
            File.deleteFolder(url);
        }
        currentFolder.children.splice(index,1);
        tmp[tmp.length-1] = currentFolder;
        setDirectory(tmp)

    }

    let renameFile = (index, _id, new_name) => {
        var tmp = [...directory];
        var currentFolder = {...tmp[tmp.length-1]}; 
        var tmpFile = {...currentFolder.children[index]};
        let path = [];
        if(_id){
            
            directory.forEach((element, i) => {
                if(i > 0) path.push(element.name)
            });
            const url = path.join('/');
            tmpFile.url = url;
            tmpFile.name = new_name;
            tmpFile.modified = new Date(Date.now());
            File.renameFile(_id, new_name, url);
        }
        else{
            directory.forEach((element, i) => {
                if(i > 0) path.push(element.name)
            });
            const newPath = [...path]
            newPath.push(new_name)
            const newNameFolder = newPath.join('/');
            path.push(currentFolder.children[index].name)
            const oldFolder = path.join('/');
            tmpFile.name = new_name;
            File.renameFolder(oldFolder,newNameFolder);
        }
        currentFolder.children[index] = tmpFile
        tmp[tmp.length-1] = currentFolder;
        setDirectory(tmp)
    }
    
    // const [p, setP] =useState(null)
    // var im = new Image();
    // im.onload = function() {
    //     console.log(this.width + 'x' + this.height);
    //   }
    // File.getImg("http://nass2.bucaramanga.upb.edu.co/api/file/img/60582f966388e6c5fb10da27")
    // .then(i => setP(i.objectUrl))
    // im.src = p;
    
    return(
        <>
            
            {   user.size &&
                <NavFiles 
                    size={{size:user.size,maxsize:user.maxsize}}
                    newFile={newFile}
                    onSyncClick={reload}
                    onNewFolderClick={newFolder}/>
            }
            
            {   directory &&
                <>
                    <Path path={directory} onClickPath={onClickPath}/>
                    
                    <TableFiles 
                        deleteFile={deleteFile}
                        renameFile={renameFile}
                        onClick={onClick}
                        files={directory[directory.length - 1].children} 
                        titles={['name',"size","modified","share"]}/>
                    
                </>
            }
        </>
    );
}