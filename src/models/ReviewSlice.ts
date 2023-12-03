import {IReview} from "./IReview";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface ReviewState{
    reviews: IReview[];
    isFetchingLoading: boolean;
    error: string;
    success?: string;
}

const initialState: ReviewState = {
    reviews: [],
    isFetchingLoading: false,
    error: '',
    success: ''

}
export const reviewSlice = createSlice({
    name: 'review',
    initialState,
    reducers: {
        reviewsFetching(state){
            state.isFetchingLoading = true;
        },
        reviewsFetchingSuccess(state, action: PayloadAction<IReview[]>){
            state.isFetchingLoading = false;
            state.reviews = action.payload;
        },
        reviewsFetchingError(state, action: PayloadAction<string>){
            state.isFetchingLoading = false;
            state.error = action.payload
        }
    }
})
export default reviewSlice.reducer