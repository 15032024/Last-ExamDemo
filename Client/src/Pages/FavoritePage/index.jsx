import React, { useContext } from 'react'
import Favcontext from '../../Context/favorites'
import { Card, Col, Row } from 'antd'
import Meta from 'antd/es/card/Meta'
import { NavLink } from 'react-router-dom'
import { CiHeart } from 'react-icons/ci'

const FavoritePage = () => {

  const { favs, setFavs } = useContext(Favcontext)

  return (
    <div className="container">
      <Row gutter={16}>
        {
          favs.length > 0 && favs.map((p) => {
            return (
              <Col xs={24} md={12} lg={6} key={p._id}>

                <Card styles={{ position: "relative" }}
                  hoverable
                  style={{
                    width: 240,
                  }}
                  cover={<img alt="example" src={p.image} />}
                >
                  <Meta title={<NavLink to={`/products/${p._id}`}  > {p.title} </NavLink>}

                    description={p.price} />
                  <CiHeart
                    style={{
                      position: "absolute",
                      top: 5,
                      right: 5,
                      fontSize: "1.5rem"
                    }}

                    onClick={() => {
                      setFavs([...favs.filter((q) => q._id !== p._id)])
                    }}
                  />

                </Card>
              </Col>
            )
          })
        }

      </Row>
    </div>
  )
}

export default FavoritePage