import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, AsyncStorage, TouchableOpacity, ScrollView, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, StatusBar, Modal } from 'react-native'
import { Container, ContainerSection, Button, Input, InputSearch, InputDate } from '../components/common';
import { Card, CheckBox } from 'react-native-elements'
// import axios from 'axios';
import { COLOR } from '../shared/config';
import Icon from 'react-native-vector-icons/Ionicons';



export class IdeaFurniturePage extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        headerLeft:
            <TouchableOpacity
                onPress={() => { navigation.goBack(); console.log(navigation.goBack(), 'Props Order') }}
            >
                <Icon size={30} style={{ marginLeft: 25, color: '#EF1C25' }} name='ios-arrow-back' />
            </TouchableOpacity>,
        headerTitle: 'Furniture & Appliance'
    });

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {

        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}>This Is Furniture & Appliance Page</Text>

            </View>
        )
    }

}

const styles = StyleSheet.create({


});

export default IdeaFurniturePage

