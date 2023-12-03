import React from 'react';
import {styled} from "@mui/material/styles";
import TreeItem, {TreeItemProps} from "@mui/lab/TreeItem";
import treeItemClasses from "@mui/lab/TreeItem"
import {TransitionProps} from "@mui/material/transitions";
import {animated, useSpring} from "react-spring";
import Collapse from "@mui/material/Collapse";
import {fetchService} from "../../store/reducers/ActionCreators";
import {useAppDispatch} from "../../hooks/redux";

const CustomTreeItem = (props: TreeItemProps) => {
    const dispatch = useAppDispatch()

    const TransitionComponent = (props: TransitionProps) => {

        const style = useSpring({
            from: {opacity: 0, transform: 'translate3d(20px,0,0)',},
            to: {opacity: props.in ? 1 : 0, transform: `translate3d(${props.in ? 0 : 20}px,0,0)`,},
        });

        return (
            <animated.div style={style}>
                <Collapse {...props} />
            </animated.div>
        );
    }
    // const StyledTreeItem = styled(
    //     (props: TreeItemProps) => (<TreeItem {...props} TransitionComponent={TransitionComponent} />)
    // )
    // ( () => ({
    //     [`& .${treeItemClasses.iconContainer}`]: {'& .close': {opacity: 0.3}},
    //     [`& .${treeItemClasses.group}`]: {marginLeft: 15, paddingLeft: 18}
    // }) );

    return (
        // <StyledTreeItem
        //     {...props}
        //     ContentProps={{
        //         onClick: () => dispatch(fetchService(props.nodeId))
        //     }}
        // />
        <></>
    );
};

export default CustomTreeItem;