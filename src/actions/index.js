import AdminHomeActions from '../screens/AdminHome/action';
import CsrHomeActions from '../screens/CsrHome/action';

// note: here below you can import all your actions from your separated screens
// and can combine them and export below in a parent action object
// JS have made life sooo easy :)
// alos this is only for following separation of cenrns to some extent
//cheers

// note: also we are passing store here, but it is for now not used 
// in any scenario; maybe later on we might use it 
const actions = store => ({
    ...AdminHomeActions,
    ...CsrHomeActions
});

export default actions;