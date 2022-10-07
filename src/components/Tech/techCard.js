import React from "react";
import Card from 'react-bootstrap/Card';
import './tech.css';

const TechCard = (tech) => {    
    return (
        <Card className="tech-card col-5 col-md-4 col-lg-3 col-xl-2 mx-4 bg-transparent">
          <Card.Img variant="top" src={tech.image} className="img-fluid" />
          <Card.Body>
            <Card.Title className="ctitle text-center text-white">{tech.name}</Card.Title>
          </Card.Body>
        </Card>
      );
}

export default TechCard;