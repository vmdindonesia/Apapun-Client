import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, AsyncStorage, TouchableOpacity, ScrollView, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, StatusBar, Modal } from 'react-native'
import { Container, ContainerSection, Button, Input, InputSearch, InputDate } from '../components/common';
// import axios from 'axios';
import { COLOR } from '../shared/config';
import SwitchToggle from 'react-native-switch-toggle';
import Icon from 'react-native-vector-icons/Ionicons';


export class onClickProductOnIdeaFashionPage extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        header: null,
        // <TouchableOpacity
        //     onPress={() => { navigation.goBack(); console.log(navigation.goBack(), 'Props Order') }}
        // >
        //     <Icon size={30} style={{ marginLeft: 25, color: '#EF1C25' }} name='ios-arrow-back' />
        // </TouchableOpacity>,
        // headerTitle: 'Crafter Menu'
    });

    constructor(props) {
        super(props);
        this.state = {
            imagewhishlist: false

        };
    }


    render() {

        const {
            imagewhishlist
        } = this.state

        return (
            <View style={{ flex: 1 }}>

                <ScrollView style={{ flex: 1, backgroundColor: '#e5e5e5' }}>

                    <View style={{ flex: 1, height: 80, backgroundColor: 'transparent', flexDirection: 'row', alignItems: 'center', zIndex: 1, position: 'relative' }}>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.goBack()}
                            >
                                <View style={{ height: 40, width: 40, borderRadius: 100, backgroundColor: 'rgba(0,0,0,0.7)', justifyContent: 'center', paddingLeft: 5, marginLeft: 20 }}>
                                    <Icon size={30} style={{ paddingLeft: 7.5, color: 'white' }} name='ios-arrow-back' />
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                            <View style={{ height: 40, width: 40, borderRadius: 100, backgroundColor: 'rgba(0,0,0,0.7)', justifyContent: 'center', paddingLeft: 6 }}>
                                <Image style={{ height: 23, width: 23, }}
                                    source={require('./../assets/images/ic_share.png')}
                                // resizeMode='stretch'
                                />
                            </View>
                            <TouchableWithoutFeedback
                                onPress={() => this.setState({ imagewhishlist: !this.state.imagewhishlist })}
                            >
                                <View style={{ height: 40, width: 40, borderRadius: 100, backgroundColor: 'rgba(0,0,0,0.7)', justifyContent: 'center', paddingLeft: 7, marginLeft: 10, marginRight: 20 }}>
                                    {
                                        imagewhishlist === true ?

                                            <Image style={{ height: 27, width: 27, }}
                                                source={require('./../assets/images/ic_after_wishlist.png')}
                                            // resizeMode='stretch'
                                            />
                                            :
                                            <Image style={{ height: 27, width: 27, }}

                                                source={require('./../assets/images/ic_wishlist.png')}
                                            // resizeMode='stretch'
                                            />
                                    }


                                </View>
                            </TouchableWithoutFeedback>
                        </View>

                    </View>

                    <View style={{ flex: 1, height: 375, zIndex: 0, marginTop: -80 }}>
                        <Image style={{ width: '100%', height: '100%' }}
                            source={require('./../assets/images/kemeja.jpg')}
                            resizeMode='stretch'
                        />
                    </View>

                    <View style={{ flex: 1, height: 150, alignItems: 'center', }}>
                        <View style={{ height: '100%', width: '87.5%', backgroundColor: 'white', borderRadius: 25, borderWidth: 1, borderColor: '#d6d7da', elevation: 4, zIndex: 3, marginTop: -30, alignItems: 'center' }}>
                            <View style={{ height: '50%', width: '94%', flexDirection: 'row' }}>

                                <View style={{ width: '70%', justifyContent: 'center', }}>
                                    <Text style={{ fontSize: 25, fontFamily: 'Quicksand-Bold', color: 'black', textAlign: 'center' }}>ELEGANT FLANNEL</Text>
                                </View>

                                <View style={{ width: '30%', justifyContent: 'center', }}>
                                    <Text style={{ fontSize: 15, fontFamily: 'Quicksand-Regular', color: 'black', textAlign: 'center' }}>Apresiasi Desain</Text>
                                    <Text style={{ fontSize: 15, fontFamily: 'Quicksand-Bold', color: 'red', textAlign: 'center' }}>Rp. 10.000</Text>
                                </View>

                            </View>

                            <View style={{ height: '45%', width: '87%', flexDirection: 'row', alignItems: 'center' }}>
                                <Image
                                    style={{
                                        width: 65,
                                        height: 65,
                                    }}
                                    resizeMode='stretch'
                                    source={require('./../assets/images/sempurna.png')}
                                />
                                <Text style={{ fontSize: 15, fontFamily: 'Quicksand-Bold', color: 'black', textAlign: 'center', paddingLeft: 10 }}>(10) Review</Text>
                            </View>


                        </View>
                    </View>

                    <View style={{ flex: 1, height: 45, backgroundColor: 'white', flexDirection: 'row', alignItems: 'center' }}>

                        <View style={{ flex: 1, }}>
                            <Text style={{ fontSize: 15, fontFamily: 'Quicksand-Regular', color: 'black', textAlign: 'center' }}>Detail</Text>
                        </View>

                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 15, fontFamily: 'Quicksand-Regular', color: 'black', textAlign: 'center' }}>Review</Text>
                        </View>

                    </View>



                </ScrollView>

                <TouchableOpacity style={{ zIndex: 4, marginBottom: -20, alignSelf: 'center' }}
                        onPress={() => this.props.navigation.navigate('detailsendingIdeaPage')}
                >
                    <View style={{ height: 40, width: 150, backgroundColor: 'red', borderRadius: 30, justifyContent: 'center', alignItems: 'center', }}>
                        <Text style={{ fontSize: 15, fontFamily: 'Quicksand-Bold', color: 'white', textAlign: 'center' }}>PROSES</Text>
                    </View>
                </TouchableOpacity>

                <View style={{ height: 30, width: '100%', backgroundColor: 'black', }} />



            </View>
        )
    }

}


const styles = StyleSheet.create({


});

export default onClickProductOnIdeaFashionPage;

