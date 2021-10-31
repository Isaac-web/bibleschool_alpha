import {makeStyles} from "@mui/styles";


export default makeStyles(theme => ({
    container: {
        display: "flex", 
        flexDirection: "row", 
    }, 
    main: {
        flex: 0.77, 
        padding: "0 30px", 
        overflow: "hidden", 
        height: "88vh", 
        overflow: "auto"
    }, 
    sidebar: {
        flex: 0.23, 
        background: theme.palette.common.dark, 
        height: "88vh", 
        padding: "0 10px"
    }, 
    sidebarPaper: {
        height: "inherit"
    }
}))