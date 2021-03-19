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
import FileVisor from '../FileVisor';


export default function ClientOptions(){
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
    const [directory, setDirectory] = useState(null);
    useEffect(() => {
        setDirectory([makeTree(user.directory)])
    },[])
    return(
        <>
            <Tab.Container   defaultActiveKey="first">
                <Row className="options-style">
                    <Col sm={3}>
                    <Nav variant="pills" className="flex-column">
                        <Nav.Item>
                        

                        <Nav.Link  eventKey="first">
                            <Icon.FileEarmark size={50}/>
                            Archivos
                        </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link  eventKey="second">
                            <Icon.Images size={50}/>
                            Imagenes
                        </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                        <Nav.Link eventKey="third">
                            <Icon.Camera size={50}/>
                            Videos
                        </Nav.Link>
                        </Nav.Item>
                    </Nav>
                    </Col>
                    <Col sm={9}>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            {   directory &&
                                <FileVisor paths={directory}/>
                            }
                            
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                        2
                        </Tab.Pane>
                        <Tab.Pane eventKey="third">
                            ssss
                        </Tab.Pane>
                    </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </>
    );
}