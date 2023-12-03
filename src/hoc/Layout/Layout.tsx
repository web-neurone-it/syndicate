import React from 'react';
import classes from "./Layout.module.scss";

interface LayoutProps {
    children: React.ReactNode
}

const Layout = (props: LayoutProps) => {
    return (
        <div className={classes['Layout']}>
            {props.children}
        </div>
    );
};

export default Layout;