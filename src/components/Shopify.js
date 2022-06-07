import React, { useState, useEffect } from 'react'
import { Nav } from 'react-bootstrap';
import ReactLoading from 'react-loading';
import { Link } from 'react-router-dom'
import { Row, Col, Container, Button, Table } from 'react-bootstrap'
import { FaShopify } from "react-icons/fa";
import { BsSearch } from "react-icons/bs";
import { GrFormClose } from "react-icons/gr";
import { MDBCol } from "mdbreact";
import axios from 'axios';
// import 'bootstrap/dist/css/bootstrap.css';
import _, { get } from "lodash"

import '../css/Shopify.css'

export default function Shopify() {
    const [post, setPost] = useState({ count: "", value: "" })
    const [isLoading, setIsLoading] = useState(false)
    const [pagination, setPagination] = useState({ limit: 6, skip: 0 })
    const [data, setData] = useState({ name: "" });
    const [number, setNumber] = useState(1)
    const [buttonDis, setButtonDis] = useState(false)
    const [nextButtonDis, setNextButtonDis] = useState(true)
    // const handleSearch = async (e) => {
    //     var response = await axios.post("http://localhost:9002/shopifystores/getbyname", { ...data })
    //     setSort(response.data)
    //     console.log(sort, "sortUp")
    //     if (Object.keys(sort).length !== 0) {
    //         var temp = []
    //         temp.push(sort)
    //         setPost(temp)
    //         value()
    //     }
    // }
    const handleChange = async (e) => {
        setData({ ...data, name: e.target.value })
    }
    const clearData = () => {
        setData({ name: "" })
    }
    useEffect(() => {
        const value = async () => {
            const response = await axios.post("http://localhost:9002/shopifystores/getbyname", data)
            console.log(response.data);
            console.log(post.count)
            setPost((previous) => ({
                ...previous, value: response.data
            }))
        }
        value()
    }, [data])
    useEffect(() => {
        setTimeout(() => {
            axios.post('http://localhost:9002/shopifystores')
                .then(res => {
                    console.log(res.data)
                    setPost({ count: res.data.count, value: res.data.value })
                    setIsLoading(true)
                })
                .catch(err => {
                    console.log(err)
                });
        }, 800);
        if (pagination.skip / 6 === 0) {
            setButtonDis(true)
        }
        else {
            setButtonDis(false)
        }

        if (((pagination.skip / 6) + 1) === Math.ceil((post.count / 6))) {
            setNextButtonDis(true)
        }
        else {
            setNextButtonDis(false)
        }
    }, [pagination]);
    if (post.value.length > 6) {
        const sea = post.value.slice(0, 6)
        setPost((previous) => ({
            ...previous, value: sea
        }))
    }

    const pageNumber = [];

    for (let i = 1; i <= Math.ceil(post.count / pagination.limit); i++) {
        pageNumber.push(i);
    }

    const ChangePage = (pageNumber) => {
        setNumber(pageNumber);
        setPagination((previous) => ({
            ...previous, skip: pagination.limit * (pageNumber - 1)
        }))

    };

    const onPreviousPageHandler = () => {
        console.log(pagination.skip / 6)
        setPagination((previous) => ({
            ...previous, skip: pagination.limit * ((pagination.skip / 6) - 1)
        }))
    }

    const onNextPageHandler = () => {
        console.log(pagination.skip / 6)
        setPagination((previous) => ({
            ...previous, skip: pagination.limit * ((pagination.skip / 6) + 1)
        }))
    }

    return (

        <div>

            <Container>
                <Row>
                    <Col sm={3}>

                    </Col>

                    <Col sm={9} style={{ 'marginTop': '-800px', 'marginLeft': '-48px' }}>
                        <div className="shopify" style={{ 'marginTop': '10px', 'display': 'flex' }}>
                            <h2 style={{ 'fontWeight': 'normal' }}><FaShopify color="#B6B6B6" fontSize="40px" style={{ 'marginRight': '20px' }} />Shopify Stores<Button variant="info" className='appbtn'><Nav.Link as={Link} to='/shopifystores/newshop'>Add New</Nav.Link></Button></h2>
                            <div className="shop-hd" style={{ 'marginLeft': '325px' }}>
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
                                        <span className="input-group-text">
                                            <GrFormClose fontSize="23px" onClick={clearData} />
                                        </span>
                                    </div>
                                </MDBCol>
                            </div>

                        </div>
                        <hr></hr>

                        <Table responsive="lg">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>ID</th>
                                    <th>Secret</th>
                                    <th></th>

                                </tr>
                            </thead>
                            {!isLoading ? (
                                <div className="loader" style={{ 'marginLeft': '390px', 'marginTop': '130px' }}>
                                    <ReactLoading type={"spin"} color={"black"} width={'25%'} />
                                </div>
                            ) : (
                                post.value.length === 0 ? (<h7>No Data Found</h7>) : (
                                post.value.map((data) => {
                                return (
                                    <tbody>
                                        <tr>
                                            <td><Link to={`/shopifystores/viewall/${data._id}`} state={data}>{data.name}</Link></td>
                                            <td>{data._id}</td>
                                            <td>{data.secret_id}</td>
                                            <td><Link to='/shopifystores/addnew' state={data}><Button variant="outline-secondary">Edit</Button></Link></td>
                                        </tr>
                                    </tbody>
                                )
                            }
                            )
                            )
                        )}
                        </Table>
                    </Col>
                </Row>
            </Container>
            <div className="text-center" style={{ "marginTop": "-200px" }}>
                <button
                    className="px-3 py-2 m-1 text-center" style={{ 'backgroundColor': '#66D6FF', 'border': 'none' }} onClick={onPreviousPageHandler} disabled={buttonDis}
                >
                    Previous
                </button>

                {pageNumber.map((Elem) => {
                    return (
                        <>
                            <button
                                className="px-3 py-2 m-1 text-center btn-outline-dark" style={{ "border": "none" }} onClick={() => ChangePage(Elem)}
                            >
                                {Elem}
                            </button>
                        </>
                    );
                })}
                <button
                    className="px-3 py-2 m-1 text-center" style={{ 'backgroundColor': '#66D6FF', 'border': 'none' }} onClick={onNextPageHandler} disabled={nextButtonDis}
                >
                    Next
                </button>
            </div>
        </div>
    )
}
