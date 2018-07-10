import React, { Component } from 'react'
import { View, Text, ImageBackground, Image, AsyncStorage, TouchableOpacity, ScrollView, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, StatusBar, Modal } from 'react-native'
import { Container, ContainerSection, Button, Input, InputSearch, InputDate } from '../components/common';
// import axios from 'axios';
import { COLOR } from './../shared/config';
import SwitchToggle from 'react-native-switch-toggle';



export class SettingManuPage extends React.Component {

    static navigationOptions = {
        headerTitle: 'Pengaturan'
    }

    constructor(props) {
        super(props);
        this.state = {
            backgroundMusicOn: false,
            notificationOn: false,
            vibrateOn: false
        };
    }

    onPress1 = () => {
        this.setState({ backgroundMusicOn: !this.state.backgroundMusicOn });
    }

    onPress2 = () => {
        this.setState({ notificationOn: !this.state.notificationOn });
    }

    onPress3 = () => {
        this.setState({ vibrateOn: !this.state.vibrateOn });
    }

    render() {

        return (
            <View style={{ flex: 1, backgroundColor: '#e5e5e5' }}>

                <ScrollView>

                    <View style={{
                        flex: 1,
                        height: 300,
                        // backgroundColor: 'skyblue',
                        marginTop: 15,
                        alignContent: 'center'
                    }}>
                        <View>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, paddingLeft: 10, color: 'black' }}>Atur Aplikasi</Text>
                        </View>

                        <View style={{
                            flex: 4,
                            flexDirection: 'column',
                            backgroundColor: 'white',
                            marginTop: 10
                        }}>

                            <View style={{
                                flex: 1, flexDirection: 'row', marginRight: 20, marginLeft: 20, marginTop: 5,
                                alignItems: 'center', borderBottomColor: '#e5e5e5', borderBottomWidth: 1.5
                            }}>
                                <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>Ringtone</Text>
                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                                    <Text style={{ fontSize: 15, color: '#bcbcbc' }}>Default 1</Text>
                                </View>
                            </View>

                            <View style={{
                                flex: 1, flexDirection: 'row', marginRight: 20, marginLeft: 20, marginTop: 5,
                                alignItems: 'center', borderBottomColor: '#e5e5e5', borderBottomWidth: 1.5
                            }}>
                                <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>Background Music</Text>
                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                                    <SwitchToggle
                                        containerStyle={{
                                            // marginTop: 16,
                                            width: 65,
                                            height: 30,
                                            borderRadius: 25,
                                            backgroundColor: '#ccc',
                                            padding: 5,
                                        }}
                                        circleStyle={{
                                            width: 20,
                                            height: 20,
                                            borderRadius: 19,
                                            backgroundColor: 'white', // rgb(102,134,205)
                                        }}
                                        switchOn={this.state.backgroundMusicOn}
                                        onPress={this.onPress1}
                                        circleColorOff='white'
                                        circleColorOn='red'
                                    />
                                </View>
                            </View>

                            <View style={{
                                flex: 1, flexDirection: 'row', marginRight: 20, marginLeft: 20, marginTop: 5,
                                alignItems: 'center', borderBottomColor: '#e5e5e5', borderBottomWidth: 1.5
                            }}>
                                <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>Notifikasi</Text>
                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                                    <SwitchToggle
                                        containerStyle={{
                                            // marginTop: 16,
                                            width: 65,
                                            height: 30,
                                            borderRadius: 25,
                                            backgroundColor: '#ccc',
                                            padding: 5,
                                        }}
                                        circleStyle={{
                                            width: 20,
                                            height: 20,
                                            borderRadius: 19,
                                            backgroundColor: 'white', // rgb(102,134,205)
                                        }}
                                        switchOn={this.state.notificationOn}
                                        onPress={this.onPress2}
                                        circleColorOff='white'
                                        circleColorOn='red'
                                    />
                                </View>
                            </View>

                            <View style={{
                                flex: 1, flexDirection: 'row', marginRight: 20, marginLeft: 20, marginTop: 5,
                                alignItems: 'center', borderBottomColor: '#e5e5e5', borderBottomWidth: 1.5, marginBottom: 15
                            }}>
                                <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>Vibrate</Text>
                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                                    <SwitchToggle
                                        containerStyle={{
                                            // marginTop: 16,
                                            width: 65,
                                            height: 30,
                                            borderRadius: 25,
                                            backgroundColor: '#ccc',
                                            padding: 5,
                                        }}
                                        circleStyle={{
                                            width: 20,
                                            height: 20,
                                            borderRadius: 19,
                                            backgroundColor: 'white', // rgb(102,134,205)
                                        }}
                                        switchOn={this.state.vibrateOn}
                                        onPress={this.onPress3}
                                        circleColorOff='white'
                                        circleColorOn='red'
                                    />
                                </View>
                            </View>

                        </View>
                    </View>



                    <View style={{
                        flex: 1,
                        height: 350,
                        // backgroundColor: 'skyblue',
                        marginTop: 15,
                        alignContent: 'center'
                    }}>
                        <View>
                            <Text style={{ fontWeight: 'bold', fontSize: 15, paddingLeft: 10, color: 'black' }}>Tentang Kami</Text>
                        </View>

                        <View style={{
                            flex: 5,
                            flexDirection: 'column',
                            backgroundColor: 'white',
                            marginTop: 10,
                        }}>

                            <View style={{
                                flex: 1, flexDirection: 'row', marginRight: 20, marginLeft: 20, marginTop: 5,
                                alignItems: 'center', borderBottomColor: '#e5e5e5', borderBottomWidth: 1.5
                            }}>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('TermsAndAgreement')}
                                >
                                    <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>Syarat dan Ketentuan</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{
                                flex: 1, flexDirection: 'row', marginRight: 20, marginLeft: 20,
                                alignItems: 'center', borderBottomColor: '#e5e5e5', borderBottomWidth: 1.5
                            }}>
                                <TouchableOpacity>
                                    <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>Kebijakan Privasi</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{
                                flex: 1, flexDirection: 'row', marginRight: 20, marginLeft: 20,
                                alignItems: 'center', borderBottomColor: '#e5e5e5', borderBottomWidth: 1.5
                            }}>
                                <TouchableOpacity>
                                    <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>Review</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{
                                flex: 1, flexDirection: 'row', marginRight: 20, marginLeft: 20,
                                alignItems: 'center', borderBottomColor: '#e5e5e5', borderBottomWidth: 1.5
                            }}>
                                <TouchableOpacity
                                    onPress={() => this.props.navigation.navigate('ThanksTo')}
                                >
                                    <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>Terima Kasih Kepada</Text>
                                </TouchableOpacity>
                            </View>

                            <View style={{
                                flex: 1, flexDirection: 'row', marginRight: 20, marginLeft: 20, marginTop: 5,
                                marginBottom: 20, alignItems: 'center', borderBottomColor: '#e5e5e5', borderBottomWidth: 1.5
                            }}>
                                <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>Versi</Text>
                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                                    <Text style={{ fontSize: 15, color: '#bcbcbc' }}>v.0.0.0 </Text>
                                </View>
                            </View>

                        </View>
                    </View>

                    <View style={{ flex: 1, height: 50 }} />

                </ScrollView>

            </View >
        )
    }

}


const styles = StyleSheet.create({


});

export default SettingManuPage

