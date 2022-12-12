import React from "react";
import Card from 'react-bootstrap/Card';
import './project.css';
import Button from 'react-bootstrap/Button'

const ProCard = (pro) => {
    return (
        <Card className="pro-card col-10 col-md-5 col-xxl-3 mx-4">
        <Card.Img variant="top" src={pro.image} className="pro-img img-fluid" />
        <Card.Body>
          <Card.Title className="pro-title text-center text-white">{pro.name}</Card.Title>
          <Card.Text className="pro-text text-center text-white">{pro.details}</Card.Text>
          <div className="container w-100 d-flex justify-content-between">
              <a href={pro.code} target="blank"><Button className="button-code">Code</Button></a>
              <a href={pro.site} target="blank"><Button className="button-site">Site</Button></a>
          </div>
        </Card.Body>
      </Card>
    )
}

export default ProCard;