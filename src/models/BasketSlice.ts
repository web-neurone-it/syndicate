import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IBasketUnit} from "./IBasketUnit";

interface BasketState {
    basket: IBasketUnit[];
    selectedParts: string[];
    selectedCar: string;
    selectedService: string;
    loading: boolean;
    success: boolean
    error: boolean;
}

const initialState: BasketState = {
    basket: [],
    selectedParts: ['Не выбрано'],
    selectedCar: 'Седан',
    selectedService: 'Не выбрано',
    loading: false,
    success: false,
    error: false
}

export const basketSlice = createSlice({
        name: 'basket',
        initialState,
        reducers: {
            selectCar(state, action: PayloadAction<string>){
                state.selectedCar = action.payload
            },
            selectService(state, action: PayloadAction<string>){
                state.selectedService = action.payload
            },
            selectPart(state, action: PayloadAction<string>){
                const foundIdx = state.selectedParts.findIndex(i => i === action.payload)
                foundIdx >= 0 ? state.selectedParts.splice(foundIdx, 1) : state.selectedParts.push(action.payload)
                if (state.selectedParts.length > 0 && state.selectedParts.find(i => i === 'Не выбрано')){
                    state.selectedParts.splice(state.selectedParts.findIndex(i => i === 'Не выбрано'), 1)
                }
               state.selectedParts.length === 0 && state.selectedParts.push('Не выбрано')
            },
            appendToBasket(state){
                state.basket.push({
                    selectedParts: state.selectedParts,
                    selectedCar: state.selectedCar,
                    selectedService: state.selectedService
                })
                state.selectedParts = ['Не выбрано']
            },
            removeFromBasket(state, action: PayloadAction<IBasketUnit>){
                const foundIdx = state.basket.findIndex(i => {
                    return (
                        i.selectedCar === action.payload.selectedCar
                        && i.selectedService === action.payload.selectedService
                        && i.selectedParts === action.payload.selectedParts
                    )
                })
                state.basket.splice(foundIdx, 1)
            },
            basketSending(state) {
                state.loading = true
                state.success = false
                state.error = false
                state.basket = []
                state.selectedParts = ['Не выбрано']
                state.selectedService = 'Не выбрано'
            },
            basketSendingSuccess(state){
                state.loading = false;
                state.error = false;
                state.success = true;
            },
            basketSendingError(state){
                state.error = true;
                state.loading = false;
                state.success = false;
            },
        }
    }
)
export default basketSlice.reducer