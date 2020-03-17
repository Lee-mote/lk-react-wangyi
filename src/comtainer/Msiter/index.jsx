import React, { Component } from 'react'
import { NavBar,Tabs,Carousel} from 'antd-mobile'

const tabs = [
  { title: '推荐' },
  { title: '居家生活' },
  { title: '服饰鞋包' },
  { title: '美食酒水' },
  { title: '个护清洁' },
  { title: '母婴亲子' },
  { title: '运动旅游' },
  { title: '数码家电' },
  { title: '全球特色' },
];
export default class index extends Component {
  state = {
    data: ['1', '2', '3','4','5','6','7','8'],
    imgHeight: 176,
  }
  componentDidMount() {
    // simulate img loading
    setTimeout(() => {
      this.setState({
        data: ['1', '2', '3','4','5','6','7','8'],
      });
    }, 100);
  }
  render() {
    return (
      <div>
    <NavBar
      mode="light"
    >
      NavBar
      </NavBar>
      <Tabs tabs={tabs}
      initialPage={1}
      onChange={(tab, index) => { console.log('onChange', index, tab); }}
      onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
    >
    </Tabs>
    <Carousel
          autoplay
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {this.state.data.map(val => (
            
              <img
                src={require('./imgs/1.webp')}
                alt=""
                style={{ width: '100%', verticalAlign: 'top' }}
              />
          ))}
        </Carousel>
        <div>
          <span>网易自营品牌</span>
          <span>30天无忧退货</span>
          <span>48小时快速退款</span>
        </div>
  </div>
    )
  }
}

