import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";

const authReducer = (state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

const signup = (dispatch) => {
  return async ({ email, password }) => {
    try {
      console.log(email + ' kyaa ha ' + password)
      const response = await trackerApi.post("/signup", { email, password });
      console.log('someyhing i got' + response.data.token);
    } catch (err) {
      console.log(err.Message);
    } 

    //call api call
    //Handle successful signup
    //Handle signup failure
  };
};

const signin = (dispatch) => {
  return ({ email, password }) => {
    //call api signin
    //Handle successful signin
    //Handle signin failure
  };
};

const signout = (dispatch) => {
  return () => {
    //Handle signout
  };
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signup, signin, signout },
  { isSignedIn: false }
);
