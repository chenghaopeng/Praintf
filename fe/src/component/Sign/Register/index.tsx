import React, { FormEvent } from "react";
import styles from "../index.module.less";

import { Form, Icon, Input, Button, Row, Col } from 'antd';
import { FormComponentProps } from "antd/lib/form";

class Register extends React.Component<FormComponentProps, any> {
  formSize = {
    inline: {
      username: {span: 7, offset: 0},
      nickname: {span: 7, offset: 1},
      mail: {span: 8, offset: 1},
      password: {span: 7, offset: 0},
      repeat: {span: 7, offset: 1},
      register: {span: 4, offset: 1},
      login: {span: 3, offset: 1},
    },
    wrap: {
      username: {span: 24, offset: 0},
      nickname: {span: 24, offset: 0},
      mail: {span: 24, offset: 0},
      password: {span: 24, offset: 0},
      repeat: {span: 24, offset: 0},
      register: {span: 16, offset: 0},
      login: {span: 7, offset: 1},
    },
  };

  handleSubmit = (e : FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <Row>
          <Col xs={this.formSize.inline.username} sm={this.formSize.inline.username} md={this.formSize.wrap.username} xxl={this.formSize.inline.username}>
            <Form.Item className={styles.formItem}>{
              getFieldDecorator("username")(
                <Input prefix={<Icon type="user"/>} placeholder="用户名"/>
              )
            }</Form.Item>
          </Col>
          <Col xs={this.formSize.inline.nickname} sm={this.formSize.inline.nickname} md={this.formSize.wrap.nickname} xxl={this.formSize.inline.nickname}>
            <Form.Item className={styles.formItem}>{
              getFieldDecorator("nickname")(
                <Input prefix={<Icon type="heart"/>} placeholder="昵称"/>
              )
            }</Form.Item>
          </Col>
          <Col xs={this.formSize.inline.mail} sm={this.formSize.inline.mail} md={this.formSize.wrap.mail} xxl={this.formSize.inline.mail}>
            <Form.Item className={styles.formItem}>{
              getFieldDecorator("mail")(
                <Input prefix={<Icon type="mail"/>} placeholder="邮箱"/>
              )
            }</Form.Item>
          </Col>
          <Col xs={this.formSize.inline.password} sm={this.formSize.inline.password} md={this.formSize.wrap.password} xxl={this.formSize.inline.password}>
            <Form.Item className={styles.formItem}>{
              getFieldDecorator("password")(
                <Input prefix={<Icon type="lock"/>} type="password" placeholder="密码"/>
              )
            }</Form.Item>
          </Col>
          <Col xs={this.formSize.inline.repeat} sm={this.formSize.inline.repeat} md={this.formSize.wrap.repeat} xxl={this.formSize.inline.repeat}>
            <Form.Item className={styles.formItem}>{
              getFieldDecorator("repeat")(
                <Input prefix={<Icon type="lock"/>} type="password" placeholder="重复密码"/>
              )
            }</Form.Item>
          </Col>
          <Col xs={this.formSize.inline.register} sm={this.formSize.inline.register} md={this.formSize.wrap.register} xxl={this.formSize.inline.register}>
            <Form.Item className={styles.formItem}>
              <Button type="primary" htmlType="submit">
                注册
              </Button>
            </Form.Item>
          </Col>
          <Col xs={this.formSize.inline.login} sm={this.formSize.inline.login} md={this.formSize.wrap.login} xxl={this.formSize.inline.login}>
            <Form.Item className={styles.formItem}>
              <Button>
                登录
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    );
  }
}

export default Form.create()(Register);