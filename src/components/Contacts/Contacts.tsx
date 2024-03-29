import React from 'react';
import classes from '../../scss/Contacts.module.scss'
import logo from '../../assets/Logo/logo.webp'
import logoName from '../../assets/Logo/logoName.webp'
import UILine from "../../UIKit/UILine";
import  { FaMapMarkerAlt, FaPhoneAlt, FaTelegram, FaWhatsapp } from "react-icons/fa";
import UIText from "../../UIKit/UIText";
import ContactsMap from "./ContactsMap";
import UIButton from '../../UIKit/UIButton';

const Contacts = ({refProp} : {refProp: React.Ref<any>}) => {

    const openInNewTab = (url: string) => {
        window.open(url, '_blank', 'noopener,noreferrer');
    };

    return (
        <>
            <div className={classes['Contacts']} ref={refProp}>
                <div className={classes['Contacts__info']}>
                    <UILine position={'left'} type={'horizontal'}/>
                    <div className={classes['Contacts__info-logo']}>
                        <img src={logo} alt=""/>
                        <img src={logoName} alt=""/>
                    </div>

                    <div className={classes['Contacts__info-credentials']}>
                        <div className={classes['Contacts__info-credentials-block']}>
                            <p className={classes['title']}>Позвоните нам:</p>
                            <UIButton type={'outline'} onClick={() => window.open('tel:+79644444847', '_self')}><FaPhoneAlt/> +7 (964) 444-48-47</UIButton>
                            <UIButton type={'outline'} onClick={() => window.open('tel:+79143205950', '_self')}><FaPhoneAlt/> +7 (914) 320-59-50</UIButton>
                        </div>
                        <div className={classes['Contacts__info-credentials-block']}>
                            <p className={classes['title']}>Напишите нам:</p>
                            <p
                                onClick={() => window.open('https://api.whatsapp.com/send?phone=79644444847&text=%D0%97%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9%D1%82%D0%B5!%20', '_self')}
                            ><FaWhatsapp/><span>
                                <UIText type={'primary'}>&nbsp;+7 (964) 444-48-47</UIText>
                            </span> </p>
                            <p onClick={() => window.open('https://t.me/SyndicateDetailing', '_self')}>
                                <FaTelegram/>
                                <span> <UIText type={'primary'}>&nbsp;+7 (964) 444-48-47</UIText></span>

                            </p>
                        </div>
                        <div className={classes['Contacts__info-credentials-block']}>
                            <p className={classes['title']}>График работы:</p>
                            <p>Ежедневно с <b>09:00</b> до <b>23:00</b></p>
                            <UIText type={'primary'}> <p onClick={() => openInNewTab('https://go.2gis.com/615y5')}><FaMapMarkerAlt/> г. Владивосток, <br/> Острякова, 49</p></UIText>
                        </div>
                    </div>
                </div>
                <div className={classes['Contacts__map']}>
                    <ContactsMap/>
                </div>
            </div>
        </>
    );
};

export default Contacts;