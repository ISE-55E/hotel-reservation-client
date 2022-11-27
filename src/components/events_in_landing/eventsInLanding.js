import {Component} from "react";
import './eventsInLanding.css';
import {Carousel} from "react-bootstrap";

export default class EventsInLanding extends Component {
    render() {
        return (
            <div className="eventsInLanding">
                    <Carousel className={"CaruselEvent"} variant="light">
                        <Carousel.Item>
                            <img
                                className="d-block w-100 EventLanding"
                                src="/images/event_image.png?text=First slide&bg=f5f5f5"
                                alt="First slide"
                            />
                            <Carousel.Caption>
                               <div className={"CaruselEventOpinion"}>

                               </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 EventLanding"
                                src="/images/event_image.png?text=Second slide&bg=eee"
                                alt="Second slide"
                            />
                            <Carousel.Caption>
                                <h5>Second slide label</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="d-block w-100 EventLanding"
                                src="/images/event_image.png?text=Third slide&bg=e5e5e5"
                                alt="Third slide"
                            />
                            <Carousel.Caption>
                                <h5>Third slide label</h5>
                                <p>
                                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                                </p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
            </div>
        );
    }
}