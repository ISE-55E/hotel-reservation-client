import {Component} from "react";
import './roomsInLanding.css';
import RoomElement from "./roomElement";

export default class RoomsInLanding extends Component {
    render() {
        return (
            <div className="roomsInLanding">
                <RoomElement />
                <RoomElement />
            </div>
        );
    }
}