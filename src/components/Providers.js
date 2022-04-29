import React from 'react'
import { Row, Col, Button, Table, Nav } from 'react-bootstrap'
import { IoIosLock } from "react-icons/io";

export default function Providers() {
    return (
        <div>
            <Row>
                <Col sm={3}>

                </Col>
                <Col sm={9} style={{'marginTop':'-790px', 'marginLeft': '-10px'}}>
                    <div className="providers" style={{'width':'970px'}}>
                        <h2 style={{ 'fontWeight': 'normal' }}><IoIosLock color="#B6B6B6" fontSize="40px" style={{ 'marginRight': '20px', 'marginTop': '-7px' }} />Providers<Button variant="info" className='appbtn'>Add New</Button></h2>

                        <hr></hr>
                    </div>
                    <Table responsive="lg" style={{ 'marginTop': '25px', 'width': '970px' }}>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>ID</th>
                                    <th>Provider ID</th>
                                    <th></th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><Nav.Link href='/providers/viewall'>Provider Name</Nav.Link></td>
                                    <td>8891</td>
                                    <td>Secret</td>
                                    <td><Button variant="outline-secondary">Edit</Button></td>
                                    
                                </tr>
                                <tr>
                                    <td>Provider Name</td>
                                    <td>8891</td>
                                    <td>Secret</td>
                                    <td><Button variant="outline-secondary">Edit</Button></td>
                                    
                                </tr>
                                <tr>
                                    <td>Provider Name</td>
                                    <td>8891</td>
                                    <td>Secret</td>
                                    <td><Button variant="outline-secondary">Edit</Button></td>
                                    
                                </tr>
                                <tr>
                                    <td>Provider Name</td>
                                    <td>8891</td>
                                    <td>Secret</td>
                                    <td><Button variant="outline-secondary">Edit</Button></td>
                                    
                                </tr>
                                <tr>
                                    <td>Provider Name</td>
                                    <td>8891</td>
                                    <td>Secret</td>
                                    <td><Button variant="outline-secondary">Edit</Button></td>
                                    
                                </tr>
                                <tr>
                                    <td>Provider Name</td>
                                    <td>8891</td>
                                    <td>Secret</td>
                                    <td><Button variant="outline-secondary">Edit</Button></td>
                                    
                                </tr>
                            </tbody>
                        </Table>
                </Col>
            </Row>
        </div>
    )
}
