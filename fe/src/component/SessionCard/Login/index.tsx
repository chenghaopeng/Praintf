import React, { FormEvent } from "react";
import styles from "../index.module.less";

import { Form, Icon, Input, Button, Row, Col, message } from 'antd';
import { FormComponentProps } from "antd/lib/form";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import { loginAction, toRegister } from "../../../action/SessionAction";

interface LoginProps {
  loginAction: Function,
  toRegister: Function,
}

class Login extends React.Component<FormComponentProps & LoginProps, any> {
  formSize = {
    inline: {
      username: {span: 7, offset: 0},
      password: {span: 7, offset: 1},
      login: {span: 4, offset: 1},
      register: {span: 3, offset: 1},
    },
    wrap: {
      username: {span: 24, offset: 0},
      password: {span: 24, offset: 0},
      login: {span: 16, offset: 0},
      register: {span: 7, offset: 1},
    },
  };

  handleSubmit = (e : FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const values = this.props.form.getFieldsValue();
    if (!values.username || !values.password) {
      message.error("请输入用户名和密码！");
    }
    else {
      this.props.loginAction({username: values.username, password: values.password});
    }
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
          <Col xs={this.formSize.inline.password} sm={this.formSize.inline.password} md={this.formSize.wrap.password} xxl={this.formSize.inline.password}>
            <Form.Item className={styles.formItem}>{
              getFieldDecorator("password")(
                <Input prefix={<Icon type="lock"/>} type="password" placeholder="密码"/>
              )
            }</Form.Item>
          </Col>
          <Col xs={this.formSize.inline.login} sm={this.formSize.inline.login} md={this.formSize.wrap.login} xxl={this.formSize.inline.login}>
            <Form.Item className={styles.formItem}>
              <Button type="primary" htmlType="submit">
                登录
              </Button>
            </Form.Item>
          </Col>
          <Col xs={this.formSize.inline.register} sm={this.formSize.inline.register} md={this.formSize.wrap.register} xxl={this.formSize.inline.register}>
            <Form.Item className={styles.formItem}>
              <Button onClick={() => this.props.toRegister()}>
                注册
              </Button>
            </Form.Item>
          </Col>
        </Row>
      </Form>
    );
  }
}

const mapStateToProps = (state : any) => {
  return {};
}

const mapDispatchToProps = (dispatch : any) => {
  return {
    loginAction: bindActionCreators(loginAction, dispatch),
    toRegister: bindActionCreators(toRegister, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Form.create()(Login));