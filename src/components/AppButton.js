import React from 'react'
import {Button} from '@mui/material';



const AppButton = ({children, color="primary", fullWidth, rounded, upperCase=false, style,  rest}) => {
    return (
        <Button 
            color={color} 
            fullWidth={fullWidth}
            style={{
                    borderRadius: rounded ? 20 : 5, 
                    textTransform: !upperCase ? "none": "upper-case", 
                    boxShadow: "0 3px 10px rgba(0, 0, 0, 0.4)", 
                    ...style
                }} 
            variant="contained"
            {...rest}
        >
                {children}
        </Button>
    )
}

export default AppButton
