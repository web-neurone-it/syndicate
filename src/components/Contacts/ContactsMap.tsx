import React from 'react';
import classes from "../../scss/Contacts.module.scss";
import {Map, Placemark, YMaps, } from "react-yandex-maps";
import logo from '../../assets/Logo/logo.webp'

const ContactsMap = () => {

    return (
        <div className={classes['Contacts__map']}>
            {/*@ts-ignore*/}
            <YMaps>
                {/*@ts-ignore*/}
                <Map defaultState={{ center: [43.137064, 131.899651], zoom: 14.5 }}>
                    {/*@ts-ignore*/}
                    <Placemark
                        geometry={[43.137558, 131.899725]}
                        options={{
                            iconLayout: 'default#image',
                            iconImageHref: logo,
                            iconImageSize: [60, 84]
                        }}
                    />

                </Map>
            </YMaps>
        </div>
    );
};

export default ContactsMap;