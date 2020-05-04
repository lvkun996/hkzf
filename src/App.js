import React from 'react';

import { BrowserRouter as Router , Route, Switch , Redirect} from 'react-router-dom'

import Home from './pages/Home'

import CityList from './pages/CityList'

import Map from  './pages/Map'

import NotFound from './pages/NotFound'
import './index.scss'


function App() {
  return (
    <Router className="App">
      <Switch>
        {/* {重定向} */}
        {/* <Redirect exact from="/" to="/home"  /> */}
        <Route path="/" exact render={ () => <Redirect to="/home" /> }  />
        {/* 一级路由*/ }
        <Route path="/home" component={Home}></Route>
        <Route path="/cityList" component={CityList}></Route>
        <Route path="/map" component={Map}></Route>
        {/*404页面*/}
        <Route component={NotFound}></Route>
      </Switch>
    </Router>
  );
}

export default App;
