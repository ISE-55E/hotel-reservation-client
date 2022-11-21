import {Component} from "react";
import Welcome from "../welcome_landing/welcome";
import Header from "../header/header";

export default class Landing extends Component{
    render() {
        return (
            <div>
                {/*<Header />*/}
                <Welcome />
            </div>
        );
    }
}