import React, { Component } from 'react';
import { StyleSheet, Text, ImageBackground, View, TouchableOpacity, Image } from 'react-native';

export class ReviewProductPage extends React.Component {

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
                    <View style={{ width: '100%', height: '50%' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <TouchableOpacity
                                style={{
                                    borderWidth: 2, borderRadius: 25, height: 100, width: 130, backgroundColor: 'white',
                                    borderColor: 'transparent'
                                }}
                            >
                                <Image
                                    style={{ width: 60, height: 60, alignSelf: 'center', marginTop: 10 }}
                                    source={require('./../assets/images/Buruk.png')}
                                    resizeMode='contain'
                                />
                                <Text style={{ fontFamily: 'Quicksand-Regular', textAlign: 'center' }}>Buruk</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    borderWidth: 2, borderRadius: 25, height: 100, width: 130, backgroundColor: 'white',
                                    borderColor: 'transparent'
                                }}
                            >
                                <Image
                                    style={{ width: 60, height: 60, alignSelf: 'center', marginTop: 10 }}
                                    source={require('./../assets/images/Cukup.png')}
                                    resizeMode='contain'
                                />
                                <Text style={{ fontFamily: 'Quicksand-Regular', textAlign: 'center' }}>Cukup</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                            <TouchableOpacity
                                style={{
                                    borderWidth: 2, borderRadius: 25, height: 100, width: 130, backgroundColor: 'white',
                                    borderColor: 'transparent'
                                }}
                            >
                                <Image
                                    style={{ width: 60, height: 60, alignSelf: 'center', marginTop: 10 }}
                                    source={require('./../assets/images/Bagus.png')}
                                    resizeMode='contain'
                                />
                                <Text style={{ fontFamily: 'Quicksand-Regular', textAlign: 'center' }}>Bagus</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    borderWidth: 2, borderRadius: 25, height: 100, width: 130, backgroundColor: 'white',
                                    borderColor: 'transparent'
                                }}
                            >
                                <Image
                                    style={{ width: 80, height: 65, alignSelf: 'center', marginTop: 10 }}
                                    source={require('./../assets/images/sempurna.png')}
                                    resizeMode='contain'
                                />
                                <Text style={{ fontFamily: 'Quicksand-Regular', textAlign: 'center' }}>Sempurna</Text>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('FinalReview')}
                        style={{
                            borderRadius: 25, height: 40, width: '85%', backgroundColor: 'white', justifyContent: 'center',
                            margin: 27
                        }}>
                        <Text style={{ fontFamily: 'Quicksand-Bold', textAlign: 'center', color: 'white' }}>Next</Text>
                    </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
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
        // padding: 10
    },
    bodyText: {
        fontFamily: 'Quicksand-Regular',
        textAlign: 'center'
    }

});


export default ReviewProductPage;