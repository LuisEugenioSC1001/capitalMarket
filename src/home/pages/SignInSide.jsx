import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useStyles from './SingInSideStyles';
import Logo from '../../shared/img/CapitalMarket1.png'



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/index">
        Capital Market
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



export default function SignInSide() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div style={{display:'flex',justifyContent:'end'}}>
          <Box component="span" mt={2}>
            <Button variant="outlined" color="secondary" style={{ margin: '10px' }} href="/login">
              Login
            </Button>
            <Button variant="outlined" color="default" style={{ margin: '10px' }} href="/register">
              Register
            </Button>
          </Box>
        </div>
        <div className={classes.paper}>
          <div >
            <img src={Logo} width="400px" alt=""/>
          </div>
          <form className={classes.form} noValidate>
            <Typography variant="h5" color="initial" align="center">
              Bienvenido a Capital Market, el lugar en el cual encontrarás todo lo que siempre has deseado y mucho más
            </Typography>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}