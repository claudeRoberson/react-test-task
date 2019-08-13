import { applyMiddleware, combineReducers, createStore } from "redux";
import appReducer, { appInitialState } from "./app/app.reducer";
import logger from "redux-logger";

export const rootReducer = combineReducers({
  app: appReducer
});

export const rootInitialState = {
  app: appInitialState
};

const store = createStore(
  rootReducer,
  rootInitialState,
  applyMiddleware(logger)
);

export default store;
