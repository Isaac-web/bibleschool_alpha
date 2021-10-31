import React from 'react';
import {SwipeableDrawer} from "@mui/material";

const AppDrawer = ({anchor="right", children, open, onClose, onOpen}) => {
    return (
        <SwipeableDrawer
            open={open}
            onClose={onClose}
            onOpen={onOpen}
            anchor={anchor}
        >
            {children}
        </SwipeableDrawer>
    )
}

export default AppDrawer
