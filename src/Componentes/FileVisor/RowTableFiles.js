import 'bootstrap/dist/css/bootstrap.min.css';
import React, {useState, useEffect} from 'react';
import {
    Button,
    Row,
    Col,
    Dropdown
} from 'react-bootstrap';
import * as Icon from 'react-bootstrap-icons';
import './RowTableFiles.css';

export default function RowTableFiles(props){
    const {
        titles,
        file,
        keyId,
        onClick
    } = props;
    var icon = "";
    if(file.children){
        icon = "folder";
    }
    else{
        icon = "file";
    }
    
    return(
        <>
            <tr>
                <td width="10px">
                    {
                        icon == "folder" ? (<Icon.Folder size={20}/>) : 
                        (<Icon.FileEarmark size={20}/>)
                    }
                </td>
                {
                    titles.map((title, i) => {
                        if(title == "name"){
                            return (
                                
                                    
                                <td 
                                    key={keyId+"-"+i+"-RowTableFiles"+file['_id']} 
                                    className="name-file">
                                    <Row style={{justifyContent:"flex-start"}}>
                                        <Col>
                                            <a className="name-file-a" onClick={() => onClick(keyId, file)}>
                                                {
                                                    file[title]
                                                }
                                            </a>
                                        </Col>
                                        <Col>
                                            <Dropdown className="file-option-drop">
                                                    <Dropdown.Toggle >
                                                        <Icon.ThreeDotsVertical color="black" className="file-option-button-svg "/>
                                                    </Dropdown.Toggle>
                                                    <Dropdown.Menu>
                                                        <Dropdown.Item>
                                                            Delete
                                                        </Dropdown.Item>
                                                        <Dropdown.Item>
                                                            Rename
                                                        </Dropdown.Item>
                                                        <Dropdown.Item>
                                                            Share
                                                        </Dropdown.Item>
                                                    </Dropdown.Menu>
                                                
                                            </Dropdown>
                                        </Col>
                                    
                                    </Row>
                                    
                                </td>)
                        }
                        if(title == "size" && !file[title]){
                            return(
                                <td 
                                    key={keyId+"-"+i+"-RowTableFiles"+file['_id']}>
                                    {
                                        file.children.length == 1 ? 
                                            (file.children.length+" item") :
                                            (file.children.length+" items")
                                    }
                                </td>
                            );
                        }
                        else if(title == "size" && file[title]){
                            return(
                                <td 
                                    key={keyId+"-"+i+"-RowTableFiles"+file['_id']}>
                                    {
                                        (file[title]/1024).toFixed(2) + " KB"
                                    }
                                </td> 
                            );
                        }
                        return (<td 
                                    key={keyId+"-"+i+"-RowTableFiles"+file['_id']}>
                                    {
                                        file[title]
                                    }
                                </td>);
                    })
                }
            </tr>
        </>
    );
}