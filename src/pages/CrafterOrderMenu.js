import React, { Component } from 'react';
import { StyleSheet, Text, TouchableNativeFeedback, View, ScrollView, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { OrderForCrafterPage } from './orderForCrafter';
import Icon from 'react-native-vector-icons/Ionicons';

export class CrafterOrderMenuPage extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        headerLeft:
            <TouchableOpacity
                onPress={() => { navigation.goBack(); console.log(navigation.goBack(), 'Props Order') }}
            >
                <Icon size={30} style={{ marginLeft: 25, color: '#EF1C25' }} name='ios-arrow-back' />
            </TouchableOpacity>,
        headerTitle: 'Pesanan'
    });

    constructor(props) {
        super(props)
        this.state = {
            screen: 'menuCrafter'
        }
    }


    render() {

        return (
            <ScrollView style={{ flex: 1, backgroundColor: '#e5e5e5' }}>

                <View style={{ flex: 1, height: 300, }}>


                    <View style={{ flex: 1, flexDirection: 'row', marginTop: 10, marginBottom: 5, marginLeft: 10, marginRight: 10, justifyContent: 'center', borderRadius: 10, }}>
                        <TouchableOpacity style={{ flex: 1 }}
                            onPress={() => this.props.navi.navigate('searchCustomOrder')}
                        >
                            <ImageBackground
                                style={{ flex: 1, width: '100%', borderRadius: 100, flexDirection: 'row' }}
                                source={require('./../assets/images/bg-dashboard.png')}
                                resizeMode='cover'
                            >
                                <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.7)', justifyContent: 'center', flexDirection: 'column' }}>
                                    <Text style={{ fontSize: 15, paddingLeft: 10, fontFamily: 'Quicksand-Regular', color: 'white', fontWeight: 'bold' }}>CUSTOM</Text>
                                    <Text style={{ fontSize: 15, paddingLeft: 10, fontFamily: 'Quicksand-Regular', color: 'red', fontWeight: 'bold' }}>123 Order</Text>
                                </View>
                                <View style={{ flex: 1 }} />
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>



                    <View style={{ flex: 1, flexDirection: 'row', marginTop: 5, marginBottom: 5, marginLeft: 10, marginRight: 10, justifyContent: 'center', borderRadius: 10, }}>
                        <TouchableOpacity style={{ flex: 1 }}
                            onPress={() => this.props.navi.navigate('searchCaptureAndGet')}
                        >
                            <ImageBackground
                                style={{ flex: 1, width: '100%', borderRadius: 100, flexDirection: 'row' }}
                                source={require('./../assets/images/bg-dashboard.png')}
                                resizeMode='cover'
                            >
                                <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.7)', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 15, paddingLeft: 10, fontFamily: 'Quicksand-Regular', color: 'white', fontWeight: 'bold' }}>CAPTURE & GET</Text>
                                    <Text style={{ fontSize: 15, paddingLeft: 10, fontFamily: 'Quicksand-Regular', color: 'red', fontWeight: 'bold' }}>30 Order</Text>
                                </View>
                                <View style={{ flex: 1 }} />
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flex: 1, flexDirection: 'row', marginTop: 5, marginBottom: 5, marginLeft: 10, marginRight: 10, justifyContent: 'center', borderRadius: 10, }}>
                        <TouchableOpacity style={{ flex: 1 }}
                            onPress={() => this.props.navi.navigate('searchIdeaMarket')}
                        >
                            <ImageBackground
                                style={{ flex: 1, width: '100%', borderRadius: 100, flexDirection: 'row' }}
                                source={require('./../assets/images/bg-dashboard.png')}
                                resizeMode='cover'
                            >
                                <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.7)', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 15, paddingLeft: 10, fontFamily: 'Quicksand-Regular', color: 'white', fontWeight: 'bold' }}>MARKET</Text>
                                    <Text style={{ fontSize: 15, paddingLeft: 10, fontFamily: 'Quicksand-Regular', color: 'red', fontWeight: 'bold' }}>23 Order</Text>
                                </View>
                                <View style={{ flex: 1 }} />
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>

                </View>

            </ScrollView >

        );
    }
}

const styles = StyleSheet.create({

})
export default CrafterOrderMenuPage;