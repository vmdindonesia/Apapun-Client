import React, { Component } from 'react'
import { View, Text, ImageBackground, Image, AsyncStorage, TouchableOpacity, ScrollView, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, StatusBar, Modal } from 'react-native'
import { Container, ContainerSection, Button, Input, InputSearch, InputDate } from '../components/common';
// import axios from 'axios';
import { COLOR } from './../shared/config';



export class IdeaMarketPage extends React.Component {

    static navigationOptions = {
        headerTitle: 'Categories'
    }

    render() {

        return (
            <View style={{ flex: 1 }}>

                <ScrollView>
                    <View style={{ flex: 1, flexDirection: 'column', height: '100%', marginTop: 10 }}>
                        <View style={{ flex: 1, height: 100, marginLeft: 10, marginRight: 10,  width: '95%' }}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('IdeaFashion')}
                            >
                                <Image
                                    style={{
                                        // flex: 1,
                                        width: '100%',
                                        height: '100%',
                                        // backgroundColor: 'red'
                                    }}
                                    source={require('./../assets/images/idea_fashion.png')}
                                    resizeMode='contain'
                                />
                            </TouchableOpacity>
                        </View>

                        <View style={{ flex: 1, height: 100, marginLeft: 10, marginRight: 10,  width: '95%' }}>
                            <TouchableOpacity >
                                <Image
                                    style={{
                                        // flex: 1,
                                        width: '100%',
                                        height: '100%',
                                        // backgroundColor: 'red'
                                    }}
                                    source={require('./../assets/images/idea_furniture.png')}
                                    resizeMode='contain'
                                />
                            </TouchableOpacity >
                        </View>

                        <View style={{ flex: 1, height: 100, marginLeft: 10, marginRight: 10,  width: '95%' }}>
                            <TouchableOpacity >
                                <Image
                                    style={{
                                        // flex: 1,
                                        width: '100%',
                                        height: '100%',
                                        // backgroundColor: 'red'
                                    }}
                                    source={require('./../assets/images/idea_diy.png')}
                                    resizeMode='contain'
                                />
                            </TouchableOpacity >
                        </View>


                        <View style={{ flex: 1, height: 100, marginLeft: 10, marginRight: 10, width: '95%' }}>
                            <TouchableOpacity >
                                <Image
                                    style={{
                                        // flex: 1,
                                        width: '100%',
                                        height: '100%',
                                        // backgroundColor: 'red'
                                    }}
                                    source={require('./../assets/images/idea_beauty.png')}
                                    resizeMode='contain'
                                />
                            </TouchableOpacity >
                        </View>
                    </View>
                </ScrollView>

            </View>
        )
    }

}

const styles = StyleSheet.create({


});

export default IdeaMarketPage

