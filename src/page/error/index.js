import React, {Component} from 'react'
import {Link} from "react-router-dom";

import Title from 'component/title'

class Error extends Component {
  render() {
    return (
      <div id='page-wrapper'>
        <Title title='出错啦'/>
        <div className='row'>
          <div className='col-md-12'>
            找不到路径, <Link to='/'>点我返回首页</Link>
          </div>
        </div>
      </div>
    )
  }
}

export default Error
