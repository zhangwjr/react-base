import { createStore } from "redux";

function counterReducer(
  state = {
    count: 0,
  },
  action
) {
  switch (action.type) {
    case "ADD":
      return { count: state.count + 1 };
    case "MINUS":
      return { count: state.count - 1 };
    default:
      return state;
  }
}
let store = createStore(counterReducer)
// console.log('store',store);
export default store;
