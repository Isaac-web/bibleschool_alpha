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
            dart: colors.dark,
            success: colors.success
        },
        primary: {
            main: colors.primary
        }, 
        secondary: {
            main: colors.secondary
        }
    }, 
    typography: {
        fontFamily: [
          'Roboto',
          'Arial',
          '"Helvetica Neue"',
          '"Segoe UI"',
          '-apple-system',
          'BlinkMacSystemFont',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
      },
    overrides: {
        MuiTableHead: {
            root: {
                backgoundColor: "green"
            }
        }
    }
})