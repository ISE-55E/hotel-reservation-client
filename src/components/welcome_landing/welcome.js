import {Component} from "react";
import {Button, Col, Container, Form, Nav, Navbar, NavDropdown, Row} from "react-bootstrap";
import AuthenticationModal from "./authenticationModal";
import './welcome.css';


export default class Welcome extends Component{
    constructor(props) {
        super(props);
        this.state = {
            authenticationModal: false
        }
    }

    toggleAuthenticationModal = () => {
        this.setState({authenticationModal: !this.state.authenticationModal});
    }

    render() {
        return (
                <Container fluid className="welcome d-flex flex-column align-items-center p-0">
                    {this.state.authenticationModal ? (
                        <AuthenticationModal
                            toggle={this.toggleAuthenticationModal}
                        />
                    ) : null}
                    <Row className="fixed-top w-100 m-0 active_Welcome">
                        <Navbar variant={"dark"} expand="lg">
                            <Container>
                                <Navbar.Brand href="#home">Tashkent 18*C</Navbar.Brand>
                                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                                <Navbar.Collapse id="basic-navbar-nav">
                                    <Nav className="fakafaka d-flex align-items-center">
                                        <Nav.Link href="#home">Home</Nav.Link>
                                        <Nav.Link href="#link">Gallery</Nav.Link>
                                        <Nav.Link href="#link">About Us</Nav.Link>
                                        <Nav.Link href="#link"><img src="/images/Logo.png" alt=".png" className="logo"/></Nav.Link>
                                        <Nav.Link href="#home">Rooms</Nav.Link>
                                        <Nav.Link href="#link">Contacts</Nav.Link>
                                        <Nav.Link href="#link">Services</Nav.Link>
                                    </Nav>
                                    <Navbar.Brand className={"BtnNav d-flex justify-content-center"} href="#home">
                                        <Button onClick={this.toggleAuthenticationModal} variant="outline-light" className="rounded-0 py-1 px-3">Sign up</Button>
                                        <Button className="btn btn-link text-decoration-none text-light rounded-0 fakaferry mr-2 py-1 px-3">Sign in</Button>
                                    </Navbar.Brand>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </Row>
                    <div className="welcome_text">
                        <p>Welcome</p>
                        <p>Take a rest in Amathings</p>
                        <p>the perfect place & services & national food & comfort prices</p>
                    </div>
                    <Button className={"rounded-0 Bookbtn"} variant="outline-light">Book Now</Button>{' '}
            </Container>
        );
    }
}

const nav = document.querySelector('nav')

window.addEventListener('Scroll', () => {
    if (window.scrolly>=50) {
        nav.classList.add('active_Welcome');
    }
    else {
        nav.classList.remove('active_Welcome');
    }
})

