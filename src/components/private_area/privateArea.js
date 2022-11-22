import {Component} from "react";
import {Container, Row} from "react-bootstrap";
import './privateArea.css';
import Header from "../header/header";

export default class PrivateArea extends Component {
    render() {
        return (
            <Container fluid className="main p-0">
                <Header />
            </Container>
        );
    }
}