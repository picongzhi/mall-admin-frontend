import React, {Component} from 'react'
import {Link} from "react-router-dom";

import Util from 'util'
import User from 'service/user'

const user = new User()

class NavTop extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: Util.getStorage('userInfo').username || ''
    }
  }

  render() {
    return (
      <nav className="navbar navbar-default top-navbar">
        <div className="navbar-header">
          <Link className="navbar-brand" to="/"><b>HAPPY</b>MALL</Link>
        </div>

        <ul className="nav navbar-top-links navbar-right">
          <li className="dropdown">
            <a className="dropdown-toggle" href="javascript:;" aria-expanded="false">
              <i className="fa fa-user fa-fw"></i>
              {
                this.state.username ? <span>欢迎, {this.state.username}</span> : <span>欢迎您</span>
              }
              <i className="fa fa-caret-down"></i>
            </a>
            <ul className="dropdown-menu dropdown-user">
              <li>
                <a href="#" onClick={() => {
                  this.onLogout()
                }}>
                  <i className="fa fa-sign-out fa-fw"></i>
                  <span> 退出登录</span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    );
  }

  onLogout() {
    // user.logout().then(res => {
    //   Util.removeStorage('userInfo')
    //   this.props.history.push('/login')
    // }, err => {
    //   Util.errorTips(err)
    // })

    Util.removeStorage('userInfo')
    console.log(this)
    window.location.href = '/login'
  }
}

export default NavTop
