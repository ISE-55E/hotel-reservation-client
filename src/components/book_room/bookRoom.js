import React, {Component} from 'react';
import {Carousel, Col, Container, Form, FormControl, FormGroup, Modal, Row} from "react-bootstrap";
import './bookRoom.css';

class BookRoom extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {toggle} = this.props;

        return (
            <Modal
                show={true}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                onHide={toggle}
                className="rounded"
            >
                <Container fluid className="p-0">
                    <Row>
                        <Col xs={5}>
                            <Carousel fade>
                                <Carousel.Item className="carousel-height rounded">
                                    <img
                                        className="d-block w-100 h-100 rounded"
                                        src={this.props.item.image1}
                                        alt="First slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item className="carousel-height rounded">
                                    <img
                                        className="d-block w-100 h-100 rounded"
                                        src={this.props.item.image2}
                                        alt="Second slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item className="carousel-height rounded">
                                    <img
                                        className="d-block w-100 h-100 rounded"
                                        src={this.props.item.image3}
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item className="carousel-height rounded">
                                    <img
                                        className="d-block w-100 h-100 rounded"
                                        src={this.props.item.image4}
                                        alt="Fourth slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                        <Col xs={7}>
                            <h4>{this.props.item.name}</h4>
                            <p>{this.props.item.floor}-floor, {this.props.item.room_number}-room</p>
                            <p>Single Beds: {this.props.item.single_beds}, Double Beds: {this.props.item.double_beds}</p>
                            <h5>{this.props.item.price}$</h5>
                        </Col>
                    </Row>
                    <Row>
                        <Form>
                            <Col className="p-5">
                                <Container className="p-3 border border-dark rounded">
                                    <Row>
                                        <Col>
                                            <FormGroup>
                                                <FormControl
                                                    type="datetime-local"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col>
                                            <FormGroup>
                                                <FormControl
                                                    type="text"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col>
                                            <FormGroup>
                                                <FormControl
                                                    type="text"
                                                />
                                            </FormGroup>
                                        </Col>
                                        <Col>
                                            <FormGroup>
                                                <FormControl
                                                    type="text"
                                                />
                                            </FormGroup>
                                        </Col>
                                    </Row>
                                </Container>
                            </Col>
                        </Form>
                    </Row>
                </Container>
            </Modal>
        );
    }
}

export default BookRoom;