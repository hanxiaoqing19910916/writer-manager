import React, { Component } from 'react';
import './Register.css';


import {
  Form,
  Icon,
  Button,
  Input,
  Checkbox,
  Select,
} from 'antd';

const FromItem = Form.Item;

const userNamePattern = /^[a-zA-Z0-9]{6,14}$/;
const passwordPattern = /^[a-zA-Z0-9]{6,18}$/;


class RegisterComponent extends Component {
  handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFields((err, values) => {
        if (!err) {
          console.log("values of form", values);
        }
      });
    }
  
  fieldDecorator(type, nilErrMsg, pattern) {
    const { getFieldDecorator } = this.props.form;
    const rule = { 
      required: true,
      message: nilErrMsg,
      pattern: pattern,
    }
    return getFieldDecorator(type, {rules: [rule]});
  }
  
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="reg-form-contaner">
        <div className="form-header-label">注册</div>

        <Form onSubmit={this.handleSubmit} className="reg-form">
          <FromItem className="reg-form-item">
            {this.fieldDecorator('userName', '请输入6~14位字母或数字', userNamePattern)(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0, .25)' }} />} placeholder="用户名" />
            )}
          </FromItem>

          <FromItem className="reg-form-item">
            {this.fieldDecorator('password', '请输入6~18位字母或数字', passwordPattern)(
              <Input type="password" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0, .25)' }} />} placeholder="密码" />
            )}
          </FromItem>

         <FromItem className="reg-form-item">
            {this.fieldDecorator('confirmPassword', '请输入6~18位字母或数字', passwordPattern)(
              <Input type="password" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0, .25)' }} />} placeholder="确认密码" />
            )}
          </FromItem>










        </Form>

      </div>

    );
  }
}


export default Form.create()(RegisterComponent);

