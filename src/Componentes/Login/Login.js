
//import { render } from '@testing-library/react';
import React, {useState, useEffect} from 'react';
import {Form, Container, Image, Row , Button} from 'react-bootstrap';
import {Alertas} from '../Toast';
import TriangleAlert from '../../static/alertas/exclamation-triangle.svg' 
import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css';
import '../Toast/Toasts.css';
import login from '../../static/login.svg';
import {
    useHistory
  } from "react-router-dom";

import {Auth} from '../../Request';

export default function Login(props){
    let history = useHistory();


    const [auth, setAuth] = useState({userName:'', userPassword:''});
    
    const [alerta, setAlerta] = useState([]);
    let getCredentials = (event) => {
        const name = event.currentTarget.name;
        const value = event.currentTarget.value;
        if(name == 'userName'){
            setAuth({
                userName:value
            });
        }
        else if (name == 'userPassword'){
            setAuth({
                userName:auth['userName'],
                userPassword:value 
            });
        }
    }

    let autentificar = () => {
        if(auth.userName != '' && auth.userPassword != ''){
            Auth.Login(auth.userName, auth.userPassword)
            .then((res) => {

                localStorage.setItem('user',JSON.stringify(res.data));
                if(res.data.type_user == 'ADMIN'){
                    history.push('/admin');
                }
                else if(res.data.type_user == 'CLIENT'){
                    history.push('/client');
                }
                
            })
            .catch((err) => {
                setAlerta([{
                    title: 'Warning',
                    description: 'Credenciales invalidas',
                    backgroundColor:'#f39c12',
                    icon:TriangleAlert
                }]);
            });
            
        }
        else {
            setAlerta([{
                title: 'Warning',
                description: 'El usuario y la clave no pueden estar vacios',
                backgroundColor:'#f39c12',
                icon:TriangleAlert
            }]);
        }

        
        
    };
    return(
        <div className="App">
            <div className="Login">
                <Form className="form-login">
                    <Form.Group>
                        <Container>
                            <Row className="justify-content-md-center">
                                <Image className="Logo" src={login}/>
                            </Row>
                            
                        </Container>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>
                            Username
                        </Form.Label>
                        <Form.Control type="text" placeholder="Enter username" name="userName" onChange={getCredentials}/>
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>
                            Password
                        </Form.Label>
                        <Form.Control type="password" placeholder="Password" name="userPassword" onChange={getCredentials}/> 
                    </Form.Group>
                    <Form.Group>
                        <Button onClick={autentificar} variant="primary" block>
                            Iniciar sesión
                        </Button>
                    </Form.Group>
                    <Form.Group>
                        {console.log('create',alerta)}
                       <Alertas toastList={alerta} position="rel-top-right"/>
                    </Form.Group>
                </Form>
            </div>
        </div>
    );
}