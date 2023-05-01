import {createStore} from 'redux';
import { actionReducer } from '../reducers/getActions';



 const store = createStore(actionReducer);

 export default store;