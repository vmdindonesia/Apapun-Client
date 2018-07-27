import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, AsyncStorage, TouchableOpacity, ScrollView, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, StatusBar, Modal } from 'react-native'
import { Container, ContainerSection, Button, Input, InputSearch, InputDate } from '../components/common';
// import axios from 'axios';
import { COLOR } from '../shared/config';
import SwitchToggle from 'react-native-switch-toggle';
import Icon from 'react-native-vector-icons/Ionicons';


export class ThanksToPage extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        headerLeft:
            <TouchableOpacity
                onPress={() => { navigation.goBack(); console.log(navigation.goBack(), 'Props Order') }}
            >
                <Icon size={30} style={{ marginLeft: 25, color: '#EF1C25' }} name='ios-arrow-back' />
            </TouchableOpacity>,
        headerTitle: 'Thanks To'
    });

    render() {

        return (
            <View style={{ flex: 1, backgroundColor: '#e5e5e5' }}>

                <ScrollView>

                    <View style={{
                        flex: 1,
                        height: 110,
                        // backgroundColor: 'skyblue',
                        marginTop: 15,
                        alignContent: 'center'
                    }}>
                        <View>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, paddingLeft: 10, color: 'black' }}>Terima Kasih Kepada</Text>
                        </View>

                        <View style={{
                            flex: 1,
                            flexDirection: 'column',
                            backgroundColor: 'white',
                            marginTop: 10,
                            marginLeft: 10,
                            marginRight: 10,
                        }}>
                            <Text style={{ fontSize: 11.4, textAlign: 'left', padding: 5 }}>
                                Kami sangat menghargai creator dengan kreasi - kreasi mereka yang
                                sangat luar biasa. Maka kami ingin mengucapkan terima kasih kepada
                                pada creator mengizinkan menggunakan konten yang berupa foto - foto
                                dalam merperindah aplikasi kami.
                            </Text>
                        </View>


                    </View>



                    <View style={{
                        flex: 1,
                        height: 225,
                        // backgroundColor: 'skyblue',
                        marginTop: 15,
                        marginRight: 10,
                        marginLeft: 10
                    }}>
                        <Image
                            style={{ flex: 1, width: '100%' }}
                            source={require('./../assets/images/thx_one.jpg')}
                            resizeMode='cover'
                        />
                        <View style={{ height: 20, marginTop: 5, justifyContent: 'center' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 11.4, color: 'black' }}>Devianart / Bookgeeky</Text>
                        </View>

                    </View>

                    <View style={{
                        flex: 1,
                        height: 225,
                        // backgroundColor: 'skyblue',
                        marginTop: 15,
                        marginRight: 10,
                        marginLeft: 10
                    }}>
                        <Image
                            style={{ flex: 1, width: '100%' }}
                            source={require('./../assets/images/thx_two.jpg')}
                            resizeMode='cover'
                        />
                        <View style={{ height: 20, marginTop: 5, justifyContent: 'center' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 11.4, color: 'black' }}>Pixabay / Republika</Text>
                        </View>

                    </View>

                    <View style={{ flex: 1, height: 50 }} />

                </ScrollView>

            </View >
        )
    }

}




const styles = StyleSheet.create({


});

export default ThanksToPage;

