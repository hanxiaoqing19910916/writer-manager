import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import LoginComponent from '../LoginComponent'
import App from '../App.js';

export default class AppRouter extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return ( 
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={App}></Route>
          <Route path='/login' component={LoginComponent}/>
        </Switch>
      </BrowserRouter>
    )
  }





}


/** 
 * history 对象通常会具有以下属性和方法：
    length -（ number 类型）指的是 history 堆栈的数量。
    action -（ string 类型）指的是当前的动作（action），例如 PUSH，REPLACE 以及 POP 。
    location -（ object类型）是指当前的位置（location），location 会具有如下属性：
    pathname -（ string 类型）URL路径。
    search -（ string 类型）URL中的查询字符串（query string）。
    hash -（ string 类型）URL的 hash 分段。
    state -（ string 类型）是指 location 中的状态，例如在 push(path, state) 时，state会描述什么时候 location 被放置到堆栈中等信息。这个 state 只会出现在 browser history 和 memory history 的环境里。
    push(path, [state]) -（ function 类型）在 hisotry 堆栈顶加入一个新的条目。
    replace(path, [state]) -（ function 类型）替换在 history 堆栈中的当前条目。
    go(n) -（ function 类型）将 history 对战中的指针向前移动 n 。
    goBack() -（ function 类型）等同于 go(-1) 。
    goForward() -（ function 类型）等同于 go(1) 。
    block(prompt) -（ function 类型）阻止跳转
*/

