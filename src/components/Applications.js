import React, { useState, useEffect } from 'react'
import { Row, Col, Container, Table, Button, FormControl } from 'react-bootstrap'
import Sidebar from './Sidebar'
import '../css/Applications.css'
import { Nav } from 'react-bootstrap'
import { MDBCol, MDBIcon } from "mdbreact";
import { BsSearch } from "react-icons/bs";
import axios from "axios"
import { Link } from 'react-router-dom'
import ReactLoading from 'react-loading';

export default function Applications() {
    const [post, setPost] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [data, setData] = useState({ name: "" });
    const handleChange = async (e) => {
        setData({ ...data, name: e.target.value });

    }

    useEffect(() => {
        const value = async () => {
            const response = await axios.post("http://localhost:9003/application/getbyname1", data)
            console.log(response.data);
            setPost(response.data)
        }
        value()
    }, [data])
    useEffect(() => {
        setTimeout(() => {
            axios.get('http://localhost:9003/application')
                .then(res => {
                    console.log(res.data)
                    setPost(res.data)
                    setIsLoading(true)
                })
                .catch(err => {
                    console.log(err)
                });
        }, 800);
    }, []);
    return (
        <div>
            <Container>
                <Row>
                    <Col sm={3}>
                    </Col>
                    <Col sm={9} style={{ 'marginTop': '-800px', 'marginLeft': '-50px' }}>
                        <div className="applications" style={{ 'display': 'flex', 'marginTop': '10px' }}>

                            <h2 style={{ 'fontWeight': 'normal' }}><img src={require('/Users/muthusankar/Desktop/grid-layout/grid/src/Assets/Group 203.png')} style={{ 'marginRight': '20px' }} />Applications <Button variant="info" className='appbtn'><Link to='/applications/newapp'>Add New</Link></Button></h2>
                            <div className="app-hd" style={{ 'marginLeft': '354px' }}>
                                <MDBCol md="12">
                                    <div className="input-group md-form form-sm form-1 pl-0">

                                        <input
                                            className="form-control my-0 py-1"
                                            type="text"
                                            placeholder="Search"
                                            aria-label="Search"
                                            onChange={handleChange}
                                            name="name"
                                            value={data.name}
                                        />
                                        <div className="input-group-prepend">
                                            <span className="input-group-text purple lighten-3" id="basic-text1" style={{ 'color': 'white', 'background-color': 'black', 'cursor': 'pointer' }}>
                                                <BsSearch fontSize="23px" />
                                            </span>
                                        </div>
                                    </div>
                                </MDBCol>
                            </div>



                        </div>
                        <hr></hr>
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
                            {!isLoading ? (
                                <div className="loader" style={{ 'marginLeft': '390px', 'marginTop': '130px' }}>
                                    <ReactLoading type={"spin"} color={"black"} width={'150%'} />

                                </div>
                            ) : (post.map((data) => {
                                return (
                                    <tbody>

                                        <tr>

                                            <td><Nav.Link as={Link} to={`/applications/viewall/${data._id}`} state={data}>{data.name}</Nav.Link></td>
                                            <td><Nav.Link href='/applications/viewall'>{data._id}</Nav.Link></td>
                                            <td>{data.client_id}</td>
                                            <td>{data.client_secret}</td>
                                            <td>{data.url}</td>
                                            <td>={data.state}</td>
                                            <td><Link to='/applications/addnew' state={data}><Button variant="outline-secondary">Edit</Button></Link></td>

                                        </tr>

                                    </tbody>
                                )
                            }
                            ))}
                        </Table>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
