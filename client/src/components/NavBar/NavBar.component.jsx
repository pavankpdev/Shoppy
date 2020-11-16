// Libraries
import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Navbar,
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
  Button,
} from "reactstrap";
import { useAuth0 } from "@auth0/auth0-react";

const ShoppyNavBar = (props) => {
  const [isOpen, setisOpen] = useState(false);

  // Auth0 hook to redirect for login/ register page
  const { loginWithRedirect, logout } = useAuth0();

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
                    Pavan
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
                className="form-control-alternative "
                style={{ width: "15rem" }}
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
            <UncontrolledDropdown nav>
              <DropdownToggle nav caret>
                <i className="fas fa-user-circle fa-lg" />
              </DropdownToggle>
              <DropdownMenu right>
                {props.isAuth ? (
                  <>
                    <DropdownItem>
                      <i className="fas fa-user" /> {props.user.nickname}
                    </DropdownItem>
                    <DropdownItem>
                      <i className="fas fa-envelope" /> {props.user.email}
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>
                      <Button
                        block
                        outline
                        color="primary"
                        size="sm"
                        onClick={() =>
                          logout({ returnTo: window.location.origin })
                        }
                      >
                        Log Out
                      </Button>
                    </DropdownItem>
                  </>
                ) : (
                  <>
                    <DropdownItem>
                      <Button
                        block
                        outline
                        color="primary"
                        size="sm"
                        onClick={() => loginWithRedirect()}
                      >
                        Sign in/ Sign Up
                      </Button>
                    </DropdownItem>
                  </>
                )}
              </DropdownMenu>
            </UncontrolledDropdown>
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
