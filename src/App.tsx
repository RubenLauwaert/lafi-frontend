import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from 'react';
import mainStyles from './Main.module.css'
import './App.css';
import { HomePage } from "./Pages/HomePage/HomePage";
import { RegisterPage } from "./Pages/RegisterPage/RegisterPage";
import { LoginPage } from "./Pages/LoginPage/LoginPage";
import { FinancePage } from "./Pages/FinancePage/FinancePage";
import { Navbar } from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className={mainStyles.Main}>
        <BrowserRouter>
      <Navbar></Navbar>
            <Switch>
                <Route path="/" exact component={HomePage}></Route>
                <Route path="/register" component={RegisterPage}></Route>
                <Route path="/login" component={LoginPage}></Route>
                <Route path="/finance" component={FinancePage}></Route>
            </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
