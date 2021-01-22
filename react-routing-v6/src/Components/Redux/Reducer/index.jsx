import { combineReducers } from "redux";
import LoginReducer from "../Reducer/LoginReducer";

const allReducers = combineReducers({
  loginReducer: LoginReducer,
});

export default allReducers;
