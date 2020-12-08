// Libraries
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
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
  Badge,
} from "reactstrap";
import { useAuth0 } from "@auth0/auth0-react";

// Redux Action
import { SearchString } from "../../redux/reducer/Search/Search.action";

const ShoppyNavBar = (props) => {
  const [searchString, setSearchString] = useState("");
  // Redux state
  const reduxState = useSelector(({ cart, customer }) => ({ cart, customer }));

  // Auth0 hook to redirect for login/ register page
  const { loginWithRedirect, logout, user } = useAuth0();

  const dispatch = useDispatch();

  useEffect(() => dispatch(SearchString(searchString)), [searchString]);

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
                <Link className="text-default" to="/">
                  Home
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link
                  className="text-default"
                  to="/products/Electricals%20&%20Electronics"
                >
                  Electricals & Electronics
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link className="text-default" to="/products/Home%20Appliances">
                  Home Appliances
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link className="text-default" to="/products/Furniture">
                  Furniture
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link className="text-default" to="/products/Sports">
                  Sports
                </Link>
              </NavLink>
            </NavItem>
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
                value={searchString}
                onChange={(e) => setSearchString(e.target.value)}
              />
              <InputGroupAddon addonType="append">
                <InputGroupText>
                  <Link to="/search">
                    <i className="fas fa-search text-gray" />
                  </Link>
                </InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </NavbarText>
          <NavbarText className="mr-4">
            <UncontrolledDropdown nav>
              <DropdownToggle nav caret>
                <i className="fas fa-user-circle fa-lg  text-default" />
              </DropdownToggle>
              <DropdownMenu right>
                {props.isAuth ? (
                  <>
                    <DropdownItem>
                      <i className="fas fa-user" /> {user.nickname}
                    </DropdownItem>
                    <DropdownItem>
                      <i className="fas fa-envelope" /> {user.email}
                    </DropdownItem>
                    <Link to="/orders">
                      <DropdownItem>
                        <i className="fas fa-box-open" /> Your Orders
                      </DropdownItem>
                    </Link>
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

          <NavbarText className="mr-2">
            <Link className="text-default" to="/cart">
              <i className="fas fa-shopping-cart fa-lg" />
              <Badge color="primary" className="bg-primary text-white">
                {reduxState.cart.cart.length}
              </Badge>
            </Link>
          </NavbarText>
        </UncontrolledCollapse>
      </Navbar>
    </>
  );
};

export default ShoppyNavBar;
