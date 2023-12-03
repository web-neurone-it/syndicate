import React from 'react';
import classes from "../../scss/Information.module.scss";
import logoName from '../../assets/Logo/logoName.webp'
import wand from '../../assets/Static/wand.svg'
import diamond from '../../assets/Static/diamond.svg'
import img from '../../assets/Static/Information-back.webp'

const Information = ({refProp}: {refProp: React.Ref<any>}) => {
    return (
        <div className={classes['Information']} ref={refProp}>
            <div className={classes['Information__image']}>
                <img src={img} alt=""/>
            </div>
            <div className={classes['Information__description']}>
                <div className={classes['Information__description-name']}>
                    <img src={logoName} alt="" />
                </div>
                <div className={classes['Information__description-info']}>
                    <p>
                        Подберем идеальный вариант детейлинга для вашего автомобиля!
                        Выполним все процедуры по уходу и защите за авто.
                        Бесплатный осмотр и консультация. Звоните!
                    </p>
                </div>
                <div className={classes['Information__description-details']}>
                    <div className={classes['Information__description-details-paragraph']}>
                        <p>Индивидуальный подход</p>
                        <div className={classes['Information__description-details-paragraph-text']}>
                            <img src={wand} alt=""/>
                            <p>
                                Мы разрабатываем стратегию работы на этапе осмотра машины,
                                таким образом мы  пытаемся максимально улучшить внешний
                                вид вашего любимого автомобиля.
                            </p>
                        </div>
                    </div>
                    <div className={classes['Information__description-details-paragraph']}>
                        <p>Цена / Качество</p>
                        <div className={classes['Information__description-details-paragraph-text']}>
                            <img src={diamond} alt=""/>
                            <p>
                                Наработанный годами опыт и большое число лояльных партнеров,
                                позволяют нам оказывать услуги на высоком уровне за разумную стоимость.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Information;