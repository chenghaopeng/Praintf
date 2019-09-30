import React from "react";
import styles from "./index.module.less";
import { Avatar, Tooltip } from "antd";
import { TiLocation, TiMail, TiMessages, TiBusinessCard} from "react-icons/ti";
import { FaGithub } from "react-icons/fa";

import avatar from "../../resource/avatar.png";

const icons = [
  {
    component: FaGithub,
    tooltip: "GitHub",
    onClick: () => {}
  },
  {
    component: TiMail,
    tooltip: "邮箱",
    onClick: () => {}
  },
  {
    component: TiMessages,
    tooltip: "交流",
    onClick: () => {}
  },
  {
    component: TiLocation,
    tooltip: "南京大学软件学院",
    onClick: () => {}
  },
  {
    component: TiBusinessCard,
    tooltip: "我",
    onClick: () => {}
  },
];

function Icons() {
  return icons.map((item) => {
    return (
      <Tooltip title={item.tooltip}>
        <item.component className={styles.icon} onClick={item.onClick}/>
      </Tooltip>
    );
  });
}

export default function HeaderCard() {
  return (
    <div className={`${styles.whole} ${styles.defaultBox}`}>
      <Avatar src={avatar} style={{height: "8em", width: "8em"}}/>
      <div className={styles.title}>
        Chaop
      </div>
      <div className={styles.icons}>
        {Icons()}
      </div>
    </div>
  );
}