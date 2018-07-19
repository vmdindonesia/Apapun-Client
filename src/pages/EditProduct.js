import React, { Component } from 'react'
import { View, Text, ImageBackground, Image, AsyncStorage, TouchableOpacity, ScrollView, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, StatusBar, Modal } from 'react-native'
import { Container, ContainerSection, Button, Input, InputSearch, InputDate } from '../components/common';
// import axios from 'axios';
import { COLOR } from './../shared/config';
import Icon from 'react-native-vector-icons/Ionicons';

export class EditProductPage extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        headerLeft:
            <TouchableOpacity
                onPress={() => { navigation.goBack(); console.log(navigation.goBack(), 'Props Order') }}
            >
                <Icon size={30} style={{ marginLeft: 25, color: '#EF1C25' }} name='ios-arrow-back' />
            </TouchableOpacity>,
        headerTitle: 'Pengaturan Produk'
    });

    render() {
        return (
            <ScrollView
            >

            <View  style={{ fontSize: 15, fontFamaly: 'Quicksand-Bold', paddingTop: 10 }}>
                <Text> Upload Gambar </Text>
            </View>


            </ScrollView>

        )
    }
}


export default EditProductPage;