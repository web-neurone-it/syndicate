import { AppDispatch } from "../store";
import { reviewSlice } from "../../models/ReviewSlice";
import axios from "axios";
import { IReview } from "../../models/IReview";
import { offerSlice } from "../../models/OfferSlice";
import emailjs from "@emailjs/browser";
import { ReactNode } from "react";
import { serviceSlice } from "../../models/ServiceSlice";
import servicesInfo from "../../components/Services/ServicesInfo";
import { basketSlice } from "../../models/BasketSlice";
import { IBasketUnit } from "../../models/IBasketUnit";
import { modalSlice } from "../../models/ModalSlice";

export const fetchReviews = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(reviewSlice.actions.reviewsFetching());
        const response = await axios.get<IReview[]>(
            "https://syndicate-fa6ea-default-rtdb.firebaseio.com/reviews.json"
        );
        dispatch(reviewSlice.actions.reviewsFetchingSuccess(response.data));
    } catch (e) {
        dispatch(reviewSlice.actions.reviewsFetchingError(e.message));
    }
};

export const postOffer = (data: any) => async (dispatch: AppDispatch) => {
    dispatch(modalHandler("offer")); //close modal after usage
    try {
        dispatch(offerSlice.actions.offerPosting());
        await emailjs.send(
            "service_4vi8qrg",
            "template_3je89fh",
            data,
            "T4Wj5wNg9lgPTU_sL"
        );
        dispatch(offerSlice.actions.offerPostingSuccess());
    } catch (e) {
        dispatch(offerSlice.actions.offerPostingError());
    }
};
export const postConsultation =
    (data: any) => async (dispatch: AppDispatch) => {
        dispatch(modalHandler("consultation")); //close modal after usage
        try {
            dispatch(offerSlice.actions.consultationPosting());
            await emailjs.send(
                "service_4vi8qrg",
                "template_3je89fh",
                data,
                "T4Wj5wNg9lgPTU_sL"
            );
            dispatch(offerSlice.actions.consultationPostingSuccess());
        } catch (e) {
            dispatch(offerSlice.actions.consultationPostingError());
        }
    };

export const fetchService = (data: ReactNode) => (dispatch: AppDispatch) => {
    const response = servicesInfo.find((x) => x.id === Number(data));
    if (response) {
        dispatch(serviceSlice.actions.fetchService(response));
        dispatch(
            basketSlice.actions.selectService(
                response.title + " - " + response.subtitle
            )
        );
    }
};

export const selectCar = (data: string) => (dispatch: AppDispatch) => {
    dispatch(basketSlice.actions.selectCar(data));
};
export const selectPart = (data: string) => (dispatch: AppDispatch) => {
    dispatch(basketSlice.actions.selectPart(data));
};
export const basketAppend = () => (dispatch: AppDispatch) => {
    dispatch(basketSlice.actions.appendToBasket());
};
export const basketRemove = (data: IBasketUnit) => (dispatch: AppDispatch) => {
    dispatch(basketSlice.actions.removeFromBasket(data));
};
export const sendBasket = (data: any) => async (dispatch: AppDispatch) => {
    try {
        dispatch(basketSlice.actions.basketSending());
        await emailjs.send(
            "service_4vi8qrg",
            "template_3je89fh",
            data,
            "T4Wj5wNg9lgPTU_sL"
        );
        dispatch(basketSlice.actions.basketSendingSuccess());
    } catch (e) {
        dispatch(basketSlice.actions.basketSendingError());
    }
};

export const modalHandler =
    (data: "consultation" | "offer") => (dispatch: AppDispatch) => {
        data === "consultation" &&
            dispatch(modalSlice.actions.consultationHandler());
        data === "offer" && dispatch(modalSlice.actions.offerHandler());
    };
export const basketHandler = () => (dispatch: AppDispatch) => {
    dispatch(modalSlice.actions.basketHandler());
};
