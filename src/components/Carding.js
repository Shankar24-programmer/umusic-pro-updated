import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Button, Container } from 'react-bootstrap'
import Sidebar from '../components/Sidebar'
import '../App.css';
export default function Carding() {
    return (
        <div>
            <Container>
                <Row>

                    <Col sm={3}>
                    </Col>
                    <Col sm={9} style={{ 'marginLeft': '-50px', 'marginTop': '-800px' }}>
                        <div className="dash" style={{ 'marginTop': '10px' }}>
                            <h2 style={{ 'fontWeight': 'normal' }}><img src={require('/Users/muthusankar/Desktop/grid-layout/grid/src/Assets/Group 197.png')} style={{ 'marginRight': '20px' }} />Dashboard</h2>
                            <hr></hr>
                        </div>
                        <Row xs={2} md={2} lg={8}>
                            <Col>
                                <div className="right1">
                                    <div className="head1">
                                        <div className="head11">
                                            <div className="appli">
                                                <h5>Application - Recent</h5>
                                            </div>

                                            <div className="button1">
                                                <Button variant="info" className="but1">View All</Button>
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div className="head12">
                                            <h6>Application Name</h6>
                                            <div className="button2">
                                                <Button variant="outline-secondary" className="but2">Edit</Button>
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div className="head12">
                                            <h6>Application Name</h6>
                                            <div className="button3">
                                                <Button variant="outline-secondary" className="but3">Edit</Button>
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div className="head13">
                                            <h6>Application Name</h6>
                                            <div className="button4">
                                                <Button variant="outline-secondary" className="but4">Edit</Button>
                                            </div>
                                        </div>
                                        <hr></hr>
                                    </div>

                                </div>

                                <div className="right2">
                                    <div className="head2">
                                        <div className="head21">
                                            <div className="authen">
                                                <h5>Authentication Providers - Recent</h5>
                                            </div>

                                            <div className="button5">
                                                <Button variant="info" className="but5">View All</Button>
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div className="head22">
                                            <h6>Authentication Provider Name</h6>
                                            <div className="button6">
                                                <Button variant="outline-secondary" className="but6">Edit</Button>
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div className="head23">
                                            <h6>Authentication Provider Name</h6>
                                            <div className="button7">
                                                <Button variant="outline-secondary" className="but7">Edit</Button>
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div className="head24">
                                            <h6>Authentication Provider Name</h6>
                                            <div className="button8">
                                                <Button variant="outline-secondary" className="but8">Edit</Button>
                                            </div>
                                        </div>
                                        <hr></hr>
                                    </div>

                                </div>


                            </Col>
                            <Col >
                                <div className="right3">
                                    <div className="head3">
                                        <div className="head31">
                                            <div className="authen">
                                                <h5>Shopify Stores - Recent</h5>
                                            </div>

                                            <div className="button9">
                                                <Button variant="info" className="but9">View All</Button>
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div className="head32">
                                            <h6>Store Name</h6>
                                            <div className="button10">
                                                <Button variant="outline-secondary" className="but10">Edit</Button>
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div className="head33">
                                            <h6>Store Name</h6>
                                            <div className="button11">
                                                <Button variant="outline-secondary" className="but11">Edit</Button>
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div className="head34">
                                            <h6>Store Name</h6>
                                            <div className="button12">
                                                <Button variant="outline-secondary" className="but12">Edit</Button>
                                            </div>
                                        </div>
                                        <hr></hr>
                                    </div>

                                </div>

                                <div className="right4">
                                    <div className="head4">
                                        <div className="head41">
                                            <div className="authen">
                                                <h5>Providers - Recent</h5>
                                            </div>

                                            <div className="button13">
                                                <Button variant="info" className="but13">View All</Button>
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div className="head42">
                                            <h6>Provider Name</h6>
                                            <div className="button14">
                                                <Button variant="outline-secondary" className="but14">Edit</Button>
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div className="head43">
                                            <h6>Provider Name</h6>
                                            <div className="button15">
                                                <Button variant="outline-secondary" className="but15">Edit</Button>
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div className="head44">
                                            <h6>Provider Name</h6>
                                            <div className="button16">
                                                <Button variant="outline-secondary" className="but16">Edit</Button>
                                            </div>
                                        </div>
                                        <hr></hr>
                                    </div>

                                </div>
                            </Col>

                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
