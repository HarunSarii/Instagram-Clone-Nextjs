import React from 'react'
import { useRecoilState } from 'recoil';
import { modalState } from '../atoms/modalAtom'


const Modal = () => {
  const [ open, setOpen ] = useRecoilState(modalState);
  console.log('open', open);
  return (
    <div>
      {open && <p>THE MODAL IS OPEN</p>}
    </div>
  )
}

export default Modal