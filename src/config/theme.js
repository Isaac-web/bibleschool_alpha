import {createTheme} from '@mui/material';
import colors from "./colors";

export default createTheme({
    palette: {
        common: {
            black: colors.black,
            danger: colors.danger,
            white: colors.white,
            light: colors.light,
            medium: colors.medium,
            dart: colors.dark
        },
        primary: {
            main: colors.primary
        }, 
        secondary: {
            main: colors.secondary
        }
    }, 
    overrides: {
        MuiTableHead: {
            root: {
                backgoundColor: "green"
            }
        }
    }
})