import React from 'react';
import { NavLink as RRNavLink, Link } from 'react-router-dom';
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
                <NavLink
                  activeClassName='active'
                  exact
                  tag={ RRNavLink }
                  to='/about'>
                  About
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  activeClassName='active'
                  exact
                  tag={ RRNavLink }
                  to='/projects'>
                  Projects
                </NavLink>
              </NavItem>            
              <NavItem>
                <NavLink href='https://stats.chrisvogt.me'>Stats</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}