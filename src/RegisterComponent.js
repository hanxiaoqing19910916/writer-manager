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
const nickPattern = /^[\u4e00-\u9fa5a-zA-Z0-9]{6,18}$/;
const qqPattern = /^[1-9][0-9]{4,10}$/gim;
const wxPattern =/^[a-zA-Z]{1}[-_a-zA-Z0-9]{5,19}$/;




class RegisterComponent extends Component {
  handleSubmit = (e) => {
      e.preventDefault();
      this.props.form.validateFields(['wxnumber'], (err, values) => {
          console.log("values of form", values);
      });

    }

    isFieldValiding(n) {
        console.log(n);
    }
    // wxInputChanged = (e) => {
    //   e.preventDefault();
    //    this.props.form.isFieldValiding;
       
    // }
  
  
  
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

        <Button type="primary" onClick={this.handleSubmit.bind(this)}> 登陆</Button>
        <div className="form-header-label">注册</div>

        <Form onSubmit={this.handleSubmit} className="reg-form">

          <FromItem className="reg-form-item">
            {this.fieldDecorator('nickname', '输入6~18位，不包含特殊字符', nickPattern)(
              <Input placeholder="昵称" />
            )}
          </FromItem>

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

          <FromItem className="reg-form-item">
            {this.fieldDecorator('qqnumber', '请输入正确格式qq号', qqPattern)(
              <Input placeholder="QQ号" />
            )}
          </FromItem>

          <FromItem className="reg-form-item">
            {getFieldDecorator('wxnumber', {
                rules: [{required: true, message: '请输入正确格式微信号!', pattern:wxPattern}]
            })(
                <Input placeholder="微信号" onChange={this.wxInputChanged}/>
            )}
          </FromItem>


        
        












        </Form>

      </div>

    );
  }
}


export default Form.create()(RegisterComponent);

