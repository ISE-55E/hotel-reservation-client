import {Component} from "react";
import './serviceInLanding.css';

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import server from "../../index";
import {Link} from "react-router-dom";
import {Navigation} from "swiper";

export default class ServiceInLanding extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            activeItem: {},
        }
    }

    componentDidMount() {
        this.refreshList();
        this.changeActiveItem(0);
    }

    refreshList = () => {
        // Gets service list and gives it to itemList
        fetch(`${server}apps/service/list/`)
            .then(res => res.json())
            .then(data => {
                this.setState({items: data}, () => {
                    this.setState({activeItem: this.state.items[1]})
                });
            })
            .catch(err => {
                console.log(err)
            })
    }

    changeActiveItem = (pk) => {
        for(let i = 0; i < this.state.items.length; ++i) {
            if (this.state.items[i].id === pk){
                this.setState({activeItem: this.state.items[i]}, () => {
                    console.log(this.state.activeItem)
                });
            }
        }
        this.setState({activeItem: this.state.items[pk]}, () => {
            console.log("ads")
        });
    }

    renderItems = () => {
        const items = this.state.items;
        return items.map((item) => (
            <SwiperSlide key={item.id}>
                <img src={item.image} alt="Faka" />
            </SwiperSlide>
        ));
    }

    render() {
        return (
            <div className="serviceInLanding">
                <Swiper
                    modules={[Navigation]}
                    navigation
                    spaceBetween={50}
                    slidesPerView={3}
                    centeredSlides
                    initialSlide={1}
                    breakpoints={
                        {
                            1700: {
                                spaceBetween: 80,
                                slidesPerView: 3,
                            },
                            1350: {
                                spaceBetween: 150,
                                slidesPerView: 2,
                            },
                            1100: {
                                slidesPerView: 2,
                                spaceBetween: 80,
                            },
                            980: {
                                slidesPerView: 2,
                                spaceBetween: 100
                            },
                            200: {
                                slidesPerView: 1,
                            }
                        }
                    }
                    onSlideChange={
                        (swiper) => {
                            console.log(swiper.activeIndex);
                            this.changeActiveItem(swiper.activeIndex);
                        }
                    }
                >
                    {this.renderItems()}
                </Swiper>
                <div className="under-slide pt-5 d-flex flex-column justify-content-center align-items-center">
                    {/*<h1 className="">{this.state.activeItem.name ? this.state.activeItem.name : "Empty"}</h1>*/}
                    {/*<h5 className="">{this.state.activeItem.price ? this.state.activeItem.price : "Empty"} $</h5>*/}
                    {/*<p className="">{this.state.activeItem.info ? this.state.activeItem.info : "Empty"}</p>*/}
                    <Link to="/service">Show More</Link>
                </div>
            </div>
        );
    }
}