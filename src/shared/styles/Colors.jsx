import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';


const ThemeCustom = createTheme({
    palette: {
        primary: {
            main: red[800],
        },
        White: {
            main: '#fff',
        },
    },
});


export default ThemeCustom;
