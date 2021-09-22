import {combineReducers} from 'redux';
import {postsReducer} from './postsReducer';
import {menusReducer} from './menus/menusReducer';
import {specialsReducer} from './main/specialsReducer';
import {contactsReducer} from './contacts/contactsReducer';
import {categoryReducer} from './category/categoryReducer';
import {filterReducer} from './common/filterReducer';
import {productsListReducer} from './category/productsListReducer';
import {productReducer} from './product/productReducer';
import {optionsReducer} from './product/optionsReducer';
import {attributesReducer} from './product/attributesReducer';
import {ratingReducer} from './product/ratingReducer';
import {commentsReducer} from './product/commentsReducer';
import {orderReducer} from './order/orderReducer';
import {wordsReducer} from './common/wordsReducer';
export default combineReducers ({
posts: postsReducer,
menus: menusReducer,
specials: specialsReducer,
contacts: contactsReducer,
category: categoryReducer,
filter: filterReducer,
productsList: productsListReducer,
product: productReducer,
options: optionsReducer, 
attributes: attributesReducer, 
rating: ratingReducer, 
comments: commentsReducer,
words: wordsReducer,
order: orderReducer
});