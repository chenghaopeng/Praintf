import React from "react";
import styles from "./index.module.less";
import { Row, Col } from "antd";

import Sidebar from "../Sidebar";

export default function Frame () {
  return (
    <div className={styles.whole}>
      <Row className={styles.container}>
        <Col xs={{span: 20, offset: 0}} sm={{span: 20, offset: 0}} md={{span: 5, offset: 0}} lg={{span: 6, offset: 0}} className={`${styles.sideBar} ${styles.defaultBox}`}>
          <Sidebar/>
        </Col>
        <Col xs={{span: 20, offset: 0}} sm={{span: 20, offset: 2}} md={{span: 16, offset: 1}} lg={{span: 15, offset: 1}} className={styles.content}>
          内容
        </Col>
      </Row>
    </div>
  );
}