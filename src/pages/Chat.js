import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, AsyncStorage, TouchableOpacity, ScrollView, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, StatusBar, Modal } from 'react-native'
import { Container, ContainerSection, Button, Input, InputSearch, InputDate, InputChat } from '../components/common';
// import axios from 'axios';
import { COLOR } from '../shared/config';



export class ChatPage extends React.Component {

    static navigationOptions = {
        header: null
    }

    render() {

        return (
            <View style={{ flex: 1, backgroundColor: '#e5e5e5' }}>

                <ScrollView style={{ flex: 1 }}>

                    <View style={{ flex: 1, flexDirection: 'row', height: 90, }}>
                        <View style={{ height: '100%', width: '30%', justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                            <Image
                                style={{ borderRadius: 100, height: 80, width: 80 }}
                                source={require('./../assets/images/profile.png')}
                                resizeMode='cover'
                            />
                        </View>

                        <View style={{ height: '30%', width: '40%', backgroundColor: 'white', alignSelf: 'center', borderRadius: 50, justifyContent: 'center' }}>
                            <Text style={{ color: 'black', fontSize: 12, marginLeft: 5, textAlign: 'center' }}>Hai, Can i Help u?</Text>
                        </View>
                    </View>

                    <View style={{ flex: 1, flexDirection: 'row', height: 50, justifyContent: 'flex-end' }}>
                        <View style={{ height: '50%', width: '20%', backgroundColor: 'black', alignSelf: 'center', borderRadius: 50, justifyContent: 'center', marginRight: 10 }}>
                            <Text style={{ color: 'white', fontSize: 12, textAlign: 'center', }}>Hello, Yes!</Text>
                        </View>
                    </View>




                </ScrollView>

                <View style={{
                    // flex: 3,
                    height: 60,
                    backgroundColor: 'white',
                    alignContent: 'center',
                    flexDirection: 'row',
                    margin: 5,
                    borderRadius: 20,
                }}>
                    <View style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity>
                            <Image
                                style={{ width: 25, height: 25 }}
                                source={require('../assets/images/ic_attach.png')}
                                resizeMode='cover'
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={{ borderWidth: 0.5, borderColor: '#e5e5e5', backgroundColor: '#e5e5e5', height: '60%', alignSelf: 'center' }} />

                    <View style={{ flex: 1, width: '60%', height: '70%', borderWidth: 0.8, borderColor: '#e5e5e5', borderRadius: 30, alignSelf: 'center', marginRight: 0, marginLeft: 22.5 }}>
                        <InputChat
                            // multiline={true}
                            // numberOfLines={150}
                            placeholder='    Tulis Pesan...'
                        />
                    </View>

                    <View style={{ width: '20%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity>
                            <Image
                                style={{ width: 30, height: 30 }}
                                source={require('../assets/images/ic_send.png')}
                                resizeMode='cover'
                            />
                        </TouchableOpacity>
                    </View>


                </View>

            </View >
        )
    }

}




const styles = StyleSheet.create({


});

export default ChatPage;

