import React from "react";
import styles from "./index.module.less";

import store from "../../store";
import Login from "./Login";
import Register from "./Register";

interface SessionCardState {
  loged: number,
  token: string,
  nickname: string,
}

class SessionCard extends React.Component<any, SessionCardState> {
  constructor(props : any) {
    super(props);
    this.state = {loged: 0, token: "", nickname: ""};
  }

  componentWillMount(){
    store.subscribe(() => {
      const newState = store.getState();
      this.setState(newState.session);
    });
  }

  render(){
    return (
      <div className={`${styles.whole} ${styles.defaultBox}`}>
        {this.state.loged === 0 ? <Login/> : <Register/>}
      </div>
    );
  }
}

export default SessionCard;