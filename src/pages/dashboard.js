import React, { Component } from 'react';
import { ScrollView, RefreshControl } from 'react-native';


import {
    AppRegistry,
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import { InputSearch } from './../components/common'
import Swiper from 'react-native-swiper';
import { colors } from 'react-native-elements';


export class DashboardPage extends React.Component {
    static navigationOptions = {
        header: null
    }

    render() {
        return (
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
                                source={require('./../assets/images/Cat-1.jpg')}
                            />
                        </View>
                        <View style={styles.slide2}>
                            <Image
                                style={styles.imageStyle}
                                source={require('./../assets/images/Cat-2.jpg')}
                            />
                        </View>
                    </Swiper>

                </View>

                <View style={styles.containerSearchBox}>
                    <InputSearch
                        // onFocus={() => navigate('FilterBefore')}
                        placeholder="Cari.."
                        icon="ic_search"
                    />
                </View>

                <View style={styles.containerProfile}>
                    <View style={styles.containerInsideProfileOne}>
                        <View style={styles.containerPhoto}>
                            <View style={styles.containerInsidePhoto}>
                            </View>
                        </View>

                    </View>

                    <View style={styles.containerInsideProfileTwo}>
                        <View style={styles.containerUp}>
                            <View style={{ marginLeft: 10 }}>
                                <Text>Hallo Selamat Datang</Text>
                                <Text>A</Text>
                            </View>
                        </View>

                        <View style={styles.containerMiddleProfileTwo}>
                            <View style={{ marginLeft: 10 }}>
                                <Text>Hallo Selamat Datang</Text>
                                <Text>Akis</Text>
                            </View>

                        </View>

                        <View style={styles.containerBottomProfileTwo}>
                            <View style={{ marginLeft: 10 }}>
                                <Text>Hallo Selamat Datang</Text>
                                <Text>A</Text>
                            </View>
                        </View>


                    </View>
                </View>

                <View style={styles.containerUploadIdea}>
                    <View style={styles.containerFlexUp}>

                    </View>

                    <View style={styles.containerCategory}>

                    </View>
                </View>







            </ScrollView>



        )
    }

};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    slide1: {
        flex: 1,
        // height: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    slide2: {
        flex: 1,
        // weight: 10,
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
        backgroundColor: '#fafafa',
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
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerInsidePhoto: {
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        justifyContent: 'center',
        // backgroundColor: 'yellow',
        height: 120,
		width: 120,
		alignSelf: 'center',
        margin : 8,
        borderRadius : 100
    },
    containerInsideProfileOne: {
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        // backgroundColor: 'red',
        width: 150,
        height: 160,
    },
    containerInsideProfileTwo: {
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        flex: 3,
        // backgroundColor: 'skyblue',
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        height: 160,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerUp: {
        borderTopRightRadius: 5,
        borderWidth: 0.5,
        // backgroundColor: 'yellow',
        width: 200,
        height: 60,
    },
    containerMiddleProfileTwo: {
        borderWidth: 0.5,
        // backgroundColor: 'cyan',
        width: 200,
        height: 50,
        borderColor: '#d6d7da'
    },
    containerBottomProfileTwo: {
        borderWidth: 0.5,
        // backgroundColor: 'purple',
        width: 200,
        height: 50,
        borderColor: '#d6d7da'
    },
    containerUploadIdea: {
        borderRadius: 5,
        flex: 2,
        // height: 500,
        backgroundColor: '#fafafa',
        // flexDirection: 'row',
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: 200
    },
    containerFlexUp: {
        // height: 500,
        // backgroundColor: 'red',
        width: 350,
        height: 125,
    },
    containerCategory: {
        // height: 500,
        // backgroundColor: 'skyblue',
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        width: 350,
        height: 75,
    },


});

export default DashboardPage;