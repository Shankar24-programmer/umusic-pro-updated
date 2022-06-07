import axios from 'axios';
import React, { useState} from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { FaShopify } from "react-icons/fa";
import {Link} from 'react-router-dom'
export default function NewApp() {
    const [data, setData] = useState({name: "", client_id: "", client_secret: "", url: "", state: ""});

    const nameHandler = (event) => {
        setData((previousvalue) => {
            return {...previousvalue, name: event.target.value};
        });
    };

    const clientIdHandler = (event) => {
        setData((previousvalue) => {
            return {...previousvalue, client_id: event.target.value};
        });
    };

    const clientSecretHandler = (event) => {
        setData((previousvalue) => {
            return {...previousvalue, client_secret: event.target.value};
        });
    };

    const urlHandler = (event) => {
        setData((previousvalue) => {
            return {...previousvalue, url: event.target.value};
        });
    };

    const state1Handler = (event) => {
        setData((previousvalue) => {
            return {...previousvalue, state: event.target.value};
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let data1 = [data];
        console.log(data1);
        axios.post('http://localhost:9003/application', data1);
    }
    
    return (
        <div>
            <Row>
                <Col sm={3}>

                </Col>
                <Col sm={9} style={{ 'marginTop': '-790px', 'marginLeft': '-11px' }}>
                    <div className="addnewapp" style={{ 'width': '950px' }} >
                        <h2 style={{ 'fontWeight': 'normal' }}><FaShopify color="#B6B6B6" fontSize="40px" style={{ 'marginRight': '20px', 'marginTop': '-8px' }} />Add Application</h2>

                        <hr></hr>
                    </div>
                    
                    <Form style={{ 'width': '50%', 'marginLeft': '180px', 'marginTop': '30px' }}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name<span style={{ 'marginLeft': '20px', 'fontSize': '14px', 'color': '#C8C8C8' }}>Enter the name</span></Form.Label>
                            <Form.Control type="name" onChange={nameHandler} />

                        </Form.Group>

                        {/* <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>ID<span style={{ 'marginLeft': '20px', 'fontSize': '14px', 'color': '#C8C8C8' }}>Enter the ID</span></Form.Label>
                            <Form.Control type="name" />
                        </Form.Group> */}

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Client ID<span style={{ 'marginLeft': '20px', 'fontSize': '14px', 'color': '#C8C8C8' }}>Enter the Client ID</span></Form.Label>
                            <Form.Control type="name" onChange={clientIdHandler}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Client Secret<span style={{ 'marginLeft': '20px', 'fontSize': '14px', 'color': '#C8C8C8' }}>Enter the Client Secret</span></Form.Label>
                            <Form.Control type="name" onChange={clientSecretHandler}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Redirect URLs<span style={{ 'marginLeft': '20px', 'fontSize': '14px', 'color': '#C8C8C8' }}>Enter the Redirect URLs</span></Form.Label>
                            <Form.Control type="name" onChange={urlHandler}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>State<span style={{ 'marginLeft': '20px', 'fontSize': '14px', 'color': '#C8C8C8' }}>Enter the State</span></Form.Label>
                            <Form.Control type="name" onChange={state1Handler}/>
                        </Form.Group>
                    </Form>
                    <div className="add-btn">
                        <div className="add-btn1">
                            <Button variant="outline-secondary">Cancel</Button>
                        </div>
                        <div className="add-btn2">
                        <Button variant="info" className='add-btn21' onClick={handleSubmit}><Link to='/applications'>Save</Link></Button>
                        </div>

                    </div>
                </Col>
            </Row>
        </div>
    )
}
