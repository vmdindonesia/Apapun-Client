import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, AsyncStorage, TouchableOpacity, ScrollView, StyleSheet, Animated, TouchableWithoutFeedback, StatusBar, Modal } from 'react-native'
import { COLOR } from '../shared/config';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';



const HEADER_MAX_HEIGHT = 350;
const HEADER_MIN_HEIGHT = 50;
const HEADER_SCROLL_DISTANCE = HEADER_MAX_HEIGHT - HEADER_MIN_HEIGHT;

export class PageDesignPage extends React.Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);

        this.state = {
            scrollY: new Animated.Value(0),
        };
    }

    _renderScrollViewContent() {
        const data = Array.from({ length: 30 });
        return (
            <View style={styles.scrollViewContent}>
                <View style={styles.containerSecondForm}>
                    <View style={{ flex: 1, flexDirection: 'row', height: '100%', width: '100%', }}>

                        <View style={{
                            flexDirection: 'column',
                            height: '100%', width: '50%',
                            justifyContent: 'center'
                        }}>
                            <Text style={{ fontSize: 15, paddingLeft: 20, textAlign: 'left', fontWeight: 'bold', fontFamily: 'Quicksand-Bold', color: 'black' }}>
                                Elegant Plain
                        </Text>
                            <Text style={{ fontSize: 15, paddingLeft: 20, textAlign: 'left', fontWeight: 'bold', fontFamily: 'Quicksand-Bold', color: 'black' }}>
                                T-Shirt
                        </Text>
                            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                                <Image
                                    style={{ width: 30, height: 30, marginTop: 10 }}
                                    source={require('./../assets/images/Cukup.png')}
                                />
                                <Text style={{ fontSize: 13, paddingLeft: 2, paddingTop: 20, textAlign: 'center', fontSize: 13, fontFamily: 'Quicksand-Bold' }}>
                                    (9) review
                        </Text>
                            </View>
                        </View>


                        <View style={{
                            flexDirection: 'column',
                            height: '100%', width: '50%',
                            justifyContent: 'center'
                        }}>
                            <Text style={{ fontSize: 13, textAlign: 'center', fontSize: 13, fontFamily: 'Quicksand-Bold' }}>
                                Total Apresisasi
                        </Text>
                            <Text style={{ fontSize: 13, textAlign: 'center', fontSize: 13, fontFamily: 'Quicksand-Bold' }}>
                                Design
                        </Text>
                            <Text style={{ fontSize: 13, textAlign: 'center', fontSize: 13, fontFamily: 'Quicksand-Bold', color: 'red' }}>
                                10.000
                        </Text>
                            <Text style={{ fontSize: 13, paddingLeft: 2, paddingTop: 20, textAlign: 'center', fontSize: 13, fontFamily: 'Quicksand-Bold' }}>
                                Terjual
                        </Text>
                            <Text style={{ fontSize: 13, paddingLeft: 2, paddingTop: 3, textAlign: 'center', fontSize: 13, fontFamily: 'Quicksand-Bold', color: 'red' }}>
                                10
                        </Text>
                        </View>

                    </View>
                </View>
                <View style={{
                    width: '100%',
                    height: '5%',
                    backgroundColor: 'white',
                    marginTop: 20,
                    flexDirection: 'row'
                }}>

                    <View style={{
                        width: '50%',
                        height: '100%',
                        justifyContent: 'center',
                        alignContent: 'center',
                        flexDirection: 'column'
                    }}>

                        <TouchableOpacity style={{ alignSelf: 'center' }}
                            onPress={() => this.props.navigation.navigate('ProductDetailProf')}>

                            <Text style={{ paddingTop: 5, fontFamily: 'Quicksand-Bold' }}>Detail</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        width: '50%',
                        height: '100%',
                        // backgroundColor: 'blue',
                        justifyContent: 'center',
                        alignContent: 'center',
                        flexDirection: 'column'
                    }}>
                        <TouchableOpacity style={{ alignSelf: 'center' }}>
                            <Text style={{ paddingTop: 5, fontFamily: 'Quicksand-Bold' }}>Review</Text>
                        </TouchableOpacity>

                    </View>
                </View>

                <View style={styles.containerMain}>
                    <View style={{
                        width: '100%',
                        height: 50,
                        backgroundColor: '',
                        flexDirection: 'row'
                    }}>

                        <View style={{
                            width: '50%',
                            flexDirection: 'column',
                            marginTop: 10,
                            backgroundColor: '',
                            height: 50
                        }}>
                            <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, color: 'black', fontWeight: 'bold' }}>Kategori</Text>
                            <View style={{ width: '80%', borderWidth: 0, height: 30, paddingLeft: 2, backgroundColor: 'white' }}>
                                <Text style={{
                                    fontFamily: 'Quicksand-Bold', paddingTop: 10, fontSize: 13
                                }}
                                >Fashion</Text>
                            </View>

                        </View>

                        <View style={{
                            width: '50%',
                            marginTop: 10,
                            justifyContent: 'center',
                            backgroundColor: '',
                            flexDirection: 'column',
                            height: 50
                        }}>
                            <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, color: 'black', fontWeight: 'bold' }}>Sub-Kategori</Text>
                            <View style={{ width: '80%', borderWidth: 0, height: 30, paddingLeft: 2, paddingTop: 2, backgroundColor: 'white' }}>
                                <Text style={{
                                    fontFamily: 'Quicksand-Bold', alignSelf: 'auto', paddingTop: 10, fontSize: 13
                                }}
                                >Kaos (Pria)</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, top: -35, paddingLeft: 21, fontWeight: 'bold', color: 'black' }}>Deskripsi Produk</Text>
                <View style={styles.containerM}>
                    <View style={{
                        width: '100%',
                        height: 200,
                        backgroundColor: '',
                        flexDirection: 'row'
                    }}>

                        <View style={{
                            width: '50%',
                            flexDirection: 'column',
                            marginTop: 10,
                            backgroundColor: '',
                            height: 50
                        }}>
                            <View style={{ marginTop: 10, marginLeft: 5, width: 339, borderWidth: 0, height: 230, paddingLeft: 2, backgroundColor: 'white' }}>
                                <Text style={{
                                    fontFamily: 'Quicksand-Bold', paddingTop: 10, fontSize: 13
                                }}
                                >Ukuran</Text>
                                <Text style={{
                                    fontFamily: 'Quicksand-Bold', fontSize: 13
                                }}
                                >Bahu : 15</Text>
                                <Text style={{
                                    fontFamily: 'Quicksand-Bold', fontSize: 13
                                }}
                                >Panjang Lengan : 22cm</Text>
                                <Text style={{
                                    fontFamily: 'Quicksand-Bold', fontSize: 13
                                }}
                                >Lingkar Dada : 106cm</Text>
                                <Text style={{
                                    fontFamily: 'Quicksand-Bold', fontSize: 13
                                }}
                                >Panjang Bahu : 70cm</Text>
                                <Text style={{
                                    fontFamily: 'Quicksand-Bold', fontSize: 13, paddingTop: 30, fontFamily: 'Quiksand-Bold'
                                }}
                                >Deskripsi</Text>
                                <Text style={{
                                    fontFamily: 'Quicksand-Bold', fontSize: 13
                                }}
                                >Kaos pria yang simpel tapi fashionable, Bahan menyarap</Text>
                                <Text style={{
                                    fontFamily: 'Quicksand-Bold', fontSize: 13
                                }}
                                >keringat dan nyaman dipakai</Text>
                            </View>

                        </View>
                    </View>
                </View>
            </View>
        );
    }

    render() {
        const headerHeight = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE],
            outputRange: [HEADER_MAX_HEIGHT, HEADER_MIN_HEIGHT],
            extrapolate: 'clamp',
        });
        const imageOpacity = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE / 2, HEADER_SCROLL_DISTANCE],
            outputRange: [1, 1, 0],
            extrapolate: 'clamp',
        });
        const imageTranslate = this.state.scrollY.interpolate({
            inputRange: [0, HEADER_SCROLL_DISTANCE],
            outputRange: [0, -50],
            extrapolate: 'clamp',
        });
        return (
            <View style={{ flex: 1 }}>
                <ScrollView
                    style={{ flex: 1 }}
                    showsVerticalScrollIndicator={false}
                    scrollEventThrottle={16}
                    onScroll={Animated.event(
                        [{ nativeEvent: { contentOffset: { y: this.state.scrollY } } }]
                    )}
                >
                    {this._renderScrollViewContent()}
                </ScrollView>

                <Animated.View style={[styles.header, { height: headerHeight }]}>
                    <Animated.Image
                        style={[
                            styles.backgroundImage,
                            { opacity: imageOpacity, transform: [{ translateY: imageTranslate }] },
                        ]}
                        source={require('./../assets/images/lala.jpg')}
                    />
                    <Animated.View style={{
                        borderRadius: 100, backgroundColor: '#000', width: 40, height: 40,
                        position: 'absolute', justifyContent: 'center', left: wp('83%'), top: hp('3%'),
                        opacity: imageOpacity, zIndex: 1
                    }}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.navigate('SettingProduct')}>
                            <Image
                                style={{ width: 20, height: 20, alignSelf: 'center' }}
                                source={require('./../assets/images/pen_mainprof.png')}
                            />
                        </TouchableOpacity>
                    </Animated.View>
                    <Animated.View style={{
                        borderRadius: 100, backgroundColor: 'rgb(0, 0, 0)', width: 40, height: 40, zIndex: 1,
                        position: 'absolute', justifyContent: 'center', left: wp('4%'), top: hp('3%'), opacity: imageOpacity
                    }}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.goBack()}>
                            <Image
                                style={{ width: 10, height: 20, alignSelf: 'center' }}
                                source={require('./../assets/images/arow.png')}
                            />
                        </TouchableOpacity>
                    </Animated.View>
                </Animated.View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        width: null,
        height: HEADER_MAX_HEIGHT,
        resizeMode: 'cover',
        zIndex: 1
    },
    header: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#03A9F4',
        overflow: 'hidden',
    },
    bar: {
        marginTop: 28,
        height: 32,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        backgroundColor: 'transparent',
        color: 'white',
        fontSize: 18,
    },
    scrollViewContent: {
        marginTop: HEADER_MAX_HEIGHT,
    },
    row: {
        height: 40,
        margin: 16,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
    containerImage: {
        alignItems: 'center',
        // zIndex: 0,
        // backgroundColor: 'yellow'

    },
    containerPhoto: {
        height: 500,
        width: 450,
    },
    containerSecondForm: {
        borderRadius: 20,
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        // top: hp('45%'),
        bottom: hp('5%'),
        height: 140,
        width: '90%',
        zIndex: 2,
        // justifyContent: 'center',
        alignSelf: 'center',
        borderWidth: 0.5,
        borderColor: '#d6d7da',
    },
    containerMainAddress: {
        // flex: 1,
        backgroundColor: '#ffffff',
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 3,
        flexDirection: 'row',
        marginTop: 5,
        height: 250,
        width: '90%',
        alignSelf: 'center',
        borderWidth: 0.5,
        borderColor: '#d6d7da'
    },
    anzz: {
        backgroundColor: '#ffffff',
        flexDirection: 'row',
        height: 50,
        width: '100%'
    },
    containerTi: {
        flex: 1,
        flexDirection: 'column',
        height: 300,
        width: '90%',
        marginBottom: 15,
        // alignItems: 'center',
        // justifyContent: 'center',
        alignSelf: 'center'
    },
    containerMain: {
        // flex: 1,
        flexDirection: 'column',
        marginTop: 5,
        height: 70,
        width: '90%',
        marginBottom: 30,
        // alignItems: 'center',
        // justifyContent: 'center',
        alignSelf: 'center'
    },
    containerM: {
        // flex: 1,
        borderRadius: 20,
        backgroundColor: '#ffffff',
        shadowColor: 'black',
        shadowOffset: { width: 10, heigth: 10 },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 3,
        flexDirection: 'column',
        top: -30,
        bottom: 90,
        height: 300,
        width: '90%',
        // alignItems: 'center',
        // justifyContent: 'center',
        alignSelf: 'center',
        // zIndex: 1,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        marginBottom: 7.5
    },



})
export default PageDesignPage