import React from "react";
import FooterNav from "$comp/footerNav/index";
import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";

// 路由
import routers from '$conf/routers'
function App() {
  return (
    <Router>
        <Switch>
          {routers.map(menu => <Route {...menu} key={menu.path} />)}
        </Switch>
        <Route path='/' component={FooterNav} />
        <Redirect from='/' to='/sort' />
      </Router>
  );
}

export default App;
