import React, {Component} from 'react';
import "./feedBackInLanding.css";
import {Button, Col, Container, FloatingLabel, Form, Row} from "react-bootstrap";
import * as PropTypes from "prop-types";

function FeedBackDiv(props) {
    return null;
}


class FeedbackInLanding extends Component {
    render() {
        return (
                <Row className="w-50">
                    <Col className="left d-flex justify-content-end" lg={6} sm={12}>
                        <img src="/images/Vise.jpg" alt=".jpg"/>
                    </Col>
                    <Col className=" p-3" lg={6} sm={12}>
                        <FloatingLabel controlId="floatingTextarea2" label="Comments">
                            <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '100px' }}
                            />
                        </FloatingLabel>
                        <div className="buttons">
                            <Button className="btn1 rounded-0 m-2 ">Submit</Button>
                            <Button className="btn2 rounded-0 m-2">Secondary</Button>
                        </div>
                    </Col>
                </Row>
        );
    }
}

export default FeedbackInLanding;