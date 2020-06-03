import React, { useContext } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SigninScreen = ({ navigation }) => {
  const { state, sigin } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign In for Tracker"
        errorMessage={state.errorMessage}
        submitFormText="Sign In"
        onSubmit={sigin}
      />

      <NavLink
        text="Don't have an Account? Go back to sign up!"
        routeName="SignUp"
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

//to remove the header of going back
SigninScreen.navigationOptions = () => {
  return { header: null };
};

export default SigninScreen;
