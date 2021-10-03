import { makeStyles } from "@material-ui/core"


const Colors = makeStyles({
    primary: {
        backgroundColor: primaryColor
    },
    btnPrimary: {
        color: 'white',
        backgroundColor: primaryColor
    },
    btnDanger:{
        color: 'white',
        backgroundColor: 'red'
    }
})

export default Colors;
