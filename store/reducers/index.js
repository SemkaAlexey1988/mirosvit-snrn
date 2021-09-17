import {combineReducers} from 'redux';
import {postsReducer} from './postsReducer';
import {menusReducer} from './menus/menusReducer';
import {specialsReducer} from './main/specialsReducer';
import {contactsReducer} from './contacts/contactsReducer';
import {categoryReducer} from './category/categoryReducer';
import {productsListReducer} from './category/productsListReducer';
import {productReducer} from './product/productReducer';
import {optionsReducer} from './product/optionsReducer';
import {attributesReducer} from './product/attributesReducer';
import {ratingReducer} from './product/ratingReducer';
import {commentsReducer} from './product/commentsReducer';
export default combineReducers ({
posts: postsReducer,
menus: menusReducer,
specials: specialsReducer,
contacts: contactsReducer,
category: categoryReducer,
productsList: productsListReducer,
product: productReducer,
options: optionsReducer, 
attributes: attributesReducer, 
rating: ratingReducer, 
comments: commentsReducer
});