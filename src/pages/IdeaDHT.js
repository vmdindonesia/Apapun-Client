import React, { Component } from 'react'
import { View, Text, ImageBackground, Image, AsyncStorage, TouchableOpacity, ScrollView, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, StatusBar, Modal } from 'react-native'
import { Container, ContainerSection, Button, Input, InputSearch, InputDate } from '../components/common';
import { Card, CheckBox } from 'react-native-elements'
// import axios from 'axios';
import { COLOR } from './../shared/config';
import Icon from 'react-native-vector-icons/Ionicons';



export class IdeadhtPage extends React.Component {

    static navigationOptions = {
        headerTitle: 'DIY, Hobbies & Toys'
    }

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {



        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}>This Is DIY, Hobbies & Toys Page</Text>

            </View>
        )
    }

}

const styles = StyleSheet.create({


});

export default IdeadhtPage;

