// import logo from './logo.svg';
import  React, { Fragment } from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom'

function Index(props) {
  let { history } = props
  console.log('index',props);
  return <div>
    <p>首页</p>
    <button onClick={()=>{
      // console.log(history);
      history.push("./about",'asd')
    }}>跳转关于视图</button>
  </div>
}
function About(props) {
  console.log('about',props);
  return <div>关于视图</div>
}
function renderFn() {
  return <div>这是render出来的home</div>
}
function App() {
  // Route渲染的优先级：children > component > render
  return (
    <Fragment>
      <div>RouterPage</div>
      <nav>
        <Link to="/">首页</Link>
        <Link to="/index">相关首页</Link>
      </nav>
      <Switch>
        <Route path="/" exact component={Index}></Route>
        <Route path={["/about","/index"]} exact component={About}></Route>
        <Route render={()=><h1>404</h1>}></Route>
      </Switch>
    </Fragment>
  );
}

export default App;
