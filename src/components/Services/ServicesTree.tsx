import React from 'react';
import classes from "../../scss/Services.module.scss";
import TreeView from "@mui/lab/TreeView";
import {FaAngleDown, FaAngleRight} from "react-icons/fa";
import ServicesList from "./ServicesList";

const ServicesTree = () => {
    return (
        <div className={classes['Services__tree']}>
            <TreeView
                aria-label="customized"
                defaultExpanded={['1', '2']}
                defaultCollapseIcon={<FaAngleDown />}
                defaultExpandIcon={<FaAngleRight />}
                sx={{ width: 'fit-content',flexGrow: 1, overflowY: 'auto' }}
            >
                <ServicesList/>
            </TreeView>
        </div>
    );
};

export default ServicesTree;