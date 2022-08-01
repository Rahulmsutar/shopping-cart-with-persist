import { createSlice } from "@reduxjs/toolkit";
import { data } from "../../components/data";

export const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: data,
        totalAmount: 0,
        totalCount: 0
    },
    reducers: {
        getCartTotal: (state) => {
            let { totalAmount, totalCount } = state.items.reduce(
                (cartTotal, cartItem) => {
                    const { price, qty } = cartItem;
                    const itemTotal = price * qty;
                    cartTotal.totalAmount += itemTotal;
                    cartTotal.totalCount += qty;
                    return cartTotal
                },
                { totalAmount: 0, totalCount: 0 }
            )
            state.totalAmount = parseInt(totalAmount.toFixed(2));
            state.totalCount = totalCount
        },
        removeItem: (state, action) => {
            state.items = state.items.filter((item) => {
                return item.id !== action.payload
            })
        },
        increase: (state, action) => {
            state.items = state.items.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, qty: item.qty + 1 }
                }
                return item
            })
        },
        decrease: (state, action) => {
            state.items = state.items.map((item) => {
                if (item.id === action.payload) {
                    return { ...item, qty: item.qty - 1 }
                }
                return item
            }).filter((item)=>item.qty !==0 )
        },
        clearAll:(state,action)=>{
            state.items = []
        }


    }
})


export const { increase, decrease, getCartTotal,removeItem ,clearAll} = cartSlice.actions

export default cartSlice.reducer
