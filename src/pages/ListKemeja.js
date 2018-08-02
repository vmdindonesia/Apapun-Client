import React, { Component } from 'react';
import { ToastAndroid, View, Text, ImageBackground, Image, AsyncStorage, TouchableOpacity, FlatList, ScrollView, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, StatusBar, Modal } from 'react-native'
// import axios from 'axios';
import Swiper from 'react-native-swiper';
import { Container, ContainerSection, Button, Input, InputDate, InputNumber } from '../components/common';
import Icon from 'react-native-vector-icons/Ionicons';

export class ListKemejaPage extends React.Component {


    static navigationOptions = ({ navigation }) => ({
        headerLeft:
            <TouchableOpacity
                onPress={() => { navigation.goBack(); console.log(navigation.goBack(), 'Props Order') }}
            >
                <Icon size={30} style={{ marginLeft: 25, color: '#EF1C25' }} name='ios-arrow-back' />
            </TouchableOpacity>,
        headerTitle: 'Kemeja',
        headerStyle: {
            // shadowOpacity: 0,
            elevation: 0,
            borderBottomColor: 'white',
            borderBottomWidth: 0
        },
    });


    constructor(props) {
        super(props)
        this.state = {
            // screen: 'Custom'
            photo: [
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',
            ]
        }
    }

    renderProductImage = (data) => {
        console.log(data, '098');
        return (
            <TouchableOpacity

            >

                <View style={{ flex: 1, flexDirection: 'column', marginTop: 5, marginRight: 10, marginBottom: 5, }}>
                    <Image
                        style={{ height: 200, width: 190, resizeMode: 'cover' }}
                        source={{ uri: data.item }}
                    />
                    <View style={{ width: '100%', height: 100, backgroundColor: 'white' }}>

                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>

                            <View style={{ flex: 1 }}>
                                <Text style={{ fontFamily: 'Quicksand-Regular', fontWeight: 'bold', fontSize: 15, color: 'black', paddingLeft: 10 }}>Kaos Ilusi</Text>
                            </View>

                            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'flex-end' }}>
                                <Image
                                    style={{
                                        width: 23,
                                        height: 23,
                                        // alignSelf: 'center'
                                        marginRight: 10
                                    }}
                                    resizeMode='stretch'
                                    source={require('./../assets/images/Sempurna.png')}
                                />
                                <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 15, color: 'black', paddingRight: 10 }}>(2)</Text>
                            </View>


                        </View>

                        <View style={{ flex: 1, flexDirection: 'row' }}>

                            <View style={{ width: '30%', flexDirection: 'column', justifyContent: 'center', }}>
                                <View style={{ height: 40, width: 40, borderRadius: 100, backgroundColor: 'black', marginLeft: 10 }}>
                                    {/* <Image
                                        style={{
                                            width: 50,
                                            height: 50,
                                            // alignSelf: 'center'
                                            borderRadius: 100
                                        }}
                                        resizeMode='cover'
                                        source={require('./../assets/images/profile.png')}
                                    /> */}
                                </View>
                            </View>

                            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>

                                <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 13, color: 'black', }}>Didesain oleh</Text>
                                <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 13, color: 'red', }}>Gal Gadot</Text>
                            </View>



                        </View>

                    </View>
                </View>

            </TouchableOpacity >
        )
    }




    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: 'white'
            }}>
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
                                source={require('./../assets/images/ic_sort.png')}
                            />
                            <Text style={{ fontFamily: 'Quicksand-Regular', fontWeight: 'bold', fontSize: 13, color: 'black', paddingTop: 3 }}>Urutkan</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={{ flexDirection: 'column', borderColor: '#e5e5e5', borderWidth: 1, height: '50%', alignSelf: 'center' }} />

                    <View style={{ width: '50%', flexDirection: 'row', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>

                        <TouchableOpacity >
                            <Image
                                style={{
                                    width: 22.5,
                                    height: 22.5,
                                    alignSelf: 'center'
                                }}
                                resizeMode='stretch'
                                source={require('./../assets/images/ic_filter.png')}
                            />
                            <Text style={{ fontFamily: 'Quicksand-Regular', fontWeight: 'bold', fontSize: 13, color: 'black', paddingTop: 3 }}>Sortir</Text>
                        </TouchableOpacity>

                    </View>
                </View>



                <View style={{ flex: 1, marginTop: 10, marginLeft: 10, marginRight: 10, flexDirection: 'column', backgroundColor: '#eaeaea' }}>
                    <FlatList
                        data={this.state.photo}
                        // contentContainerStyle={{ flex: 1 }}
                        renderItem={this.renderProductImage.bind(this)}
                        showsHorizontalScrollIndicator={false}
                        horizontal={false}
                        numColumns={2}
                    />
                </View>



            </View >
        )
    }

}

const styles = StyleSheet.create({

    thumbnailContainerStyle: {

        margin: 10,
    },
    thumbnailStyle: {
        height: 90,
        width: 90,
        resizeMode: 'cover',
        // borderRadius: 1
    }


});

export default ListKemejaPage;

