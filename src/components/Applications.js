import React from 'react'
import { Row, Col, Container, Table, Button, FormControl } from 'react-bootstrap'
import Sidebar from './Sidebar'
import '../css/Applications.css'
export default function Applications() {
    return (
        <div>
            <Container>
                <Row>
                    <Col sm={3}>
                    </Col>
                    <Col sm={9} style={{'marginTop':'-800px', 'marginLeft': '-50px'}}>
                        <div className="applications" style={{'marginTop':'10px'}}>
                            <h2 style={{'fontWeight': 'normal'}}><img src={require('/Users/muthusankar/Desktop/grid-layout/grid/src/Assets/Group 203.png')} style={{'marginRight': '20px'}}/>Applications <Button variant="info" className='appbtn'>Add New</Button></h2>
                            
                            <hr></hr>
                        </div>
                        <Table responsive="lg" style={{ 'marginTop': '25px', 'width': '970px' }}>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>ID</th>
                                    <th>Client ID</th>
                                    <th>Client Secret</th>
                                    <th>Redirect URLs</th>
                                    <th>State</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Application Name</td>
                                    <td>8891</td>
                                    <td>8891</td>
                                    <td>8891</td>
                                    <td>https://www.universalmusic.com</td>
                                    <td>State</td>
                                    <td><Button variant="outline-secondary">State</Button></td>
                                </tr>
                                <tr>
                                    <td>Application Name</td>
                                    <td>8891</td>
                                    <td>8891</td>
                                    <td>8891</td>
                                    <td>https://www.universalmusic.com</td>
                                    <td>State</td>
                                    <td><Button variant="outline-secondary">State</Button></td>
                                </tr>
                                <tr>
                                    <td>Application Name</td>
                                    <td>8891</td>
                                    <td>8891</td>
                                    <td>8891</td>
                                    <td>https://www.universalmusic.com</td>
                                    <td>State</td>
                                    <td><Button variant="outline-secondary">State</Button></td>
                                </tr>
                                <tr>
                                    <td>Application Name</td>
                                    <td>8891</td>
                                    <td>8891</td>
                                    <td>8891</td>
                                    <td>https://www.universalmusic.com</td>
                                    <td>State</td>
                                    <td><Button variant="outline-secondary">State</Button></td>
                                </tr>
                                <tr>
                                    <td>Application Name</td>
                                    <td>8891</td>
                                    <td>8891</td>
                                    <td>8891</td>
                                    <td>https://www.universalmusic.com</td>
                                    <td>State</td>
                                    <td><Button variant="outline-secondary">State</Button></td>
                                </tr>
                                <tr>
                                    <td>Application Name</td>
                                    <td>8891</td>
                                    <td>8891</td>
                                    <td>8891</td>
                                    <td>https://www.universalmusic.com</td>
                                    <td>State</td>
                                    <td><Button variant="outline-secondary">State</Button></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
