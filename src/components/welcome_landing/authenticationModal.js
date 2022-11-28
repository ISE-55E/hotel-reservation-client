import React, {Component} from 'react';
import {Button, Modal} from "react-bootstrap";

class AuthenticationModal extends Component {
    render() {
        let {toggle} = this.props;

        return (
            <Modal
                show={true}
                onHide={toggle}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Modal heading
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Centered Modal</h4>
                    <p>
                        Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                        dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
                        consectetur ac, vestibulum at eros.
                    </p>
                </Modal.Body>
                <Modal.Footer>
                    <Button>Close</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default AuthenticationModal;