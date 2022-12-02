import React, {Component} from 'react';
import "./feedBackInLanding.css";
import {Button, Col, Form, Row} from "react-bootstrap";

class FeedbackInLanding extends Component {
    render() {
        return (
            <div className="FeedbackInLanding d-flex justify-content-center">
                <Row className={"w-50"}>
                    <Col lg={6} md={12} sm={12}>
                        <img className="ImgFeedBack" src="/images/Vise.jpg" alt=".jpg" />
                    </Col>
                    <Col lg={6} md={12} sm={12}>
                        <Form>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label>Example textarea</Form.Label>
                                <Form.Control as="textarea" rows={3} />
                            </Form.Group>
                            <Button variant="light" type="submit">Clear</Button>{' '}
                            <Button variant="primary" type="submit">Submit</Button>
                        </Form>
                    </Col>
                </Row>
             </div>


        );
    }
}

export default FeedbackInLanding;