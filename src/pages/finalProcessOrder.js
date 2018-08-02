import React, { Component } from 'react';
import { StyleSheet, Text, ImageBackground, View, TouchableHighlight, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export class FinalProcessOrderPage extends React.Component {

    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ImageBackground
                    style={{ width: '100%', height: '100%' }}
                    source={require('./../assets/images/bg-review.jpg')}
                >
                    <View style={styles.containerBtnHome}>
                        <TouchableHighlight
                            style={styles.buttonHome}
                            onPress={() => this.props.navigation.navigate('Dashboard')}
                        >
                            <Icon
                                size={30}
                                style={{ alignSelf: 'center', color: 'white' }} name='md-home'
                            />
                        </TouchableHighlight>
                    </View>
                    <View style={{ width: '100%', height: '60%', justifyContent: 'center', paddingLeft: 30, paddingRight: 30 }}>
                        <Text
                            style={styles.textMid}
                        >PESANAN BERHASIL{'\n'}{'\n'}</Text>
                        <Text style={[styles.bodyText, { color: 'white' }]}>Terima kasih! Pesanan Anda telah kami terima. Anda dapat melacak pesanan di halaman
                        <Text style={[styles.bodyText, { color: 'red' }]}> daftar pesanan</Text>
                        </Text>
                    </View>
                    <View style={{ width: '100%', height: '20%' }}>
                        <Text style={{ color: 'white', fontFamily: 'Quicksand-Bold', textAlign: 'center', marginTop: 20 }}>Follow Kami</Text>
                        <View style={{ flexDirection: 'row', marginTop: 25, justifyContent: 'center' }}>
                            <View style={{ borderWidth: 1, borderRadius: 100, borderColor: 'white', backgroundColor: 'white', marginRight: 15 }}>
                                <Image
                                    source={require('./../assets/images/instagram-logo.png')}
                                    style={{ alignSelf: 'center', width: 40, height: 40 }}
                                />
                            </View>
                            <View style={{ borderWidth: 1, borderRadius: 100, borderColor: 'white', backgroundColor: 'white', marginLeft: 15 }}>
                                <Image
                                    source={require('./../assets/images/facebook-logo-button.png')}
                                    style={{ alignSelf: 'center', width: 40, height: 40 }}
                                />
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        );

    }

}

const styles = StyleSheet.create({
    containerBtnHome: {
        justifyContent: 'center',
        height: 10,
        flex: 1,
        // backgroundColor: 'red'
    },
    buttonHome: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        borderRadius: 100,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignSelf: 'flex-end',
        marginRight: 15
    },
    textMid: {
        fontFamily: 'Quicksand-Bold',
        fontSize: 20,
        color: 'white',
        textAlign: 'center'
    },
    bodyText: {
        fontFamily: 'Quicksand-Regular',
        textAlign: 'center'
    }

});

export default FinalProcessOrderPage;