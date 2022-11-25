import {Component} from "react";
import './footer.css';
import {Nav, Row} from "react-bootstrap";

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
              <Row>
                  <Nav defaultActiveKey="/home" className="flex-column">
                      <Nav.Link href="/home">Active</Nav.Link>
                      <Nav.Link eventKey="link-1">Link</Nav.Link>
                      <Nav.Link eventKey="link-2">Link</Nav.Link>
                      <Nav.Link eventKey="disabled" disabled>
                          Disabled
                      </Nav.Link>
                  </Nav>
              </Row>
            </div>
        );
    }
}