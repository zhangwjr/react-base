// import logo from './logo.svg';
import  React, { Fragment } from 'react';
import './App.css';
import Parent from './components/Parent2';
import RouteChildren from './components/RouteChildren'

function App2() {
  // Route渲染的优先级：children > component > render
  return (
    <Fragment>
      <RouteChildren />
    </Fragment>
  );
}

export default App2;
