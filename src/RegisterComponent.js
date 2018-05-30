import React, { Component } from 'react';

import {
  Link,
  Route,
  Switch
} from 'react-router-dom';

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
const nickPattern = /^[\u4e00-\u9fa5a-zA-Z0-9]{4,10}$/;
const qqPattern = /^[1-9][0-9]{4,10}$/gim;
const wxPattern = /^[a-zA-Z]{1}[-_a-zA-Z0-9]{5,19}$/;
const phonePattern = /^[1][3,4,5,7,8][0-9]{9}$/;
const realNamePattern = /^[\u4e00-\u9fa5]{2,4}$/;
const idCardPattern = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;



class RegisterComponent extends Component {

  state = {
    confirmDirty: false,
    autoCompleteResult: [],
  };

  
  fieldDecorator(type, nilErrMsg, pattern) {
    const { getFieldDecorator } = this.props.form;
    const rule = { 
      required: true,
      message: nilErrMsg,
      pattern: pattern,
    }
    return getFieldDecorator(type, {rules: [rule]});
  }

  useIcon(type) {
    return (<Icon type={type} style={{color: 'rgba(0,0,0, .25)'}}/>);
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="reg-form-contaner">
        <div className="form-header-label">注册</div>
        <Form onSubmit={this.handleSubmit} className="reg-form">
          <FromItem className="reg-form-item">
            {this.fieldDecorator('userName', '请输入6~14位字母或数字', userNamePattern)(
              <Input prefix={this.useIcon('user')} placeholder="用户名" />
            )}
          </FromItem>

          <FromItem className="reg-form-item">
            {this.fieldDecorator('nickname', '输入4~10位，不包含特殊字符', nickPattern)(
              <Input prefix={this.useIcon('tags-o')}  placeholder="昵称" />
            )}
          </FromItem>

          <FromItem className="reg-form-item">
            {getFieldDecorator('password', {
              rules: [{
                required: true, message: '请输入6~18位字母或数字!', pattern: passwordPattern
              }, {
                validator: this.validateToNextPassword,
              }]
            })(
              <Input type="password" prefix={this.useIcon('lock')} placeholder="密码" />
            )}
          </FromItem>

          <FromItem className="reg-form-item">
            {getFieldDecorator('confirmPassword', {
              rules: [{
                required: true, message: '请输入6~18位字母或数字',pattern: passwordPattern
              }, {
                validator: this.compareToFirstPassword,
              }],
            })(
              <Input type="password" onBlur={this.handleConfirmBlur} prefix={this.useIcon('lock')} placeholder="确认密码" />
            )}
          </FromItem>

          <FromItem className="reg-form-item">
            {this.fieldDecorator('qqnumber', '请输入正确格式qq号', qqPattern)(
              <Input prefix={this.useIcon('qq')} placeholder="QQ号" />
            )}
          </FromItem>

          <FromItem className="reg-form-item">
            {this.fieldDecorator('wxnumber', '请输入正确格式微信号', wxPattern)(
              <Input prefix={this.useIcon('wechat')} placeholder="微信号" />
            )}
          </FromItem>

          <FromItem className="reg-form-item">
            {this.fieldDecorator('phone', '请输入正确格式手机号', phonePattern)(
              <Input prefix={this.useIcon('phone')} placeholder="手机号" />
            )}
          </FromItem>
          
          <FromItem className="reg-form-item">
            {getFieldDecorator('check', {
                rules: [{
                  required: true, message: '验证码不能为空'
                }, {
                  validator: this.validateTocheckCode,
                }],
              })(
                <Input className="check-input" prefix={this.useIcon('question')} placeholder="验证码" />
              )}
             <img className="check-image"></img>
          </FromItem>

          <FromItem> 
            <Button type="primary" htmlType="submit" className="regist-form-button"> 注册</Button>
            <Link className="back-login-link" to='/login'>回到登录页面</Link>
          </FromItem>
        </Form>
      </div>
    );
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
        console.log("values of form", values);
    });
  }


  handleConfirmBlur = (e) => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  }


  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue('password')) {
      callback('两次密码输入不一致');
    } else {
      callback();
    }
  }

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(['confirmPassword'], { force: true });
    }
    callback();
  }

  
  validateTocheckCode(rule, value, callback){
    callback();
  }
}


export default Form.create()(RegisterComponent);

