import React, {ReactNode} from 'react';
import classes from "../scss/UIButton.module.scss";

interface IUIButton {
    children: ReactNode;
    type: string;
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void; //TODO: remove not necessary
}

const UIButton = (props: IUIButton) => {
    const cls = [classes['UIButton'], classes[props.type]]
    return (
        <div className={cls.join(' ')} onClick={props.onClick}>
            &nbsp;{props.children}&nbsp;&nbsp;
        </div>
    );
};

export default UIButton;