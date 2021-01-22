import {
    GET_LOGIN_REQUEST,
    GET_LOGIN_SUCCESS,
    GET_LOGIN_FAILURE,
  } from "../Constants/LoginConstants";
  
  export function fetchLoginRequest() {
    return {
      type: GET_LOGIN_REQUEST,
    };
  }
  
  export function fecthLoggedInUserData(userData) {
    return {
      type: GET_LOGIN_SUCCESS,
      payload: userData,
    };
  }
  
  export function fetchUserError(error) {
    return {
      type: GET_LOGIN_FAILURE,
      payload: error,
    };
  }
  