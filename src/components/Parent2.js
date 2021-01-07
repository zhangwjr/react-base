import React, { Component } from "react";
import Child from "./Child";

export default class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "parent",
    };
  }
  changeName = (newName) => {
    this.setState({
      name: newName,
    });
  }
  render() {
    let { name } = this.state;
    console.log('parent_state',this.state);
    return (
      <div>
        <Child parentName={name} changeParentName={this.changeName}></Child>
      </div>
    );
  }
}
