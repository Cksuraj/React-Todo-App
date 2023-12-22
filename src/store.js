import { combineReducers, createStore, legacy_createStore } from 'redux';

//Importing the Reducers inside the store which contains multipale state inside
import TodoReducer from './reducers/todoReducer.js'

// Combineing into one variable
const reducers = combineReducers({todo:TodoReducer})

// storeing the all the reducers insde the store
const store=createStore(reducers);

export default store;



