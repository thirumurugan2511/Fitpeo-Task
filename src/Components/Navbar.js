import React from 'react';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Navbar.css';

const Navbars = () => {
  return (
    <Navbar  expand="lg" className='justify-content-between theme'>
      
      <Form className="d-flex form-div">
      <i className="fas fa-search search-icon"></i>
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2 search-inp"
          aria-label="Search" 
        />
      </Form>
      <Nav className="ml-auto">
        <Nav.Link className="nav-icons me-2" href="#messages">
          <i className="fas fa-envelope"></i>
        </Nav.Link>
        <Nav.Link className="nav-icons me-2" href="#settings">
          <i className="fas fa-cog"></i>
        </Nav.Link>
        <Nav.Link className="nav-icons me-2" href="#notifications">
          <i className="fas fa-bell"></i>
        </Nav.Link>
        <Nav.Link className="nav-icons me-2" href="#profile">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSLU5_eUUGBfxfxRd4IquPiEwLbt4E_6RYMw&s" // Replace with profile image path
            width="30"
            height="30"
            className="rounded-circle"
            alt="Profile"
          />
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Navbars;
