import React from 'react'
import { Row, Col, Form, Button } from 'react-bootstrap'
import { FaShopify } from "react-icons/fa";
export default function AddnewAuth() {
    return (
        <div className="addauthe">
            <Row>
                <Col sm={3}>

                </Col>
                <Col sm={9} style={{ 'marginTop': '-790px', 'marginLeft': '-11px' }}>
                    <div className="addnewapp" style={{ 'width': '950px' }} >
                        <h2 style={{ 'fontWeight': 'normal' }}><FaShopify color="#B6B6B6" fontSize="40px" style={{ 'marginRight': '20px', 'marginTop': '-8px' }} />Edit Authentication Providers</h2>

                        <hr></hr>
                    </div>
                    <Form style={{ 'width': '50%', 'marginLeft': '180px', 'marginTop': '5px' }}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Name<span style={{ 'marginLeft': '20px', 'fontSize': '14px', 'color': '#C8C8C8' }}>Enter the name</span></Form.Label>
                            <Form.Control type="name" />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>ID<span style={{ 'marginLeft': '20px', 'fontSize': '14px', 'color': '#C8C8C8' }}>Enter the ID</span></Form.Label>
                            <Form.Control type="name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Provider ID<span style={{ 'marginLeft': '20px', 'fontSize': '14px', 'color': '#C8C8C8' }}>Enter the Client ID</span></Form.Label>
                            <Form.Control type="name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Client ID<span style={{ 'marginLeft': '20px', 'fontSize': '14px', 'color': '#C8C8C8' }}>Enter the Client Secret</span></Form.Label>
                            <Form.Control type="name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Client Secret<span style={{ 'marginLeft': '20px', 'fontSize': '14px', 'color': '#C8C8C8' }}>Enter the Redirect URLs</span></Form.Label>
                            <Form.Control type="name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Application IDs<span style={{ 'marginLeft': '20px', 'fontSize': '14px', 'color': '#C8C8C8' }}>Enter the Application IDs</span></Form.Label>
                            <Form.Control type="name" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Is Global<span style={{ 'marginLeft': '20px', 'fontSize': '14px', 'color': '#C8C8C8' }}>Enter the State</span></Form.Label>

                        </Form.Group>
                        <Form style={{'display':'flex', 'marginTop':'-25px'}}>
                            {['radio'].map((type) => (
                                <div className="mb-3" style={{'display':'flex', 'marginTop':'10px'}}>
                                    <Form.Check
                                        type={type}
                                        id={`default-${type}`}
                                        label={`True`}
                                    />

                                    <Form.Check
                                        active
                                        type={type}
                                        label={`False`}
                                        id={`disabled-default-${type}`}
                                    style={{'marginLeft':'20px'}}/>
                                </div>
                            ))}
                        </Form>
                        <Form.Group className="mb-3" controlId="formBasicPassword" >
                            <Form.Label>State<span style={{ 'marginLeft': '20px', 'fontSize': '14px', 'color': '#C8C8C8' }}>Enter the State</span></Form.Label>
                            <Form.Control type="name" />
                        </Form.Group>
                    </Form>
                    <div className="add-btn">
                        <div className="add-btn1">
                            <Button variant="outline-secondary">Cancel</Button>
                        </div>
                        <div className="add-btn2">
                        <Button variant="info" className='add-btn21'>Save</Button>
                        </div>

                    </div>                
                </Col>
            </Row>
        </div>
    )
}
