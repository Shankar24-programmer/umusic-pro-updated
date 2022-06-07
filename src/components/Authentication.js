import React, { useState, useEffect } from 'react'
import { Row, Col, Button, Table, Nav } from 'react-bootstrap'
import { IoIosLock } from "react-icons/io";
import { BsSearch } from "react-icons/bs";
import { MDBCol, MDBIcon } from "mdbreact";
import { Link } from "react-router-dom"
import ReactLoading from 'react-loading'
import '../css/Authentication.css'
import axios from 'axios';
import _ from 'lodash'; 

const pageSize = 5;
export default function Authentication() {

    const [paginatedPosts, setpaginatedPosts] = useState();
    const [pagedata, setPageData] = useState();
    const [currentPage, setCurrentPage] = useState(1);


    const [sort, setSort] = useState({});
    const [condition, setCondition] = useState(false);

    const [data, setData] = useState({ name: "" });
    const handleSearch = async (e) => {
        console.log(data);


        var response = await axios.post("http://localhost:9001/authenticationproviders/getbyname", { ...data })
        console.log(response.data);
        setSort(response.data)

        console.log(sort, "sortUp")
        if (Object.keys(sort).length !== 0) {
            console.log(sort, "Sort")
            var temp = []

            temp.push(sort)
            console.log(temp, "temp")
            setPost(temp)
            console.log(post, "post")
        }
    }

    const handleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }



    const [post, setPost] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    useEffect(() => {
        setTimeout(() => {
            axios.get('http://localhost:9001/authenticationproviders')
                .then(res => {
                    console.log(res.data)
                    setPost(res.data)
                    setPageData(res.data)
                    setIsLoading(true)
                    setpaginatedPosts(_(res.data).slice(0).take(pageSize).value());
                })
                .catch(err => {
                    console.log(err)
                });
        }, 800);
    }, []);

    const pageCount = pagedata ? Math.ceil(pagedata.length / pageSize) : 0;
    if(pageCount === 1) return null;
    const pages = _.range(1, pageCount + 1)

    const pagination = (pageNo) => {
        setCurrentPage(pageNo);
        const startIndex = (pageNo - 1) * pageSize;
        const paginatedPosts = _(pagedata).slice(startIndex).take(pageSize).value();
        setpaginatedPosts(paginatedPosts)
    }
    return (
        <div>
            <Row>
                <Col sm={3}>

                </Col>
                <Col sm={9} style={{ 'marginTop': '-790px', 'marginLeft': '-11px' }}>
                    <div className="authentication" style={{ 'display': 'flex' }}>
                        <h2 style={{ 'fontWeight': 'normal' }}><IoIosLock color="#B6B6B6" fontSize="40px" style={{ 'marginRight': '20px', 'marginTop': '-7px' }} />Authentication Providers<Button variant="info" className='appbtn'><Nav.Link href="/authenticationproviders/newauth">Add New</Nav.Link></Button></h2>
                        <div className="authpro-hd" style={{ 'marginLeft': '200px' }}>
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
                                        <span className="input-group-text purple lighten-3" id="basic-text1" style={{ 'color': 'white', 'background-color': 'black', 'cursor': 'pointer' }} onClick={() => {handleSearch()}}>
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
                                <th>Provider ID</th>
                                <th>Client ID</th>
                                <th>Client Secret</th>
                                <th>App ID</th>
                                <th>Global</th>
                                <th>State</th>
                                <th></th>
                            </tr>
                        </thead>
                        {!isLoading ? (
                            <div className="loader" style={{ 'marginLeft': '390px', 'marginTop': '130px' }}>
                                <ReactLoading type={"spin"} color={"black"} width={'280%'} />

                            </div>
                        ) : (
                            paginatedPosts.map((data) => {
                                return (
                                    <tbody>
                                        <tr>
                                            <td><Nav.Link as={Link} to={`/authenticationproviders/viewall/${data._id}`} state={data}>{data.name}</Nav.Link></td>
                                            <td>{data._id}</td>
                                            <td>{data.provider_id}</td>
                                            <td>{data.client_id}</td>
                                            <td>{data.client_secret}</td>
                                            <td>{data.application_id}</td>
                                            <td>{data.is_global}</td>
                                            <td>{data.state_name}</td>
                                            <td><Link to='/authenticationproviders/addnew' state={data}><Button variant="outline-secondary">Edit</Button></Link></td>
                                        </tr>

                                    </tbody>
                                )
                            }
                            )
                        )}
                    </Table>
                    <Nav className="d-flex justify-content-center">
                        <ul className="pagination">
                            {
                                pages.map((pages) => (
                                    <li className={ pages === currentPage ? "page-item active" : "page-item"}>
                                        <p className="page-link" onClick={() => pagination(pages)} style={{'cursor':'pointer'}}>{pages}</p>
                                    </li>
                                ))
                            }
                        </ul>
                    </Nav>
                </Col>
            </Row>
        </div>
    )
}