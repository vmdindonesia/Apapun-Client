import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, AsyncStorage, TouchableOpacity, ScrollView, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, StatusBar, Modal, ToastAndroid } from 'react-native'
import { Container, ContainerSection, Button, Input, InputSearch, InputDate } from '../components/common';
// import axios from 'axios';
import { COLOR } from '../shared/config';
import Icon from 'react-native-vector-icons/Ionicons';


export class IdeaMarketPage extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        headerLeft:
            <TouchableOpacity
                onPress={() => { navigation.goBack(); console.log(navigation.goBack(), 'Props Order') }}
            >
                <Icon size={30} style={{ marginLeft: 25, color: '#EF1C25' }} name='ios-arrow-back' />
            </TouchableOpacity>,
        headerTitle: 'Kategori'
    });

    render() {

        return (
            <View style={{ flex: 1 }}>

                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ flex: 1, flexDirection: 'column', height: '100%', marginTop: 5, alignItems: 'center', marginLeft: 15, marginRight: 15,  }}>
                        <View style={{ flex: 1, height: 100, width: '100%', marginTop : 5 }}>
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
                                    source={require('./../assets/images/idea_fashion.jpg')}
                                    resizeMode='contain'
                                />
                            </TouchableOpacity>
                        </View>

                        <View style={{ flex: 1, height: 100, width: '100%', marginTop : 5  }}>
                            <TouchableOpacity
                                // onPress={() => this.props.navigation.navigate('IdeaFurniture')}
                                onPress={() => { ToastAndroid.show('Under Development', ToastAndroid.SHORT); }}
                            >
                                <Image
                                    style={{
                                        // flex: 1,
                                        width: '100%',
                                        height: '100%',
                                        // backgroundColor: 'red'
                                    }}
                                    source={require('./../assets/images/idea_furniture.jpg')}
                                    resizeMode='contain'
                                />
                            </TouchableOpacity >
                        </View>

                        <View style={{ flex: 1, height: 100, width: '100%', marginTop : 5  }}>
                            <TouchableOpacity
                                // onPress={() => this.props.navigation.navigate('Ideadht')}
                                onPress={() => { ToastAndroid.show('Under Development', ToastAndroid.SHORT); }}
                            >
                                <Image
                                    style={{
                                        // flex: 1,
                                        width: '100%',
                                        height: '100%',
                                        // backgroundColor: 'red'
                                    }}
                                    source={require('./../assets/images/idea_diy.jpg')}
                                    resizeMode='contain'
                                />
                            </TouchableOpacity >
                        </View>


                        <View style={{ flex: 1, height: 100, width: '100%', marginTop : 5  }}>
                            <TouchableOpacity
                                // onPress={() => this.props.navigation.navigate('IdeaBeauty')}
                                onPress={() => { ToastAndroid.show('Under Development', ToastAndroid.SHORT); }}
                            >
                                <Image
                                    style={{
                                        // flex: 1,
                                        width: '100%',
                                        height: '100%',
                                        // backgroundColor: 'red'
                                    }}
                                    source={require('./../assets/images/idea_beauty.jpg')}
                                    resizeMode='contain'
                                />
                            </TouchableOpacity >
                        </View>
                    </View>
                </ScrollView>

            </View >
        )
    }

}

const styles = StyleSheet.create({


});

export default IdeaMarketPage

