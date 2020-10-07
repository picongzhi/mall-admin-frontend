import React, {Component} from 'react'
import ReactDom from 'react-dom'
import {BrowserRouter, Switch, Route, Link, Redirect} from "react-router-dom";

import Home from 'page/home'
import Layout from './component/layout'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/product' component={Home}/>
            <Route exact path='/product/category' component={Home}/>
            <Route exact path='/order' component={Home}/>
            <Route exact path='/user' component={Home}/>
          </Switch>
        </Layout>
      </BrowserRouter>
    )
  }
}

ReactDom.render(
  <App/>,
  document.getElementById('app')
)
