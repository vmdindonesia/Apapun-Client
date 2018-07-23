import React, { Component } from 'react'
import { ToastAndroid, View, Text, TextInput, ImageBackground, Image, AsyncStorage, TouchableOpacity, ScrollView, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, StatusBar, Modal } from 'react-native'
// import axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons';
import { Container, ContainerSection, Button, Input, InputNumber } from '../components/common';

export class editNoteOnCrafterMenuPage extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        headerLeft:
            <TouchableOpacity
                onPress={() => { navigation.goBack(); console.log(navigation.goBack(), 'Props Order') }}
            >
                <Icon size={30} style={{ marginLeft: 25, color: '#EF1C25' }} name='ios-arrow-back' />
            </TouchableOpacity>,
        headerTitle: 'Catatan',

    });



    render() {
        return (

            <View style={{
                flex: 1, backgroundColor: 'white', marginTop: 5
            }}>

                <View style={{ flex: 1, height: 200, marginTop: 25, marginLeft: 20, marginRight: 20 }}>
                    <Text style={{ fontSize: 15, color: 'black', fontFamily: 'Quicksand-Bold', paddingLeft: 5, }}>Subject</Text>

                    <View style={{ marginTop: 5 }}>
                        <ContainerSection>
                            <Input
                                placeholder='silakan isi judul dari catatan'
                            />
                        </ContainerSection>
                    </View>

                    <View>
                        <ContainerSection style={{ height: 50 }}>
                            <Input
                                multiline={true}
                                numberOfLines={5}
                                placeholder='silakan isi deskripsi'
                            />
                        </ContainerSection>
                    </View>

                </View>

                <View style={{ height: 50, margin: 20, borderRadius: 30, backgroundColor: 'red', justifyContent: 'center' }}>
                    <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, color: 'white', textAlign: 'center' }}>Simpan</Text>
                </View>

            </View>
        )
    }

}

const styles = StyleSheet.create({


});

export default editNoteOnCrafterMenuPage

