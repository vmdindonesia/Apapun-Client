import React, { Component } from 'react'
import { View, Text, ImageBackground, Image, AsyncStorage, TouchableOpacity, ScrollView, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, StatusBar, Modal } from 'react-native'
import { Container, ContainerSection, Button, Input, InputSearch, InputDate } from '../components/common';
// import axios from 'axios';
import { COLOR } from './../shared/config';
import Icon from 'react-native-vector-icons/Ionicons';

export class DesignSayaPage extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        headerLeft:
            <TouchableOpacity
                onPress={() => { navigation.goBack(); console.log(navigation.goBack(), 'Props Order') }}
            >
                <Icon size={30} style={{ marginLeft: 25, color: '#EF1C25' }} name='ios-arrow-back' />
            </TouchableOpacity>,
        headerTitle: 'Design Saya'
    });

    render() {
        return (
            <View style={{
                flex: 1
            }}>

                <View style={{
                    width: '100%',
                    height: '12.5%',
                    flexDirection: 'row'
                }}>

                    <View style={{
                        width: '50%',
                        height: '100%',
                        justifyContent: 'center',
                        alignContent: 'center',
                        flexDirection: 'column'
                    }}>

                        <TouchableOpacity style={{ alignSelf: 'center' }}>
                            <Image
                                style={{
                                    width: 18,
                                    height: 18,
                                    borderRadius: 0,
                                    alignSelf: 'center'
                                }}
                                source={require('./../assets/images/ic_sort.png')}
                            />
                            <Text style={{ paddingTop: 5 }}>Urutkan</Text>
                        </TouchableOpacity>
                    </View>

                    <Image
                        style={{
                            width: 18,
                            height: 35,
                            borderRadius: 0,
                            alignSelf: 'center'
                        }}
                        source={require('./../assets/images/line_vertical.png')}
                    />

                    <View style={{
                        width: '50%',
                        height: '100%',
                        // backgroundColor: 'blue',
                        justifyContent: 'center',
                        alignContent: 'center',
                        flexDirection: 'column'
                    }}>
                        <TouchableOpacity style={{ alignSelf: 'center' }}>
                            <Image
                                style={{
                                    width: 18,
                                    height: 18,
                                    borderRadius: 0,
                                    alignSelf: 'center'
                                }}
                                source={require('./../assets/images/ic_filter.png')}
                            />
                            <Text style={{ paddingTop: 5 }}>Filter</Text>
                        </TouchableOpacity>

                    </View>

                </View>

                <ScrollView>
                    <View style={{
                        width: '100%',
                        height: '25%',
                        flexDirection: 'row'
                    }}>

                        <View style={{
                            width: '50%',
                            height: '120%',
                            paddingTop: 60,
                            justifyContent: 'center',
                            alignContent: 'center',
                            flexDirection: 'column'
                        }}>

                            <TouchableOpacity style={{ alignSelf: 'center' }}
                                onPress={() => this.props.navigation.navigate('PageDesign')}>
                                <Image
                                    style={{
                                        width: 150,
                                        height: 250,
                                        borderRadius: 0,
                                        alignSelf: 'center'
                                    }}
                                    source={require('./../assets/images/kaos.jpg')}
                                />
                            </TouchableOpacity>
                            <View style={styles.containerSecondForm}>
                                <Text style={{ fontWeight: 'bold', marginRight: 30 }}>My Own Table</Text>
                            </View>
                        </View>


                        <View style={{
                            width: '50%',
                            height: '120%',
                            paddingTop: 60,
                            justifyContent: 'center',
                            paddingLeft: 15,
                            alignContent: 'center',
                            flexDirection: 'column'
                        }}>
                            <TouchableOpacity style={{ alignSelf: 'center' }}
                                onPress={() => this.props.navigation.navigate('PageDesign')}>
                                <Image
                                    style={{
                                        width: 150,
                                        height: 250,
                                        borderRadius: 0,
                                        alignSelf: 'center'
                                    }}
                                    source={require('./../assets/images/table1_example.jpg')}
                                />
                            </TouchableOpacity>
                            <View style={styles.containerSecondForm}>
                                <Text style={{ fontWeight: 'bold', marginRight: 25 }}>legant Plain T-shirt</Text>
                            </View>


                        </View>



                    </View>


                </ScrollView>

            </View>
        )
    }

}

const styles = StyleSheet.create({
    containerSecondForm: {
        // flex: 1,
        backgroundColor: '#ffffff',
        shadowColor: 'black',
        shadowOffset: { width: 10, heigth: 10 },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 3,
        flexDirection: 'row',
        height: 70,
        width: '110%',
        // alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        // zIndex: 1,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
    },



})

export default DesignSayaPage