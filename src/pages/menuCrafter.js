import React, { Component } from 'react';
import {
    View, Text, ImageBackground, Image, Alert,
    TouchableOpacity, ScrollView, TouchableWithoutFeedback, StyleSheet
} from 'react-native'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';

export class MenuCrafterPage extends React.Component {

    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
    }

    alert = (msg) => {
        console.log(msg)
    }

    renderProductItem = (data) => {
        console.log(data, '098');
        return (
            <View style={{ marginBottom: 7, paddingLeft: 7 }}>
                <Image
                    style={styles.item}
                    source={{ uri: data.item }}
                />
            </View>
        )
    }

    render() {
        // const { imageExpanded, noteExpanded, reviewExpanded, accBankExpanded, myOrderExpanded } = this.state;

        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <ImageBackground
                        source={require('./../assets/images/background_profile.jpeg')}
                        style={styles.backgroundStyle}
                    >
                        <TouchableOpacity style={{ height: 70, width: 70, position: 'absolute', marginTop: 20 }}
                            onPress={() => this.props.navigation.goBack()}
                        >
                            <View style={{ height: 45, width: 45, borderRadius: 100, backgroundColor: 'rgba(0,0,0,0.7)', justifyContent: 'center', paddingLeft: 7.5, marginLeft: 25, }}>
                                <Icon size={30} style={{ paddingLeft: 7.5, color: 'white' }} name='ios-arrow-back' />
                            </View>
                        </TouchableOpacity>
                        <View>

                            <View style={styles.containerImage}>
                                <Image style={styles.containerPhoto}
                                    source={require('./../assets/images/profile.png')}
                                />
                            </View>
                        </View>
                    </ImageBackground >
                    <View style={{ height: '100%', paddingBottom: hp('35%') }}>
                        <View style={{ flex: 1 }}>
                            <View style={{ width: '100%' }} >
                                <Text style={styles.textStyle}>Gal Gadot</Text>
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                style={styles.locationIcon}
                                source={require('./../assets/images/location_icon.png')}
                                resizeMode='contain'
                            />
                            <View style={{ flex: 1 }}>
                                <Text style={[styles.textStyle2, { marginLeft: 14 }]}>Kalimantan Selatan</Text>
                            </View>
                        </View>
                        <View style={{ width: '100%', flexDirection: 'row' }}>
                            <Image
                                style={styles.emojiIcon}
                                source={require('./../assets/images/Cukup.png')}
                                resizeMode='contain'
                            />
                            <View style={{ flex: 1 }}>
                                <Text style={[styles.textStyle2, { marginLeft: 9 }]}>Rating: Cukup (35)</Text>
                            </View>
                        </View>
                        <View style={{ height: 60, justifyContent: 'center', flex: 1, marginTop: 30 }}>
                            <Text style={{ fontFamily: 'Quicksand-Regular', textAlign: 'center', marginLeft: 20, marginRight: 20, fontSize: 13, color: 'black' }}>Lulusan S2 Interior Design di Singapura -
                        Mendapatkan rekor MURI "Pembuat Meja dengan 10 Fungsi" - Pemenang Design Interior Awards 2017 - Resmi anggota ASEPHI</Text>
                        </View>
                        <View style={{ width: '100%', height: 45, paddingLeft: 20, paddingRight: 20, marginTop: 15 }}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('EditProfileCrafter')}
                                style={{
                                    backgroundColor: 'black', width: '100%', height: 40,
                                    borderRadius: 15, justifyContent: 'center'
                                }}
                            >
                                <Text style={{ fontFamily: 'Quicksand-Bold', color: 'white', fontSize: 13, textAlign: 'center' }}>Edit Profil</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: '100%', marginTop: 25, height: '100%' }}>
                            <View style={styles.card}>
                                <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Gambar')}>
                                    {/* onPress={() => { this.setState({ imageExpanded: !imageExpanded }); console.log(this.state.imageExpanded, 'Request Klik') }} */}
                                    <View style={{ flex: 1, flexDirection: 'row', paddingRight: 15, paddingLeft: 15, alignItems: 'center' }}>
                                        <Text style={{ fontSize: 15, fontFamily: 'Quicksand-Bold', color: 'black' }}>Gambar</Text>
                                        <View style={{ flex: 1 }}>
                                            <Icon size={30} style={{ alignSelf: 'flex-end' }} name='md-arrow-dropright' />
                                        </View>
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                            <View style={styles.card}>
                                <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('addNoteOnCrafterMenu')}>
                                    {/* onPress={() => { this.setState({ imageExpanded: !imageExpanded }); console.log(this.state.imageExpanded, 'Request Klik') }} */}
                                    <View style={{ flex: 1, flexDirection: 'row', paddingRight: 15, paddingLeft: 15, alignItems: 'center' }}>
                                        <Text style={{ fontSize: 15, fontFamily: 'Quicksand-Bold', color: 'black' }}>Catatan</Text>
                                        <View style={{ flex: 1 }}>
                                            <Icon size={30} style={{ alignSelf: 'flex-end' }} name='md-arrow-dropright' />
                                        </View>
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                            <View style={styles.card}>
                                <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('UlasanOnCrafterProfile')}>
                                    {/* onPress={() => { this.setState({ imageExpanded: !imageExpanded }); console.log(this.state.imageExpanded, 'Request Klik') }} */}
                                    <View style={{ flex: 1, flexDirection: 'row', paddingRight: 15, paddingLeft: 15, alignItems: 'center' }}>
                                        <Text style={{ fontSize: 15, fontFamily: 'Quicksand-Bold', color: 'black' }}>Ulasan</Text>
                                        <View style={{ flex: 1 }}>
                                            <Icon size={30} style={{ alignSelf: 'flex-end' }} name='md-arrow-dropright' />
                                        </View>
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                            <View style={styles.card}>
                                <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('AkunBank')}>
                                    {/* onPress={() => { this.setState({ imageExpanded: !imageExpanded }); console.log(this.state.imageExpanded, 'Request Klik') }} */}
                                    <View style={{ flex: 1, flexDirection: 'row', paddingRight: 15, paddingLeft: 15, alignItems: 'center' }}>
                                        <Text style={{ fontSize: 15, fontFamily: 'Quicksand-Bold', color: 'black' }}>Akun Bank</Text>
                                        <View style={{ flex: 1 }}>
                                            <Icon size={30} style={{ alignSelf: 'flex-end' }} name='md-arrow-dropright' />
                                        </View>
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                            <View style={styles.card}>
                                <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('crafterMenuListOrder')}>
                                    {/* onPress={() => { this.setState({ imageExpanded: !imageExpanded }); console.log(this.state.imageExpanded, 'Request Klik') }} */}
                                    <View style={{ flex: 1, flexDirection: 'row', paddingRight: 15, paddingLeft: 15, alignItems: 'center' }}>
                                        <Text style={{ fontSize: 15, fontFamily: 'Quicksand-Bold', color: 'black' }}>Pesanan Saya</Text>
                                        <View style={{ flex: 1 }}>
                                            <Icon size={30} style={{ alignSelf: 'flex-end' }} name='md-arrow-dropright' />
                                        </View>
                                    </View>
                                </TouchableWithoutFeedback>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        borderTopWidth: 2,
        borderColor: '#ddd',
        // paddingLeft: 15, paddingRight: 15
        padding: 10,
    },
    menuContainerStyle: {
        flex: 4
    },
    backgroundStyle: {
        width: '100%',
        height: '30%',
    },
    containerImage: {
        justifyContent: 'flex-end',
        top: 155,
        left: 15,
        position: 'absolute',
    },
    containerPhoto: {
        height: 155,
        width: 155,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 5
    },
    textStyle: {
        marginTop: 10,
        marginLeft: '50%',
        fontFamily: 'Quicksand-Bold',
        fontSize: 15,
        alignSelf: 'auto',
        color: 'black'
    },
    textStyle2: {
        marginTop: 7,
        fontFamily: 'Quicksand-Regular',
        fontSize: 13,
        alignSelf: 'auto',
        marginRight: 10,
        color: 'black'
    },
    locationIcon: {
        marginLeft: '50%',
        height: 15,
        width: 10,
        marginTop: 7
    },
    emojiIcon: {
        marginLeft: '48.5%',
        height: 20,
        width: 20,
        marginTop: 5
    },
    item: {
        height: 80,
        width: 90,
        borderRadius: 2,
        alignSelf: 'stretch',
        resizeMode: 'cover',

    },
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})

export default MenuCrafterPage;