import Navbar from './components/Navbar'
import Cart from './components/Cart'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTotals, getCartItems } from './features/cart/cartSlice'
import Modal from './components/Modal'
function App() {
   const { cartItems, isLoading } = useSelector((state) => state.cart)
   const { isOpen } = useSelector((state) => state.modal)
   const dispatch = useDispatch()
   useEffect(() => {
      dispatch(getTotals())
   }, [cartItems])
   useEffect(() => {
      dispatch(getCartItems())
   }, [])

   if (isLoading) {
      return <div className='loading'>loading..</div>
   }

   return (
      <main>
         {isOpen && <Modal />}
         <Navbar />
         <Cart />
      </main>
   )
}
export default App
