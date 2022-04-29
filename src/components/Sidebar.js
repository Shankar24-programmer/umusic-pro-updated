import React, {useEffect, useState} from 'react'
import { Nav } from 'react-bootstrap'
import { Container } from 'react-bootstrap'
import { Accordion, Card, Row, Col } from 'react-bootstrap'
import { FaShopify } from "react-icons/fa";
import { IoIosLock } from "react-icons/io";
import { useLocation } from 'react-router-dom'


import '../css/Sidebar.css'


function Sidebar() {
    const location = useLocation()
    useEffect(() => {highLighter(location.pathname)}, [location])
    const [selectedSection, setSelectedSection] = useState('0')
    const highLighter = (path) => {
        if(path === '/dashboard'){
            setSelectedSection('0')
        }
        if(path === '/applications'){
            setSelectedSection('1')
        }
        if(path === '/shopifystores'){
            setSelectedSection('2')
        }
        if(path === '/authenticationproviders'){
            setSelectedSection('3')
        }
        if(path === '/providers'){
            setSelectedSection('4')
        }
        if(path === '/applications/addnew'){
            setSelectedSection('1')
        }
        if(path === '/shopifystores/addnew'){
            setSelectedSection('2')
        }
        if(path === '/authenticationproviders/addnew'){
            setSelectedSection('3')
        }
        if(path === '/providers/addnew'){
            setSelectedSection('4')
        }
        if(path === '/applications/viewall'){
            setSelectedSection('1')
        }
        if(path === '/shopifystores/viewall'){
            setSelectedSection('2')
        }
        if(path === '/authenticationproviders/viewall'){
            setSelectedSection('3')
        }
        if(path === '/providers/viewall'){
            setSelectedSection('4')
        }
    }
    return (
        <div>
            <div className="sidebar">
                <Container>
                    <Row>
                        <Col sm={3}>
                            <div className="side">
                                <Card style={{ 'width': '18rem', 'height': '821px', 'marginLeft': '-72px', 'background-color': '#000000' }}>
                                    <Card.Body>
                                        <img src={require('/Users/muthusankar/Desktop/grid-layout/grid/src/Assets/umg_logo@2x.png')} style={{'width':'120px', 'marginLeft': '10px'}}/>
                                    </Card.Body>
                                    <Accordion activeKey={selectedSection}>
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
                                                <Nav.Link href='/shopifystores/addnew'>Add New</Nav.Link>
                                                
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="3">
                                            <Accordion.Header><Nav.Link href='/authenticationproviders'><IoIosLock color="#B6B6B6" fontSize="25px" style={{'width':'25px', 'marginRight': '10px'}}/>Authentication Providers</Nav.Link></Accordion.Header>
                                            <Accordion.Body>
                                                All Authentication Providers
                                            </Accordion.Body>
                                            <Accordion.Body>
                                                <Nav.Link href="/authenticationproviders/addnew">Add New</Nav.Link>
                                                
                                            </Accordion.Body>
                                        </Accordion.Item>
                                        <Accordion.Item eventKey="4">
                                            <Accordion.Header><Nav.Link href='/providers'><IoIosLock color="#B6B6B6" fontSize="25px" style={{'width':'25px', 'marginRight': '10px'}}/>Providers</Nav.Link></Accordion.Header>
                                            <Accordion.Body>
                                                All Providers
                                            </Accordion.Body>
                                            <Accordion.Body>
                                                <Nav.Link href='/providers/addnew'>Add New</Nav.Link>
                                                
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

export default Sidebar;