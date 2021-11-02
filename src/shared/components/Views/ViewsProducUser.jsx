import * as React from 'react'
import { makeStyles } from '@mui/styles';
import Card from "@mui/material/Card"
import { CardActions, CardContent, IconButton, Stack, Typography, CardMedia, CardActionArea } from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import AddBoxIcon from '@mui/icons-material/AddBox';
import CircleIcon from '@mui/icons-material/Circle';

const Usestyles = makeStyles({
    root:{
        maxWidth: 345,
    },
    media:{
        height: 300,
    }

})

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  
function ViewsProducUser () {
    const classes = Usestyles();
    return (
     <Card className = {classes.root} >
         <CardActionArea>   
            <CardMedia
            className = {classes.media}
            image="./img/auriculares.jpg"
            title = 'shop auriculares'
            />
            <CardContent>
                <Typography
                textAlign= "center"
                variant = 'h5'
                >Nombre Producto
                </Typography>
                <Grid item xs={12} md={12} color="initial">
                    <Item>Precio$</Item>
                </Grid>
                <CardActions>
                    <Stack direction= "row" spacing= {20}>    
                        <IconButton
                        size = "large"
                        ><AddBoxIcon fontSize= "large" color="success"/>
                        </IconButton>
                        <IconButton
                        size = "large"
                        ><CircleIcon fontSize= "large" color="error"/>
                        </IconButton>
                    </Stack>
                </CardActions>
            </CardContent>
         </CardActionArea> 
     </Card>
    );
}

export default ViewsProducUser;