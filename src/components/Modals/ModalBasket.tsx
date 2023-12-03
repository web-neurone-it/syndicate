import React, {useState} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks/redux";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import {basketHandler, basketRemove, sendBasket} from "../../store/reducers/ActionCreators";
import input__class from '../../scss/UIInput.module.scss'
import classes from "../../scss/ModalBasket.module.scss";
import UIButton from "../../UIKit/UIButton";
import {FaArrowLeft, FaPaperPlane, FaTimes, FaTrash} from "react-icons/fa";
import InputMask from "react-input-mask";

const ModalBasket = ({transition}: {transition: string}) => {
    const [basketState, setBasketState] = useState<boolean>(true)
    const {basket} = useAppSelector(state => state.basketReducer)
    const [phone, setPhone] = useState('')
    const [phoneTouched, setPhoneTouched] = useState(false)
    const [phoneError, setPhoneError] = useState('')
    const [name, setName] = useState('')
    const [nameTouched, setNameTouched] = useState(false)
    const [nameError, setNameError] = useState('')
    const { width } = useWindowDimensions(); //viewport width
    const phoneHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setPhoneTouched(true)
        setPhone(e.target.value)
        if (phoneTouched && e.target.value.replace(/\D/g, "").length < 11) {
            setPhoneError('Некорректный номер телефона !')
        }
        if (phoneTouched && e.target.value.replace(/\D/g, "").length === 11) {
            setPhoneError('')
        }
    }
    const nameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setNameTouched(true)
        setName(e.target.value)
        if (nameTouched && e.target.value.length < 1) {
            setNameError('Введите имя !')
        }
        if (nameTouched && e.target.value.length > 0) {
            setNameError('')
        }
    }
    const checkForm = () => {
        let counter = 0
        if (name.length === 0) {
            setNameError('Введите имя !')
            counter += 1
        }
        if (phone.replace(/\D/g, "").length < 11){
            setPhoneError('Некорректный номер телефона !')
            counter += 1
        }
        return counter
    }
    const dispatch = useAppDispatch()
    const sendHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault()
        if (checkForm() < 1) {
            let service = ''
            for (let i in basket) {
                if (basket.hasOwnProperty(i)) {
                    service += '| Кузов: '+basket[i].selectedCar+"\r\n" + '. Услуга: '+basket[i].selectedService+"\r\n" +
                        '. Детали: '+basket[i].selectedParts.join(', ')+"\r\n";
                }
            }
            dispatch(sendBasket({service, phone, name}))
            dispatch(basketHandler())
        }
    }

    return (
        <div className={classes['ModalBasket'] + ' ' + classes[transition]}>
            <div className={classes['ModalBasket__header']}>
                {!basketState && <span onClick={() => setBasketState(true)}><FaArrowLeft/> </span>}
                <p>Корзина</p>
                <span onClick={() => dispatch(basketHandler())}><FaTimes/></span>
            </div>
            <hr/>
            <br/>
            {basketState ?
                <div className={classes['ModalBasket__content']}>
                    {basket.map((i, index) => (
                        <div className={classes['ModalBasket__order']} key={index}>
                            <div className={classes['ModalBasket__order-item']}>
                                <div className={classes['ModalBasket__order-item-car']}>
                                    <b>{index + 1}.</b> {i.selectedCar} : {i.selectedParts.join(', ')}
                                </div>
                                <div className={classes['ModalBasket__order-item-service']}>
                                    <b>Услуга: </b> {i.selectedService}
                                </div>
                                <div className={classes['ModalBasket__order-item-button']}>
                                    <UIButton
                                        type={'primary'}
                                        onClick={() => dispatch(basketRemove(i))}
                                    >
                                        <FaTrash/> Удалить
                                    </UIButton>
                                </div>
                            </div>
                            <br/>
                        </div>
                    ))}
                    {basket.length > 0 ?
                        <div className={classes['ModalBasket__button']}>
                            <UIButton
                                type={'outline'}
                                onClick={() => setBasketState(false)}
                            >
                                &nbsp;&nbsp; Перейти к оформлению
                            </UIButton>
                        </div>
                        :
                        <div className={classes['ModalBasket__empty']}>
                            <p>Нет выбранных услуг</p>
                            <br/>
                        </div>
                    }
                </div>
                :
                <div className={classes['ModalBasket__content']}>
                    <div className={classes['ModalBasket__content-back']}>

                    </div>
                    <p className={classes['ModalBasket__content-title']}>
                        Персональная информация
                    </p>

                    <div className={classes['ModalBasket__content-field']}>
                        <p>Имя</p>
                        <div>
                            <input
                                type="text"
                                value={name}
                                maxLength={15}
                                onChange={e => nameHandler(e)}
                                className={nameError ?
                                    input__class['input'] + ' ' + input__class['error'] :
                                    input__class['input']
                                }
                            />
                        </div>
                    </div>
                    <div className={classes['ModalBasket__content-field']}>
                        <p>Номер телефона</p>
                        <div>
                            <InputMask
                                type="text"
                                value={phone}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => phoneHandler(e)}
                                className={phoneError ?
                                    input__class['input'] + ' ' + input__class['error'] :
                                    input__class['input']
                                }
                                mask="+7\(999) 999-99-99"
                            />
                        </div>
                    </div>
                    <div className={classes['ModalBasket__content-button']}>
                        <UIButton
                            type={'outline'} onClick={e => sendHandler(e)}
                        >
                            <FaPaperPlane/> Отправить заявку
                        </UIButton>
                    </div>
                </div>
            }





        </div>
    );
};

export default ModalBasket;