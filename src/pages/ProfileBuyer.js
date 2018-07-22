import React, { Component } from 'react'
import { View, Text, ImageBackground, Image, AsyncStorage, TouchableOpacity, ScrollView, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, StatusBar, Modal } from 'react-native'
import { COLOR } from './../shared/config';
import Icon from 'react-native-vector-icons/Ionicons';


export class ProfileBuyerPage extends React.Component {


    static navigationOptions = ({ navigation }) => ({
        headerLeft:
            <TouchableOpacity
                onPress={() => {
                    navigation.goBack(); console.log(navigation.goBack(), 'Props Order')
                }}
            >
                <Icon size={30} style={{ marginLeft: 25, }} name='ios-arrow-back' />
            </TouchableOpacity >
    });

    render() {
        return (

            <ScrollView
            >
                <ImageBackground
                    source={require('./../assets/images/background_profile.jpeg')}
                    style={styles.backgroundStyle}
                >

                    <View style={{ zIndex: 0 }}>

                        <View style={styles.containerImage}>
                            <Image style={styles.containerPhoto}
                                source={require('./../assets/images/profile.png')}
                            />
                        </View>

                        <View style={styles.containerMainForm}>

                            <View style={{ flexDirection: 'row', height: 75, width: '85%', }}>

                                <View style={{ flex: 1, height: 75, justifyContent: 'center', }}>
                                    <Text style={{ fontWeight: 'bold', fontSize: 25, fontFamily: 'Quicksand-Regular', color: 'black' }}>Gal Gadot</Text>
                                </View>

                                <View style={{ flex: 1, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                                    <TouchableOpacity
                                        onPress={() => this.props.navigation.navigate('EditProfileBuyer')}>
                                        <View style={{ height: 45, width: 45, backgroundColor: 'red', borderRadius: 100, borderWidth: 2, borderColor: '#e5e5e5', justifyContent: 'center', alignItems: 'center' }}>
                                            <Image style={{ height: 15, width: 15, borderRadius: 0, }}
                                                source={require('./../assets/images/pen_white.png')}
                                            />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={{ width: '85%', borderColor: 'rgba(226, 226, 226, 0.2)', borderWidth: 1, marginTop: -5 }} />


                            <View style={{ flexDirection: 'row', height: 35, width: '85%', alignItems: 'center', }}>

                                <View style={{
                                    flexDirection: 'row',
                                    //  backgroundColor: 'blue',
                                    height: '100%', width: '15%',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Image style={{ height: 18, width: 18, borderRadius: 0, }}
                                        source={require('./../assets/images/envelope.png')}
                                    />
                                </View>

                                <View style={{
                                    flexDirection: 'row',
                                    // backgroundColor: 'skyblue', 
                                    height: '100%', width: '85%',
                                    alignItems: 'center',
                                }}>
                                    <Text style={{ fontSize: 15, paddingLeft: 10, fontFamily: 'Quicksand-Regular', fontWeight: 'bold' }}>
                                        galgadot@gmail.com
                            </Text>
                                </View>

                            </View>


                            <View style={{ flexDirection: 'row', height: 35, width: '85%', alignItems: 'center', }}>

                                <View style={{
                                    flexDirection: 'row',
                                    //  backgroundColor: 'blue',
                                    height: '100%', width: '15%',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Image style={{ height: 18, width: 18, borderRadius: 0, }}
                                        source={require('./../assets/images/telp_mainprof.png')}
                                    />
                                </View>

                                <View style={{
                                    flexDirection: 'row',
                                    // backgroundColor: 'skyblue', 
                                    height: '100%', width: '85%',
                                    alignItems: 'center',
                                }}>
                                    <Text style={{ paddingLeft: 10, fontSize: 15, fontFamily: 'Quicksand-Regular', fontWeight: 'bold' }}>
                                        081284485300
                            </Text>
                                </View>

                            </View>

                            <View style={{ flexDirection: 'row', height: 35, width: '85%', alignItems: 'center', }}>

                                <View style={{
                                    flexDirection: 'row',
                                    //  backgroundColor: 'blue',
                                    height: '100%', width: '15%',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Image style={{ height: 18, width: 18, borderRadius: 0, }}
                                        source={require('./../assets/images/birthday_cake.png')}
                                    />
                                </View>

                                <View style={{
                                    flexDirection: 'row',
                                    // backgroundColor: 'skyblue', 
                                    height: '100%', width: '85%',
                                    alignItems: 'center',
                                }}>
                                    <Text style={{ paddingLeft: 10, fontSize: 15, fontFamily: 'Quicksand-Regular', fontWeight: 'bold' }}>
                                        30 Januari 1995
                                    </Text>
                                </View>

                            </View>

                            <View style={{ flexDirection: 'row', height: 70, width: '85%', marginTop: 5 }}>

                                <View style={{
                                    flexDirection: 'row',
                                    //  backgroundColor: 'blue',
                                    height: '100%', width: '15%',
                                    // alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Image style={{ height: 18, width: 18, borderRadius: 0, }}
                                        source={require('./../assets/images/black_loc_mainprof.png')}
                                    />
                                </View>


                                <View style={{
                                    flexDirection: 'column',
                                    // backgroundColor: 'skyblue', 
                                    height: '100%', width: '85%',
                                    // alignItems: 'center',
                                }}>
                                    <Text style={{ paddingLeft: 10, fontSize: 15, fontFamily: 'Quicksand-Regular', textAlign: 'left', fontWeight: 'bold' }}>
                                        Banten, Kabupaten Tangerang, Kelapa Dua
                                    </Text>
                                    <Text style={{ fontSize: 15, paddingLeft: 10, paddingTop: 5, textAlign: 'left', fontFamily: 'Quicksand-Regular', fontWeight: 'bold' }}>
                                        Jalan Komodo
                                    </Text>
                                </View>

                            </View>
                        </View>



                        {/* <View style={styles.containerSecondForm}>


                            <View style={{ flexDirection: 'row', height: 70, width: '85%', }}>

                                <View style={{
                                    flexDirection: 'row',
                                    //  backgroundColor: 'blue',
                                    height: '100%', width: '15%',
                                    alignItems: 'center',
                                    // justifyContent: 'center'
                                }}>
                                    <TouchableWithoutFeedback>
                                        <TouchableOpacity
                                            onPress={() => this.props.navigation.navigate('AkunBank')}>
                                            <Image style={{ height: 40, width: 40, borderRadius: 0, }}
                                                source={require('./../assets/images/ic_wallet.png')}
                                            />
                                        </TouchableOpacity>
                                    </TouchableWithoutFeedback>
                                </View>

                                <View style={{
                                    flexDirection: 'column',
                                    // backgroundColor: 'skyblue',
                                    height: '100%', width: '85%',
                                    // alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    <Text style={{ paddingLeft: 10, fontSize: 15, fontFamily: 'Quicksand-Regular', textAlign: 'left' }}>
                                        Total Apresiasi Design Anda
                                     </Text>
                                    <Text style={{ paddingLeft: 10, fontSize: 15, fontFamily: 'Quicksand-Regular', fontWeight: 'bold', textAlign: 'left' }}>
                                        Rp.120.000
                                     </Text>
                                </View>

                            </View>

                        </View> */}



                        {/* <View style={styles.containerThirdForm}>

                            <View style={{
                                flexDirection: 'row',
                                //  backgroundColor: 'yellow', 
                                height: 70, width: '85%',
                            }}>

                                <View style={{
                                    flexDirection: 'row',
                                    //  backgroundColor: 'blue',
                                    height: '100%', width: '15%',
                                    alignItems: 'center',
                                    // justifyContent: 'center'
                                }}>
                                    <TouchableWithoutFeedback>
                                        <TouchableOpacity
                                            onPress={() => this.props.navigation.navigate('DesignSaya')}>
                                            <Image style={{ height: 40, width: 40, borderRadius: 0, }}
                                                source={require('./../assets/images/ic_design.png')}
                                            />
                                        </TouchableOpacity>
                                    </TouchableWithoutFeedback>
                                </View>

                                <View style={{
                                    // flexDirection: 'column',
                                    // backgroundColor: 'skyblue',
                                    height: '100%', width: '85%',
                                    // alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: 30
                                }}>
                                    <Text style={{ paddingLeft: 10, fontSize: 15, fontFamily: 'Quicksand-Regular', textAlign: 'left' }}>
                                        Total Design Anda
                                    </Text>
                                    <Text style={{ paddingLeft: 10, fontSize: 15, fontFamily: 'Quicksand-Regular', fontWeight: 'bold', textAlign: 'left' }}>
                                        3 Design
                                    </Text>
                                </View>
                            </View>
                        </View> */}


                        <View style={styles.containerTh}>
                            <View style={{
                                flexDirection: 'column',
                                height: '100%', width: '100%',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Text style={{ fontSize: 19, fontWeight: 'bold', textAlign: 'center', fontFamily: 'Quicksand-Bold' }}>
                                    Hargai Desainmu
                                    </Text>
                                <Text style={{ fontSize: 16, textAlign: 'center', fontFamily: 'Quicksand-Regular', fontWeight: 'bold' }}>
                                    Share dan opresiasikan desainmu
                                    </Text>
                                <Text style={{ fontSize: 16, textAlign: 'center', fontFamily: 'Quicksand-Regular', fontWeight: 'bold' }}>
                                    ke seluruh indonesia
                                    </Text>
                            </View>


                        </View>


                    </View>

                    <View style={styles.butin}>
                        <TouchableOpacity style={styles.buttonSignUp}
                            onPress={() => this.props.navigation.navigate('pengaturanBank')}>
                            <Text style={styles.signupButton}>Pengaturan</Text>
                        </TouchableOpacity>
                    </View>





                </ImageBackground >
            </ScrollView >



        );
    }


}

const styles = StyleSheet.create({
    backgroundStyle: {
        width: '100%',
        height: '53%',
        // backgroundColor: 'grey'
    },
    containerImage: {
        // flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        paddingTop: 30,
        zIndex: 2,
        marginBottom: 10
        // backgroundColor: 'yellow'

    },
    containerPhoto: {
        height: 200,
        width: 200,
        borderRadius: 100,
        // zIndex: 5
        borderColor: 'white',
        borderWidth: 3
    },
    containerMainForm: {
        flex: 1,
        borderRadius: 20,
        backgroundColor: '#ffffff',
        shadowColor: 'black',
        shadowOffset: { width: 10, heigth: 10 },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 3,
        flexDirection: 'column',
        marginTop: 15,
        height: 260,
        width: '90%',
        alignItems: 'center',
        // justifyContent: 'center',
        alignSelf: 'center',
        // zIndex: 1,
        borderWidth: 1,
        borderColor: '#d6d7da',
        // backgroundColor: 'red'
    },
    containerSecondForm: {
        // flex: 1,
        borderRadius: 20,
        backgroundColor: '#ffffff',
        shadowColor: 'black',
        shadowOffset: { width: 10, heigth: 10 },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 3,
        flexDirection: 'row',
        marginTop: 5,
        height: 70,
        width: '90%',
        // alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        // zIndex: 2,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
    },
    containerThirdForm: {
        // flex: 1,
        borderRadius: 20,
        backgroundColor: '#ffffff',
        shadowColor: 'black',
        shadowOffset: { width: 10, heigth: 10 },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 3,
        flexDirection: 'row',
        marginTop: 5,
        // zIndex: 3,
        marginBottom: 5,
        height: 70,
        width: '90%',
        // alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderWidth: 0.5,
        borderColor: '#d6d7da',
    },
    containerTh: {
        borderRadius: 20,
        backgroundColor: '#ffffff',
        shadowColor: 'black',
        shadowOffset: { width: 10, heigth: 10 },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 3,
        flexDirection: 'row',
        marginBottom: 30,
        marginTop: 5,
        height: 150,
        width: '90%',
        // alignItems: 'center',
        // zIndex: 2,
        justifyContent: 'center',
        alignSelf: 'center',
        borderWidth: 0.5,
        borderColor: '#d6d7da'
    },
    icons: {
        height: 30,
        width: 30,
        borderRadius: 100,
    },
    signupButton: {
        textAlign: 'center',
        color: 'white',
        fontSize: 15,
        fontFamily: 'Quicksand-Reguler'
    },
    buttonSignUp: {
        backgroundColor: 'red',
        borderRadius: 20,
        height: 40,
        width: 135,
        marginTop: -50,
        justifyContent: 'center',
        alignSelf: 'center',
        fontFamily: 'Quicksand-Regular'
        // zIndex: 2
    },
    butin: {
        zIndex: 1,
        marginTop: -50,
        justifyContent: 'center',
        alignItems: 'center',
        height: 90,
        width: 410
    }
});

export default ProfileBuyerPage

