interface ModalProps {
  notifContent: string;
}

const Modal = ({notifContent}) => {
  return (
    <h2 className="text-red-400">{notifContent}</h2>
  )
}

export default Modal