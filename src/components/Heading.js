import React from "react";
import { Link } from "react-router-dom";
import{ Navbar,Nav,NavItem,NavbarBrand,Container}from  'reactstrap'
export const Heading = () => {
  return (
      <Navbar color="grey">
          <Container>
              <NavbarBrand href="/">Seur Invest Employee List </NavbarBrand>
              <Nav>
                  <NavItem>
                        <Link to="/add" >Add Employee</Link>
                  </NavItem>
              </Nav>
          </Container>
     </Navbar>
  );
}