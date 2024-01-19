import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import userReducer from "../global/userSlice";
import functionalReducer from "../global/FunctionalSlice";
import recipientsReducer from "../global/recipientsSlice";
import mailReducer from "../global/mailSlice";
import templateReducer from "../global/templateSlice"
const userPersistConfig = {
  key: "user",
  version: 1,
  storage,
  whitelist: ["currentUser"],
};

const persistedUserReducer = persistReducer(userPersistConfig, userReducer);

const rootReducer = combineReducers({
  user: persistedUserReducer,
  functionality: functionalReducer,
  recipients: recipientsReducer,
  mail: mailReducer,
  templates:templateReducer
});

export default rootReducer;
