import React, { Component } from 'react';
import { ScrollView, ImageBackground } from 'react-native';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import { InputSearch } from './../components/common'
import Swiper from 'react-native-swiper';
import { COLOR } from './../shared/config';


export class DashboardPage extends React.Component {
    static navigationOptions = {
        header: null
    }

    render() {
        return (
            <ImageBackground
                source={require('./../assets/images/bg-dashboard.png')}
                style={{ width: '100%', height: '100%', backgroundColor: COLOR.element_a1 }}
            >
                <ScrollView>
                    <View style={{ height: 250 }}>

                        <Swiper
                            style={styles.wrapper}
                            autoplay
                            showsButtons={true}
                            dot={<View style={{ backgroundColor: '#FFFFFF', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3 }} />}
                        >
                            <View style={styles.slide1}>
                                <Image
                                    style={styles.imageStyle}
                                    source={require('./../assets/images/swiperFirst.png')}
                                    resizeMode='contain'
                                />
                            </View>
                            <View style={styles.slide2}>
                                <Image
                                    style={styles.imageStyle}
                                    source={require('./../assets/images/swiperSecond.png')}
                                    resizeMode='contain'
                                />
                            </View>
                            <View style={styles.slide2}>
                                <Image
                                    style={styles.imageStyle}
                                    source={require('./../assets/images/swiperThird.png')}
                                    resizeMode='contain'
                                />
                            </View>
                            <View style={styles.slide2}>
                                <Image
                                    style={styles.imageStyle}
                                    source={require('./../assets/images/swiperFour.png')}
                                    resizeMode='contain'
                                />
                            </View>
                            <View style={styles.slide2}>
                                <Image
                                    style={styles.imageStyle}
                                    source={require('./../assets/images/swiperFive.png')}
                                    resizeMode='contain'
                                />
                            </View>
                        </Swiper>

                    </View>

                    <View style={styles.containerProfile}>
                        <View style={styles.containerInsideProfileOne}>
                            <View style={styles.containerPhoto}>
                                <View>
                                    <Image
                                        style={styles.profileImage}
                                        source={require('./../assets/images/profile.png')}
                                    />
                                </View>
                            </View>

                        </View>

                        <View style={styles.containerInsideProfileTwo}>
                            <View style={styles.containerUp}>
                                <View style={{ marginLeft: 10, marginTop: 20 }}>
                                    <Text style={{ color: 'grey' }}>Hi, Welcome!</Text>
                                    <Text style={{ color: 'white' }}>HENDRI CHIE</Text>
                                </View>
                            </View>

                            <View style={styles.containerMiddleProfileTwo}>
                                <View style={{ marginLeft: 10, marginTop: 10 }}>
                                    <View style={{ flex: 1 }}>
                                        <Image
                                            style={styles.icons}
                                            source={require('./../assets/images/wallet.png')}
                                        />
                                    </View>
                                    <View style={{ flex: 1 }}>
                                        <Text style={{ color: 'grey', marginTop: 2, paddingLeft: 35, fontSize: 10 }}>Total Apresiasi Design Anda</Text>
                                        <Text style={{ color: 'grey', marginTop: 1, paddingLeft: 35, fontSize: 10, color: 'white' }}>Rp. 250.000</Text>
                                    </View>
                                </View>

                            </View>

                            <View style={styles.containerBottomProfileTwo}>
                                <View style={{ marginLeft: 10, marginTop: -5 }}>
                                    <View style={{ flex: 1 }}>
                                        <Image
                                            style={styles.icons}
                                            source={require('./../assets/images/paper.png')}
                                        />
                                    </View>
                                    <View style={{ flex: 1 }}>
                                        <Text style={{ color: 'grey', marginTop: 2, paddingLeft: 35, fontSize: 10 }}>Total Design Anda</Text>
                                        <Text style={{ color: 'grey', marginTop: 1, paddingLeft: 35, fontSize: 10, color: 'white' }}>3 Design</Text>
                                    </View>
                                </View>
                            </View>


                        </View>
                    </View>

                    <View style={styles.containerUploadIdea}>
                        <View style={{ flex: 1, marginTop: 10, marginLeft: 30 }}>
                            <Text style={{ color: 'white' }}>Idea Recently Upload</Text>
                            <Text style={{ color: 'grey', fontSize: 10 }}>Checkout our friend new brilliant ideas</Text>
                            <Text style={{ color: 'red', alignSelf: 'flex-end', flex: 1, marginRight: 30, marginTop: -25 }}>See all</Text>
                        </View>
                    </View>
                </ScrollView >
            </ImageBackground >
        )
    }

};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerSearchBox: {
        flex: 1,
        marginTop: 15,
        // marginBottom: 5,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 50
    },
    containerProfile: {
        flex: 1,
        borderRadius: 20,
        backgroundColor: 'rgba(0,0,0,0.5)',
        shadowColor: '#000',
        shadowOffset: { width: 0, heigth: 2 },
        shadowRadius: 2,
        flexDirection: 'row',
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: 160
    },
    containerPhoto: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerInsidePhoto: {
        justifyContent: 'center',
        height: 120,
        width: 120,
        alignSelf: 'center',
        margin: 8,
        borderRadius: 100
    },
    containerInsideProfileOne: {
        width: 150,
        height: 160,
    },
    containerInsideProfileTwo: {
        flex: 3,
        height: 160,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerUp: {
        width: 200,
        height: 60,
    },
    containerMiddleProfileTwo: {
        width: 200,
        height: 50,
    },
    containerBottomProfileTwo: {
        width: 200,
        height: 50,
    },
    containerUploadIdea: {
        flex: 1,
        borderRadius: 20,
        backgroundColor: 'rgba(0,0,0,0.5)',
        shadowColor: '#000',
        shadowOffset: { width: 0, heigth: 2 },
        shadowRadius: 2,
        flexDirection: 'row',
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
        height: 160
    },
    containerFlexUp: {
        width: 350,
        height: 125,
    },
    containerCategory: {
        width: 350,
        height: 75,
    },
    imageStyle: {
        resizeMode: 'cover'
    },
    profileImage: {
        height: 110,
        width: 110,
        borderRadius: 100,
    },
    icons: {
        height: 30,
        width: 30,
        borderRadius: 100,
    },
});

export default DashboardPage;