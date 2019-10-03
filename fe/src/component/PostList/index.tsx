import React from "react";
import styles from "./index.module.less";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import moment from "moment";

import { getPostListAction } from "../../action/PostAction";
import { getPostList } from "../../service/PostAPI";

interface PostListProps {
  getPostListAction: Function,
  postlist: any,
}

class PostList extends React.Component<PostListProps, any> {
  async componentWillMount() {
    const res = await getPostList();
    if (res.code === 0) {
      this.props.getPostListAction(res.data.post);
    }
  }
  render() {
    return (
      <div className={styles.whole}>
        {this.props.postlist.map((item : any, index : number) => {
          return (
            <div className={`${styles.defaultBox} ${styles.postItem}`}>
              <div className={styles.header}>
                <div className={styles.title}>{item.title}</div>
                <div className={styles.time}>{moment(item.time).format("YYYY-MM-DD HH:mm:ss")}</div>
              </div>
              <div className={styles.body}>
                {item.body}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state : any) => {
  return {
    postlist: state.PostReducer.postlist,
  };
}

const mapDispatchToProps = (dispatch : any) => {
  return {
    getPostListAction: bindActionCreators(getPostListAction, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostList);