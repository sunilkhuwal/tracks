import React, { useState } from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Text, Button, Input } from "react-native-elements";
import Spacer from './Spacer';

const AuthForm = ({headerText, errorMessage, onSubmit, submitFormText}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <Spacer>
  <Text h3>{headerText}</Text>
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
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      <Spacer>
        <Button title={submitFormText} onPress={() => onSubmit({ email, password })} />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 20,
        color: "red",
        marginLeft: 20,
      },
});

export default AuthForm;
