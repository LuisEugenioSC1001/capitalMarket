import React from "react";
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import IndexPage from "./pages/index/IndexPage";
import LoginPage from "./pages/login/LoginPage";
import RegisterPage from "./pages/register/RegisterPage";
import MainPage from './pages/main/MainPage'
import CardsMedia from './shared/components/Cards/CardsMedia'


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact>
          <LoginPage />
        </Route>
        <Route path="/register" exact>
          <RegisterPage/>
        </Route>
        <Route path="/main" exact>
          <MainPage/>
        </Route>
        <Route path="/products" exact>
          <CardsMedia/>
        </Route>
        <Route>
          <IndexPage/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
