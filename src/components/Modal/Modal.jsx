import React from "react";
import Modal from "react-bootstrap/Modal";
import Tables from "../../views/TableList/TableList"
import img from "logo.png";
class MyVerticallyCenteredModal extends React.Component {
    render() {
        return (
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                animation
                centered>
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                    <img src={img} />
                    {this.props.properties.tool}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                 <Tables/>
                </Modal.Body>
                {/* <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer> */}
            </Modal>
        );
    }
}
export default MyVerticallyCenteredModal;

