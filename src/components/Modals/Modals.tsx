import React, {useEffect} from 'react';
import {Transition} from "react-transition-group";
import ModalOffer from "./ModalOffer";
import {useAppSelector} from "../../hooks/redux";
import disableScroll from "disable-scroll";
import ModalConsultation from "./ModalConsultation";
import ModalBasketContainer from "./ModalBasketContainer";

const Modals = () => {
    const {offer, consultation} = useAppSelector(state => state.modalReducer)

    useEffect(() => {
        offer || consultation ? disableScroll.on() : disableScroll.off()
    }, [offer, consultation])

    return (
        <>
            <Transition in={offer} timeout={200} mountOnEnter unmountOnExit>
                { state => <ModalOffer transition={state}/>}
            </Transition>

            <Transition in={consultation} timeout={200} mountOnEnter unmountOnExit>
                { state => <ModalConsultation transition={state}/>}
            </Transition>

            <ModalBasketContainer/>
        </>
    );
};

export default Modals;