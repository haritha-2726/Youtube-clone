import { createSlice } from "@reduxjs/toolkit";

const appslice=createSlice({
    name:"app",
    initialState:{
        isOpen:true,
    },
    reducers:{
        toogleMenu:(state)=>{
            state.isOpen=!state.isOpen
        },
        closeMenu:(state)=>{
            state.isOpen=false;
        },
         
    }
})
export const{toogleMenu,closeMenu}=appslice.actions
export default appslice.reducer