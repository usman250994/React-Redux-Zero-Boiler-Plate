import createStore from "redux-zero";
import AdminHomeInitState from '../screens/AdminHome/state';
import CsrHomeInitState from '../screens/CsrHome/state';
// note: we can import initial states of different screens over here
// we can then add them to the below initial state of the application
// by doing so we can make sure that evry screens private states are independantl managed
// probably separation of concerns are followed to some extent
const initialState = { ...AdminHomeInitState, ...CsrHomeInitState };
const store = createStore(initialState);

export default store;