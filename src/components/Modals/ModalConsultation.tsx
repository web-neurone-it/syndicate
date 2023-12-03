import React, {useState} from 'react';
import classes from "../../scss/UIModal.module.scss";
import {FaShare, FaTimes} from "react-icons/fa";
import InputMask from "react-input-mask";
import UIButton from "../../UIKit/UIButton";
import {modalHandler, postConsultation} from "../../store/reducers/ActionCreators";
import {useAppDispatch} from "../../hooks/redux";
import input__class from "../../scss/UIInput.module.scss";

const ModalConsultation = ({transition}: {transition: string}) => {
    const dispatch = useAppDispatch()
    const [name, setName] = useState('')
    const [nameTouched, setNameTouched] = useState(false)
    const [phone, setPhone] = useState('')
    const [phoneTouched, setPhoneTouched] = useState(false)
    const [phoneError, setPhoneError] = useState('')
    const [nameError, setNameError] = useState('')

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
    const sendHandler = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault()
        if (checkForm() < 1){
            const data = {name, phone, title: 'Консультация', service: ''}
            dispatch(postConsultation(data))
            setPhone('')
            setName('')
        }
    }

    return (
        <div className={classes['UIModal'] + ' ' + classes[transition]}
             onClick={() => dispatch(modalHandler('consultation'))}
        >
            <div className={classes['UIModal__container'] + ' ' + classes[transition]}
                 onClick={e => e.stopPropagation()}
            >
                <div className={classes['UIModal__container-cross']}
                     onClick={() => dispatch(modalHandler('consultation'))}
                ><FaTimes/></div>
                <p className={classes['UIModal__container-title']}>Консультация</p>
               
                {/* <p className={classes['UIModal__container-info']}>Получите бесплатный осмотр автомобиля и консультацию!</p> */}
                <p className={classes['UIModal__container-fieldName']}>Имя</p>
                <input
                    type="text" value={name} maxLength={15} onChange={e => nameHandler(e)}
                    className={ nameError ? input__class['input'] + ' ' + input__class['error'] : input__class['input']}
                />
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

export default ModalConsultation;