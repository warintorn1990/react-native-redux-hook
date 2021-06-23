import { combineReducers } from "redux";
import calReducer from "./cal.reducer";
import loginReducer from "./login.reducer";

export default combineReducers({calReducer, loginReducer})