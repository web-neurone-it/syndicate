import {createSlice} from "@reduxjs/toolkit";

interface ModalsState{
    consultation: boolean
    offer: boolean
    basket: boolean
}

const initialState: ModalsState = {
    consultation: false,
    offer: false,
    basket: false

}
export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        consultationHandler(state){
            state.consultation = !state.consultation;
        },
        offerHandler(state){
            state.offer = !state.offer
        },
        basketHandler(state){
            state.basket = !state.basket
        },
    }
})

export default modalSlice.reducer