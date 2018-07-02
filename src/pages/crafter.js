import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, TouchableOpacity, View, Image, Alert } from 'react-native';

export class CrafterPage extends React.Component {

    constructor(props) {
        super(props)
    }

    alert = (msg) => {
        console.log(msg)
    }

    render() {
        return (
            <View>
                <ScrollView>
                    <View>
                        <Text style={{ fontFamily: 'Quicksand-Bold', textAlign: 'center', marginTop: 10 }}>MOHON TUNGGU{'\n'}</Text>
                        <Text style={{ fontFamily: 'Quicksand-Regular', textAlign: 'center', marginLeft: 15, marginRight: 15 }}>Sedang dalam proses mencari crafter untuk produkmu</Text>
                    </View>
                    <View style={styles.containerCrafter}>
                        <View style={styles.containerBoxProfile}>
                            <View style={styles.containerImage}>
                                <Image
                                    style={styles.imageCrafter}
                                    source={require('./../assets/images/roy-kiyoshi.jpg')}
                                    resizeMode='cover'
                                />
                            </View>
                            <View style={styles.boxName}>
                                <View>
                                    <Text style={{ textAlign: 'right' }}>Sempurna{'\n'}</Text>
                                    <Text style={{ fontFamily: 'Quicksand-Bold' }}>Roy Kiyoshi</Text>
                                    <View>
                                        <Image
                                            style={{ width: 10, height: 15 }}
                                            source={require('./../assets/images/black_loc_mainprof.png')}
                                        />
                                    </View>
                                    <Text>Indonesia, Jakarta</Text>
                                </View>
                            </View>
                        </View>
                        <View style={styles.containerBoxProfile}>
                            <View style={styles.containerImage}>
                                <Image
                                    style={styles.imageCrafter}
                                    source={require('./../assets/images/gal-gadot.jpg')}
                                    resizeMode='cover'
                                />
                            </View>
                            <View style={styles.boxName}>
                                <View>
                                    <Text style={{ textAlign: 'right' }}>Sempurna{'\n'}</Text>
                                    <Text style={{ fontFamily: 'Quicksand-Bold' }}>Gal Gadot</Text>
                                    <View>
                                        <Image
                                            style={{ width: 10, height: 15 }}
                                            source={require('./../assets/images/black_loc_mainprof.png')}
                                        />
                                    </View>
                                    <Text>Indonesia, Jakarta</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.containerButton}>
                    <TouchableOpacity style={[styles.buttonStop, { backgroundColor: 'orange' }]}>
                        <Text style={{ fontFamily: 'Quicksand-Bold', color: 'white' }}>Berhenti Mencari</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.buttonStop, { backgroundColor: 'red' }]}
                        onPress={() => Alert.alert(
                            'BATALKAN PESANAN',
                            'apakah anda yakin ingin membatalkan pesanannya?',
                            [
                                { text: 'Cancel', onPress: () => console.log('Cancel Pressed!') },
                                { text: 'OK', onPress: this.onDeleteBTN }, //ondelete blm dibuat
                            ],
                        )}>
                        >
                        <Text style={{ fontFamily: 'Quicksand-Bold', color: 'white' }}>Batalkan Pesanan</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerCrafter: {
        flexDirection: 'row',
        marginTop: 10,
        height: 202,
        width: '100%',
        marginRight: 5,
        marginLeft: 10
    },
    containerBoxProfile: {
        width: 150,
        height: 200,
        flex: 3,
        flexDirection: 'column'
    },
    containerImage: {
        flex: 1,
        marginLeft: 3
    },
    imageCrafter: {
        height: 137,
        width: 150
    },
    boxName: {
        backgroundColor: '#ffe',
        borderWidth: 0,
        borderRadius: 1,
        width: '88%',
        height: '32%',
        elevation: 3,
        paddingLeft: 3,
        paddingRight: 3,
    },
    containerButton: {
        width: '95%',
        height: '15%',
        top: 140,
        marginLeft: 10,
        flexDirection: 'row',

    },
    buttonStop: {
        flex: 1,
        borderColor: 0,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25
    }
});

export default CrafterPage;