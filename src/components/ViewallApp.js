import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { FaShopify } from "react-icons/fa";
import { useLocation } from 'react-router-dom';
import '../css/ViewallApp.css'
export default function ViewallApp() {

    const {state} = useLocation();
    console.log(state)
    return (
        <div>
            <Row>
                <Col sm={3}>

                </Col>
                <Col sm={9} style={{ 'marginTop': '-790px', 'marginLeft': '-11px' }}>
                    <div className="addnewapp" style={{ 'width': '950px' }} >
                        <h2 style={{ 'fontWeight': 'normal' }}><img src={require('/Users/muthusankar/Desktop/grid-layout/grid/src/Assets/Group 203.png')} style={{ 'marginRight': '20px' }} />View Applications</h2>

                        <hr className="hehr"></hr>
                    </div>
                    <Row style={{'marginTop':'20px'}}>
                        <Col>
                            <div className="v1">
                                Name
                            </div>
                            <div className="v1-sub">
                                <h5>{state.name}</h5>
                            </div>
                            
                            

                        </Col>
                        <Col>
                            <div className="v2">
                                ID
                            </div>
                            <div className="v2-sub">
                                <h5>{state._id}</h5>
                            </div>
                            
                            
                        </Col>
                        
                    </Row>
                    <hr className="shr"></hr>
                    <Row style={{'marginTop':'20px'}}>
                        <Col>
                            <div className="v1">
                                Client ID
                            </div>
                            <div className="v1-sub">
                                <h5>{state.client_id}</h5>
                            </div>
                            
                            

                        </Col>
                        <Col>
                            <div className="v2">
                                Client Secret
                            </div>
                            <div className="v2-sub">
                                <h5>{state.client_secret}</h5>
                            </div>
                            
                            
                        </Col>
                        
                    </Row>
                    <hr className="shr"></hr>

                    <Row style={{'marginTop':'20px'}}>
                        <Col>
                            <div className="v1">
                                Redirect URLs
                            </div>
                            <div className="v1-sub">
                                <h5>{state.url}</h5>
                            </div>
                            
                            

                        </Col>
                        <Col>
                            <div className="v2">
                                State
                            </div>
                            <div className="v2-sub">
                                <h5>{state.state}</h5>
                            </div>
                            
                            
                        </Col>
                        
                    </Row>
                    <hr className="shr"></hr>
                </Col>
            </Row>
        </div>
    )
}
