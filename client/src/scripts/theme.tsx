// material
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
    typography: {
        fontFamily: '"M PLUS Rounded 1c", sans-serif',
    },
    palette: {
        background: {
            default: '#f5f5f5',
        },
        primary: {
            main: '#333',
        },
    },
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#fff',
                    color: '#000',
                    borderBottom: '1px solid #c8c8c8',
                    boxShadow: 'none',
                },
            },
        },
    },
})
export default theme
