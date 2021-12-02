import React from 'react';
import {Grid, TextField} from "@mui/material";
import {useFormikContext} from "formik";

const GridInput = ({name, label, half=false, ...rest}) => {
    const {errors, values, touched, handleChange} = useFormikContext();
    return (
        <Grid item style={{padding: 10}} xs={half ? 6 : 12}>
            <TextField 
                error={touched[name] && Boolean(errors[name]?.length)} 
                fullWidth
                onChange={handleChange(name)}
                helperText={touched[name] && errors[name]} 
                label={label}
                value={values[name]} 
                variant="standard"
                {...rest}
                InputLabelProps={{
                    shrink: true
                }}
            />
        </Grid>
    )
}

export default GridInput
