import React, {Component} from 'react';
import {Button, Col, Form, Modal, Row} from "react-bootstrap";
import "./SignInParty.css";

class AuthenticationModal extends Component {
    render() {
        let {toggle} = this.props;

        return (
            <Modal
                show={true}
                onHide={toggle}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body className={"ModalWin"}>
                    <Row>
                        <Col sm={12} lg={6}>
                            <Form className={"p-3"}>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" placeholder="Password" />
                                </Form.Group>
                                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                    <Form.Check type="checkbox" label="Check me out" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                        <Col className={"RegImgPar"} lg={6} >
                            <img className={"RegImg"} src="/images/RegistrationPart.png" alt=".png" />
                        </Col>
                    </Row>

                </Modal.Body>

            </Modal>

        );
    }
}

export default AuthenticationModal;