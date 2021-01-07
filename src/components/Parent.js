import React, { Component } from "react";
import Child from "./Child";
import { Provider } from "../context";

export default class Parent extends Component {
  constructor(props) {
    super(props);
    console.log("1-组件初始化");
    this.state = {};
  }
  static getDerivedStateFromProps(props, state) {
    console.log("2-将props映射到state中");
    return { state: 1 };
  }
  UNSAFE_componentWillMount() {
    console.log('3-组件即将进行挂载');
  }

  render() {
    console.log('4-根据render生成虚拟DOM');
    return (
      <Provider
        value={{
          info: "要传给子组件的数据",
          name: "张三",
        }}
      >
        <Child></Child>
      </Provider>
    );
  }
  componentDidMount() {
    console.log('5-组件已经挂载完毕,虚拟DOM已经添加到真实的DOM中');
  }
  
}
