import React, { useContext, useEffect, useState } from 'react'
import "./index.scss"
import { GiButtonFinger } from 'react-icons/gi'
import { getAllData } from '../../Services'
import { Col, Card, Row } from 'antd'
import axios from "axios"
import Meta from 'antd/es/card/Meta'
import { NavLink } from 'react-router-dom'
import { CiHeart } from 'react-icons/ci'
import Cards from '../../Components/Cards'
import Favcontext from '../../Context/favorites'
import BlogCards from '../../Components/BlogCards'
import NewSletter from '../../Components/NewSletter'
const HomePage = () => {

    const [products, setproducts] = useState(null)
    useEffect(() => {
      getAllData().then(res => {
        setproducts(res.data.data)
      })
    }, [])
const {favs,setFavs}=useContext(Favcontext)
    const handleFavorite = (favorite) => {
        const found = favs.find((q) => q._id === favorite._id);
        if (found) {
          setFavs([...favs.filter((q) => q._id !== favorite._id)]);
        } else {  
          setFavs([...favs, favorite])
        }
        console.log(favs);
      }
    

  return (
<>
<section id='colo-discount'>
<div className="container">
<div className="coloshop-discount">
    <p>Lorem ipsum dolor sit amet.</p>
    <h2>Get up to 30% Off <br />New Arrivals</h2>
    <button>Shop Now</button>
</div>

</div>

  </section>




<section id='arrivals'>
<Cards/>

</section>





  {/* SECTION DINAMIC */}
  <section>
  <div className="container">
        <Row  gutter={[16,16]}>
          {
            products && products.map((p) => {
              return (
                <Col style={{textAlign:"center"}} xs={24} md={12} lg={6} key={p._id}>

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

                      onClick={()=>handleFavorite(p)}
                    />

                  </Card>
                </Col>
              )
            })
          }

        </Row>
      </div>

  </section>

  <section>
    <BlogCards/>
  </section>
  <section>
    <NewSletter/>
  </section>
</>
  )
}

export default HomePage