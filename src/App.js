import React from "react";
import {BrowserRouter as Router,Switch, Route, Redirect} from 'react-router-dom'
import IndexPage from "./pages/index/IndexPage";
import LoginPage from "./pages/login/LoginPage";
import RegisterPage from "./pages/register/RegisterPage";
import MainPage from './pages/main/MainPage'
import { ThemeProvider } from '@mui/material/styles';
import ThemeCustom from "./shared/styles/Colors";
import SellerCard from "./shared/components/SellerCard";
import NavigatioBar from "./shared/components/NavigatioBar";

function App() {
  return (
    
    <ThemeProvider theme={ThemeCustom}>
    <Router>
      <Switch>
        <Route path="/login" exact>
          <LoginPage />
        </Route>
        <Route path="/register" exact>
          <RegisterPage />
        </Route>
        <Route path="/main" exact>
          <MainPage />
        </Route>
        <Route path="/userSeller" exact>
          <NavigatioBar />
          <SellerCard />
        </Route>
        <Route path="/Navigator" exact>
          <NavigatioBar />
        </Route>
        <Route>
          {localStorage.getItem("User")===null?<IndexPage />:<Redirect to="/main"/>}
        </Route>
      </Switch>
    </Router>
    </ThemeProvider>
  );
}

export default App;
