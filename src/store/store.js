import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';
import {routerMiddleware, push } from "react-router-redux";

import rootReducer from "../Reducer";

const initialState={};
const middleWare = [thunk];

const store = createStore( rootReducer , initialState, composeWithDevTools(applyMiddleware(...middleWare)));

export default store;