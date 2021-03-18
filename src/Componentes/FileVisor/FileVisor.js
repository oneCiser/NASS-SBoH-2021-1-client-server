import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Breadcrumb
} from 'react-bootstrap';
import Path from './Path';


export default function FileVisor(props){
    const {paths} = props;
    const [path,setPath] = useState({paths});
    const onClickPath = (index) => {
        
        const tmp = [...path.paths];
        console.log("index ", index + 1, " number", tmp.length - index + 1)
        tmp.splice(index + 1,tmp.length - index + 1);
        console.log("tmp ",tmp)
        setPath({paths:tmp});
    } 
    return(
        <>
            <Path path={path.paths} onClickPath={onClickPath}/>
        </>
    );
}