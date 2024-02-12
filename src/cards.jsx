import React from "react";
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';


function Cards() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="sd/img" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
      

      </ListGroup>
      <Card.Body>
      <Button variant="primary">Find Out More!</Button>

      </Card.Body>
    </Card>
  );
}

export default Cards;