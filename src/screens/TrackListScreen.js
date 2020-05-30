import React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

const TrackListScreen = ({navigation}) => {

    return (<>
        <Text style={{fontSize: 30}}>TrackListScreen</Text>
        <Button title='Go to Track Detail' onPress = {() => {
            navigation.navigate('trackDetail');
        }}/>
</>)
}

const styles = StyleSheet.create({});

export default TrackListScreen;