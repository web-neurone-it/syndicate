import React, {useState} from 'react';
import classes from "../../scss/UIModal.module.scss";
import {FaAngleDown, FaShare, FaTimes} from "react-icons/fa";
import InputMask from "react-input-mask";
import UIButton from "../../UIKit/UIButton";
import {modalHandler, postOffer} from "../../store/reducers/ActionCreators";
import {useAppDispatch} from "../../hooks/redux";
import input__class from "../../scss/UIInput.module.scss";

const ModalOffer = ({transition}: {transition: string}) => {

    const dispatch = useAppDispatch()
    const [name, setName] = useState('')
    const [nameTouched, setNameTouched] = useState(false)
    const [nameError, setNameError] = useState('')
    const [phone, setPhone] = useState('')
    const [phoneTouched, setPhoneTouched] = useState(false)
    const [phoneError, setPhoneError] = useState('')
    const [service, setService] = useState('Услуга')
    const [serviceError, setServiceError] = useState('')
    const [serviceActive, setServiceActive] = useState(false)

    const serviceActiveHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault()
        setServiceActive(!serviceActive)
    }
    const serviceHandler = (e: React.MouseEvent<HTMLDivElement>, s: string) => {
        e.preventDefault()
        setService(s)
        setServiceActive(false)
        if (s !== 'Услуга') {
            setServiceError('')
        }
    }
    const services = [
        'Пленка','Полировка','Защита',
        'Дооснащение','Химчистка','Чистка кожи', 'Шумоизоляция'
    ]
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
        if (service === 'Услуга'){
            setServiceError('Выберите услугу !')
            counter += 1
        } else {
            setServiceError('')
        }
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
    const sendHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault()
        if (checkForm() < 1) {
            const data = {name, service, phone, title: 'Услуга'}
            dispatch(postOffer(data))
            setPhone('')
            setName('')
            setService('Услуга')
        }
    }

    return (
        <div className={classes['UIModal'] + ' ' + classes[transition]}
             onClick={() => dispatch(modalHandler('offer'))}
        >
            <div className={classes['UIModal__container'] + ' ' + classes[transition]}
                 onClick={e => e.stopPropagation()}
            >
                <div className={classes['UIModal__container-cross']}
                     onClick={() => dispatch(modalHandler('offer'))}
                ><FaTimes/></div>
                <p className={classes['UIModal__container-title']}>Быстрая запись</p>
                <p className={classes['UIModal__container-fieldName']}>Имя</p>
                <input
                    type="text" value={name} maxLength={15} onChange={e => nameHandler(e)}
                    className={ nameError ? input__class['input'] + ' ' + input__class['error'] : input__class['input']}
                />

                <div className={classes['UIModal__container-service']}>

                    <div className={ serviceError ? classes['UIModal__container-service-selected'] + ' ' + classes['error']
                        : classes['UIModal__container-service-selected']
                    }
                         onClick={e => serviceActiveHandler(e)}>
                        {service}<FaAngleDown/>
                    </div>

                    <div
                        className={serviceActive ?
                            classes['UIModal__container-service-options'] :
                            classes['UIModal__container-service-options'] + ' ' + classes['disabled']}
                    >
                        {services.map(i => (<div onClick={e => serviceHandler(e, i)} key={i}>{i}</div>))}
                    </div>

                </div>
                <p className={classes['UIModal__container-fieldName']}>Номер телефона</p>
                <InputMask
                    type="text" value={phone} mask="+7\(999) 999-99-99"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => phoneHandler(e)}
                    className={phoneError ? input__class['input'] + ' ' + input__class['error'] : input__class['input']}
                />

                <div className={classes['UIModal__container-button']}>
                    <UIButton type={'outline'} onClick={e => sendHandler(e)}><FaShare/> Записаться! </UIButton>
                </div>
            </div>

        </div>
    );
};

export default ModalOffer;