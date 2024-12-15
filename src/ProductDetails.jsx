import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function ProductDetails(props) {
  return (
    
    <Card>
      <Card.Img variant="top" src={props.ProductData.image} />
      <Card.Body>
        <Card.Title>{props.ProductData.title}</Card.Title>
        <Card.Text>
          {props.ProductData.description}
        </Card.Text>
        <Button variant="primary">Add to Cart</Button>
      </Card.Body>
    </Card>


    
  )
}

export default ProductDetails