import {IOffer} from "./IOffer";
import {createSlice} from "@reduxjs/toolkit";

interface OfferState {
    offer: IOffer;
    offerLoading: boolean;
    offerError: boolean;
    offerSuccess: boolean;
    consultationLoading: boolean;
    consultationError: boolean;
    consultationSuccess: boolean;
}

const initialState: OfferState = {
    offer: {title: '', name: '', phone: '', service: ''},
    offerLoading: false,
    consultationLoading: false,
    offerError: false,
    consultationError: false,
    offerSuccess: false,
    consultationSuccess: false
}

export const offerSlice = createSlice({
        name: 'offer',
        initialState,
        reducers: {
            offerPosting(state) {
                state.offerLoading = true
                state.offerLoading = false;
                state.offerError = false;
            },
            offerPostingSuccess(state){
                state.offerLoading = false;
                state.offerError = false;
                state.offerSuccess = true
            },
            offerPostingError(state){
                state.offerError = true
                state.offerLoading = false
                state.offerSuccess = false
            },
            consultationPosting(state) {
                state.consultationLoading = true
                state.consultationError = false
                state.consultationSuccess = false
            },
            consultationPostingSuccess(state){
                state.consultationLoading = false;
                state.consultationError = false
                state.consultationSuccess = true
            },
            consultationPostingError(state){
                state.consultationError = true
                state.consultationLoading = false
                state.consultationSuccess = false
            }
        }
    }
)
export default offerSlice.reducer