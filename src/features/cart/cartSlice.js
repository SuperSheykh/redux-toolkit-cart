import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
const initialState = {
   cartItems: [],
   amount: 0,
   total: 0,
   isLoading: true,
}

const url = 'https://course-api.com/react-useReducer-cart-project'
export const getCartItems = createAsyncThunk('cart/getcartitems', async () => {
   try {
      const response = await fetch(url)
      const data = await response.json()
      return data
   } catch (error) {}
})

const cartSlice = createSlice({
   name: 'cart',
   initialState,
   reducers: {
      clearCart: (state) => {
         state.cartItems = []
      },
      removeItem: (state, action) => {
         const id = action.payload
         state.cartItems = state.cartItems.filter((item) => item.id !== id)
      },
      increase: (state, { payload }) => {
         const cartItem = state.cartItems.find((item) => item.id === payload)
         cartItem.amount = cartItem.amount + 1
      },
      decrease: (state, { payload }) => {
         const cartItem = state.cartItems.find((item) => item.id === payload)
         cartItem.amount = cartItem.amount - 1
      },
      getTotals: (state) => {
         let amount = 0
         let total = 0
         state.cartItems.forEach((item) => {
            amount += item.amount
            total += item.price * item.amount
         })
         state.amount = amount
         state.total = total
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(getCartItems.pending, (state) => {
            state.isLoading = true
         })
         .addCase(getCartItems.fulfilled, (state, { payload }) => {
            console.log(payload)
            state.isLoading = false
            state.cartItems = payload
         })
         .addCase(getCartItems.rejected, (state) => {
            state.isLoading = false
         })
   },
})

console.log(cartSlice)

export const { clearCart, removeItem, increase, decrease, getTotals } =
   cartSlice.actions

export default cartSlice.reducer
