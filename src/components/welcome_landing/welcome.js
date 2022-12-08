import {Component} from "react";
import {Button, Container, Nav, Navbar, Row} from "react-bootstrap";
import AuthenticationModal from "./authenticationModal";
import './welcome.css';
import AuthContext from "../../context/AuthContext";


export default class Welcome extends Component{
    static contextType = AuthContext;

    constructor(props) {
        super(props);
        this.state = {
            authenticationModal: false,
            user: null
        }
    }

    toggleAuthenticationModal = () => {
        this.setState({authenticationModal: !this.state.authenticationModal});
    }

    componentDidMount() {
        console.log(this.context)
    }

    logOut = () => {
        this.context.logoutUser()
    }

    render() {
        // console.log(this.state.user ? this.state.user : "Ok")
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
                                        <Nav.Link href="/">Home</Nav.Link>
                                        <Nav.Link href="/gallery">Gallery</Nav.Link>
                                        <Nav.Link href="/about-us">About Us</Nav.Link>
                                        <Nav.Link href="/"><img src="/images/Logo.png" alt=".png" className="logo"/></Nav.Link>
                                        <Nav.Link href="/rooms">Rooms</Nav.Link>
                                        <Nav.Link href="#anvar">Contacts</Nav.Link>
                                        <Nav.Link href="#link">Services</Nav.Link>
                                    </Nav>
<<<<<<< HEAD
                                        <Navbar.Brand className={"BtnNav d-flex justify-content-center"} href="#home">
                                            <Button onClick={this.toggleAuthenticationModal} variant="outline-light" className="rounded-0 py-1 px-3">Sign up</Button>
                                            <Button className="btn btn-link text-decoration-none text-light rounded-0 fakaferry mr-2 py-1 px-3">Sign in</Button>
=======
                                        <Navbar.Brand className={"BtnNav d-flex justify-content-center"}>
                                            {this.context.user ?
                                                <>
                                                    <p className="mx-3">
                                                        {this.context.user.first_name}
                                                    </p>
                                                    <p className="cursor-pointer" onClick={this.logOut}>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25"
                                                             fill="currentColor" className="bi bi-box-arrow-right"
                                                             viewBox="0 0 20 20">
                                                            <path
                                                                  d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
                                                            <path
                                                                  d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                                                        </svg>
                                                    </p>
                                                </>

                                                :
                                                <>
                                                    <Button onClick={this.toggleAuthenticationModal} variant="outline-light" className="rounded-0 py-1 px-3">Sign up</Button>
                                                    <Button className="btn btn-link text-decoration-none text-light rounded-0 fakaferry mr-2 py-1 px-3">Sign in</Button>
                                                </>
                                            }

>>>>>>> 8838ee306ca312da8a060f4ef315225c6c0a3bb9
                                        </Navbar.Brand>
                                </Navbar.Collapse>
                            </Container>
                        </Navbar>
                    </Row>
                    <div className="welcome_text">
                        <p>Welcome</p>
                        <p>Take a rest in Amathings</p>
                        <h3>the perfect place & services & national food & comfort prices</h3>
                    <Button className={"rounded-0 Bookbtn"} variant="outline-light">Book Now</Button>{' '}
                    </div>
            </Container>
        );
    }
}

const nav = document.querySelector('nav')


