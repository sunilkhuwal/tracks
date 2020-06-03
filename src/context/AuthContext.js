import { AsyncStorage } from "react-native";
import createDataContext from "./createDataContext";
import trackerApi from "../api/tracker";
import { navigate } from "../navigationRef";

const authReducer = (state, action) => {
  switch (action.type) {
    case "add_error": {
      return { ...state, errorMessage: action.payload };
    }
    case "signup": {
      return { errorMessage: "", token: action.payload };
    }
    default:
      return state;
  }
};

const signup = (dispatch) => async ({ email, password }) => {
  try {
    const response = await trackerApi.post("/signup", { email, password });
    await AsyncStorage.setItem("token", response.data.token);
    dispatch({ type: "signup", payload: response.data.token });

    navigate("trackList");
  } catch (err) {
    dispatch({
      type: "add_error",
      payload: "Something went wrong with signup",
    });
  }
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
  { token: null, errorMessage: "" }
);
