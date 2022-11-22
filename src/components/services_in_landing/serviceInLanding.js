import {Component} from "react";
import './serviceInLanding.css';
import server from "../../index";

export default class ServiceInLanding extends Component {
    constructor(props) {
        super(props);
        this.state = {
            itemList: [],
        }
    }

    refreshList = () => {
        // Gets service list and gives it to itemList
    }

    render() {
        return (
            <div className="serviceInLanding">
                <h1>Services</h1>
            </div>
        );
    }
}