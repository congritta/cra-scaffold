import {applyMiddleware, configureStore} from "@reduxjs/toolkit";
import {combineReducers} from "redux";
import {load, save} from "redux-localstorage-simple";

import commonReducer from "./reducers/common";
import notificationsReducer from "./reducers/notifications";

export const store = configureStore({
  devTools: process.env.NODE_ENV === "development",

  reducer: combineReducers({

    common: commonReducer,
    notifications: notificationsReducer
  }),

  preloadedState: load(),
  enhancers: [applyMiddleware(save())]
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
