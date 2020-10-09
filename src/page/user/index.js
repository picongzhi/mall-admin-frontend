import React, {Component} from 'react'
import {Link} from "react-router-dom";
import Pagination from 'util/pagination'

import Title from 'component/title'

import User from 'service/user'
import Util from 'util'

import 'rc-pagination/assets/index.css'

const user = new User()

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      size: 5,
      total: 0,
      data: []
    }
  }

  componentDidMount() {
    this.loadUserList()
  }

  loadUserList() {
    user.getUserList(this.state.page, this.state.size)
      .then(res => {
        this.setState(res)
      }, err => {
        Util.errorTips(err)
      })
  }

  onPageChange(current) {
    console.log(current)
    this.setState({
      page: current
    }, () => {
      this.loadUserList()
    })
  }

  render() {
    return (
      <div id='page-wrapper'>
        <Title title='用户列表'/>
        <div className='row'>
          <div className='col-md-12'>
            <table className='table table-striped table-bordered'>
              <thead>
              <tr>
                <th>ID</th>
                <th>用户名</th>
                <th>邮箱</th>
                <th>创建时间</th>
              </tr>
              </thead>
              <tbody>
              {
                this.state.data.map(item => {
                  return (
                    <tr key={item.id}>
                      <td>{item.id}</td>
                      <td>{item.username}</td>
                      <td>{item.email}</td>
                      <td>{new Date(item.createTime).toLocaleString()}</td>
                    </tr>
                  )
                })
              }
              </tbody>
            </table>
          </div>
        </div>
        <Pagination
          current={this.state.page}
          total={this.state.total}
          pageSize={this.state.size}
          onChange={(current) => {
            this.onPageChange(current)
          }}/>
      </div>
    )
  }
}

export default UserList
