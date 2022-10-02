import { Modal, Image } from "react-bootstrap";
import useBebidas from "../hooks/useBebidas";
const ModalBebida = () => {
  const { modal, handlModalClick } = useBebidas();

  return (
    <Modal show={modal} onHide={() => handlModalClick()}>
      <Modal.Body>CuerpoModal</Modal.Body>
    </Modal>
  );
};

export default ModalBebida;
