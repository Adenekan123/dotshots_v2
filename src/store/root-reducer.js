import { combineReducers } from "redux";

import { picturesReducer } from "./pictures/pictures.reducer";

export const rootReducer = combineReducers({ pictures: picturesReducer });
