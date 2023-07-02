import React, { useState } from 'react';
import { Button, Nav } from 'react-bootstrap';
import './SideNavbar.css'; 
import Cart from '../Cart';

const SideNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Button variant="primary" className="button-1" onClick={toggleNavbar}>
        Cart
      </Button>
      <div className={`sliding-navbar ${isOpen ? 'open' : ''}`}>
        <Button variant="secondary" className="close-btn" onClick={toggleNavbar}>
          &times;
        </Button>
        <Nav className="flex-column">
          
        
          <Cart />
        </Nav>
      </div>
    </>
  );
};

export default SideNavbar;