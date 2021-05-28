import { createStore } from 'redux';

function counterReducer(
  state = {
    count: 1,
    num: 1,
  },
  action
) {
  switch (action.type) {
    case 'ADD':
      return { count: state.count + 1, num: state.num + 1 };
    case 'MINUS':
      return { count: state.count - 1, num: state.num - 1 };
    default:
      return state;
  }
}
let store = createStore(counterReducer);
// console.log('store',store);
export default store;
