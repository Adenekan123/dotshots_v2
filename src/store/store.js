import { compose, createStore, applyMiddleware } from "redux";
import logger from "redux-logger";

//root-reducer
import { rootReducer } from "./root-reducer";

const middleWares = [logger];

const composedEhancers = compose(applyMiddleware(...middleWares));

export const store = createStore(rootReducer, undefined, composedEhancers);