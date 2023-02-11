import {useEffect} from 'react'

interface ModalProps {
  notifContent:() => void;
  closeNotif:() => void;
}

const Modal = ({notifContent, closeNotif}:ModalProps) => {
  useEffect(() => {
    setTimeout(() => {
      closeNotif()
    }, 3000)
  })
  return (
    <h2 className="text-red-400">{notifContent}</h2>
  )
}

export default Modal