import React from "react";
import styles from "./index.module.less";
import { Avatar } from "antd";
import { TiSocialGithub } from "react-icons/ti";

import avatar from "../../resource/avatar.png";

export default function Sidebar() {
  return (
    <div className={styles.whole}>
      <Avatar src={avatar} style={{height: "8em", width: "8em"}}/>
      <div className={styles.title}>
        Chaop
      </div>
      <div className={styles.icons}>
        <TiSocialGithub/>
      </div>
    </div>
  );
}