import React, {Component} from 'react'

import User from 'service/user'
import Util from 'util'

import './index.scss'

const user = new User()

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      redirect: Util.getUrlParam('redirect') || '/'
    }
  }

  componentWillMount() {
    document.title = '登录'
  }

  onInputChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onSubmit(e) {
    let loginInfo = {
      username: this.state.username,
      password: this.state.password
    }

    let res = user.checkLoginInfo(loginInfo)
    if (res.code === 0) {
      user.login(loginInfo)
        .then(data => {
          Util.setStorage('userInfo', data)
          this.props.history.push(this.state.redirect)
        }, err => {
          Util.errorTips(err)
        })
    } else {
      Util.errorTips(res.msg)
    }
  }

  onInputKeyUp(e) {
    if (e.keyCode === 13) {
      this.onSubmit(e)
    }
  }

  render() {
    return (
      <div className='col-md-4 col-md-offset-4'>
        <div className='panel panel-default login-panel'>
          <div className='panel-heading'>欢迎登录</div>
          <div className='panel-body'>
            <div>
              <div className='form-group'>
                <input name='username'
                       type='text'
                       className='form-control'
                       placeholder='请输入用户名'
                       onChange={e => this.onInputChange(e)}
                       onKeyUp={e => this.onInputKeyUp(e)}/>
              </div>
              <div className='form-group'>
                <input name='password'
                       type='password'
                       className='form-control'
                       placeholder='请输入密码'
                       onChange={e => this.onInputChange(e)}
                       onKeyUp={e => this.onInputKeyUp(e)}/>
              </div>
              <button className='btn btn-lg btn-primary btn-block'
                      onClick={e => {
                        this.onSubmit(e)
                      }}>
                登录
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login
