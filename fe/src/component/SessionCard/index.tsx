import React from "react";
import styles from "./index.module.less";

import store from "../../store";
import Login from "./Login";
import Register from "./Register";
import Hello from "./Hello";

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
      this.setState(newState.SessionReducer.session);
    });
  }

  render(){
    return (
      <div className={`${styles.whole} ${styles.defaultBox}`}>
        {this.state.loged === 0 ? <Login/> : this.state.loged === -1 ? <Register/> : <Hello/>}
      </div>
    );
  }
}

export default SessionCard;