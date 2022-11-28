import {Component} from "react";
import './roomsInLanding.css';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import server from "../../index";
import {Image} from "react-bootstrap";

export default class RoomsInLanding extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
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
            <SwiperSlide>
                {/*{item.name}*/}
                <Image src={item.image1} />
            </SwiperSlide>
        ))
    }

    render() {
        return (
            <div className="roomsInLanding">
                <Swiper
                    spaceBetween={100}
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