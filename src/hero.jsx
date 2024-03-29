import React from "react";
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function Hero() {
  return (

    <div
      className="container rounded p-3 mt-2 mb-2" style={{background: "#DFDFDF", display:"flex"}}>
    
      <Modal.Dialog>
      <Modal.Body>
        <h1>A Warm Welcome!</h1>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor ex, fuga sapiente at blanditiis suscipit ducimus nesciunt in distinctio totam aperiam eius, deleniti est voluptate, voluptas odio eum voluptatibus! Aut?</p>
          
          <Button variant="primary">Call to action!</Button>
        
          
        </Modal.Body>
      </Modal.Dialog>
    </div>
    
  );
}

export default Hero;