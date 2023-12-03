import classes from "../../scss/Header.module.scss";
import logo from "../../assets/Logo/logo.webp";
import name from "../../assets/Logo/logoName.webp";
import UIText from "../../UIKit/UIText";
import {
    FaInstagram,
    FaMapMarkerAlt,
    FaPhoneAlt,
    FaShare,
    FaTelegramPlane,
    FaWhatsapp,
    FaYoutube,
} from "react-icons/fa";
import UIButton from "../../UIKit/UIButton";
import { useAppDispatch } from "../../hooks/redux";
import { modalHandler } from "../../store/reducers/ActionCreators";
import useWindowDimensions from "../../hooks/useWindowDimensions";
import { Client } from "react-hydration-provider";

interface IHeader {
    IntroScroll: () => void;
    ContactsScroll: () => void;
    ServicesScroll: () => void;
    PortfolioScroll: () => void;
    InformationScroll: () => void;
    ReviewsScroll: () => void;
}

const Header = (props: IHeader) => {
    const dispatch = useAppDispatch();
    const { width } = useWindowDimensions(); //viewport width

    return (
        <div className={classes["Header"]}>
            <div className={classes["Header__links"]}>
                <div className={classes["Header__links-intro"]}>
                    <div className={classes["Header__links-intro-logo"]}>
                        <img src={logo} alt="" width={50} />
                        <img src={name} alt="" height={50} />
                    </div>
                    <div className={classes["Header__links-intro-links"]}>
                        <a href="https://wa.me/79143205950">
                            <FaWhatsapp />
                        </a>
                        <a href="https://www.instagram.com/syndicate_detailing_studio/">
                            <FaInstagram />
                        </a>
                        <a href="https://t.me/SyndicateDetailing/">
                            <FaTelegramPlane />
                        </a>
                        <a href="https://www.youtube.com/channel/UCUYLIy4cS365YvImMWwRJiA">
                            <FaYoutube />
                        </a>
                    </div>
                </div>

                <div className={classes["Header__links-phones"]}>
                    <UIText type={"primary"}>
                        {" "}
                        <a href="tel:+79644444847">
                            {" "}
                            <FaPhoneAlt /> +7 (964) 444-48-47
                        </a>
                    </UIText>
                    <UIButton
                        type={"outline"}
                        onClick={() => dispatch(modalHandler("offer"))}
                    >
                        {" "}
                        <FaShare /> Записаться
                    </UIButton>
                </div>
            </div>

            <div className={classes["Header__nav"]}>
                <Client>
                    {width > 670 ? (
                        <div className={classes["Header__nav-container"]}>
                            <UIText type={"solid"} onClick={props.IntroScroll}>
                                {" "}
                                <a>Главная</a>
                            </UIText>
                            <UIText type={"primary"} onClick={props.ServicesScroll}>
                                {" "}
                                <a>Услуги</a>
                            </UIText>
                            <UIText type={"primary"} onClick={props.PortfolioScroll}>
                                {" "}
                                <a>Портфолио</a>
                            </UIText>
                            <UIText type={"primary"} onClick={props.InformationScroll}>
                                {" "}
                                <a>О нас</a>
                            </UIText>
                            <UIText type={"primary"} onClick={props.ReviewsScroll}>
                                {" "}
                                <a>Отзывы</a>
                            </UIText>
                            <UIText type={"primary"} onClick={props.ContactsScroll}>
                                {" "}
                                <a>Контакты</a>
                            </UIText>
                        </div>
                    ) : (
                        <div className={classes["Header__nav-container"]}>
                            <UIText type={"solid"} onClick={props.IntroScroll}>
                                {" "}
                                <a>Главная</a>
                            </UIText>
                            <UIText type={"primary"} onClick={props.ServicesScroll}>
                                {" "}
                                <a>Услуги</a>
                            </UIText>
                            <UIText type={"primary"} onClick={props.ContactsScroll}>
                                {" "}
                                <a>Контакты</a>
                            </UIText>
                        </div>
                    )}

                    <div className={classes["Header__nav-address"]}>
                        <UIText type={"primary"}>
                            {" "}
                            <a href="https://go.2gis.com/615y5">
                                <FaMapMarkerAlt /> г. Владивосток, Острякова, 49
                            </a>
                        </UIText>
                    </div>
                </Client>
            </div>
        </div>
    );
};

export default Header;
