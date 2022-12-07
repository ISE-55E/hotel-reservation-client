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
            <Container>
              <Row className="FeedBack ">
                  <Col lg={6} sm={12} className="left">
                      <img src="/images/Vise.jpg" alt=".png"/>
                  </Col>
                  <Col lg={6} sm={12} className="right">
                      <FloatingLabel controlId="floatingTextarea2" label="Comments">
                          <Form.Control
                              as="textarea"
                              placeholder="Leave a comment here"
                              style={{ height: '100px' }}
                          />
                      </FloatingLabel>
                      <div className="buttons d-flex justify-content-end mt-4">
                          <Button className="btn1 rounded-0">Submit</Button>{' '}
                          <Button className="btn2 rounded-0">Clear</Button>
                      </div>
                  </Col>
              </Row>
            </Container>
        );
    }
}

export default FeedbackInLanding;