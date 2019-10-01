import React from "react";
import styles from "./index.module.less";

class PostList extends React.Component {
  render() {
    return (
      <div className={styles.whole}>
        这是文章列表！
      </div>
    );
  }
}

export default PostList;