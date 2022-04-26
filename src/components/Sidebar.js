import React from 'react'
import { Nav } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Accordion, Card, Row, Col } from 'react-bootstrap'
import { FaShopify } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";

import '../css/Sidebar.css'
export default function Sidebar() {
    return (
        <div>
            <div className="sidebar">
                <Container>
                    <Row>
                        <Col sm={3}>
                            <div>
                                <Card style={{ 'width': '18rem', 'height': '821px', 'marginLeft': '-72px', 'background-color': '#000000' }}>
                                    <Card.Body>
                                        <img src={require('/Users/muthusankar/Desktop/grid-layout/grid/src/Assets/umg_logo@2x.png')} style={{'width':'120px', 'marginLeft': '10px'}}/>
                                    </Card.Body>
                                    <Accordion defaultActiveKey="0">
                                        <Accordion.Item eventKey="0">
                                            <Nav.Link href='/dashboard'>
                                            <Accordion.Header><img src={require('/Users/muthusankar/Desktop/grid-layout/grid/src/Assets/Group 197.png')} style={{'width':'25px', 'marginRight': '10px'}}/>Dashboard</Accordion.Header>
                                            </Nav.Link>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="1">
                                            
                                            <Accordion.Header><Nav.Link href='/applications'><img src={require('/Users/muthusankar/Desktop/grid-layout/grid/src/Assets/Group 203.png')} style={{'width':'25px', 'marginRight': '10px'}}/>Applications</Nav.Link></Accordion.Header>
                                            
                                            <Accordion.Body>
                                                All Applications
                                                
                                            </Accordion.Body>
                                            <Accordion.Body>
                                                <Nav.Link href='/applications/addnew'>Add New</Nav.Link>
                                                
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="2">
                                            <Accordion.Header><Nav.Link href='/shopifystores'><FaShopify color="#B6B6B6" fontSize="25px" style={{'width':'25px', 'marginRight': '10px'}}/>Shopify Stores</Nav.Link></Accordion.Header>
                                            <Accordion.Body>
                                                All Shopify Stores
                                            </Accordion.Body>
                                            <Accordion.Body>
                                                Add New
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3">
                                            <Accordion.Header><Nav.Link href='/authenticationproviders'><IoIosLock color="#B6B6B6" fontSize="25px" style={{'width':'25px', 'marginRight': '10px'}}/>Authentication Providers</Nav.Link></Accordion.Header>
                                            <Accordion.Body>
                                                All Authentication Providers
                                            </Accordion.Body>
                                            <Accordion.Body>
                                                Add New
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="4">
                                            <Accordion.Header><Nav.Link href='/providers'><IoIosLock color="#B6B6B6" fontSize="25px" style={{'width':'25px', 'marginRight': '10px'}}/>Providers</Nav.Link></Accordion.Header>
                                            <Accordion.Body>
                                                All Providers
                                            </Accordion.Body>
                                            <Accordion.Body>
                                                Add New
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Card>

                            </div>
                        </Col>
                        <Col sm={9}>
                            {/* sample */}
                        </Col>
                    </Row>


                </Container>
            </div>
        </div>
    )
}
