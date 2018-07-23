import React, { Component } from 'react';
import { StyleSheet, Text, TouchableNativeFeedback, View, ScrollView, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { OrderForCrafterPage } from './orderForCrafter';
import Icon from 'react-native-vector-icons/Ionicons';

export class searchIdeaMarketPage extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        headerLeft:
            <TouchableOpacity
                onPress={() => { navigation.goBack(); console.log(navigation.goBack(), 'Props Order') }}
            >
                <Icon size={30} style={{ marginLeft: 25, color: '#EF1C25' }} name='ios-arrow-back' />
            </TouchableOpacity>,
        headerTitle: 'Crafter Menu'
    });

    constructor(props) {
        super(props)
        this.state = {
            // screen: 'Custom'
        }
    }


    render() {

        return (
            <View style={{ flex: 1, }}>

            <View style={{ width: '100%', height: 65, flexDirection: 'row', }}>
                <View style={{ width: '50%', flexDirection: 'row', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>

                    <TouchableOpacity >
                        <Image
                            style={{
                                width: 23,
                                height: 23,
                                alignSelf: 'center'
                            }}
                            resizeMode='stretch'
                            source={require('./../assets/images/List.png')}
                        />
                        <Text style={{ fontFamily: 'Quicksand-Regular', fontWeight: 'bold', fontSize: 13, color: 'black', paddingTop: 3 }}>Pesanan</Text>
                    </TouchableOpacity>

                </View>

                <View style={{ flexDirection: 'column', borderColor: '#e5e5e5', borderWidth: 1, height: '60%', alignSelf: 'center' }} />

                <View style={{ width: '50%', flexDirection: 'row', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>

                    <TouchableOpacity >
                        <Image
                            style={{
                                width: 22.5,
                                height: 22.5,
                                alignSelf: 'center'
                            }}
                            resizeMode='stretch'
                            source={require('./../assets/images/ic_menu.png')}
                        />
                        <Text style={{ fontFamily: 'Quicksand-Regular', fontWeight: 'bold', fontSize: 13, color: 'black', paddingTop: 3 }}>Menu</Text>
                    </TouchableOpacity>

                </View>
            </View>

            <ScrollView style={{ flex: 1, backgroundColor: '#e5e5e5' }}>

                <View style={{ flex: 1, height: 125, justifyContent: 'space-between', flexDirection: 'row' }}>

                    <View style={{ flex: 1, margin: 5, }}>
                        <TouchableOpacity >
                            <Image
                                style={{
                                    height: '100%',
                                    alignSelf: 'center'
                                }}
                                resizeMode='contain'
                                source={require('./../assets/images/pot_bunga.jpg')}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={{ flex: 1, backgroundColor: 'white', margin: 5 }}>
                        <TouchableOpacity >
                            <Image
                                style={{
                                    height: '100%',
                                    alignSelf: 'center'
                                }}
                                resizeMode='contain'
                                source={require('./../assets/images/chair_example.jpg')}
                            />
                        </TouchableOpacity>
                    </View>

                    <View style={{ flex: 1, backgroundColor: 'black', margin: 5 }}>
                        <TouchableOpacity >
                            <Image
                                style={{
                                    height: '100%',
                                    alignSelf: 'center'
                                }}
                                resizeMode='contain'
                                source={require('./../assets/images/air_jordan.jpg')}
                            />
                        </TouchableOpacity>
                    </View>

                </View>

            </ScrollView>

        </View>


        );
    }
}

const styles = StyleSheet.create({

})
export default searchIdeaMarketPage;