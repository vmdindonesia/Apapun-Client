import React, { Component } from 'react'
import { View, Text, AsyncStorage, ImageBackground, TouchableWithoutFeedback } from 'react-native';
import { NavigationActions, StackActions } from 'react-navigation';
import { Spinner } from '../components/common';

export class StartScreen extends React.Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props)

        this.state = {
            image: require('./../assets/images/bg.jpg'),
            hasLoggedIn: true
        }
    }

    componentDidMount() {
        console.log('Start Screen On Fire!');
        AsyncStorage.getItem("VMDDEVELOPER").then((value) => {
            console.log(JSON.parse(value), 'Json Parse');
            if (value) {
                const resetAction = StackActions.reset({
                    index: 0,
                    actions: [NavigationActions.navigate({ routeName: 'Dashboard' })],
                });
                this.props.navigation.dispatch(resetAction);
            }
            else {
                console.log('Kosong Storage');
                const resetAction = StackActions.reset({
                    index: 0,
                    actions: [NavigationActions.navigate({ routeName: 'Login' })],
                });
                this.props.navigation.dispatch(resetAction);
            }
        }).done();
    }

    render() {
        return (
            <ImageBackground
                source={this.state.image}
                style={{ width: '100%', height: '100%' }}
            >
                <Spinner size="large" />
            </ImageBackground>
        )
    }
}

export default StartScreen;
