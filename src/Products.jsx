import React from 'react'
import ProductDetails from './ProductDetails'
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useEffect,useState } from 'react'
import axios from 'axios'

function Products() {
    const [products,setProducts]=useState([])
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then(res=>{
            console.log(res.data)
                setProducts(res.data)
        }
        )
        .catch(err=>{
            console.log(err)
        })

    },[])

  return (
    <>
    <Container>

 
<h1>Products</h1>
<div className='product_list'>
    <Row>
        {
            products.map((product,index)=>{
                return(
                    <>

            <Col xs={12} sm={6} md={4} lg={3} xxl={2}>
            <ProductDetails key={index} ProductData={product}/>
            </Col>
                    </>
                )

            })
        }
    </Row>
</div>
</Container>
    </>
  )
}

export default Products