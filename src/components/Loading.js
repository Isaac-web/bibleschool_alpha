import { CircularProgress, Box, Typography} from '@mui/material';
import {makeStyles} from "@mui/styles";
import React from 'react';



const Loading = ({text}) => {
    const classes = useStyles();
    return (
      <div className={classes.container}>
        <Box className={classes.wrapper}>
          {/* <CircularProgress
            size={"5em"}
            thickness={3}
            variant="determinate"
            value={100}
            // classes={{ circle: classes.circleBackground }}
            style={{ top: 0, left: 0, position: "absolute" }}
          /> */}

          <CircularProgress
            size={"5em"}
            thickness={3}
            value={50}
            // classes={classes.circle}
            disableShrink
            style={{
              animationDuration: "600ms",
              top: 0,
              left: 0,
              position: "absolute",
            }}
          />
        </Box>

        {text && (
          <Typography className={classes.text} variant="h5">
            {text}
          </Typography>
        )}
      </div>
    );
}




const useStyles = makeStyles(theme => ({
    container: {
        display: "flex", 
        justifyContent: "center",
        alignItems: "center", 
        height: "60vh",
        flexDirection: "column", 
        backgroundColor: "rgba(0, 0, 0, 0.01)", 
        borderRadius: 15, 
        width: "100%"
        
    }, 
    circle: {
        color: "#2781fe67",
        strokeLinecap: 'round',
        
    }, 
    circleBackground: {
        color: theme.palette.common.light,
    }, 
    text: {
        color: "rgba(0, 0, 0, 0.2)", 
    },
    wrapper: {
        position: "relative",
        width: 100, 
        height: 100,
    }
}))

export default Loading
