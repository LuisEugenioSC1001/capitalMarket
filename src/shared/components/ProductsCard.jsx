import React from 'react'
import { makeStyles } from '@mui/styles';
import { Card, Paper, Grid, CardActions, CardContent, IconButton, Stack, Typography, CardMedia } from '@mui/material';
import { styled } from '@mui/material/styles';
import { AddBox as AddBoxIcon, Favorite } from '@mui/icons-material/';
import Logo from '../img/City.jpg'


const Usestyles = makeStyles({
    media: {
        height: 250,
        width:250,
        margin:'auto',
        marginTop:10,
        borderRadius:5,
    }

})
const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function ProductCard({Data}) {
    const classes = Usestyles();
    return (
        <Card >
                <CardMedia className={classes.media} image={Logo} title='shop auriculares'/>
                <CardContent>
                    <Typography textAlign="center" variant='h5' >
                        {Data.name}
                    </Typography>
                    <br/>
                    <Grid item xs={12} md={12} color="initial" spacing={2}>
                        <Item>Price$: {Data.price}</Item>
                    </Grid>
                    <CardActions sx={{justifyContent:'center'}}>
                        <Stack direction="row" spacing={20}>
                            <IconButton size="large">
                                <AddBoxIcon fontSize="large" color="success" />
                            </IconButton>
                            <IconButton size="large">
                                <Favorite fontSize="large" color="Red" />
                            </IconButton>
                        </Stack>
                    </CardActions>
                </CardContent>
        </Card>
    );
}
