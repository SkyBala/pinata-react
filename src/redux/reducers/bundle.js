import { combineReducers } from "redux";
import { regisReduserAction } from "./regisReducer";
import { bestSelReducer } from "./bestSelReducer";
import { rewiewsReducer } from "./reviewsReducer";
export const rootReducers =combineReducers({
    regisReduserAction,
    bestSelReducer,
    rewiewsReducer
})