import React from "react";
import { useAppSelector } from "../../hooks/redux";
import classes from "../../scss/Reviews.module.scss";
import starFull from "../../assets/Static/starFull.svg";
import starOutline from "../../assets/Static/starOutline.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, Autoplay, Pagination } from "swiper";
import UILoader from "../../UIKit/UILoader";
import { FaRegTimesCircle } from "react-icons/fa";

const ReviewList = () => {
    const { reviews, isFetchingLoading, error } = useAppSelector(
        (state) => state.reviewReducer
    );

    if (isFetchingLoading) {
        return <UILoader />;
    } else if (error) {
        return (
            <p>
                <FaRegTimesCircle /> {error}
            </p>
        );
    }
    let slidesPerView = 0;

    if (!import.meta.env.SSR) {
        slidesPerView = window.matchMedia("(min-width: 1389px)").matches
            ? 3
            : window.matchMedia("(min-width: 924px)").matches
                ? 2
                : 1;
    }

    return (
        <>
            <div className={classes["Reviews__title"]}>
                Отзывов наших клиентов: ({Object.keys(reviews).length})
            </div>
            <Swiper
                loop={true}
                spaceBetween={20}
                slidesPerView={slidesPerView}
                autoplay
                modules={[Autoplay, Pagination, A11y]}
                pagination={{ dynamicBullets: true }}
            >
                {Object.entries(reviews).map((review) => (
                    <SwiperSlide key={review[0]}>
                        <div className={classes["Reviews__cards-card"]}>
                            <div className={classes["Reviews__cards-card-name"]}>
                                {review[1].name}
                            </div>
                            <div className={classes["Reviews__cards-card-service"]}>
                                {review[1].service}
                            </div>
                            <div className={classes["Reviews__cards-card-mark"]}>
                                {Array.apply(0, Array(review[1].stars)).map(function(x, i) {
                                    return <img src={starFull} alt="" key={i} />;
                                })}
                                {Array.apply(0, Array(5 - review[1].stars)).map(function(
                                    x,
                                    i
                                ) {
                                    return <img src={starOutline} alt="" key={i} />;
                                })}
                            </div>
                            <div className={classes["Reviews__cards-card-review"]}>
                                {review[1].comment}
                            </div>
                            <div className={classes["Reviews__cards-card-date"]}>
                                {review[1].date}
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default ReviewList;
