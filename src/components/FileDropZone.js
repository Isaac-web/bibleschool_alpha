import React, {useCallback} from 'react';
import {Box, Typography} from "@mui/material"
import {useDropzone} from "react-dropzone";
import {useTheme} from "@mui/styles";

const FileDropZone = ({value, onChange, style, fullWidth=false}) => {
    const theme = useTheme();
    const onDrop = useCallback(file => {
        if(typeof onChange !== "function") return console.err("onChange is not a function.");
        console.log(file);
        onChange(file);
    }, [])

    const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop});

    return (
        <Box style={{
                height: "8em", 
                boxSizing: "border-box",
                padding: 10,
                width: `${fullWidth ? "100%":"20em"}`, 
                display: "flex", 
                justifyContent: "center", 
                border: `3px dashed ${theme.palette.primary.light}`, 
                alignItems: "center",
                borderRadius: 10,
                cursor: "pointer",
                ...style
            }} 
            {...getRootProps()}
        >
            <input value={value} {...getInputProps()}/>
            {isDragActive ? <Typography
                                 variant="body2"
                                 style={{color: `${theme.palette.common.dark}`, fontSize: "1rem"}}
                            >
                                Drop the file here
                            </Typography>:
                            <Typography variant="body2"
                            style={{color: `${theme.palette.common.dark}`, fontSize: "1rem"}}
                            >
                                Drag and Drop file here
                            </Typography>
                            }
        </Box>
    )
}

export default FileDropZone
