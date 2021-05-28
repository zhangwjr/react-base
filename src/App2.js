// import logo from './logo.svg';
import React, { Fragment } from 'react';
import './App.css';
import Parent from './components/Parent2';
import RouteChildren from './components/RouteChildren';
import UseMemoPage from './components/UseMemoPage';
import UseCallbackPage from './components/UseCallbackPage';
import HookCountPage from './components/HookCountPage';

function App2() {
  // Route渲染的优先级：children > component > render
  return (
    <Fragment>
      {/* <RouteChildren /> */}
      {/* <UseMemoPage /> */}
      {/* <UseCallbackPage /> */}
      <HookCountPage />
    </Fragment>
  );
}

export default App2;
