import {combineReducers} from 'redux';
import {postsReducer} from './postsReducer';
import {menusReducer} from './menus/menusReducer';
import {specialsReducer} from './main/specialsReducer';
export default combineReducers ({
posts: postsReducer,
menus: menusReducer,
specials: specialsReducer
});