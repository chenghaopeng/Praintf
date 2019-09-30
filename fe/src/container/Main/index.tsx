import React from "react";
import styles from "./index.module.less";
import { RouteComponentProps } from "react-router";

import Frame from "../../component/Frame";
import PostList from "../../component/PostList";

class Main extends React.Component<RouteComponentProps, any> {
  render() {
    return (
      <Frame WrappedComponent={PostList}/>
    );
  }
}

export default Main;