import {Component} from "react";
import './roomsInLanding.css';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import server from "../../index";
import {Image} from "react-bootstrap";

export default class RoomsInLanding extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            categoryList: [],
            typeRoomList: [],
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
        return items.map((item) => (
            <SwiperSlide className="justify-content-start align-items-start bg-transparent">
                <div className="room-image">
                    <Image src={item.image1} />
                </div>
                <div className="bg-light room-info p-2 room-info-text d-flex flex-column justify-content-start align-items-start">
                    <h6 className="mx item-name">{item.name}</h6>
                    <p className="mx">{this.getCategoryById(item.category)}, {this.getTypeRoomById(item.type_room)}</p>
                    <p className="mx">{item.floor}-floor, {item.room_number}-room, {item.area} kv</p>

                </div>
            </SwiperSlide>
        ))
    }

    render() {
        return (
            <div className="roomsInLanding px-4">
                <Swiper
                    spaceBetween={200}
                    slidesPerView={2}
                    // onSlideChange={() => console.log('slide change')}
                    // onSwiper={(swiper) => console.log(swiper)}
                >
                    {this.renderItems()}
                </Swiper>
            </div>
        );
    }
}