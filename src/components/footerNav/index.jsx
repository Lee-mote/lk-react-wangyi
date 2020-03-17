import React, { Component } from "react";
import { TabBar } from "antd-mobile";
import meuns from "$conf/routers.js";
import "./index.less";
export default class TabBarExample extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: "/msiter",
      hidden: false,
    };
  }

  createMenus = menus => {
    return menus.map(menu => {
      return (
          <TabBar.Item
            icon={
              <div
                style={{
                  width: "22px",
                  height: "22px"
                }}
                className={menu.icon}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  color: "#B4282D"
                }}
                className={menu.icon}
              />
            }
            title={menu.title}
            key={menu.path}
            selected={this.state.selectedTab === menu.path}
            onPress={() => {
              this.setState({
                selectedTab: menu.path
              });
              this.props.history.replace(menu.path)
            }}
          ></TabBar.Item>
      );
    });
  };

  render() {
    return (
      <div
        className="w-tabBar"
        style={{position: "fixed", height: "100%", width: "100%", top: 0}}
      >
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
          hidden={this.state.hidden}
          tintColor="#B4282D"
          unselectedTintColor="#555"
        >
          {this.createMenus(meuns)}
        </TabBar>
      </div>
    );
  }
}
