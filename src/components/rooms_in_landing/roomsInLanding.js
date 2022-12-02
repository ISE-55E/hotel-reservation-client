import React, {Component} from "react";
import './roomsInLanding.css';
import { Swiper, SwiperSlide } from "swiper/react";
import { Virtual } from 'swiper';
import 'swiper/css';
import 'swiper/css/virtual';
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import server from "../../index";
import {Button, Image} from "react-bootstrap";
import ShowImageModal from "../rooms/showImageModal";
import {Navigation} from "swiper";
import {Link} from "react-router-dom";

export default class RoomsInLanding extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            categoryList: [],
            typeRoomList: [],
            showImageModal: false,
            image: null,
            sort: {
                category: '',
                type_room: '',
                floor: '',
                air_conditioner: '',
                kitchen: '',
                hair_dryer: '',
                iron: '',
                wifi: '',
                TV: '',
                busy: '',
                single_beds: '',
                double_beds: ''
            },
            search: {
                name: ''
            }
        }
    }

    componentDidMount() {
        this.refreshList();
        this.refreshCategoryList();
        this.refreshTypeRoomList();
    }

    toggleShowImageModal = () => {
        this.setState({ showImageModal: !this.state.showImageModal })
    }

    openImage = (image) => {
        this.setState({image: image})
        this.toggleShowImageModal();
    }

    refreshCategoryList = () => {
        fetch(`${server}apps/category/list/`)
            .then(res => res.json())
            .then(data => {
                this.setState({categoryList: data}, () => {
                    // console.log(this.state.categoryList)
                });
            })
            .catch(err => {
                console.log(err)
            })
    }

    refreshTypeRoomList = () => {
        fetch(`${server}apps/type-room/list/`)
            .then(res => res.json())
            .then(data => {
                this.setState({typeRoomList: data}, () => {
                    // console.log(this.state.typeRoomList);
                });
            })
            .catch(err => {
                console.log(err);
            })
    }

    getCategoryById = (pk) => {
        for(let i = 0; i < this.state.categoryList.length; ++i) {
            if (this.state.categoryList[i].id === pk){
                return this.state.categoryList[i].name;
            }
        }
    }

    getTypeRoomById = (pk) => {
        for(let i = 0; i < this.state.typeRoomList.length; ++i) {
            if (this.state.typeRoomList[i].id === pk){
                return this.state.typeRoomList[i].name;
            }
        }
    }

    refreshList = () => {
        fetch(`${server}apps/room/list?search=${this.state.search.name}&category=${this.state.sort.category}&type_room=${this.state.sort.type_room}&floor=${this.state.sort.floor}&air_conditioner=${this.state.sort.air_conditioner}&kitchen=${this.state.sort.kitchen}&hair_dryer=${this.state.sort.hair_dryer}&iron=${this.state.sort.iron}&wifi=${this.state.sort.wifi}&TV=${this.state.sort.TV}&busy=${this.state.sort.busy}&single_beds=${this.state.sort.single_beds}&double_beds=${this.state.sort.double_beds}`)
            .then(res => res.json())
            .then(data => {
                this.setState({items: data});
            })
            .catch(err => {
                console.log(err)
            })
    };

    renderItems = () => {
        const items = this.state.items;

        return items.map((item, index) => (
            <SwiperSlide virtualIndex={index} key={item.id} className="justify-content-start align-items-start bg-transparent slide-padding">
                <div className="room-image shadow">
                    <Image
                        src={item.image1}
                        onClick={() => {this.openImage(item.image1)}}
                    />
                </div>
                <div className="shadow room-info p-3 py-4 room-info-text d-flex flex-column justify-content-between">
                    <div className="d-flex flex-column justify-content-start align-items-start">
                        <h6 className="mx item-name">{item.name}</h6>
                        <p className="mx">{this.getCategoryById(item.category)}, {this.getTypeRoomById(item.type_room)}</p>
                        <p className="mx">{item.floor}-floor, {item.room_number}-room, {item.area} kv</p>
                        <p className="mx">Single beds: {item.single_beds}, Double beds: {item.double_beds}</p>
                        <p className="mx">
                            x x x x x x
                        </p>
                        <p className="mx">Price: ${item.price}</p>
                    </div>
                    <Button
                        variant="btn btn-size text-light d-flex justify-content-center align-items-center rounded-0 button-color"
                    >
                        Book Now
                    </Button>
                </div>
            </SwiperSlide>
        ))
    }

    render() {
        return (
            <div className="roomsInLanding px-4 flex-column">
                {this.state.showImageModal ? (
                    <ShowImageModal
                        image={this.state.image}
                        toggle={this.toggleShowImageModal}
                    />
                ) : null}
                <Swiper
                    virtual
                    modules={[Navigation, Virtual]}
                    breakpoints={{
                        1700: {
                            spaceBetween: 80,
                            slidesPerView: 3,
                        },
                        1350: {
                            spaceBetween: 200,
                            slidesPerView: 2,
                        },
                        1100: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        800: {
                            slidesPerView: 2,
                            spaceBetween: 20
                        },
                        200: {
                            slidesPerView: 1,
                        }
                    }}
                    spaceBetween={200}
                    slidesPerView={2}
                    navigation
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    {this.renderItems()}
                </Swiper>

                <Link to="/rooms" className="show-more-rooms">Show More</Link>

            </div>
        );
    }
}