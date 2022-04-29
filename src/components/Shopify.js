import React from 'react'
import { Nav } from 'react-bootstrap';
import { Row, Col, Container, Button, Table } from 'react-bootstrap'
import { FaShopify } from "react-icons/fa";
import '../css/Shopify.css'
export default function Shopify() {
    return (
        <div>
            <Container>
                <Row>
                    <Col sm={3}>

                    </Col>
                    <Col sm={9} style={{ 'marginTop': '-800px', 'marginLeft': '-48px' }}>
                        <div className="shopify" style={{ 'marginTop': '10px' }}>
                            <h2 style={{ 'fontWeight': 'normal' }}><FaShopify color="#B6B6B6" fontSize="40px" style={{ 'marginRight': '20px' }} />Shopify Stores<Button variant="info" className='appbtn'>Add New</Button></h2>

                            <hr></hr>
                        </div>
                        <Table responsive="lg">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>ID</th>
                                    <th>Secret</th>
                                    <th></th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><Nav.Link href='shopifystores/viewall'>Store Name</Nav.Link></td>
                                    <td>8891</td>
                                    <td>Secret</td>
                                    <td><Nav.Link href='shopifystores/addnew'><Button variant="outline-secondary">Edit</Button></Nav.Link></td>
                                    
                                </tr>
                                <tr>
                                    <td><Nav.Link href='shopifystores/viewall'>Store Name</Nav.Link></td>
                                    <td>8891</td>
                                    <td>Secret</td>
                                    <td><Nav.Link href='shopifystores/addnew'><Button variant="outline-secondary">Edit</Button></Nav.Link></td>
                                    
                                </tr>
                                <tr>
                                    <td><Nav.Link href='shopifystores/viewall'>Store Name</Nav.Link></td>
                                    <td>8891</td>
                                    <td>Secret</td>
                                    <td><Nav.Link href='shopifystores/addnew'><Button variant="outline-secondary">Edit</Button></Nav.Link></td>
                                    
                                </tr>
                                <tr>
                                    <td><Nav.Link href='shopifystores/viewall'>Store Name</Nav.Link></td>
                                    <td>8891</td>
                                    <td>Secret</td>
                                    <td><Nav.Link href='shopifystores/addnew'><Button variant="outline-secondary">Edit</Button></Nav.Link></td>
                                    
                                </tr>
                                <tr>
                                    <td><Nav.Link href='shopifystores/viewall'>Store Name</Nav.Link></td>
                                    <td>8891</td>
                                    <td>Secret</td>
                                    <td><Nav.Link href='shopifystores/addnew'><Button variant="outline-secondary">Edit</Button></Nav.Link></td>
                                    
                                </tr>
                                <tr>
                                    <td><Nav.Link href='shopifystores/viewall'>Store Name</Nav.Link></td>
                                    <td>8891</td>
                                    <td>Secret</td>
                                    <td><Nav.Link href='shopifystores/addnew'><Button variant="outline-secondary">Edit</Button></Nav.Link></td>
                                    
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
