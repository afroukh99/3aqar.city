import Modal from "react-modal"
import "./dialog.scss"
import { modalPropsType } from '../../types/types';





const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '70%',
    height: "80%"
  },
};



const Dialog = ({ setIsOpen, modalIsOpen, children }: modalPropsType) => {


  function closeModal() {
    setIsOpen(false);
  }


  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
        {children}
    </Modal>
  )
}

export default Dialog