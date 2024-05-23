import React from 'react'
import "./index.scss"
import { Col, Divider, Row } from 'antd';

const Cards = () => {
    return (
        <div className='container'>
            <Row style={{textAlign:"center"}} gutter={[16,16]} >
                <Col className="gutter-row"  xs={24} md={12} lg={8} span={6}>
                    <div className="card card-1">

                       
                       <div className="card-title">
                       <h2>Women's</h2>
                       </div>
                    </div>

                </Col>
                <Col className="gutter-row" xs={24} md={12} lg={8} span={6}>
                    <div className=" card card-2">

                       
                       <div className="card-title">
                       <h2>ACCESSORIES'S</h2>
                       </div>
                    </div>

                </Col>
                <Col xs={24} md={12} lg={8} className="gutter-row" span={6}>
                    <div className=" card card-3">

                       
                       <div className="card-title">
                       <h2>MEN'S</h2>
                       </div>
                    </div>

                </Col>

            </Row>
        </div>
    )
}

export default Cards