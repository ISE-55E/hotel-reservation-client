import {Component} from "react";
import './footer.css';
import {Button, Col, Container, Form, Nav, Navbar, Row} from "react-bootstrap";
import {Route, Router} from "react-router-dom";
import * as PropTypes from "prop-types";


function Switch(props) {
    return null;
}

Switch.propTypes = {children: PropTypes.node};
export default class Footer extends Component {
    render() {
        return (
            <div className={"footer"}>
                <Container>
                      <Row className={"d-flex LengthRow"}>
                          <Col lg={4} md={6} sm={12}>
                                  <Navbar variant={"dark"} className={"flex-column text-center"}>
                                      <Navbar.Brand href="#home">Pages</Navbar.Brand>
                                      <Nav className="me-auto flex-column align-items-lg-start">
                                          <Nav.Link href="#home">home</Nav.Link>
                                          <Nav.Link href="#aboutus">About Us</Nav.Link>
                                          <Nav.Link href="#gallery">Gallers</Nav.Link>
                                          <Nav.Link href="#gallery">Parties</Nav.Link>
                                          <Nav.Link href="#gallery">Delicious</Nav.Link>
                                      </Nav>
                                  </Navbar>
                          </Col>
                          <Col lg={4} md={6} sm={12}>
                              <Navbar variant={"dark"} className={"flex-column align-items-lg-start"}>
                                  <Navbar.Brand href="#home">Our Services</Navbar.Brand>
                                  <Nav className="me-auto flex-column align-items-lg-start">
                                      <Nav.Link href="#home">Spa</Nav.Link>
                                      <Nav.Link href="#aboutus">Night club</Nav.Link>
                                      <Nav.Link href="#gallery">Ball</Nav.Link>
                                      <Nav.Link href="#gallery">Parties</Nav.Link>
                                      <Nav.Link href="#gallery">Delicious</Nav.Link>
                                  </Nav>
                              </Navbar>
                          </Col>
                          <Col lg={4}  md={12} sm={12} >
                              <h5>Subscripe</h5>
                              <p>subscrie to our channels to know our new events and comfort price</p>
                              <Form className="d-flex bg-light p-1 rounded-2 subscribe">
                                  <Form.Control
                                      type="search"
                                      placeholder="Search"
                                      className="me-2"
                                      aria-label="Search"
                                  />
                                  <Button variant="dark">Subscribe</Button>
                              </Form>
                          </Col>
                      </Row>
                </Container>
            </div>
        );
    }
}