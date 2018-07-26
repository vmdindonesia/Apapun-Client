import React, { Component } from 'react';
import { View, Text, Animated, ImageBackground, Image, AsyncStorage, TouchableOpacity, ScrollView, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, FlatList, StatusBar, Modal } from 'react-native'
import { Container, ContainerSection, Button, Input, InputSearch, InputDate } from '../components/common';
// import axios from 'axios';
import { COLOR } from '../shared/config';
import Icon from 'react-native-vector-icons/Ionicons';

export class DesignSayaPage extends React.Component {


    static navigationOptions = ({ navigation }) => ({
        headerLeft:
            <TouchableOpacity
                onPress={() => { navigation.goBack(); console.log(navigation.goBack(), 'Props Order') }}
            >
                <Icon size={30} style={{ marginLeft: 25, color: '#EF1C25' }} name='ios-arrow-back' />
            </TouchableOpacity>,
        headerTitle: 'Design Saya',
        headerStyle: {
            elevation: 0
        }
    });

    constructor(props) {
        super(props)
        this.state = {
            photo: [
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg'
            ],
            photos: [
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg'
            ]
        }
    }

    renderProductItem = (data) => {
        console.log(data, '098');
        return (
            <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('PageDesign')}>
                <View style={styles.card}>
                    <View style={styles.thumbnailContainerStyle}>
                        <Image
                            style={styles.thumbnailStyle}
                            source={{ uri: data.item }}
                        />
                    </View>
                    <View style={{ marginLeft: 10, marginTop: 10, flexDirection: 'column', flex: 1 }}>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Text style={{ textAlign: 'left', fontSize: 15, fontFamily: 'Quicksand-Bold' }}>
                                My Own Table
                            </Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'column', marginLeft: 150, top: -30 }}>
                            <Image
                                style={{ width: 18, height: 18 }}
                                source={require('./../assets/images/Cukup.png')}
                                resizeMode='stretch'
                            />
                            <Text style={{ fontSize: 13, marginRight: '10%', paddingTop: '5%', fontFamily: 'Quicksand-Regular' }}>
                                (10)
                            </Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', marginRight: 10, top: -10 }}>
                            <Text style={{ fontSize: 13, marginLeft: '2%', fontFamily: 'Quicksand-Regular' }}>
                                Total Apresiasi
                            </Text>
                            <Text style={{ fontSize: 13, marginLeft: 10, fontFamily: 'Quicksand-Regular' }}>
                                Terjual
                            </Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', marginRight: 10, marginTop: 7, marginBottom: 10, top: -10 }}>
                            <Text style={{ fontSize: 13, marginLeft: '10%', fontFamily: 'Quicksand-Regular', color: 'red' }}>
                                Rp. 20.000
                            </Text>
                            <Text style={{ fontSize: 13, marginLeft: 30, fontFamily: 'Quicksand-Regular', color: 'red' }}>
                                10
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }


    renderProdu = (data) => {
        console.log(data, '098');
        return (
            <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('PageDesign')}>
                <View style={styles.cardi}>
                    <View style={styles.thumbnailContainerStyle}>
                        <Image
                            style={styles.thumbnailStyle}
                            source={{ uri: data.item }}
                        />
                    </View>
                    <View style={{ textAlign: 'center', marginTop: 10, flexDirection: 'column', flex: 1, marginBottom: 50 }}>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Text style={{ textAlign: 'center', fontSize: 13, fontFamily: 'Quicksand-Regular' }}>
                                Desain anda belum terdaftar
                            </Text>
                        </View>
                    </View>
                    <View style={styles.butin}>
                            <TouchableOpacity
                                style={styles.buttonSignUp}
                                onPress={() => this.props.navigation.navigate('SettingProduct')}
                            >
                                <Text style={styles.signupButton}>Daftar</Text>
                            </TouchableOpacity>
                        </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }

    render() {
        return (
            // <View style={{ flex: 1 }}>

            <View style={{ flex: 1, zIndex: 0 }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1, height: 75 }}>
                        <TouchableOpacity style={{ alignSelf: 'center' }}>
                            <View style={styles.thumbnailContainerStyle}>
                                <Image
                                    style={{
                                        width: 18,
                                        height: 18,
                                        borderRadius: 0,
                                        alignSelf: 'center'
                                    }}
                                    source={require('./../assets/images/ic_sort.png')}
                                />
                            </View>
                            <Text style={{ paddingTop: 5 }}>Urutkan</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ borderRightWidth: 1, height: 30, alignSelf: 'center' }} />
                    <View style={{ flex: 1, height: 75, flexDirection: 'column' }}>
                        <TouchableOpacity style={{ alignSelf: 'center' }}>
                            <View style={styles.thumbnailContainerStyle}>
                                <Image
                                    style={{
                                        width: 18,
                                        height: 18,
                                        borderRadius: 0,
                                        alignSelf: 'center'
                                    }}
                                    source={require('./../assets/images/ic_filter.png')}
                                />
                            </View>
                            <Text style={{ paddingTop: 5 }}>Filter</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView style={{ flex: 1 }}>
                    <View style={styles.containerCrafter}>
                        <FlatList
                            data={this.state.photo}
                            renderItem={this.renderProductItem.bind(this)}
                            showsHorizontalScrollIndicator={false}
                            numColumns={2}
                            horizontal={false}
                        />
                    </View>
                    <View style={styles.containerCrafter}>
                        <FlatList
                            data={this.state.photos}
                            renderItem={this.renderProdu.bind(this)}
                            showsHorizontalScrollIndicator={false}
                            numColumns={2}
                            horizontal={false}
                        />
                    </View>
                </ScrollView>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    butin: {
        zIndex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        height: 44,
        paddingTop: 260,
        width: 200,
        marginBottom: 30,
        position: 'absolute'
    },
    signupButton: {
        textAlign: 'center',
        color: 'white',
        fontSize: 15,
        fontFamily: 'Quicksand-Reguler'
    },
    card: {
        borderRadius: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
        marginLeft: 5,
        marginBottom: '2%',
        backgroundColor: '#FFF'
    },
    cardi: {
        borderRadius: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
        marginLeft: 5,
        marginBottom: '50%',
        backgroundColor: '#FFF',
        zIndex: 1
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    thumbnailStyle: {
        alignSelf: 'stretch',
        height: 160,
        width: 170,
        resizeMode: 'cover',
        borderRadius: 4
    },
    containerCrafter: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
    },
    buttonSignUp: {
        backgroundColor: 'red',
        borderRadius: 20,
        height: 40,
        width: 100,
        marginTop: -50,
        justifyContent: 'center',
        alignSelf: 'center',
        fontFamily: 'Quicksand-Regular'
        // zIndex: 2
    }



})

export default DesignSayaPage