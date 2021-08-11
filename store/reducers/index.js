import {combineReducers} from 'redux';
import {postsReducer} from './postsReducer';
import {menusReducer} from './menus/menusReducer';
import {specialsReducer} from './main/specialsReducer';
import {contactsReducer} from './contacts/contactsReducer';
import {categoryReducer} from './category/categoryReducer';
export default combineReducers ({
posts: postsReducer,
menus: menusReducer,
specials: specialsReducer,
contacts: contactsReducer,
category: categoryReducer 
});