import React from 'react';
import classes from '../scss/UILine.module.scss'

interface IUILine{
    type: 'vertical' | 'horizontal';
    position: 'left' | 'center' | 'right';
}

const UILine = (props : IUILine) => {
    const cls = [classes[props.type], classes[props.position]]
    return <div className={cls.join(' ')}/>
};

export default UILine;