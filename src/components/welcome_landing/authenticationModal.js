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
                centered
                className="p-0 m-0"
            >
                <div className="w-100 h-100 bg-invisible rounded-4 p-0 m-0">
                    <Row className="w-100 m-0">
                        <Col sm={12} lg={6}>
                            <Form className={"p-0 m-4"}>
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
                        <Col className={"RegImgPar m-0 p-0"} lg={6} >
                            <img className={"RegImg m-0 w-100 h-100 rounded-0"} src="/images/RegistrationPart.png" alt=".png" />
                        </Col>
                    </Row>
                </div>
            </Modal>
        );
    }
}

export default AuthenticationModal;



{/*<Row className="bg-invisible">*/}
{/*    <Col sm={12} lg={6}>*/}
{/*        <Form className={"p-0 m-4"}>*/}
{/*            <Form.Group className="mb-3" controlId="formBasicEmail">*/}
{/*                <Form.Label>Email address</Form.Label>*/}
{/*                <Form.Control type="email" placeholder="Enter email" />*/}
{/*                <Form.Text className="text-muted">*/}
{/*                    We'll never share your email with anyone else.*/}
{/*                </Form.Text>*/}
{/*            </Form.Group>*/}
{/*            <Form.Group className="mb-3" controlId="formBasicPassword">*/}
{/*                <Form.Label>Password</Form.Label>*/}
{/*                <Form.Control type="password" placeholder="Password" />*/}
{/*            </Form.Group>*/}
{/*            <Form.Group className="mb-3" controlId="formBasicCheckbox">*/}
{/*                <Form.Check type="checkbox" label="Check me out" />*/}
{/*            </Form.Group>*/}
{/*            <Button variant="primary" type="submit">*/}
{/*                Submit*/}
{/*            </Button>*/}
{/*        </Form>*/}
{/*    </Col>*/}
{/*    <Col className={"RegImgPar"} lg={6} >*/}
{/*        <img className={"RegImg"} src="/images/RegistrationPart.png" alt=".png" />*/}
{/*    </Col>*/}
{/*</Row>*/}