import React from 'react'
import { ChevronUp, ChevronDown } from '../icons'
import { useDispatch } from 'react-redux'
import { removeItem, increase, decrease } from '../features/cart/cartSlice'
const CartItem = ({ id, title, price, amount, img }) => {
   const dispatch = useDispatch()
   return (
      <article className='cart-item'>
         <img src={img} alt={title} />
         <div>
            <h4>{title}</h4>
            <p className='item-price'>${price}</p>
            <button
               type='button'
               className='remove-btn'
               onClick={() => dispatch(removeItem(id))}
            >
               remove
            </button>
         </div>
         <div>
            <button
               type='button'
               className='amount-btn'
               onClick={() => dispatch(increase(id))}
            >
               <ChevronUp />
            </button>
            <p className='amount'>{amount}</p>
            <button
               type='button'
               className='amount-btn'
               onClick={() => {
                  if (amount === 1) {
                     dispatch(removeItem(id))
                  } else {
                     dispatch(decrease(id))
                  }
               }}
            >
               <ChevronDown />
            </button>
         </div>
      </article>
   )
}

export default CartItem
