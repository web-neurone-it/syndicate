import React from "react";
import classes from "../../scss/CardStack.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCreative, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/effect-cards";

import item1 from "../../assets/CardStack/c1-min.webp";
import item2 from "../../assets/CardStack/c2-min.webp";
import item3 from "../../assets/CardStack/c3-min.webp";
import item4 from "../../assets/CardStack/c4-min.webp";
import item5 from "../../assets/CardStack/c5-min.webp";
import item6 from "../../assets/CardStack/c6-min.webp";
import item7 from "../../assets/CardStack/c7-min.webp";

const CardStack = ({ transition }: { transition: string }) => {
    const content = [
        {
            title: "Чистка и защита кожи",
            image: item1,
        },
        {
            title: "Полировка кузова, тюнинг оптики",
            image: item3,
        },
        {
            title: "Полировка кузова",
            image: item4,
        },
        {
            title: "Нанесение бронеплёнки",
            image: item5,
        },
        {
            title: "Полировка кузова, чистка и защита кожи",
            image: item6,
        },
        {
            title: "Полировка",
            image: item7,
        },
        {
            title: "Чистка и защита кожи",
            image: item2,
        },
    ];

    return (
        <div className={classes["CardStack"] + " " + classes[transition]}>
            <div className={classes["CardStack__slider"]}>
                <Swiper
                    grabCursor={true}
                    effect={"creative"}
                    pagination={{ dynamicBullets: true }}
                    spaceBetween={10}
                    slidesPerView={2.2}
                    centeredSlides={true}
                    creativeEffect={{
                        prev: { translate: [-50, 10, -200], rotate: [-10, -10, 0] },
                        next: { translate: ["100%", 0, 0] },
                    }}
                    modules={[EffectCreative, Pagination]}
                >
                    {content.map((item) => (
                        <SwiperSlide key={item.image}>
                            <div className={classes["CardStack__slider-item"]}>
                                <p className={classes["CardStack__slider-item-title"]}>
                                    {item.title}
                                </p>
                                <img src={item.image} alt="" />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default CardStack;
