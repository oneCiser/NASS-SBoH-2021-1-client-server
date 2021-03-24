import React, {useState, useRef} from 'react';
import * as Icon from 'react-bootstrap-icons';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Navbar,
    Form,
    Button,
    Nav,
    Modal

} from 'react-bootstrap';
export default function NavFiles(props){
    const {
        onNewFolderClick
    } = props;
    const [showNewFolder, setShowNewFolder] = useState(false);
    const folderName = useRef(null);

    let showCreateFolder = () => {
        setShowNewFolder(!showNewFolder)
    }
    let handleCreateFolder = () => {
        if(folderName.current.value){
            var newFolder = {
                name:folderName.current.value,
                children:[]
            }
            onNewFolderClick(newFolder);
        }
        showCreateFolder()
    }
    const {
        size,
        onSyncClick} = props;
    return(
        <>
            <Navbar bg="light" expand="lg" style={{ position: "sticky", top: 0, }}>
                <Form>
                    <Button variant="outline-primary" onClick={showCreateFolder}>
                        <Icon.FolderPlus size={25}/>
                        Folder
                    </Button>{' '}
                    <Button variant="outline-primary">
                        <Icon.FileEarmarkArrowUp size={25}/>
                        Upload
                    </Button>{' '}
                    <Button variant="outline-primary" onClick={onSyncClick}>
                        <Icon.ArrowClockwise size={25}/>
                        Sync
                    </Button>
                </Form>
                <Nav className="mr-auto">
                
                </Nav>
                <Navbar.Brand>{(100*size.size/size.maxisze).toFixed(1)}/100%</Navbar.Brand>

                
            </Navbar>
            <Modal show={showNewFolder} onHide={showCreateFolder}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        <Icon.FolderPlus size={25}/> {' '}
                        New folder
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>
                                Folder name
                            </Form.Label>
                            <Form.Control type="text" placeholder="Name" ref={folderName}/>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={showCreateFolder}>
                            Cerrar
                        </Button>
                    <Button variant="primary" onClick={handleCreateFolder}>
                        Aceptar
                    </Button>
                </Modal.Footer>
                
            </Modal>
        </>
    );
}