class Util {
  static request(param) {
    return new Promise((resolve, reject) => {
      $.ajax({
        type: param.type || 'get',
        url: param.url || '',
        dataType: param.dataType || 'json',
        contentType: param.contentType || 'application/json; charset=UTF-8',
        data: param.data ? JSON.stringify(param.data) : null,
        success(res) {
          console.log(res)
          if (res.code === 0) {
            // 成功
            resolve(res.data)
          } else if (-1 === res.code) {
            // 未登录
            reject(res.msg || res.data)
          } else {
            reject(res.msg || res.data)
          }
        },
        error(err) {
          reject(err.statusText || '请求出错')
        }
      })
    });
  }

  static doLogin() {
    window.location.href = '/login?redirect=' + encodeURIComponent(window.location.pathname)
  }

  static getUrlParam(name) {
    const queryString = window.location.search.split('?')[1] || ''
    const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
    const result = queryString.match(reg)

    return result ? decodeURIComponent(result[2]) : null
  }

  static errorTips(err) {
    alert(err)
  }

  static setStorage(key, val) {
    if (typeof val === 'object') {
      localStorage.setItem(key, JSON.stringify(val))
    } else if (typeof val === 'number' || typeof val === 'string' || typeof val === 'boolean') {
      localStorage.setItem(key, val)
    } else {
      alert('该类型不能用于本地存储')
    }
  }

  static getStorage(key) {
    let val = localStorage.getItem(key)
    if (val) {
      return JSON.parse(val)
    } else {
      return ''
    }
  }

  static removeStorage(key) {
    localStorage.removeItem(key)
  }
}

export default Util
