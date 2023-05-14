import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../../components/ProductCard'

interface CounterState {
    products: Product[];
  }
  
const initialState: CounterState = { products: [] };

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Product>) => {
        state.products.push(action.payload)
    },
    remove: (state, action: PayloadAction<Product>) => {
      state.products.splice(
        state.products.findIndex((product) => product.id === action.payload.id), 1
      );
    }
  },
})

export const { add, remove } = basketSlice.actions
export default basketSlice.reducer