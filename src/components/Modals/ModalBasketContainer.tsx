import React, {useState} from 'react';
import { FaShoppingCart} from "react-icons/fa";
import {Transition} from "react-transition-group";
import ModalBasket from "./ModalBasket";
import classes from "../../scss/ModalBasket.module.scss";
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import {basketHandler} from "../../store/reducers/ActionCreators";

const ModalBasketContainer = () => {
    const [hiddenExited, setHiddenExited] = useState<boolean>(false)
    const [expandedExited, setExpandedExited] = useState<boolean>(true)
    const {basket} = useAppSelector(state => state.basketReducer)
    const {basket: basketModal} = useAppSelector(state => state.basketModalReducer)
    const dispatch = useAppDispatch()
    return (

        <>
            <Transition in={!basketModal && expandedExited} timeout={500} mountOnEnter unmountOnExit
                        onEntered={() => setHiddenExited(false)}
                        onExited={() => setHiddenExited(true)}
            >
                { state =>
                    <div className={classes['Basket-popup'] + ' ' + classes[state]}
                         onClick={() => dispatch(basketHandler())}>
                        <FaShoppingCart/>
                        <p> {basket.length}</p>
                    </div> }
            </Transition>

            <Transition in={basketModal && hiddenExited} timeout={500} mountOnEnter unmountOnExit
                        onEntered={() => setExpandedExited(false)}
                        onExited={() => setExpandedExited(true)}
            >
                { state => <ModalBasket transition={state}/> }
            </Transition>

        </>
    );
};

export default ModalBasketContainer;