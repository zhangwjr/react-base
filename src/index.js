import React from 'react';
import ReactDOM from 'react-dom';
// import "./index.css";
import App from './App2';
// import './fiber/index'

// import store from './store/todoStore'
import store from './store/index';
import { Provider } from 'react-redux';
// import { Provider } from './kReactRedux'
// import { BrowserRouter } from 'react-router-dom'

// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById('root')
// );
// console.log('React',React); //zwj-log
// console.log('ReactDOM',ReactDOM); //zwj-log
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// ReactDOM.render(<App />, document.getElementById("root"));
