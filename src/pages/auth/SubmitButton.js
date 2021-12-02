import React from 'react';
import {Button, Grid} from "@mui/material";
import {useFormikContext} from "formik";

const SubmitButton = ({children, ...rest}) => {
    const {handleSubmit} = useFormikContext();
    


    return (
        <Grid xs={12} item style={{padding: "0 10px", margin: "2em 0"}}>
            <Button 
                size="large" 
                fullWidth 
                variant="contained"
                type="submit"
                onClick={handleSubmit}
                {...rest}
            >
                {children}
            </Button>
        </Grid>
    )
}

export default SubmitButton
