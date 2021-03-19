import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import TableFiles from './TableFiles';
import {
    Container,
    Row,
    Col
} from 'react-bootstrap';
import Path from './Path';


export default function FileVisor(props){
    const {paths} = props;
    const [path,setPath] = useState(null);

    useEffect(() => {
        setPath({paths});
    },[]);
    const onClickPath = (index) => {
        
        const tmp = [...path.paths];
        console.log("index ", index + 1, " number", tmp.length - index + 1)
        tmp.splice(index + 1,tmp.length - index + 1);
        console.log("tmp ",tmp)
        setPath({paths:tmp});
    } 
    const onClick = (index, file) => {
        var tmp = [...path.paths];
        if(file.children){
            tmp.push(file);
        }
        setPath({paths:tmp});

    }
    return(
        <>
            
            {   path &&
                <>
                    <Path path={path.paths} onClickPath={onClickPath}/>
                
                    <TableFiles 
                        onClick={onClick}
                        files={path.paths[path.paths.length - 1].children} 
                        titles={['name',"size"]}/>
                </>
            }
        </>
    );
}