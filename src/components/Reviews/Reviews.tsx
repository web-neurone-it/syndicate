import React, {useEffect} from 'react';
import UILine from "../../UIKit/UILine";
import classes from '../../scss/Reviews.module.scss'
import 'swiper/scss';
import 'swiper/scss/pagination';
import {useDispatch} from "react-redux";
import {fetchReviews} from "../../store/reducers/ActionCreators";
import ReviewList from "./ReviewList";

const Reviews = ({refProp}: {refProp: React.Ref<any>}) => {
    const dispatch = useDispatch()
    useEffect(() => {
        // @ts-ignore
        dispatch(fetchReviews())
    }, [])

    return (
        <div className={classes['Reviews']} ref={refProp}>
            <UILine type={'horizontal'} position={'right'}/>
            <ReviewList/>
            <UILine type={'horizontal'} position={'left'}/>
        </div>
    );
};

export default Reviews;