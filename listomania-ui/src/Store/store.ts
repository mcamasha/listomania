import {createStore, applyMiddleware} from "redux";
import reducer from "./reducer";
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';

export const store = createStore(reducer, /* preloadedState, */ composeWithDevTools(
   applyMiddleware(thunk)
));
