import React, { Component } from 'react'
import Home from './Home'
import Anime from './anime'
import AppBar from './AppBar'
import './App.css'
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
export default class App extends Component {
  
    render() {
        return (
            <div>
                <AppBar/>
              <Switch>
              <Route path="/" exact component={Home}/>
              <Route path="/anime/:id" exact component={Anime} />
              </Switch>
            </div>
        )
    }
}
