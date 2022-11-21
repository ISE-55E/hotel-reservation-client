import {Component} from "react";
import {Link} from "react-router-dom";
import './welcome.css';

export default class Welcome extends Component{
    render() {
        return (
            <div>
                <Link to="/" className="text-dark">
                    <li>Home</li>
                </Link>
            </div>
        );
    }
}