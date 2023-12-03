import React, {useEffect, useState} from 'react';
import classes from "../../scss/Services.module.scss";
import {useAppSelector} from "../../hooks/redux";
import {Transition} from "react-transition-group";

const ServiceCard = () => {
    const {service} = useAppSelector(state => state.serviceReducer)

    const [toggle, setToggle] = useState(true)
    const [exited, setExited] = useState(false)
    const [title, setTitle] = useState(service.title)
    const [subtitle, setSubtitle] = useState(service.subtitle)
    const [price, setPrice] = useState(service.price)
    const [description, setDescription] = useState(service.description)

    useEffect(() => {
        setExited(false)
        setToggle(false)
    }, [service])

    useEffect(() => {
        setToggle(true)
        setTitle(service.title)
        setSubtitle(service.subtitle)
        setPrice(service.price)
        setDescription(service.description)
    }, [exited])

    return (
        <div>
            <div className={classes['Services__card']}>
                <div className={classes['Services__card-categories']}>

                    <Transition
                        in={toggle} timeout={500}
                        mountOnEnter unmountOnExit
                        onExited={() => setExited(true)}
                    >
                        { state =>
                            <div className={classes['Services__card-categories-title'] + ' ' + classes[state]}>
                                {title}
                            </div>
                        }
                    </Transition>


                    <Transition
                        in={toggle} timeout={500}
                        mountOnEnter unmountOnExit
                        onExited={() => setExited(true)}
                    >
                        { state =>
                            <div className={classes['Services__card-categories-subtitle'] + ' ' + classes[state]}>
                                {subtitle}
                            </div>
                        }
                    </Transition>

                </div>

                <Transition
                    in={toggle} timeout={500}
                    mountOnEnter unmountOnExit
                    onExited={() => setExited(true)}
                >
                    { state =>
                        <div className={classes['Services__card-price'] + ' ' + classes[state]}>
                            Цена: {price}
                        </div>
                    }
                </Transition>

                <Transition
                    in={toggle} timeout={500}
                    mountOnEnter unmountOnExit
                    onExited={() => setExited(true)}
                >
                    { state =>
                        <div className={classes['Services__card-description'] + ' ' + classes[state]}>
                            {description}
                        </div>
                    }
                </Transition>
            </div>
        </div>

    );
};

export default ServiceCard;