import {Component} from "react";
import './welcome.css';
import './welcome.js';
import {Button, Container, Form, Nav, Navbar, NavDropdown} from "react-bootstrap";


export default class Welcome extends Component{
    render() {
        return (
            <div className="welcome">
                <Navbar className="NavrbarMenu" variant="dark" expand="lg">
                    <Container className="navbar_links">
                        <Navbar.Brand href="#home">Tashkent 35*C</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="me-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                                <Nav.Link href="#link">Rooms</Nav.Link>
                                <Nav.Link href="#link">Gallery</Nav.Link>
                                <Nav.Link href="#link"><img src="src/components/welcome_landing/images/Logo.png" alt=".png"/></Nav.Link>
                                <Nav.Link href="#link">About us</Nav.Link>
                                <Nav.Link href="#link">Contact</Nav.Link>
                            </Nav>
                            <Form className="d-flex">
                                <Button variant="outline-light" >Sign up</Button>
                                <Button variant="outline-light" >Sign in</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
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
            </div>
        );

    }
}

