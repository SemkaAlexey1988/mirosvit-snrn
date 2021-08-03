import {combineReducers} from 'redux';
import {postsReducer} from './postsReducer';
import {menusReducer} from './menus/menusReducer';
export default combineReducers ({
posts: postsReducer,
menus: menusReducer
});