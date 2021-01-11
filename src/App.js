// import logo from './logo.svg';
import  React, { Fragment, useState } from 'react';
// import './App.css';
import { Route, Redirect, Switch, Link } from 'react-router-dom'

function Index(props) {
  console.log('/',props);
  return <div>首页</div>
}
function About(props) {
  console.log('about',props);
  return <div>关于视图</div>
}
function User(props) {
  console.log('user',props);
  return <div>用户中心</div>
}
function Login(props) {
  console.log('Login',props);
  return <div>登录中心</div>
}
function App() {
  const [isLogin, changeLogin] = useState(true)
  // Route渲染的优先级：children > component > render
  return (
    <Fragment>
      {/* <div>RouterPage</div> */}
      {/* <nav>
        <Link to="/">首页</Link>
        <Link to="/index">相关首页</Link>
      </nav> */}
      <Switch>
        <Route path="/" exact component={Index}></Route>
        <Route path={["/about","/index"]} exact component={About}></Route>
        <Route path="/user" render={() => {
          return isLogin ? <User /> : <Redirect to="/login"/>
        }}></Route>
        <Route path="/login" render={() => {
          return isLogin ? <Redirect to="/" /> : <Login />
        }}></Route>
        <Route render={()=><h1>404</h1>}></Route>
      </Switch>
    </Fragment>
  );
}

export default App;
