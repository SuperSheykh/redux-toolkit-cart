import { useDispatch } from 'react-redux'
import { clearCart } from '../features/cart/cartSlice'
import { closeModal } from '../features/modal/modalSlice'
const Modal = () => {
   const dispatch = useDispatch()
   return (
      <aside className='modal-container'>
         <div className='modal'>
            <h4>Really wanna remove all your items?</h4>
            <div className='btn-container'>
               <button
                  type='button'
                  className='btn clear-btn'
                  onClick={() => {
                     dispatch(clearCart())
                     dispatch(closeModal())
                  }}
               >
                  clear
               </button>
               <button
                  type='button'
                  className='btn confirm-btn'
                  onClick={() => dispatch(closeModal())}
               >
                  cancel
               </button>
            </div>
         </div>
      </aside>
   )
}

export default Modal
