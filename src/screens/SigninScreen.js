import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

const SigninScreen = ({navigation}) => {

    return (<View>
        <Text style={{fontSize: 30}}>SigninScreen</Text>
        <Button title='Go to Sign up' onPress={() => navigation.navigate('SignUp')}/>
        <Button title='Go to Main Flow' onPress={() => navigation.navigate('mainFlow')}/>
    </View>)
}

const styles = StyleSheet.create({});

export default SigninScreen;