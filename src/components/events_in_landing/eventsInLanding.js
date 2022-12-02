import {Component} from "react";
import './eventsInLanding.css';
import {Swiper, SwiperSlide} from "swiper/react";
import server from "../../index";

export default class EventsInLanding extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            categoryList: [],
            typeRoomList: [],
            slides: [],
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

    render() {
        const slides = [];



        return (
            <div className="eventsInLanding">
                {this.state.items.length > 0 ?
                    <Swiper
                        observer = {true}
                        observerParents={true}
                        spaceBetween={50}
                        slidesPerView={3}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                    >
                        {
                            this.state.items.map(item => {
                                return <SwiperSlide key={item.id}>{item.name}</SwiperSlide>
                            })
                        }
                    </Swiper> : <h2>No Movies</h2>
                }
            </div>
        );
    }
}