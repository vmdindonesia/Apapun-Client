import React, { Component } from 'react';
import { StyleSheet, Text, ImageBackground, View, TouchableOpacity, Image, TextInput } from 'react-native';
import { Input, ContainerSection, Container } from '../components/common';

export class FinalReviewPage extends React.Component {

    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ImageBackground
                style={{ width: '100%', height: '100%' }}
                source={require('./../assets/images/bg-login.jpg')}
            >
                <View style={{ flexDirection: 'column' }}>
                    <View style={styles.containerTextTop}>
                        <Text style={styles.textTop}>TERIMA KASIH</Text>
                        <Text
                            style={{
                                marginLeft: 30, marginRight: 30, fontFamily: 'Quicksand-Regular',
                                fontSize: 12, marginTop: 20, color: 'white', textAlign: 'center'
                            }}
                        >
                            Kami harap anda mendapatkan pesanan anda sesuai dengan yang anda inginkan. Silahkan tentukan rating anda terhadap crafter dan review agar crafter dapat menjadi lebih baik
                        </Text>
                    </View>
                    <View style={{ width: '100%', height: '30%', flexDirection: 'row' }}>
                        <View style={{ width: '50%', paddingLeft: 20 }}>
                            <Text style={styles.textMid}>Desain</Text>
                            <View>
                                <Image
                                    style={{ width: 150, height: 150, alignSelf: 'center', marginTop: 5 }}
                                    source={require('./../assets/images/design1.jpg')}
                                    resizeMode='contain'
                                />
                            </View>
                        </View>
                        <View style={{ width: '50%', paddingRight: 20 }}>
                            <Text style={styles.textMid}>Hasil</Text>
                            <View>
                                <Image
                                    style={{ width: 150, height: 150, alignSelf: 'center', marginTop: 5 }}
                                    source={require('./../assets/images/design1.jpg')}
                                    resizeMode='contain'
                                />
                            </View>
                        </View>
                    </View>
                    <View style={{ width: '100%', height: '50%', marginTop: 30 }}>
                        <View style={{ paddingLeft: 15, paddingRight: 15 }}>
                            <Text style={{ fontFamily: 'Quicksand-Bold', color: 'white' }}>Subjek (opsional)</Text>
                            <View style={{ width: '100%', height: 40 }}>
                                <Input
                                    style={styles.input}
                                />
                            </View>
                        </View>
                        <View style={{ paddingLeft: 15, paddingRight: 15 }}>
                            <Text style={{ fontFamily: 'Quicksand-Bold', color: 'white' }}>Review</Text>
                            <View style={{ width: '100%', height: 80 }}>
                                <Input
                                    style={styles.input}
                                />
                            </View>
                        </View>
                        <TouchableOpacity
                            style={{
                                borderRadius: 25, height: 40, width: '85%', backgroundColor: 'red', justifyContent: 'center',
                                margin: 25
                            }}>
                            <Text style={{ fontFamily: 'Quicksand-Bold', textAlign: 'center', color: 'white' }}>Next</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        );

    }

}

const styles = StyleSheet.create({
    containerTextTop: {
        marginTop: 20,
        alignItems: 'center',
        height: '20%',
        width: '100%'
    },
    buttonHome: {
        backgroundColor: 'rgba(0,0,0,0.6)',
        borderRadius: 100,
        width: 50,
        height: 50,
        justifyContent: 'center'
    },
    textTop: {
        fontFamily: 'Quicksand-Bold',
        fontSize: 20,
        color: '#FFD700',
        textAlign: 'center'
    },
    textMid: {
        fontFamily: 'Quicksand-Bold',
        color: '#FFD700',
        textAlign: 'center',
    },
    bodyText: {
        fontFamily: 'Quicksand-Regular',
        textAlign: 'center'
    },
    input: {
        height: 150,
        padding: 10,
        margin: 18,
        fontSize: 18,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#48BBEC',
        backgroundColor: 'rgba(0,0,0,0)',
    }

});


export default FinalReviewPage;