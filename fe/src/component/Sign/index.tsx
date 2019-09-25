import React from "react";
import styles from "./index.module.less";

import Login from "./Login";

export default function Sign() {
  return (
    <div className={`${styles.whole} ${styles.defaultBox}`}>
      <Login/>
    </div>
  );
}