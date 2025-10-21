import { combineReducers, configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slicer/CountSlicer";
import adminReducer from "./slicer/AdminSlicer";


const mergeReducers = combineReducers({
    counter: counterReducer,
    users: adminReducer
});

const store = configureStore({
    reducer: mergeReducers
});

export default store;