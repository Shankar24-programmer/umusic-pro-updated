import React from 'react'
import { Row, Col } from 'react-bootstrap'
import '../css/ViewallAuth.css'
import {IoIosLock} from 'react-icons/io'
import {useLocation} from 'react-router-dom'
export default function ViewallAuth() {
    const {state} = useLocation();
    return (
        <div>
            <Row>
                <Col sm={3}>

                </Col>
                <Col sm={9} style={{ 'marginTop': '-790px', 'marginLeft': '-11px' }}>
                    <div className="addnewapp" style={{ 'width': '950px' }} >
                        <h2 style={{ 'fontWeight': 'normal' }}><IoIosLock color="#B6B6B6" fontSize="40px" style={{ 'marginRight': '20px', 'marginTop': '-7px' }} />View Authentication Providers</h2>

                        <hr></hr>
                    </div>

                    <Row style={{'marginTop':'30px'}}>
                        <Col >
                            <div className="au1">
                                Name
                            </div>
                            <div className="au1-sub">
                                <h5 style={{'fontWeight':'normal'}}>{state.name}</h5>
                            </div>
                            

                        </Col>
                        <Col>
                            <div className="au2">
                                ID
                            </div>
                            <div className="au2-sub">
                                <h5 style={{'fontWeight':'normal'}}>{state._id}</h5>
                            </div>
                            
                            
                        </Col>
                    </Row>
                    <hr className="auhr"></hr>

                    <Row style={{'marginTop':'30px'}}>
                        <Col >
                            <div className="au1">
                                Provider ID
                            </div>
                            <div className="au1-sub">
                                <h5 style={{'fontWeight':'normal'}}>{state.provider_id}</h5>
                            </div>
                            

                        </Col>
                        <Col>
                            <div className="au2">
                                Client ID
                            </div>
                            <div className="au2-sub">
                                <h5 style={{'fontWeight':'normal'}}>{state.client_id}</h5>
                            </div>
                            
                            
                        </Col>
                    </Row>
                    <hr className="auhr"></hr>

                    <Row style={{'marginTop':'30px'}}>
                        <Col >
                            <div className="au1">
                                Client Secret
                            </div>
                            <div className="au1-sub">
                                <h5 style={{'fontWeight':'normal'}}>{state.client_secret}</h5>
                            </div>
                            

                        </Col>
                        <Col>
                            <div className="au2">
                                App ID
                            </div>
                            <div className="au2-sub">
                                <h5 style={{'fontWeight':'normal'}}>{state.application_id}</h5>
                            </div>
                            
                            
                        </Col>
                    </Row>
                    <hr className="auhr"></hr>

                    <Row style={{'marginTop':'30px'}}>
                        <Col >
                            <div className="au1">
                                Global
                            </div>
                            <div className="au1-sub">
                                <h5 style={{'fontWeight':'normal'}}>{state.is_global}</h5>
                            </div>
                            

                        </Col>
                        <Col>
                            <div className="au2">
                                State
                            </div>
                            <div className="au2-sub">
                                <h5 style={{'fontWeight':'normal'}}>{state.state_name}</h5>
                            </div>
                            
                            
                        </Col>
                    </Row>
                    <hr className="auhr"></hr>
                </Col>
            </Row>
        </div>
    )
}
