import {Component} from "react";
import './serviceInLanding.css';

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

    changeActiveItem = (pk) => {
        for(let i = 0; i < this.state.items.length; ++i) {
            if (this.state.items[i].id === pk){
                this.setState({activeItem: this.state.items[i]});
                return this.state.items[i];
            }
        }
    }

    renderItems = () => {
        const items = this.state.items;
        return items.map((item) => (
            <SwiperSlide key={item.id} accessKey={item.id}>
                <img src={item.image} alt="Faka" />
            </SwiperSlide>
        ));
    }

    render() {
        let len = this.state.items.length
        return (
            <div className="serviceInLanding">
                <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    centeredSlides
                    initialSlide={this.state.items.length > 1 ? 1 : 0}
                    onSlideChange={
                        (swiper) => {
                            console.log(swiper.activeIndex);
                        }
                    }
                    onSwiper={
                        (swiper) => {
                            console.log(swiper.activeIndex);
                        }
                    }
                >
                    {this.renderItems()}
                </Swiper>
                <div className="under-slide pt-5 d-flex flex-column justify-content-center align-items-center">
                    {/*<h1 className="">{activeItem.name}</h1>*/}
                    {/*<h5 className="">{this.state.activeItem.price} $</h5>*/}
                    {/*<p className="">{this.state.activeItem.info}</p>*/}
                    <Link to="/service">Show More</Link>
                </div>
            </div>
        );
    }
}