import classes from "../../scss/Gallery.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { FaCompressAlt } from "react-icons/fa";

interface IFullVisible {
    slidesArray: string[];
    // currentSlideHandler: (index: number) => void;
    setFullVisible: (state: boolean) => void;
    transition: string;
}

const FullVisible = (props: IFullVisible) => {
    return (
        <div
            className={classes["Gallery__fullscreen"]}
            onClick={() => props.setFullVisible(false)}
        >
            <div
                className={
                    classes["Gallery__fullscreen-data"] + " " + classes[props.transition]
                }
            >
                <div
                    className={classes["Gallery__fullscreen-data-cross"]}
                    onClick={() => props.setFullVisible(false)}
                >
                    <FaCompressAlt />
                </div>
                <div className={classes["Gallery__fullscreen-data-slider"]}>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        loop
                        modules={[Pagination]}
                    >
                        {props.slidesArray.map((image, index) => (
                            <div onClick={(e) => e.stopPropagation()}>
                                <SwiperSlide
                                    key={index}
                                //
                                // onMouseEnter={() => props.currentSlideHandler(index)}
                                >
                                    <img src={image} alt="" />
                                </SwiperSlide>
                            </div>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default FullVisible;
