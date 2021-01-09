import React from 'react'
import { connect } from 'react-redux'
// import { connect } from './kReactRedux'


function App5(props) {
  console.log('props',props);
  let { count, dispatch } = props
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch({type:"MINUS"})}>减少</button>
      <button onClick={() => dispatch({type:"ADD"})}>增加</button>
    </div>
  )
}
App5 = connect(function(state){
  console.log('state',state);
  return state
})(App5)
export default App5