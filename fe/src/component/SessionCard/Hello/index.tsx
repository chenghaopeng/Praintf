import React from "react";
import styles from "./index.module.less";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { FaUser, FaSignOutAlt } from "react-icons/fa";
import { Button } from "antd";

import { logoutAction } from "../../../action/SessionAction";

interface HelloProps {
  session: any,
  logoutAction: Function,
}

class Hello extends React.Component<HelloProps, any> {
  handleLogout = () => {
    this.props.logoutAction();
  }
  render() {
    return (
      <div className={styles.whole}>
        <div className={styles.welcome}>
          欢迎，{this.props.session.nickname}！
        </div>
        <div className={styles.buttons}>
          <Button onClick={this.handleLogout}><FaSignOutAlt/></Button>
          <Button type="primary"><FaUser/></Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state : any) => {
  return {
    session: state.session,
  };
}

const mapDispatchToProps = (dispatch : any) => {
  return {
    logoutAction: bindActionCreators(logoutAction, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);