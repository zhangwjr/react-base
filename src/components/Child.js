import React, { Component } from 'react'
// import context, { Consumer } from '../context'

// class Child extends Component {
//   render() {
//     return (
//       <Consumer>
//         {(val) => {
//           // 这里的val就是Provider传递下来的数据
//           console.log('val',val);
//           return <p>{val.info}</p>
//         }}
//       </Consumer>
//     )
//   }
// }

// class Child extends Component {
//   static contextType = context;
//   render(){
//     return <div>{this.context.info}</div>
//   }
// }

class Child extends Component {
  state = {name: 'child'}
  // UNSAFE_componentWillReceiveProps(nextProps) {
  //   console.log('1-接受父组件传递进来的更新后的props',nextProps);
  // }
  static getDerivedStateFromProps(props, state) {
    console.log('1-获取新的props和新的state',props,state)
    return null
  }
  shouldComponentUpdate(nextProps) {
    console.log('2-判断组件是否需要更新',nextProps);
    return true
  }
  getSnapshotBeforeUpdate = (prevProps, prevState) => {
    console.log('4-用于获取更新的DOM',prevProps,prevState);
    return {
      info:'要传递给componentDidUpdate的数据'
    }
  }
  
  // UNSAFE_componentWillUpdate(nextProps, nextState) {
  //   console.log('3-组件即将更新');
  // }
  componentDidUpdate(prevProps,prevState,snapShot) {
    console.log('5-组件更新完成',snapShot);
  }
  
  
  render(){
    let { name } = this.state;
    console.log('child父组件传进来的props',this.props);
    let { parentName, changeParentName } = this.props
    return <div>
      <p>父级名称:{parentName}</p>
      {/* 父组件更新 */}
      <button onClick={()=>changeParentName('父级组件')}>修改父级的名称</button>
      <p>{name}</p>
      <button onClick={()=>this.setState({
        name: '子组件'
      })}>修改自己的名称</button>
    </div>
  }
}

export default Child;