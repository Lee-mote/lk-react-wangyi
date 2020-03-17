import React, { Component } from 'react'
import { NavBar, Button} from 'antd-mobile'
import './index.less'

export default class index extends Component {

  render() {
    return (
      <div className='shop'>
        <NavBar
          mode="light"
        >
          <span className='gwc'>购物车</span>
          <span className='lj'>领卷</span>
          </NavBar>
          <div>
            <ul class="servicePolicy">
              <li>
                <span>30天无忧退货</span>
              </li>
              <li>
                <span>48小时快速退款</span>
              </li>
              <li>
                <span>满88元免包邮</span>
              </li>
            </ul> 
          </div>
          <div class="defaultPage">
          <div class="container">
            <img src={require('./image/cart.png')} alt="购物车" />
            <p>去添加点什么吧</p>
            <Button type="warning">登录</Button>
          </div>
    </div>
      
  </div>
    )
  }
}

