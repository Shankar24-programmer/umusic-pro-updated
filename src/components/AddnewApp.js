import React from 'react'
import { Row, Col, Button } from 'react-bootstrap'
import { IoIosLock } from "react-icons/io";

export default function AddnewApp() {
    return (
        <div>
            <Row>
                <Col sm={3}>

                </Col>
                <Col sm={9} style={{ 'marginTop': '-790px', 'marginLeft':'-11px'  }}>
                    <div className="addnewapp" >
                        <h2 style={{ 'fontWeight': 'normal' }}><IoIosLock color="#B6B6B6" fontSize="40px" style={{ 'marginRight': '20px', 'marginTop': '-7px' }} />Edit Application</h2>

                        <hr></hr>
                    </div>
                </Col>
            </Row>
        </div>
    )
}
