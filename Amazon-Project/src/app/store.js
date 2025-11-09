import { configureStore } from '@reduxjs/toolkit'
import { productsReducer } from '../features/products/productSlice'

// ===*configure Store*===
export const store = configureStore({
  reducer: {
    products: productsReducer,
  },
})
