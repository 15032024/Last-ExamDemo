import React from 'react'
import { Col, Card, Row } from 'antd'
import "./index.scss"
const NewSletter = () => {
    return (
        <div style={{backgroundColor:"#f2f2f2", margin:"30px 0", padding:"30px      0"}} className="newsletter">
        <div className='container'>
       
        <Row className='newsletter'>
                <Col style={{margin:"20px 0"}} md={24} lg={12}>
                    <h2>NewSletter</h2>
                    <br />
                    <p>Subscribe to our newsletter and get 20% off your first purchase</p>
                </Col>
                <Col md={24} lg={12} >
                <input placeholder='Your Email' type="text" name="" id="" />
                <button>Subscribe</button>
                </Col>

            </Row>
        </div>

        </div>
    )
}

export default NewSletter