import React, {useState, useEffect} from 'react';

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
import VideoVisor  from '../VideoVisor';

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
                            <VideoVisor/>
                            {/* <video width="100%" height="100%" controls>
                                <source src="http://nass3.bucaramanga.upb.edu.co/api/file/loadvideo/6064e5cc5f796b412bf7d8fa/604305a999536a12341a54cd" />
                            </video> */}
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