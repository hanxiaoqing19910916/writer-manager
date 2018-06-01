import React, { Component } from 'react';
import './Login.css';
import 'whatwg-fetch';

import {
  Form,
  Icon,
  Button,
  Input,
  Checkbox,
  Select,
} from 'antd';

import {
  Link,
  Route,
  Switch
} from 'react-router-dom';


const FromItem = Form.Item;

const userNamePattern = /^[a-zA-Z0-9]{6,14}$/;
const passwordPattern = /^[a-zA-Z0-9]{6,18}$/;


class LoginComponent extends Component {
  handleSubmit = (e) => {
      e.preventDefault();

      var myFetchOptions = {
        method: 'GET',
        mode: 'no-cors',
        'Access-Control-Allow-Origin': '*'
      };
      fetch("http://192.168.88.38:4000/users")
      .then(response => response.json())
      .then(json => {
        console.log(json);
      })
      .catch(error => {
        console.error(error);
      });

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
      <div className="login-form-contaner">
        <div className="form-header-label">欢迎登陆</div>
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FromItem className="form-item">
            {this.fieldDecorator('userName', '请输入6~14位字母或数字', userNamePattern)(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0, .25)' }} />} placeholder="用户名" />
            )}
          </FromItem>

          <FromItem className="form-item">
            {this.fieldDecorator('password', '请输入6~18位字母或数字', passwordPattern)(
              <Input type="password" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0, .25)' }} />} placeholder="密码" />
            )}
          </FromItem>

          <FromItem>
            {this.fieldDecorator('loginStanding', '请选择登陆身份')(
              <Select
                placeholder="选择你的登陆身份"
                onchange={this.handleSelectChange}              
              >
                <Select.Option value="writer">w</Select.Option>
                <Select.Option value="serviceAgent">s</Select.Option>
                <Select.Option value="management">m</Select.Option>
              </Select>
            )}
          </FromItem>

          <FromItem className="form-item">
            {getFieldDecorator('remember', {
              valueProoName: 'checked',
              initialValue: false
            })(
              <Checkbox>记住密码</Checkbox>
            )}
            <a className="login-form-forgot" href="">忘记密码</a>
            <Button type="primary" htmlType="submit" className="login-form-button"> 登陆</Button>
            <Link className="reg-link" to='/register'>还没有账号？去注册</Link>
          </FromItem>

        </Form>
      </div>

    );
  }
}


export default Form.create()(LoginComponent);

