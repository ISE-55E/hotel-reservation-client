import {Component} from "react";
import './welcome.css';
import {Button, Col, Container, Form, Nav, Navbar, NavDropdown, Row} from "react-bootstrap";


export default class Welcome extends Component{
    render() {
        return (
                <Container fluid className="welcome d-flex flex-column align-items-center p-0">
                    <Row className="w-100 p-0">
                        <Navbar variant="dark" expand="lg">
                            <Container fluid>

                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="w-100 me-auto header">
                                        <Row className="d-flex flex-row justify-content-between w-100 p-2">
                                            <Col xs={2} md={3} className="d-flex justify-content-center align-items-center">
                                                <Navbar.Brand href="#home" className="text-light">Tashkent 95*C</Navbar.Brand>
                                            </Col>
                                            <Col xs={8} md={6} className="d-flex justify-content-center align-items-center">
                                                <Nav.Link href="#home">Home</Nav.Link>
                                                <Nav.Link href="#link"><img src="/images/Logo.png" alt=".png" className="logo"/></Nav.Link>
                                                <Nav.Link href="#link">Link</Nav.Link>
                                            </Col>
                                            <Col xs={2} md={3} className="d-flex justify-content-center align-items-center">
                                                <Button className="btn btn-link text-decoration-none text-light rounded-0 fakaferry mx-2">Sign in</Button>
                                                <Button variant="outline-light" className="rounded-0">Sign up</Button>
                                            </Col>
                                        </Row>
                                    </Nav>
                                </Navbar.Collapse>
                                <Navbar.Brand href="#home"></Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            </Container>
                        </Navbar>
                    </Row>
                    {/*<Navbar  expand="lg">*/}
                    {/*    <Container fluid className="bg-primary">*/}
                    {/*        <Navbar.Toggle aria-controls="navbarScroll" />*/}
                    {/*        <Navbar.Collapse id="navbarScroll">*/}
                    {/*            <Nav*/}
                    {/*                className="me-auto my-2 my-lg-0 d-flex flex-column"*/}
                    {/*                style={{ maxHeight: '100px' }}*/}
                    {/*                navbarScroll*/}
                    {/*            >*/}
                    {/*                <Row>*/}
                    {/*                    <Col xs={2} className="d-flex bg-success">*/}
                    {/*                        <Nav.Link href="#home" className="text-lig">SAffuagsfu</Nav.Link>*/}
                    {/*                    </Col>*/}
                    {/*                    <Col xs={8} className="d-flex">*/}
                    {/*                        <Nav.Link href="#home" className="">Home</Nav.Link>*/}
                    {/*                        <Nav.Link href="#link">Rooms</Nav.Link>*/}
                    {/*                        <Nav.Link href="#link">Gallery</Nav.Link>*/}
                    {/*                        <Nav.Link href="#link"><img src="/images/Logo.png" alt=".png" className="logo"/></Nav.Link>*/}
                    {/*                        <Nav.Link href="#link">About us</Nav.Link>*/}
                    {/*                        <Nav.Link href="#link">Contact</Nav.Link>*/}
                    {/*                    </Col>*/}
                    {/*                    <Col xs={2} className="d-flex">*/}
                    {/*                        <Button className="btn btn-link text-decoration-none text-light fakaferry">Search</Button>*/}
                    {/*                        <button variant="outline-light">Search</button>*/}
                    {/*                    </Col>*/}
                    {/*                </Row>*/}
                    {/*            </Nav>*/}
                    {/*        </Navbar.Collapse>*/}
                    {/*    </Container>*/}
                    {/*</Navbar>*/}
                    <div className="welcome_text">
                        <p>Welcome</p>
                        <p>Take a rest in Amathings</p>
                        <p>the perfect place & services & national food & comfort prices</p>
                    </div>
                    <div className="Filter">
                        <Button variant="bg-0 text-light">Catigories</Button>
                        <Button variant="bg-0 text-light">Beds</Button>
                        <Button variant="bg-0 text-light">price</Button>
                        <Button variant="bg-0 text-light">floor</Button>
                        <Button variant="outline-dark">Search</Button>
                    </div>
            </Container>
        );

    }
}

