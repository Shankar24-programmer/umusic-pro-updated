import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { IoIosLock } from "react-icons/io";
export default function ViewallPro() {
    return (
        <div>
            <Row>
                <Col sm={3}>

                </Col>
                <Col sm={9}  style={{ 'marginTop': '-790px', 'marginLeft': '-11px' }}>
                    <div className="addnewapp" style={{ 'width': '950px' }} >
                        <h2 style={{ 'fontWeight': 'normal' }}><IoIosLock color="#B6B6B6" fontSize="40px" style={{ 'marginRight': '20px', 'marginTop': '-7px' }} />View Providers</h2>

                        <hr></hr>
                    </div>

                    <Row style={{'marginTop':'30px'}}>
                        <Col>
                            <div className="shop1">
                                <h5 className="shop11" style={{'fontWeight':'bold'}}>Name</h5>
                            </div>
                            <div className="shop1-sub" style={{'color': 'rgb(157, 160, 160)', 'marginTop': '10px'}}>
                                <h5 style={{'fontWeight':'normal'}}>Store Name</h5>
                            </div>
                        </Col>
                        <Col>
                            <div className="shop2" >
                                <h5 className="shop21" style={{'fontWeight':'bold'}}>ID</h5>
                            </div>
                            <div className="shop2-sub" style={{'color': 'rgb(157, 160, 160)', 'marginTop': '10px'}}>
                                <h5 style={{'fontWeight':'normal'}}>8891</h5> 
                            </div>
                        </Col>
                    
                        
                    </Row>
                    <hr style={{'width': '89%'}}></hr>
                    <Row>
                    <Col>
                            <div className="shop3">
                                <h5 className="shop31" style={{'fontWeight':'bold'}}>Provider ID</h5>
                            </div>
                            <div className="shop3-sub" style={{'color': 'rgb(157, 160, 160)', 'marginTop': '10px'}}>
                                <h5 style={{'fontWeight':'normal'}}>8891</h5>
                            </div>
                        </Col>
                    </Row>
                    <hr style={{'width': '89%'}}></hr>
                </Col>
            </Row>
        </div>
    )
}
