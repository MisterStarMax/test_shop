import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form'
import Product from './product';
import Cart from './cart'

export default combineReducers({
    product: Product,
    cart: Cart,
    form: formReducer
});