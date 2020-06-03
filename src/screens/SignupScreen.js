import React, { useState, useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Input, Button } from "react-native-elements";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3>Sign Up for Tracker</Text>
      </Spacer>
      <Spacer />
      <Input
        label="Username"
        autoCapitalize="none"
        autoCorrect={false}
        value={email}
        onChangeText={setEmail} //Another way -> onChangeText={(username) => setUserName(username)}
      />

      <Input
        label="Password"
        autoCapitalize="none"
        autoCorrect={false}
        secureTextEntry={true}
        value={password}
        onChangeText={(password) => setPassword(password)}
      />
      <Spacer>
        <Button title="Sign Up" onPress={() => signup({email, password})} />
      </Spacer>
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
