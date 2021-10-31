import React from 'react'
import { TextField, useTheme } from '@mui/material'
import {makeStyles} from "@mui/styles";




const Input = ({onChange, border, value, ...rest}) => {
    const classes = useStyles();
    const theme = useTheme();


    const borderStyle = `2px solid ${theme.palette.common.black}`

    return (
        <div>
            <TextField
                hiddenLabel
                onChange={onChange}
                InputProps={{
                    disableUnderline: true,
                    classes: {...classes, borderRadius: border ? borderStyle : "none"}
                }}
                variant="filled"
                {...rest}
            />
        </div>
    )
}




const useStyles = makeStyles(theme => ({
    root: {
        borderRadius: 12,
        color: "green", 
        height: 48, 
    }
}));


export default Input
