import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import NavigatioBar from './NavigatioBar';
import logo from '../img/Logo.png'
import Button from '@mui/material/Button';


export default function SellerCard() {
    const theme = useTheme();

    const Item = styled(Paper)(({ theme }) => ({
        ...theme.typography.body2,
        padding: theme.spacing(1),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    }));

    return (
        <>

            <Grid container spacing={3}>

                <Grid item xs={12}>

                </Grid>

                <Grid item xs={3}>
                    <Item>Funciones de usuario</Item>
                </Grid>
                <Grid item xs={3}>


                    <Card sx={{ display: 'flex' }}>
                        <CardMedia
                            component="img"
                            sx={{ width: 151 }}
                            image={logo}
                            alt="Live from space album cover"
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h5">
                                    Nombre producto

                                </Typography>
                                <Typography spacing={3} variant="subtitle1" color="text.secondary" component="div" ml={2}>

                                    Descripción
                                </Typography>
                            </CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                                <Grid item xs={5}>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">

                                        Precio:
                                    </Typography>
                                </Grid>
                                <Grid item xs={7}>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">

                                        $$$$$
                                    </Typography>
                                </Grid>
                                <Grid item xs={5}>
                                    <Grid item xs={12}>
                                        <Typography variant="subtitle1" color="text.secondary" component="div">

                                            Stock: #
                                        </Typography>
                                    </Grid>
                                  
                                </Grid>


                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                                <Grid item xs={12}>
                                    <Button variant="outlined" color="error">Editar</Button>
                                </Grid>
                                <Grid item xs={5}>
                                    <Button variant="outlined" color="error">Eliminar</Button>
                                </Grid>

                            </Box>



                        </Box>

                    </Card>


                </Grid>
                <Grid item xs={3}>



                <Card sx={{ display: 'flex' }}>
                        <CardMedia
                            component="img"
                            sx={{ width: 151 }}
                            image={logo}
                            alt="Live from space album cover"
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h5">
                                    Nombre producto

                                </Typography>
                                <Typography spacing={3} variant="subtitle1" color="text.secondary" component="div" ml={2}>

                                    Descripción
                                </Typography>
                            </CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                                <Grid item xs={5}>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">

                                        Precio:
                                    </Typography>
                                </Grid>
                                <Grid item xs={7}>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">

                                        $$$$$
                                    </Typography>
                                </Grid>
                                <Grid item xs={5}>
                                    <Grid item xs={12}>
                                        <Typography variant="subtitle1" color="text.secondary" component="div">

                                            Stock: #
                                        </Typography>
                                    </Grid>
                                  
                                </Grid>


                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                                <Grid item xs={12}>
                                    <Button variant="outlined" color="error">Editar</Button>
                                </Grid>
                                <Grid item xs={5}>
                                    <Button variant="outlined" color="error">Eliminar</Button>
                                </Grid>

                            </Box>



                        </Box>

                    </Card>


                </Grid>
                <Grid item xs={3}>

                <Card sx={{ display: 'flex' }}>
                        <CardMedia
                            component="img"
                            sx={{ width: 151 }}
                            image={logo}
                            alt="Live from space album cover"
                        />
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant="h5">
                                    Nombre producto

                                </Typography>
                                <Typography spacing={3} variant="subtitle1" color="text.secondary" component="div" ml={2}>

                                    Descripción
                                </Typography>
                            </CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                                <Grid item xs={5}>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">

                                        Precio:
                                    </Typography>
                                </Grid>
                                <Grid item xs={7}>
                                    <Typography variant="subtitle1" color="text.secondary" component="div">

                                        $$$$$
                                    </Typography>
                                </Grid>
                                <Grid item xs={5}>
                                    <Grid item xs={12}>
                                        <Typography variant="subtitle1" color="text.secondary" component="div">

                                            Stock: #
                                        </Typography>
                                    </Grid>
                                  
                                </Grid>


                            </Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                                <Grid item xs={12}>
                                    <Button variant="outlined" color="error">Editar</Button>
                                </Grid>
                                <Grid item xs={5}>
                                    <Button variant="outlined" color="error">Eliminar</Button>
                                </Grid>

                            </Box>



                        </Box>

                    </Card>


                </Grid>
            </Grid>





        </>
    );

}