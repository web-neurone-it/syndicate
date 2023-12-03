import React, {useState} from 'react';
import classes from '../scss/ServiceFlow.module.scss'
import UIText from '../UIKit/UIText';
import serviceData from "./Services/ServicesInfo";
import {useNavigate} from "react-router-dom";
const ServiceFlow = ({refProp}: {refProp: React.Ref<any>}) => {
    const [parentId, setParentId] = useState<number>(-1)
    const navigate = useNavigate()
    return (
        <div className={classes['ServiceFlow']} ref={refProp}>
            <h2 className={classes['ServiceFlow__title']}>
                Каталог услуг
            </h2>
            {parentId >= 0 &&
                <div className={classes['ServiceFlow__breadcrumbs']}>
                    <div className={classes['ServiceFlow__breadcrumbs-item']} onClick={() => setParentId(-1)}>
                        Главная -
                    </div>
                    <div className={classes['ServiceFlow__breadcrumbs-item']}>
                        {serviceData[parentId].title}
                    </div>
                </div>
            }
            {parentId < 0 &&
                <div className={classes['ServiceFlow__plates']}>
                    {serviceData.map(i =>
                        <div className={classes['ServiceFlow__plates-item']} key={i.title}
                             style={{backgroundImage: `url(${i.image})`}}
                             onClick={() => setParentId(i.id)}
                        >
                            <UIText type={"solid"} onClick={() => {}}>
                                {i.title}
                            </UIText>
                        </div>
                    )}
                </div>
            }
            { parentId >= 0 &&
                <div className={classes['ServiceFlow__plates']}>
                    { parentId >= 0 && serviceData[parentId].children.map(i =>
                        <div className={classes['ServiceFlow__plates-item']} key={i.title}
                             style={{backgroundImage: `url(${i.image})`}}
                             onClick={() => navigate(`/service/${i.id}`)}
                        >
                            <UIText type={"solid"} onClick={() => {}}>
                                {i.title}
                            </UIText>
                            <div className={classes['ServiceFlow__plates-item-more']}>
                                Подробнее
                            </div>
                        </div>
                    )}
                </div>
            }

            <h4 className={classes['ServiceFlow__sale-step']}>
                При оформлении заказа через сайт предоставим скидку на услуги в 5% *
            </h4>
            <div className={classes['ServiceFlow__subtitle']}>
                <h3 className={classes['ServiceFlow__subtitle-text']}>
                    Мы предлагаем нашим клиентам большой ассортимент качественных услуг от команды настоящих профессионалов своего дела
                </h3>
            </div>

        </div>
    );
};

export default ServiceFlow;