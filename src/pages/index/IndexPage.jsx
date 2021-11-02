import * as React from 'react';
import { Avatar, Button, CssBaseline, Link, Box, Grid, Typography } from '@mui/material/';
import { Link as RouterLink } from 'react-router-dom'
import Logo from '../../shared/img/Logo.png'
function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" component={RouterLink} to='/'>
                Capital Market
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}


export default function IndexPage() {

    return (
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: 'url(https://source.unsplash.com/random)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} alignSelf='center' square>
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Box>
                            <Grid container spacing={10}>
                                <Grid item xs={6}>
                                    <Button variant="outlined" color="primary" component={RouterLink} to={{pathname: '/register',}}>Register</Button>
                                </Grid>
                                <Grid item xs={6}>
                                    <Button variant="contained" color="primary" disableElevation component={RouterLink} to={{pathname: '/login',}}>Login</Button>
                                </Grid>
                            </Grid>
                        </Box>
                        <Avatar alt="Logo" src={Logo} sx={{ width: 200, height: 200 }} />
                        <Box sx={{ mt: 1 }}>
                            <Typography component="h1" variant="h5" align='center'>
                                Welcome to capital market, the largest e-commerce in the world.
                            </Typography>
                            <Copyright sx={{ mt: 5 }} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
    );
}