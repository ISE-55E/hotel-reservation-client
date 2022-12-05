import React, {Component} from 'react';
import {Button, Card, Carousel, Col} from "react-bootstrap";
import ShowImageModal from "./showImageModal";
import server from "../../index";

class RoomItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // item: this.props.item,
            showImageModal: false,
            image: null,
            category: null,
            type_room: null,
        }
    }

    componentDidMount() {
        this.getCategoryById(this.props.item.category);
        this.getTypeRoomById(this.props.item.type_room);
    }

    toggleShowImageModal = () => {
        this.setState({ showImageModal: !this.state.showImageModal })
    }

    openImage = (image) => {
        this.setState({image: image})
        this.toggleShowImageModal();
    }

    getCategoryById = (pk) => {
        fetch(server + `apps/category/retrieve/${pk}`)
            .then(res => res.json())
            .then(data => {
                this.setState({category: data.name})
            })
            .catch(err => {
                console.log(err)
            })
    }

    getTypeRoomById = (pk) => {
        fetch(server + `apps/type-room/retrieve/${pk}`)
            .then(res => res.json())
            .then(data => {
                this.setState({type_room: data.name})
            })
            .catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <Card className="bg-warning rounded-0 d-flex flex-row justify-content-between bg-light my-3 card-height shadow">
                {this.state.showImageModal ? (
                    <ShowImageModal
                        image={this.state.image}
                        toggle={this.toggleShowImageModal}
                    />
                ) : null}
                <Col xs={4} className="">
                    <Carousel className="carousel-size">
                        <Carousel.Item>
                            <img
                                className="d-block w-100 h-100"
                                src={this.props.item.image1}
                                alt="First slide"
                                style={{ cursor: "pointer" }}
                                onClick={() => {this.openImage(this.props.item.image1)}}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 h-100"
                                src={this.props.item.image2}
                                alt="First slide"
                                style={{ cursor: "pointer" }}
                                onClick={() => {this.openImage(this.props.item.image2)}}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 h-100"
                                src={this.props.item.image3}
                                alt="First slide"
                                style={{ cursor: "pointer" }}
                                onClick={() => {this.openImage(this.props.item.image3)}}
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 h-100"
                                src={this.props.item.image4}
                                alt="First slide"
                                style={{ cursor: "pointer" }}
                                onClick={() => {this.openImage(this.props.item.image4)}}
                            />
                        </Carousel.Item>
                    </Carousel>
                </Col>
                <Col xs={4} className="p-1 text-line">
                    <Card.Title className="title-text-size">{this.props.item.name}</Card.Title>
                    <Card.Text className="text-size">{this.props.item.floor}-floor, {this.props.item.room_number}-room, {this.props.item.area} kv</Card.Text>
                    <Card.Text className="text-size">{this.state.category}, {this.state.type_room}</Card.Text>
                    <Card.Text className="text-size">Single Beds: {this.props.item.single_beds}, Double Beds: {this.props.item.double_beds}</Card.Text>
                    <Card.Text className="text-size">x x x x x x x</Card.Text>
                    <Card.Text className="text-size">{this.props.item.price} $</Card.Text>
                </Col>
                <Col xs={4} className="d-flex flex-column justify-content-between border-left px-2">
                    <Card.Text className="text-size h-100 overflow-hidden">{this.props.item.info}</Card.Text>
                    {/*<Card.Footer className="text-center cursor-pointer rounded-0 text-light">Book Now</Card.Footer>*/}
                    <Card.Text className="p-2 d-flex justify-content-center align-items-center">
                        <Button
                            variant="outline-primary btn-size d-flex justify-content-center align-items-center rounded-0 button-color"
                        >
                            {this.props.item.busy ? "Room Busy" : "Book Now"}
                        </Button>
                    </Card.Text>
                </Col>
            </Card>
        );
    }
}

export default RoomItem;