import React, { ReactNode } from "react";
import classes from "../scss/UIText.module.scss";

interface IUIText {
    children: ReactNode;
    type: "solid" | "primary";
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const UIText = (props: IUIText) => {
    const cls = [classes["UIText"], classes[props.type]];
    return (
        <div
            className={cls.join(" ")}
            onClick={(e) => {
                props.onClick && props.onClick(e);
            }}
        >
            {props.children}
        </div>
    );
};

export default UIText;
