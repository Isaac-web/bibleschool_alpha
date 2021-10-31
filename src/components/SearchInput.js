import React from 'react';
import {InputAdornment, TextField} from "@mui/material";
import {makeStyles} from "@mui/styles";
import SearchIcon from '@mui/icons-material/Search';







const useStyles = makeStyles(theme => ({
    root: {
        height: 48, 
        borderRadius: 12
    }
}));



const SearchInput = ({onChange, ...rest}) => {
    const classes = useStyles();
    
    const raiseChange = ({target:input}) => {
        if(typeof onChange !== "function") return console.error("onChange is not a function");
        onChange(input.value);
    }


    return (
       <TextField 
            variant="filled" 
            onChange={raiseChange} 
            hiddenLabel
            fullWidth
            InputProps={{
                classes,
                startAdornment: <InputAdornment position="start"><SearchIcon/></InputAdornment>,
                disableUnderline: true
            }}
            {...rest}
        />
    )
}

export default SearchInput
