import React, {useState, useEffect} from 'react';
import {
    Navbar, 
    Dropdown, 
    Button, 
    FormControl, 
    Nav, 
    Form
} from 'react-bootstrap';
import './Menu.css';

export default function Menu(props) {
    const [user, setUser] = useState(props.user);
    return(
        <>
            <Navbar bg="primary" expand="lg" variant="dark">
                <Navbar.Brand href="#home">
                    NASS-SBoH
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto" >
                        
                    </Nav>
                    <Form inline>
                        
                        <Dropdown >
                            <Dropdown.Toggle 
                                className="menu-drop"
                                style={{backgroundColor:"#6c5ce7"}}  
                                id="dropdown-basic">
                                {user.username || "Menu"}
                            </Dropdown.Toggle>

                            <Dropdown.Menu align="right" >
                                <Dropdown.Header>{user.type_user || "None"}</Dropdown.Header>
                                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
} 