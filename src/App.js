import React, { Component } from 'react';
import './App.css';
import {
  Form,
  Icon,
  Button,
  Input,
  Checkbox
} from 'antd';

const FromItem = Form.Item;

class App extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("values of form", values);
      }
    });
  }


  fieldDecorator(type, nilErrMsg) {
    const { getFieldDecorator } = this.props.form;
    return getFieldDecorator(type, { rules: [{ required: true, message: nilErrMsg }] });
  }




  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="form-contaner">
        <Form onSubmit={this.handleSubmit} className="login-form">
          <FromItem className="form-item">
            {this.fieldDecorator('userName', 'please input your username!')(
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0, .25)' }} />} placeholder="Username" />
            )}
          </FromItem>
          <FromItem className="form-item">
            {this.fieldDecorator('password', 'please input your Password!')(
              <Input type="password" prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0, .25)' }} />} placeholder="Password" />
            )}
          </FromItem>
          <FromItem className="form-item">
            {getFieldDecorator('remember', {
              valueProoName: 'checked',
              initialValue: true
            })(
              <Checkbox>记住密码</Checkbox>
            )}
            <a className="login-form-forgot" href="">忘记密码</a>
            <Button type="primary" htmlType="submit" className="login-form-button"> 登陆</Button>
            <a href="">账号注册</a>
          </FromItem>
        </Form>
      </div>

    );
  }
}

export default Form.create()(App);
