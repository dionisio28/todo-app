import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import taskListSlice from './task-slice';

const rootReducer = combineReducers({
    taskList: taskListSlice
})

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
        immutableCheck: false,
    }),
});

export default store;
