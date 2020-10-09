import React, {Component} from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter, Switch, Route, Link, Redirect} from "react-router-dom";

import Home from 'page/home'
import Login from 'page/login'
import Error from 'page/error'
import UserList from 'page/user'

import Layout from 'component/layout'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path='/login' component={Login}/>
          <Route path='/' render={props => (
            <Layout>
              <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/product' component={Home}/>
                <Route exact path='/product/category' component={Home}/>
                <Route exact path='/order' component={Home}/>
                <Route exact path='/user' component={UserList}/>
                <Route component={Error}/>
              </Switch>
            </Layout>
          )}/>
        </Switch>
      </BrowserRouter>
    )
  }
}

ReactDom.render(
  <App/>,
  document.getElementById('app')
)
