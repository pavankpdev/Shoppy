import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Input,
  Row,
  Col,
  UncontrolledCollapse,
} from "reactstrap";

const ShoppyNavBar = (props) => {
  const [isOpen, setisOpen] = useState(false);

  return (
    <>
      <Navbar className="navbar-horizontal" expand="md" style={props.style}>
        <NavbarBrand>
          <Link to="/">
            <h1 className="font-weight-900 text-primary text-capitalize">
              Shoppy
            </h1>
          </Link>
        </NavbarBrand>
        <button
          aria-controls="navbar-default"
          aria-expanded={false}
          aria-label="Toggle navigation"
          className="navbar-toggler"
          data-target="#navbar-default"
          data-toggle="collapse"
          id="navbar-default"
          type="button"
        >
          <i className="fas fa-bars fa-lg" />
        </button>
        <UncontrolledCollapse navbar toggler="#navbar-default">
          <div className="navbar-collapse-header">
            <Row>
              <Col className="collapse-brand" xs="6">
                <Link to="/">
                  <h1 className="font-weight-900 text-primary text-capitalize">
                    Shoppy
                  </h1>
                </Link>
              </Col>
              <Col className="collapse-close" xs="6">
                <button
                  aria-controls="navbar-default"
                  aria-expanded={false}
                  aria-label="Toggle navigation"
                  className="navbar-toggler"
                  data-target="#navbar-default"
                  data-toggle="collapse"
                  id="navbar-default"
                  type="button"
                >
                  <span />
                  <span />
                </button>
              </Col>
            </Row>
          </div>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink>
                <Link className="text-default"> Best Sellers</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link className="text-default"> Today's Deal</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link className="text-default"> Mobile</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link className="text-default"> Computers</Link>
              </NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Categories
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText className="mr-4">
            <InputGroup className="input-group-alternative ">
              <Input
                className="form-control-alternative"
                style={{ width: "16rem" }}
                id="search"
                placeholder="search for products, brands and more"
                type="search"
                aria-label="Search through products, brands and more"
              />
              <InputGroupAddon addonType="append">
                <InputGroupText>
                  <i className="fas fa-search" />
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </NavbarText>
          <NavbarText className="mr-4">
            <i className="fas fa-user fa-lg" />
          </NavbarText>
          <NavbarText className="mr-4">
            <i className="fas fa-bookmark fa-lg" />
          </NavbarText>
          <NavbarText className="mr-2">
            <i className="fas fa-shopping-cart fa-lg" />
          </NavbarText>
        </UncontrolledCollapse>
      </Navbar>
    </>
  );
};

export default ShoppyNavBar;

{
  /*

 

*/
}
