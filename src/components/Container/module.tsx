import * as React from "react";
import { Component } from "react";
import { Route } from "react-router-dom";
import Sider from "../Sider/module";
import * as TYPE from "./type";

import "./index.styl";

export default class extends Component<TYPE.IProps, {} > {
  public render() {
    return (
      <div className="main-container">
        <Sider router={this.props.router} />
        <div className="content-container">
          {
            this.props.router.map((item: TYPE.IRoute, i: number) =>
            <Route key={i} exact={item.exact} path={item.path} component={item.component} />)
          }
      </div>
    </div>);
  }
}
