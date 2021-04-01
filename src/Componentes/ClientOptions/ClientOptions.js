import React, {useState, useEffect} from 'react';
import ReactPlayer from 'react-player'
import 'bootstrap/dist/css/bootstrap.min.css';
import './ClientOptions.css';
import Gallerys from '../Gallery';
import * as Icon from 'react-bootstrap-icons';
import {
    Tab, 
    Row,
    Col,
    Nav
} from 'react-bootstrap';

import FileVisor from '../FileVisor';


export default function ClientOptions(){


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
                            
                                <FileVisor />
                            
                            
                        </Tab.Pane>
                        <Tab.Pane eventKey="photos">
                            <Gallerys/>
                        </Tab.Pane>
                        <Tab.Pane eventKey="videos">
                        Use este componente de video, ya que permite consultar mediante stream, no como la mierda de html5 que no lo hace
                        {/* <ReactPlayer controls url='http://localhost:8080/api/file/loadvideo/6065664bebc895373013547f/604305a999536a12341a54cd' /> */}
                        <ReactPlayer controls url='http://nass2.bucaramanga.upb.edu.co/api/file/loadvideo/6064e5cc5f796b412bf7d8fa/604305a999536a12341a54cd' /> 
                        {/* <ReactPlayer controls url='http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' /> */}
                        
                        </Tab.Pane>
                        <Tab.Pane eventKey="shared">

                        </Tab.Pane>
                    </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </>
    );
}