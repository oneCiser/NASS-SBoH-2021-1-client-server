import 'bootstrap/dist/css/bootstrap.min.css';
import RowTableFiles from './RowTableFiles';
import React, {useState, useRef, useEffect} from 'react';
import * as Icon from 'react-bootstrap-icons';
import {
    Button,
    Row,
    Col,
    Dropdown,
    Modal,
    Form
} from 'react-bootstrap';

export default function BodyTableFiles(props){
    
    const [showShareModal, setShowShareModal] = useState(false);
    const [selectFile, setSelectFile] = useState(null);
    const {
        titles,
        deleteFile,
        renameFile,
        downloadFile,
        files,
        onClick
    } = props;
    let showShare =() => {
       setShowShareModal(!showShareModal);
       setSelectFile(null)
        
        
    }
    
    let showShareFile = (index, file) => {
        setShowShareModal(!showShareModal);
        setSelectFile(file)
    }
    console.log('Select file:', selectFile)
    return(
        <>
            <tbody className="overflow-auto">
                {
                    files.map((file, i) => {
                        return (
                            <RowTableFiles 
                                onClick={onClick}
                                keyId={i} 
                                key={i+"-BodyTableFiles-"+file['_id']} 
                                name={i}
                                onClickShare={showShareFile}
                                titles={titles}
                                downloadFile={downloadFile}
                                deleteFile={deleteFile}
                                renameFile={renameFile}
                                file={file} />
                                )
                    })
                }
            </tbody>
            {/* {   selectFile && */}
                <Modal show={showShareModal} onHide={showShare}>
                    <Modal.Header closeButton>
                        <Modal.Title>
                                <Icon.Share size={25}/> {' '}
                                Share {selectFile ? selectFile.name : ""}
                            </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group>
                                    <Form.Label>
                                        New name
                                    </Form.Label>
                                    <Form.Control type="text" placeholder="Name without extension"/>
                                </Form.Group>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={showShare}>
                                Cerrar
                        </Button>
                        <Button variant="primary" onClick={showShare}>
                            Aceptar
                        </Button>
                    </Modal.Footer>
                </Modal>
            {/* } */}
        </>
    );
}