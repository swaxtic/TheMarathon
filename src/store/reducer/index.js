import {combineReducers} from 'redux';
import cartReducer from './cartReducer';
import favReducer from './favReducer';

export default combineReducers({
  cartReducer,
  favReducer
});
