import React, { Component } from 'react'
import { Navbar, Nav, Form, FormControl,Button ,NavDropdown,NavItem} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './CustomNavbar.css';

export default class CustomNavbar extends Component {
  render() {
    return (
      <div className="navbar-space">
          <Navbar bg="light" expand="lg">
              <div className="center-brand">CountryBoard</div>
              <Nav pullRight>
              </Nav>
          </Navbar>

      </div>
    )
  }
}
