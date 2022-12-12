import React from "react";
import Card from 'react-bootstrap/Card';
import './tech.css';

const TechCard = (tech) => {    
    return (
        <Card className="tech-card col-3 col-lg-2 ">
          <Card.Img variant="top" src={tech.image} className="img-fluid card-I" />
          <Card.Body className='card-B'>
            <Card.Title className="ctitle text-center text-white">{tech.name}</Card.Title>
          </Card.Body>
        </Card>
      );
}

export default TechCard;