import React, {Component} from 'react';
import {Button, Form, Modal} from "react-bootstrap";
import "./SignInParty.css";

class AuthenticationModal extends Component {
    render() {
        let {toggle} = this.props;

        return (
            <Modal
                show={true}
                onHide={toggle}
                size="xl"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body className={"p-0 RegBack d-flex justify-content-between"}>
                    <div className={"SignIn d-flex p-0"}>
                        <Form className={"p-5 text-light fakaferi"}>
                            <div className={"SwitchBox mb-5"}>
                            <Button className={"bg-dark text-light"} variant="-outline- light" >
                                Submit
                            </Button>{' '}
                            <Button className={"bg-dark text-light"} variant="-outline- light" >
                                Submit
                            </Button>
                            </div>
                                <Form.Group className="mb-3" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <Form.Text className="text-mutedt">
                                        <p className={"text-light"}>
                                            We'll never share your email with anyone else.
                                        </p>
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
                    </div>
                </Modal.Body>
            </Modal>
        );
    }
}

export default AuthenticationModal;