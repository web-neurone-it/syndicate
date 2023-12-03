import React from 'react';
import UIButton from "../../UIKit/UIButton";
import {FaHeadset} from "react-icons/fa";
import classes from '../../scss/Action.module.scss'
import {modalHandler} from "../../store/reducers/ActionCreators";
import {useAppDispatch} from "../../hooks/redux";

const Action = () => {
    const dispatch = useAppDispatch()

    return (
        <>
            <div className={classes['Action']}>
                <p className={classes['Action__header']}>С чего начать ?</p>
                <p className={classes['Action__subheader']}>Запишитесь на консультацию по детейлингу!</p>
                <p className={classes['Action__paragraph']}>Мы проверим состояние вашего автомобиля, проконсультируем о
                    подходящих защитных покрытиях и подберем идеальный вариант комплекса услуг.</p>
                <div className={classes['Action__button']}>
                    <UIButton type={'outline'} onClick={() => dispatch(modalHandler('consultation'))}>
                        <FaHeadset/>КОНСУЛЬТАЦИЯ</UIButton>
                </div>
            </div>
        </>
    );
};

export default Action;