import {Component} from "react";
import './serviceInLanding.css';

import { Navigation, A11y } from 'swiper';

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import server from "../../index";
import {Link} from "react-router-dom";

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
                    this.setState({activeItem: this.state.items[0]})
                });
            })
            .catch(err => {
                console.log(err)
            })
    }

    changeActiveItem = (activeIndex) => {
        // console.log(this.state.activeItem)
    }

    renderItems = () => {
        const items = this.state.items;
        return items.map((item) => (
            <SwiperSlide key={item.id}>
                <img src={item.image} alt="Faka" />
            </SwiperSlide>
        ))
    }

    render() {
        return (
            <div className="serviceInLanding">
                <Swiper
                    // install Swiper modules
                    modules={[Navigation, A11y]}
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation
                    rewind={true}
                    centeredSlides={true}
                    initialSlide={2}
                    // onSwiper={(swiper) => {
                    //     this.changeActiveItem(2);
                    // }}
                    // onSlideChange={(swiper) => {
                    //     this.changeActiveItem(swiper.activeIndex);
                    // }}
                >
                    {this.renderItems()}
                </Swiper>
                <div className="under-slide pt-5 d-flex flex-column justify-content-center align-items-center">
                    {/*<h1 className="">{this.state.activeItem.name}</h1>*/}
                    {/*<h5 className="">{this.state.activeItem.price} $</h5>*/}
                    {/*<p className="">{this.state.activeItem.info}</p>*/}
                    <Link to="/service">Show More</Link>
                </div>
            </div>
        );
    }
}