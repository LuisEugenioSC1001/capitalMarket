import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';


const ThemeCustom = createTheme({
    palette: {
        primary: {
            main: 'rgba(89, 18, 21,1)',
        },
        White: {
            main: '#fff',
        },
        Red: {
            main: red[500],
        },
    },
});


export default ThemeCustom;
