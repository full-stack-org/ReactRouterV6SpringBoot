import {
    fetchLoginRequest,
    fecthLoggedInUserData,
    fetchUserError,
  } from "../Action/LoginAction";
  
  import axios from "axios";
  
  const headers = {
    "Content-Type": "application/json",
  };
  
  const authenticateUser = (input) => {
    return function (dispatch) {
      dispatch(fetchLoginRequest());
      axios
        .post(input.url, JSON.stringify(input.data), { headers: headers })
        .then((response) => {
          console.log("Final Response is : ", response);
          dispatch(fecthLoggedInUserData(response));
          input.callbackSuccess(response.data);
        })
        .catch((error) => {
          dispatch(fetchUserError(error.message));
          input.callbackFailure(error)
        });
    };
  };
  
  export default authenticateUser;
  