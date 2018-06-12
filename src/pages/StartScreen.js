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

    componentWillMount() {
        // to do: check token expired

        AsyncStorage.getItem('VMD', (err, result) => {
            console.log(result, 'Get Storage');
            if (result) {
                setTimeout(() => {
                    this.redirect();
                }, 1000)
            }
            else {
                setTimeout(() => {
                    const resetAction = StackActions.reset({
                        index: 0,
                        actions: [NavigationActions.navigate({ routeName: 'Login' })],
                    });
                    this.props.navigation.dispatch(resetAction);
                }, 3000)
            }
        })
    }

    redirect = () => {
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Dashboard' })],
        });
        this.props.navigation.dispatch(resetAction);
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
