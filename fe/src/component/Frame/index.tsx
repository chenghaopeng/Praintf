import React from "react";
import styles from "./index.module.less";
import { Row, Col } from "antd";

import HeaderCard from "../HeaderCard";
import SessionCard from "../SessionCard";

export default function Frame (props : {WrappedComponent: any}) {
  return (
    <div className={styles.whole}>
      <Row className={styles.container}>
        <Col xs={{span: 20, offset: 0}} sm={{span: 20, offset: 0}} md={{span: 6, offset: 0}} className={styles.sideBar}>
          <HeaderCard/>
          <SessionCard/>
        </Col>
        <Col xs={{span: 20, offset: 0}} sm={{span: 20, offset: 2}} md={{span: 15, offset: 1}} className={styles.content}>
          <props.WrappedComponent/>
        </Col>
      </Row>
    </div>
  );
}