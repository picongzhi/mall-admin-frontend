import Util from 'util'

class User {
  login(loginInfo) {
    return Util.request({
      type: 'post',
      url: '/api/user/login',
      data: loginInfo
    })
  }

  logout() {
    // TODO
  }

  checkLoginInfo(loginInfo) {
    let username = $.trim(loginInfo.username)
    if (typeof username !== 'string' || username.length === 0) {
      return {
        code: -1,
        msg: '用户名不能为空'
      }
    }

    let password = $.trim(loginInfo.password)
    if (typeof password !== 'string' || password.length === 0) {
      return {
        code: -1,
        msg: '密码不能为空'
      }
    }

    return {
      code: 0,
      msg: ''
    }
  }

  getUserList(page, size) {
    return Util.request({
      type: 'get',
      url: `/api/user/list?page=${page}&size=${size}`,
    })
  }
}

export default User
