import React from 'react'
import { Row, Col } from 'react-bootstrap'
import '../css/ViewallAuth.css'
export default function ViewallAuth() {
    return (
        <div>
            <Row>
                <Col sm={3}>

                </Col>
                <Col sm={9} style={{ 'marginTop': '-790px', 'marginLeft': '-11px' }}>
                    <div className="addnewapp" style={{ 'width': '950px' }} >
                        <h2 style={{ 'fontWeight': 'normal' }}><img src={require('/Users/muthusankar/Desktop/grid-layout/grid/src/Assets/Group 203.png')} style={{ 'marginRight': '20px' }} />View Authentication Providers</h2>

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
                            <hr className='hr1'></hr>
                            <br></br>

                            <div className="au11">
                                Provider ID
                            </div>
                            <div className="au11-sub">
                                <h5 style={{'fontWeight':'normal'}}>8894</h5>
                            </div>
                            <hr className='hr1'></hr>

                            <br></br>

                            <div className="au12">
                                Client Secret
                            </div>
                            <div className="au12-sub">
                                <h5 style={{'fontWeight':'normal'}}>8891</h5>
                            </div>
                            <hr className='hr1'></hr>

                            <br></br>

                            <div className="au13">
                                Global
                            </div>
                            <div className="au13-sub">
                                <h5 style={{'fontWeight':'normal'}}>True</h5>
                            </div>
                            <hr className='hr1'></hr>

                        </Col>
                        <Col>
                            <div className="au2">
                                ID
                            </div>
                            <div className="au2-sub">
                                <h5 style={{'fontWeight':'normal'}}>8891</h5>
                            </div>
                            <hr className='hr2'></hr>
                            <br></br>
                            <div className="au21">
                                Client ID
                            </div>
                            <div className="au21-sub">
                                <h5 style={{'fontWeight':'normal'}}>8894</h5>
                            </div>
                            <hr className='hr2'></hr>
                            <br></br>

                            <div className="au22">
                                App ID
                            </div>
                            <div className="au22-sub">
                                <h5 style={{'fontWeight':'normal'}}>8861</h5>
                            </div>
                            <hr className='hr2'></hr>


                            <br></br>

                            <div className="au23">
                                State
                            </div>
                            <div className="au23-sub">
                                <h5 style={{'fontWeight':'normal'}}>State</h5>
                            </div>
                            <hr className='hr2'></hr>
                            
                        </Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}
