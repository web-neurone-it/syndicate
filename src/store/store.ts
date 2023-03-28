import { combineReducers, configureStore } from "@reduxjs/toolkit";
import reviewReducer from "../models/ReviewSlice";
import offerReducer from "../models/OfferSlice";
import serviceReducer from "../models/ServiceSlice";
import basketReducer from "../models/BasketSlice";
import modalReducer from "../models/ModalSlice";
import basketModalReducer from "../models/ModalSlice";

const rootReducer = combineReducers({
    reviewReducer,
    offerReducer,
    serviceReducer,
    basketReducer,
    modalReducer,
    basketModalReducer,
});

export const setupStore = (preloadedState?: RootState) => {
    return configureStore({
        reducer: rootReducer,
        preloadedState,
    });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
