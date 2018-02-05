import React from 'react';
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

import '../styles/components/TopNav.css';

export default class TopNav extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className='TopNav'>
        <Navbar color='www' dark expand='md'>
          <NavbarBrand tag={ Link } to='/'>chrisvogt.me</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLink tag={ Link } to='/about' >About</NavLink>
              </NavItem>            
              <NavItem>
                <NavLink href='#'>Stats</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='#'>Developer Story</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}