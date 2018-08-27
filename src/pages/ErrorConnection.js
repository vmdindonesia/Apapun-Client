import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, Picker, AsyncStorage, TouchableOpacity, ScrollView, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, StatusBar, Modal } from 'react-native'
import { Container, ContainerSection, Button, Input, InputSearch, InputDate } from '../components/common';
// import axios from 'axios';
import { COLOR } from '../shared/config';



export class ErrorConnectionPage extends React.Component {

    static navigationOptions = ({ navigation }) => ({
       header : null
    });

    constructor(props) {
        super(props)
        this.state = {
          
        }
    }

    render() {

     
        return (
          
                <ScrollView style={{
                    backgroundColor: '#eaeaea',
                    flex: 1,
                }}>


                    <View style={{ flex: 1, height: 250, justifyContent: 'flex-end', marginTop: 90 }}>
                        <Image
                            style={{
                                width: '95%',
                                height: '95%',
                                borderRadius: 0,
                                alignSelf: 'center'
                            }}
                            source={require('./../assets/images/no_connection.png')}
                            resizeMode='contain'
                        />
                    </View>

                    <View style={{ flex: 1, height: 60, justifyContent: 'center' }}>
                        <Text style={{ fontSize: 15, color: 'black', fontFamily: 'Quicksand-Bold', textAlign: 'center' }}>ERRR...</Text>
                        <Text style={{ fontSize: 13, color: 'black', fontFamily: 'Quicksand-Regular', textAlign: 'center', paddingTop: 5 }}>koneksi internet lambat atau tidak ada.</Text>
                        <Text style={{ fontSize: 13, color: 'black', fontFamily: 'Quicksand-Regular', textAlign: 'center', paddingTop: 5 }}>Silakan periksa koneksi Anda dan coba lagi.</Text>

                    </View>

                </ScrollView>

        )
    }

}

const styles = StyleSheet.create({


});

export default ErrorConnectionPage

