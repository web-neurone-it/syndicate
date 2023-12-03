import React, {useEffect, useState} from 'react';
import classes from '../scss/UINotification.module.scss'
import {useAppSelector} from "../hooks/redux";
import {Transition} from "react-transition-group";

const UINotification = () => {
    const { loading : basketLoading, success : basketSuccess, error: basketError } = useAppSelector(state => state.basketReducer)
    const {
        offerLoading, offerSuccess, offerError,
        consultationLoading,  consultationSuccess, consultationError
    } = useAppSelector(state => state.offerReducer)

    const [exited, setExited] = useState<boolean>(false)
    const [initialRender, setInitialRender] = useState<boolean>(true)
    // console.log( consultationLoading,  consultationSuccess, consultationError)
    useEffect(() => {
        if (initialRender) {
            setInitialRender(false)
        } else{
            setExited(true)
            setTimeout(() => {
                setExited(false)
            },5000)
        }

    }, [
        basketLoading, basketSuccess, basketError,
        offerSuccess, offerError,offerLoading,
        consultationLoading, consultationSuccess, consultationError
    ])

    return (
        <Transition
            in={exited} timeout={200} mountOnEnter unmountOnExit
        >
            { state =>
                <div className={classes['UINotification'] + ' ' + classes[state]}>
                    <div className={classes['UINotification__content']}>
                        {((basketLoading || offerLoading || consultationLoading)) && <p>Запрос выполняется...</p>}
                        {(basketError || offerError || consultationError) && <p>Ошибка, повторите еще раз !</p>}
                        {(basketSuccess || offerSuccess || consultationSuccess) && <p>Запрос отправлен !</p>}
                    </div>
                </div>
            }
        </Transition>
    )
}

export default UINotification;