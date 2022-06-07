import React, {useState} from 'react'
import { Row, Col } from 'react-bootstrap'
import { FaShopify } from "react-icons/fa";
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import {Links } from 'react-router-dom'
export default function ViewallShop() {

    const {state}=useLocation();
    console.log(state)

    
    

    return (
        <div>
            <Row>
                <Col sm={3}>

                </Col>
                <Col sm={9} style={{ 'marginTop': '-790px', 'marginLeft': '-11px' }}>
                    <div className="view-shop" style={{ 'width': '950px' }} >
                        <h2 style={{ 'fontWeight': 'normal' }}><FaShopify color="#B6B6B6" fontSize="40px" style={{ 'marginRight': '20px' }} />View Shopify Stores</h2>

                        <hr></hr>
                    </div>

                    <Row style={{'marginTop':'30px'}}>
                        <Col>
                            <div className="shop1">
                                <h5 className="shop11" style={{'fontWeight':'bold'}}>Name</h5>
                            </div>
                            <div className="shop1-sub" style={{'color': 'rgb(157, 160, 160)', 'marginTop': '10px'}}>
                                <h5 style={{'fontWeight':'normal'}}>{state.name}</h5>
                            </div>
                        </Col>
                        <Col>
                            <div className="shop2" >
                                <h5 className="shop21" style={{'fontWeight':'bold'}}>ID</h5>
                            </div>
                            <div className="shop2-sub" style={{'color': 'rgb(157, 160, 160)', 'marginTop': '10px'}}>
                                <h5 style={{'fontWeight':'normal'}}>{state._id}</h5> 
                            </div>
                        </Col>
                        
                        
                    </Row>
                    <hr style={{'width': '89%'}}></hr>
                    <Row>
                    <Col>
                            <div className="shop3">
                                <h5 className="shop31" style={{'fontWeight':'bold'}}>Secret</h5>
                            </div>
                            <div className="shop3-sub" style={{'color': 'rgb(157, 160, 160)', 'marginTop': '10px'}}>
                                <h5 style={{'fontWeight':'normal'}}>{state.secret_id}</h5>
                            </div>
                        </Col>
                    </Row>
                    <hr style={{'width': '89%'}}></hr>
                </Col>
            </Row>
        </div>
    )
}
