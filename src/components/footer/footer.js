import {Component} from "react";
import './footer.css';
import {Button, Col, Container, Form, Nav, Navbar, Row} from "react-bootstrap";
import * as PropTypes from "prop-types";


function FontAwesomeIcon(props) {
    return null;
}

FontAwesomeIcon.propTypes = {icon: PropTypes.string};
export default class Footer extends Component {
    render() {
        return (
        //     <Navbar.Brand href="#home">Pages</Navbar.Brand>
        // <Nav className="me-auto flex-column align-items-lg-start">
        //     <Nav.Link href="#home">Home</Nav.Link>
        //     <Nav.Link href="#aboutus">About Us</Nav.Link>
        //     <Nav.Link href="#gallery">Gallery</Nav.Link>
        //     <Nav.Link href="#gallery">Contacts</Nav.Link>
        //     <Nav.Link href="#gallery">Rooms</Nav.Link>
        // </Nav>
            <div className="footer">
                <Container>
                    <Row>
                        <Col>
                            <Navbar variant={"dark"} className={"flex-column align-items-lg-start"}>
                            <Navbar.Brand  href="#home">Pages</Navbar.Brand>
                             <Nav className="me-auto flex-column fakaferi">
                                 <Nav.Link href="#home">Home</Nav.Link>
                                 <Nav.Link href="#aboutus">About Us</Nav.Link>
                                 <Nav.Link href="#gallery">Gallery</Nav.Link>
                                 <Nav.Link href="#gallery">Contacts</Nav.Link>
                                 <Nav.Link href="#gallery">Rooms</Nav.Link>
                             </Nav>
                            </Navbar>
                        </Col>
                        <Col>

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
                        <Col>
                            <Navbar variant={"dark"} className={"flex-column align-items-lg-start"}>
                            <Navbar.Brand href="#home">Soponsors</Navbar.Brand>
                            </Navbar>
                        </Col>
                        <Col xs={4}>
                            <Navbar variant={"dark"} className={"flex-column align-items-lg-start"}>
                            <Navbar.Brand href="#home">Subscripe</Navbar.Brand>
                                <p>
                                    subscrie to our channels to know our new events and comfort price
                                </p>
                                <Form className="d-flex bg-light p-1 rounded-2 subscribe">
                                    <Form.Control
                                        type="search"
                                        placeholder="Search"
                                        className="me-2"
                                        aria-label="Search"
                                    />
                                    <Button variant="dark">Subscribe</Button>
                                </Form>
                            </Navbar>
                                <FontAwesomeIcon icon="fa-brands fa-instagram" />



                        </Col>

                    </Row>
                </Container>
            </div>
        );
    }
}