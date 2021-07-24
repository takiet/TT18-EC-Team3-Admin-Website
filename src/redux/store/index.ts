import { userLoginReducer } from "./../reducers/userReducers";
import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  userSignin: {
    userInfo: localStorage.getItem("access"),
  },
};
const reducer = combineReducers({
  userSignin: userLoginReducer,
});
const store = createStore(
  reducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
