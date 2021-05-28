import React from 'react';
import { connect } from 'react-redux';
// import { connect } from './kReactRedux';
function App5(props) {
  let { count, dispatch } = props;
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch({ type: 'MINUS' })}>减少</button>
      <button onClick={() => dispatch({ type: 'ADD' })}>增加</button>
    </div>
  );
}
const mapStateToProps = (state, zwj = '123') => {
  return {
    count: state.count,
    zwj,
  };
};
const foo = () => {
  return { foo: 'foo' };
};
const mapDispatchToProps = (dispatch, foo) => ({ dispatch, foo });
export default connect(mapStateToProps, mapDispatchToProps)(App5);
