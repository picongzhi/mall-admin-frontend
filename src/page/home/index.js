import React, {Component} from 'react'
import {Link} from "react-router-dom"

import Title from 'component/title'
import Statistic from 'service/statistic'
import Util from 'util'

import './index.scss'

const statistic = new Statistic()

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userCount: 0,
      productCount: 0,
      orderCount: 0
    }
  }

  componentDidMount() {
    this.loadHomeCount()
  }

  loadHomeCount() {
    statistic.getHomeCount()
      .then(
        res => this.setState(res),
        err => Util.errorTips(err))
  }

  render() {
    return (
      <div id='page-wrapper'>
        <Title title='首页'>
        </Title>
        <div className='row'>
          <div className='col-md-4'>
            <Link to='/user' className='color-box brown'>
              <p className='count'>{this.state.userCount}</p>
              <p className='desc'>
                <i className='fa fa-user-o'></i>
                <span>用户总数</span>
              </p>
            </Link>
          </div>
          <div className='col-md-4'>
            <Link to='/product' className='color-box green'>
              <p className='count'>{this.state.productCount}</p>
              <p className='desc'>
                <i className='fa fa-list'></i>
                <span>商品总数</span>
              </p>
            </Link>
          </div>
          <div className='col-md-4'>
            <Link to='/order' className='color-box blue'>
              <p className='count'>{this.state.orderCount}</p>
              <p className='desc'>
                <i className='fa fa-check-square-o'></i>
                <span>订单总数</span>
              </p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home
