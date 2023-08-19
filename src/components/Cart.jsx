import { useSelector, useDispatch } from 'react-redux'
import CartItem from './CartItem'
import { removeItem } from '../features/cart/cartSlice'
import { openModal } from '../features/modal/modalSlice'

const Cart = () => {
   const { amount, cartItems, total } = useSelector((state) => state.cart)
   const dispatch = useDispatch()

   if (cartItems < 1) {
      return (
         <section className='cart'>
            <header>
               <h2>Your bag</h2>
               <p className='empty-cart'>is empty for now.</p>
            </header>
         </section>
      )
   }
   return (
      <section className='cart'>
         <header>
            <h2>your bag</h2>
            {cartItems.map((item) => (
               <CartItem key={item.id} {...item} removeItem={removeItem} />
            ))}
         </header>
         <footer>
            <div className='cart-total'>
               <h4>
                  total: <span>${total.toFixed(2)}</span>
               </h4>
            </div>
            <button
               className='btn clear-btn'
               onClick={() => dispatch(openModal())}
            >
               clear
            </button>
         </footer>
      </section>
   )
}

export default Cart
