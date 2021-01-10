import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App6";
import store from './store/todoStore'
import { Provider } from 'react-redux'
// import reportWebVitals from './reportWebVitals';
// import { BrowserRouter } from 'react-router-dom'

// ReactDOM.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// ReactDOM.render(<App />, document.getElementById("root"));
