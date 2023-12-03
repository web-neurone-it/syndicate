import React from 'react';
import classes from '../scss/UILoader.module.scss'

const UILoader = () => {
    return (
        <div className={classes['UILoader']}>
            <div className={classes['UILoader__container']}>
                <div/>
                <div/>
            </div>
        </div>
    );
};

export default UILoader;