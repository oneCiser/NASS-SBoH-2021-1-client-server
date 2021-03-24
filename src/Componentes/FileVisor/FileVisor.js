import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
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
    const {
        paths,
        size,
        onSyncClick,
        onNewFolder
    } = props;
    const [path,setPath] = useState(null);

    useEffect(() => {
        setPath({paths});
    },[]);
    const onClickPath = (index) => {
        
        const tmp = [...path.paths];
        tmp.splice(index + 1,tmp.length - index + 1);
        setPath({paths:tmp});
    } 
    const onClick = (index, file) => {
        var tmp = [...path.paths];
        if(file.children){
            tmp.push(file);
        }
        setPath({paths:tmp});

    }
    const [p, setP] =useState(null)
    var im = new Image();
    im.onload = function() {
        console.log(this.width + 'x' + this.height);
      }
    File.getImg("http://nass2.bucaramanga.upb.edu.co/api/file/img/60582f966388e6c5fb10da27")
    .then(i => setP(i.objectUrl))
    im.src = p;
    
    return(
        <>
            <img src={p}/>
            <NavFiles 
                size={size}
                onSyncClick={onSyncClick}
                onNewFolderClick={onNewFolder}/>
            
            {   path &&
                <>
                    <Path path={path.paths} onClickPath={onClickPath}/>
                
                    <TableFiles 
                        onClick={onClick}
                        files={path.paths[path.paths.length - 1].children} 
                        titles={['name',"size","modified"]}/>
                </>
            }
        </>
    );
}