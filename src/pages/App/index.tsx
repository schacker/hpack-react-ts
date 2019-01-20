console.log(1);
import * as React from "react";
import Header from "../../components/Header";
import Container from "../../components/Container";
import * as TYPE from "./type";

console.log(Header);
console.log(Container);

import "./index.styl";

class App extends React.Component<TYPE.IProps, {}> {

  constructor(props: TYPE.IProps) {
    super(props);
  }

  public render() {
    return (
      <div className="wrap-container">
        <Header />
        <Container router={this.props.router} />
      </div>
    );
  }
}

export default App;
