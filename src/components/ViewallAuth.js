import React from 'react'
import { Row, Col } from 'react-bootstrap'
import '../css/ViewallAuth.css'
import {IoIosLock} from 'react-icons/io'
export default function ViewallAuth() {
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
                                <h5 style={{'fontWeight':'normal'}}>Application Name</h5>
                            </div>
                            

                        </Col>
                        <Col>
                            <div className="au2">
                                ID
                            </div>
                            <div className="au2-sub">
                                <h5 style={{'fontWeight':'normal'}}>8891</h5>
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
                                <h5 style={{'fontWeight':'normal'}}>8861</h5>
                            </div>
                            

                        </Col>
                        <Col>
                            <div className="au2">
                                Client ID
                            </div>
                            <div className="au2-sub">
                                <h5 style={{'fontWeight':'normal'}}>8891</h5>
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
                                <h5 style={{'fontWeight':'normal'}}>8891</h5>
                            </div>
                            

                        </Col>
                        <Col>
                            <div className="au2">
                                App ID
                            </div>
                            <div className="au2-sub">
                                <h5 style={{'fontWeight':'normal'}}>8891</h5>
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
                                <h5 style={{'fontWeight':'normal'}}>True</h5>
                            </div>
                            

                        </Col>
                        <Col>
                            <div className="au2">
                                State
                            </div>
                            <div className="au2-sub">
                                <h5 style={{'fontWeight':'normal'}}>State</h5>
                            </div>
                            
                            
                        </Col>
                    </Row>
                    <hr className="auhr"></hr>
                </Col>
            </Row>
        </div>
    )
}
