import React, {useState, useEffect} from 'react';
import makeTree from './TreeMaker';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ClientOptions.css'
import * as Icon from 'react-bootstrap-icons';
import {
    Tab, 
    Row,
    Col,
    Nav
} from 'react-bootstrap';
import {File} from '../../Request';
import FileVisor from '../FileVisor';


export default function ClientOptions(){
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
    const [directory, setDirectory] = useState(null);
    
    useEffect(() => {
        reload()
        
    },[])
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
        console.log('reload')
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
    return(
        <>
            <Tab.Container   defaultActiveKey="files">
                <Row className="options-style">
                    <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                        

                        <Nav.Link  eventKey="files">
                            <Icon.FileEarmark size={25}/>
                            Files
                        </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link  eventKey="photos">
                            <Icon.Images size={25}/>
                            Photos
                        </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="videos">
                            <Icon.Film size={25}/>
                            Videos
                        </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="shared">
                            <Icon.People size={25}/>
                            Shared
                        </Nav.Link>
                        </Nav.Item>

                    </Nav>
                    </Col>
                    <Col>
                    <Tab.Content>
                        <Tab.Pane eventKey="files">
                            {   directory &&
                                <FileVisor paths={directory}
                                    onNewFolder={newFolder}
                                    size={{maxisze:user.maxsize,size:user.size}}
                                    onSyncClick={reload}/>
                            }
                            
                        </Tab.Pane>
                        <Tab.Pane eventKey="photos">
                        2
                        </Tab.Pane>
                        <Tab.Pane eventKey="videos">
                            ssss
                        </Tab.Pane>
                        <Tab.Pane eventKey="shared">
                            ssss
                        </Tab.Pane>
                    </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </>
    );
}