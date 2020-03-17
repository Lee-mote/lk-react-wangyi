import React, { Component } from "react";
import { Tabs,  } from "antd-mobile";
import BScroll from 'better-scroll'
import "./index.less";
import tabs from "../../datas/indexCateModule.json";

export default class index extends Component {
  state = {
    sortItem: tabs[0]
  };
  componentDidMount() {
    if (!this.scroll) {
      this.scroll = new BScroll('.wrap', {
        scrollY: true,
        click: true
      })
    }
  }
  handleToggle = data => {
    this.setState({
      sortItem: data
    });
    
  };
  render() {
    const { sortItem } = this.state;
    return (
      <div className="sort">
        <div className="header_search">
          <div className="search" >
            <span>搜索商品，共24027款好物</span>
          </div>
        </div>
        <div className="cateCenter">
          <div className="sidebar">
            <Tabs
              tabs={tabs}
              tabBarPosition="right"
              tabDirection="vertical"
              onTabClick={this.handleToggle}
            ></Tabs>
          </div>
          <div className="wrap">
            <div className="cate_center">
              <div className="banner" >
                <img src={sortItem.imgUrl} alt={sortItem.name} />
              </div>
              <ul className="cateItem">
                {sortItem.subCateList.map((item, index) => (
                  <li key={index}>
                    <img src={item.wapBannerUrl} alt={item.name} />
                    <p>{item.title}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
