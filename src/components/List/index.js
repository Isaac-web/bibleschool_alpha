import React from 'react';
import {List, IconButton} from "@mui/material";
import {makeStyles} from "@mui/styles";


import ListItem from "./ListItem"

const Index = ({data, onItemSelect, actionIcon}) => {
    const classes = useStyles();

    const raiseItemSelect = (item) => {
        onItemSelect(item)
    }


    return (
        <List className={classes.list}>
            {data.map(item => 
                    <ListItem 
                        key={item._id} 
                        title={item.title} 
                        subtitle={item.subtitle}
                        actions={<IconButton 
                                    className={classes.iconButton} 
                                    onClick={() => raiseItemSelect(item)}
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
