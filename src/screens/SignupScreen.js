import React, { useContext, useEffect } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { NavigationEvents } from "react-navigation";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage, tryLocalSignin } = useContext(
    AuthContext
  );

  useEffect(() => {
    tryLocalSignin();
  }, []);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillBlur={clearErrorMessage} />
      <AuthForm
        headerText="SignUp for Tracker"
        errorMessage={state.errorMessage}
        submitFormText="Sign Up"
        onSubmit={signup}
      />

      <NavLink
        text="Already have an Account? Sign In Instead!"
        routeName="SignIn"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 150,
  },
});

SignupScreen.navigationOptions = () => {
  return { header: null };
};

export default SignupScreen;

//<NavigationEvents onWillFocus={clearErrorMessage}
