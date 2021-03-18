import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Path.css'
import {
    Breadcrumb
} from 'react-bootstrap';


export default function Path(props){
    const {
        path,
        onClickPath
    } = props;
    const onClick = (e) => {
        // console.log(e.currentTarget.id)
        const index = parseInt(e.currentTarget.id);
        onClickPath(index);
    }
    return(
        <>
            <Breadcrumb>
                { path &&
                    path.map((item,i) => {
                        if (i == path.length - 1){
                            return <Breadcrumb.Item id={i} key={i} active>{item.name}</Breadcrumb.Item>
                        }
                        return <Breadcrumb.Item id={i} key={i} onClick={onClick}>{item.name}</Breadcrumb.Item>
                    })
                }
            </Breadcrumb>
        </>
    );
}