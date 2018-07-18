import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import {  InputSearch} from '../components/common';
// import axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons';


export class FurnitureCrafterPage extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        headerLeft:
            <TouchableOpacity
                onPress={() => { navigation.goBack(); console.log(navigation.goBack(), 'Props Order') }}
            >
                <Icon size={30} style={{ marginLeft: 25, color: '#EF1C25' }} name='ios-arrow-back' />
            </TouchableOpacity>,
        headerTitle: 'Crafter List'
    });

    render() {
        return (
            <View style={{
                flex: 1,
            }}>
                <View style={{
                    backgroundColor: '#e5e5e5',
                    width: '100%',
                    height: 70,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <View style={{
                        width: '90%',
                        height: 50,
                        justifyContent: 'center'
                    }}>
                        <InputSearch
                            placeholder="Cari Crafter..."
                            icon="ic_search"
                        />
                    </View>
                </View>
                <View style={{
                    backgroundColor: '#e5e5e5',
                    width: '100%',
                    height: '100%',
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}>
                    <View style={{
                        height: '35%',
                        width: '100%',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                    }}>
                        <View style={{
                            width: '33%',
                            height: '100%',

                        }}>
                            <View style={{
                                width: '100%',
                                height: '70%',
                                justifyContent: 'center',
                                alignSelf: 'center'

                            }}>
                                <Image
                                    style={{
                                        height: 100,
                                        width: 100,
                                        borderRadius: 100,
                                        alignSelf: 'center'
                                    }}
                                    source={require('./../assets/images/icon_profile.png')}
                                />
                            </View>
                            <View>
                                <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>Raisa</Text>
                            </View>
                            <View style={{ paddingTop: 5 }}>
                                <Image
                                    style={{
                                        height: 20,
                                        width: 20,
                                        borderRadius: 0,
                                        alignSelf: 'center'
                                    }}
                                    source={require('./../assets/images/kiss_icon.jpg')}
                                />
                            </View>
                        </View>
                        <View style={{
                            width: '33%',
                            height: '100%',
                        }}>
                            <View style={{
                                width: '100%',
                                height: '70%',
                                justifyContent: 'center',
                                alignSelf: 'center'

                            }}>
                                <Image
                                    style={{
                                        height: 100,
                                        width: 100,
                                        borderRadius: 100,
                                        alignSelf: 'center'
                                    }}
                                    source={require('./../assets/images/icon_profile.png')}
                                />
                            </View>

                            <View>
                                <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>Chelsea Islan</Text>
                            </View>

                            <View style={{ paddingTop: 5 }}>
                                <Image
                                    style={{
                                        height: 20,
                                        width: 20,
                                        borderRadius: 0,
                                        alignSelf: 'center'
                                    }}
                                    source={require('./../assets/images/loveeye_icon.png')}
                                />

                            </View>

                        </View>
                        <View style={{
                            width: '33%',
                            height: '100%',
                        }}>
                            <View style={{
                                width: '100%',
                                height: '70%',
                                justifyContent: 'center',
                                alignSelf: 'center'

                            }}>
                                <Image
                                    style={{
                                        height: 100,
                                        width: 100,
                                        borderRadius: 100,
                                        alignSelf: 'center'
                                    }}
                                    source={require('./../assets/images/icon_profile.png')}
                                />
                            </View>

                            <View>
                                <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>Dian Sastro</Text>
                            </View>

                            <View style={{ paddingTop: 5 }}>
                                <Image
                                    style={{
                                        height: 20,
                                        width: 20,
                                        borderRadius: 0,
                                        alignSelf: 'center'
                                    }}
                                    source={require('./../assets/images/smile_icon.jpg')}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

}


export default FurnitureCrafterPage

