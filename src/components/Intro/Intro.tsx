import React from "react";
import classes from "../../scss/Intro.module.scss";
import UIButton from "../../UIKit/UIButton";
import { FaHeadset } from "react-icons/fa";
import introBack from "../../assets/Static/intro-back 1-min.webp";
import { modalHandler } from "../../store/reducers/ActionCreators";
import { useAppDispatch } from "../../hooks/redux";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import image from "../../assets/Logo/logoName.webp";
import UIText from "../../UIKit/UIText";

const Intro = ({ refProp }: { refProp: React.Ref<any> }) => {
    const dispatch = useAppDispatch();
    const { width } = useWindowDimensions(); //viewport width
    return (
        <div
            className={classes["Intro"]}
            ref={refProp}
            style={{ backgroundImage: `url("${introBack}")` }}
        >
            <div className={classes["Intro__text"]}>
                {!width || width > 632 ? (
                    <p className={classes["Intro__text-header"]}>
                        Преображаем <br /> и защищаем <br /> автомобили
                    </p>
                ) : (
                    <div className={classes["Intro__text-logo"]}>
                        <img src={image} alt="" />
                        <div className={classes["Intro__text-logo-address"]}>
                            <UIText type={"primary"}>
                                {" "}
                                <a href="https://go.2gis.com/615y5">
                                    г. Владивосток, Океанский проспект, 49
                                </a>
                            </UIText>
                        </div>
                    </div>
                )}

                <p className={classes["Intro__text-subheader"]}>
                    Центр профессионального <br />
                    автодетейлинга
                </p>

                {/* <p className={classes['Intro__text-ad']}>Получите бесплатный осмотр автомобиля и консультацию!</p> */}
                <div className={classes["Intro__text-button"]}>
                    <UIButton
                        type={"outline"}
                        onClick={() => dispatch(modalHandler("consultation"))}
                    >
                        {" "}
                        <FaHeadset /> Консультация
                    </UIButton>
                </div>
            </div>
        </div>
    );
};

export default Intro;
