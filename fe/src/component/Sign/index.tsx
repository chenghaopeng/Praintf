import React from "react";
import styles from "./index.module.less";

import Login from "./Login";
import Register from "./Register";

export default function Sign() {
  return (
    <div className={`${styles.whole} ${styles.defaultBox}`}>
      <Login/>
      <Register/>
    </div>
  );
}