import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { FaShopify } from "react-icons/fa";
import '../css/ViewallApp.css'
export default function ViewallApp() {
    return (
        <div>
            <Row>
                <Col sm={3}>

                </Col>
                <Col sm={9} style={{ 'marginTop': '-790px', 'marginLeft': '-11px' }}>
                    <div className="addnewapp" style={{ 'width': '950px' }} >
                        <h2 style={{ 'fontWeight': 'normal' }}><img src={require('/Users/muthusankar/Desktop/grid-layout/grid/src/Assets/Group 203.png')} style={{ 'marginRight': '20px' }} />View Applications</h2>

                        <hr></hr>
                    </div>
                    <Row style={{'marginTop':'20px'}}>
                        <Col>
                            <div className="v1">
                                Name
                            </div>
                            <div className="v1-sub">
                                <h5>Application Name</h5>
                            </div>
                            <hr className='hr1'></hr>
                            <br></br>

                            <div className="v11">
                                Client ID
                            </div>
                            <div className="v11-sub">
                                <h5>8894</h5>
                            </div>
                            <hr className='hr1'></hr>
                            
                            <br></br>

                            <div className="v12">
                                Redirect URLs
                            </div>
                            <div className="v12-sub">
                                <h5>https://umusic.com</h5>
                            </div>
                            <hr className='hr1'></hr>

                        </Col>
                        <Col>
                            <div className="v2">
                                ID
                            </div>
                            <div className="v2-sub">
                                <h5>8891</h5>
                            </div>
                            <hr className='hr2'></hr>
                            <br></br>
                            <div className="v21">
                                Client Secret
                            </div>
                            <div className="v21-sub">
                                <h5>8894</h5>
                            </div>
                            <hr className='hr2'></hr>
                            <br></br>

                            <div className="v22">
                                State
                            </div>
                            <div className="v22-sub">
                                <h5>State</h5>
                            </div>
                            <hr className='hr2'></hr>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}
