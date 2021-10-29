import React, { useState } from 'react'
import { Container, Grid, Avatar, CssBaseline, TextField, Checkbox, Button, FormControl, FormControlLabel, Link } from '@mui/material/'
import { Link as RouterLink } from 'react-router-dom'
import apiBaseUrl from '../../shared/utils/Api'
import Logo from '../../shared/img/Logo2.png'


export default function LoginPage() {
  const [emailValue, setEmail] = useState("");
  const handleEmail = e => setEmail(e.target.value.toLowerCase());
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
      console.log("The email doesn't valid")
    } else if (!checkPassword(passwordValue)) {
      console.log("The password must contain at least one uppercase letter, at least one special character and its length must be greater than 8 characters");
    } else {
      const userData = {
        email: emailValue,
        password: passwordValue
      }
      console.log(userData)
      try {
        const response = await fetch(`${apiBaseUrl}/login`, {
          method: 'POST',
          body: JSON.stringify(userData),
          headers: {
            'Content-Type': 'application/json'
          },
        });
        const user = await response.json();
        console.log(user);
      }
      catch (e) {
        console.log(e)
      }

    }
  }
  return (
    <Container maxWidth="xs" >
      <CssBaseline />
      <Grid my={10} container sx={{ alignItems: 'center', justifyContent: 'center' }}>
        <Grid item >
          <Avatar alt="Logo" src={Logo} sx={{ width: '100%', height: 200 }} />
        </Grid>
        <FormControl fullWidth={true}>
          <Grid item xs={12} md={12}>
            <TextField
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
              color="error"
              onClick={submitForm}
            >Sign In
            </Button>
          </Grid>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Link mt={3} alignSelf='center' component={RouterLink} to='/register'>Don't have an account? Register</Link>

        </FormControl>
      </Grid>

    </Container>
  )
}
