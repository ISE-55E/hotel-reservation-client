import {Component} from "react";
import './foodInLanding.css';
import {Container, Nav, NavDropdown} from "react-bootstrap";

export default class FoodInLanding extends Component {
    render () {
        return (
            <div className="foodInLanding">
                     <div className="FoodPage">
                        <Nav fill variant="tabs" defaultActiveKey="#">
                            <Nav.Item>
                                <Nav.Link className="text-light rounded-0 TabBack" href="#">Salty products</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="text-light rounded-0 TabBack" eventKey="#">Fruits</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link className="text-light rounded-0 TabBack" eventKey="#">Aquatic Foods</Nav.Link>
                            </Nav.Item>

                            {/*<Nav.Item>*/}
                            {/*    <Nav.Link eventKey="disabled" disabled>*/}
                            {/*        Disabled*/}
                            {/*    </Nav.Link>*/}
                            {/*</Nav.Item>*/}
                        </Nav>
                    </div>
            </div>
        );
    }
}