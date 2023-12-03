import React from 'react';
import classes from '../../scss/Services.module.scss';
import ServicesTree from "./ServicesTree";
import ServiceCard from "./ServiceCard";
import UILine from "../../UIKit/UILine";

const Services = ({refProp}: {refProp: React.Ref<any>}) => {
    return (
        <div className={classes['Services']} ref={refProp}>
            <UILine type={'horizontal'} position={'left'}/>
            <div className={classes['Services__title']}>Каталог услуг:</div>
            <div className={classes['Services__content']}>
                <ServicesTree/>
                <ServiceCard/>
            </div>
        </div>
    );
};

export default Services;