import React from 'react'
import { Col, Card, Row } from 'antd'

const BlogCards = () => {
    return (
        <div className="container">
            <h2 style={{textAlign:"center", padding:"20px"}}>Latest Blogs</h2>

            <Row style={{textAlign:"center"}} gutter={[16,16]}>
                <Col xs={24} md={12}
                    lg={8}>
           <img src="https://preview.colorlib.com/theme/coloshop/images/blog_1.jpg" alt="" />
                </Col>
                <Col xs={24} md={12}
                    lg={8}>
             <img src="https://preview.colorlib.com/theme/coloshop/images/blog_2.jpg" alt="" />
                </Col>
                <Col xs={24} md={12}
                    lg={8}>
            <img src="https://preview.colorlib.com/theme/coloshop/images/blog_3.jpg" alt="" />
                </Col>
            </Row>
        </div>
    )
}

export default BlogCards