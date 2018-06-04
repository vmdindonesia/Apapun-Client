import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';



export class LoginPage extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <Text>HALLO MOTHERFUCKER ! </Text>
            </View>
        )
    }

};

const styles = StyleSheet.create({
    container: {
      flex: 1
    }
  });

export default LoginPage;