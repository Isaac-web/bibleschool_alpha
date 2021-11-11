import React from 'react';
import {List, IconButton} from "@mui/material";
import {makeStyles} from "@mui/styles";


import ListItem from "./ListItem"

const Index = ({data, onItemSelect, actionIcon, onSecondaryAction}) => {
    const classes = useStyles();

    const raiseItemSelect = (item) => {
        onItemSelect(item)
    }


    const raiseSecondaryAction = (item) => {
        onSecondaryAction(item);
    }


    return (
        <List className={classes.list}>
            {data.map(item => 
                    <ListItem 
                        key={item._id} 
                        title={item.title} 
                        subtitle={item.subtitle}
                        onClick={() => raiseItemSelect(item)}
                        actions={<IconButton 
                                    className={classes.iconButton} 
                                    onClick={() => raiseSecondaryAction(item)}
                                    style={{color: "red"}}
                                >
                                    {actionIcon}
                                </IconButton>}
                    />
                )}
        </List>
    )
}



const useStyles = makeStyles(theme => ({
    iconButton: {
        display: "none"
    }
}))

export default Index
