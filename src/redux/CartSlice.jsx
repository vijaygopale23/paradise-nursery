import { createSlice } from '@reduxjs/toolkit'

const calculateTotals = (items) => ({
  itemCount: items.reduce((sum, item) => sum + item.quantity, 0),
  totalAmount: items.reduce((sum, item) => sum + item.price * item.quantity, 0),
})

const initialState = {
  items: [],
  itemCount: 0,
  totalAmount: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.items.find((item) => item.id === action.payload.id)

      if (existingItem) {
        existingItem.quantity += 1
      } else {
        state.items.push({ ...action.payload, quantity: 1 })
      }

      const totals = calculateTotals(state.items)
      state.itemCount = totals.itemCount
      state.totalAmount = totals.totalAmount
    },
    increaseQuantity: (state, action) => {
      const item = state.items.find((cartItem) => cartItem.id === action.payload)
      if (!item) return

      item.quantity += 1
      const totals = calculateTotals(state.items)
      state.itemCount = totals.itemCount
      state.totalAmount = totals.totalAmount
    },
    decreaseQuantity: (state, action) => {
      const item = state.items.find((cartItem) => cartItem.id === action.payload)
      if (!item) return

      if (item.quantity > 1) {
        item.quantity -= 1
      } else {
        state.items = state.items.filter((cartItem) => cartItem.id !== action.payload)
      }

      const totals = calculateTotals(state.items)
      state.itemCount = totals.itemCount
      state.totalAmount = totals.totalAmount
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
      const totals = calculateTotals(state.items)
      state.itemCount = totals.itemCount
      state.totalAmount = totals.totalAmount
    },
    clearCart: (state) => {
      state.items = []
      state.itemCount = 0
      state.totalAmount = 0
    },
  },
})

export const {
  addToCart,
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
  clearCart,
} = cartSlice.actions

export default cartSlice.reducer
