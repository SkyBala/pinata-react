import { combineReducers } from "redux";
import { regisReduserAction } from "./regisReducer";
import { bestSelReducer } from "./bestSelReducer";
import { rewiewsReducer } from "./reviewsReducer";
import { buskedReducer } from "./buskedReducer";
import { catalogReducer } from "./catalogReducer";
export const rootReducers =combineReducers({
    regisReduserAction,
    bestSelReducer,
    rewiewsReducer,
    buskedReducer,
    catalogReducer,
})