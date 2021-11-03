import React, { useState } from 'react'
import { Container, Paper, Grid, Avatar, CssBaseline, Typography, TextField, Checkbox, Button, FormControl, FormControlLabel, Link } from '@mui/material/'
import { Link as RouterLink, useHistory } from 'react-router-dom'
import apiBaseUrl from '../../shared/utils/Api'
import Logo from '../../shared/img/Logo2.png'
import { makeStyles } from '@mui/styles';
import City from '../../shared/img/City.jpg'
import Modal from '../../shared/components/Modal'

const useStyles = makeStyles(theme => ({
  root: {
    backgroundImage: `url(${City})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100vh'
  },
  container: {
    height: '60%',
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(10),
    [theme.breakpoints.down(500)]: {
      opacity: 1,
      marginTop: 0,
      width: '100vh',
      height: 'auto',
    }

  }
}))

export default function LoginPage() {
  const [active, setActive] = useState(false);
  const [errorShow, setErrorShow] = useState("");

  const toggle = () => {
    setActive(!active)
  }
  const history = useHistory();
  const classes = useStyles();
  const [emailValue, setEmail] = useState("");
  const handleEmail = e => setEmail(e.target.value.toLowerCase());

  const [rememberMe, setrememberMe] = useState(false);
  const handlerememberMe = e => setrememberMe(!rememberMe);

  const [passwordValue, setPassword] = useState("");
  const handlePassword = e => setPassword(e.target.value);

  const submitForm = async () => {
    function checkPassword(password) {
      const re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
      return re.test(password);
    }
    function validateEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }

    if (!validateEmail(emailValue)) {
      setErrorShow("The email doesn't valid")
    } else if (!checkPassword(passwordValue)) {
      setErrorShow("The password must contain at least one uppercase letter, at least one special character and its length must be greater than 8 characters");
    } else {
      const userData = {
        email: emailValue,
        password: passwordValue
      }
      try {
        const response = await fetch(`${apiBaseUrl}/login`, {
          method: 'POST',
          body: JSON.stringify(userData),
          headers: {
            'Content-Type': 'application/json'
          },
        });
        const user = await response.json();
        if (user.Status === "Success") {
          if (rememberMe) {
            localStorage.setItem("User", JSON.stringify(user.Data));
          } else {
            sessionStorage.setItem("User", JSON.stringify(user.Data));
          }
          history.push('/main')
        } else {
          toggle();
          setErrorShow(user.Description);
        }
      }
      catch (e) {
        console.log(e)
      }

    }
  }
  return (
    <>
    <Grid container component='main' className={classes.root} >
      <Container component={Paper} elevation={5} maxWidth='xs' className={classes.container} >
        <CssBaseline />
        <Grid container sx={{ alignItems: 'center', justifyContent: 'center' }}>
          <Grid item >
            <Avatar alt="Logo" src={Logo} sx={{ width: '100%', height: 200 }} />
          </Grid>
          <FormControl fullWidth={true}>
            <Grid item xs={12} md={12}>
              <TextField
                color='primary'
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                onChange={handleEmail}
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus />
            </Grid>
            <Grid item xs={12} md={12}>
              <TextField
                color='primary'
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                onChange={handlePassword}
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
            </Grid>
            <Grid item xs={12} md={12}>
              <Button
                id="SubmitButton"
                type="submit"
                fullWidth
                variant="contained"
                color='primary'
                onClick={submitForm}
              >Login
              </Button>
            </Grid>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" onClick={handlerememberMe} />}
              label="Remember me"
            />
            <Link mt={3} alignSelf='center' component={RouterLink} to='/register'>Don't have an account? Register</Link>

          </FormControl>
        </Grid>

      </Container>
    </Grid>
    <Modal active={active} toggle={toggle}>
    <Container maxWidth='sm'>
      <Grid container>
        <Grid item xs={12}>
          <Typography align='center' variant='h5' color='red'>
            Failure
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='h6' align='center'>
            {errorShow}
          </Typography>
        </Grid>
      </Grid>

    </Container>
  </Modal>
  </>
  )
}
