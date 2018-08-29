import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, AsyncStorage, TouchableOpacity, ScrollView, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, StatusBar, Modal } from 'react-native'
import { Container, ContainerSection, Button, Input, InputDate } from '../components/common';
// import axios from 'axios';
import { COLOR } from '../shared/config';
import Icon from 'react-native-vector-icons/Ionicons';
import SwitchToggle from 'react-native-switch-toggle';


export class SettingAddressDetailBuyerPage extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        headerLeft:
            <TouchableOpacity
                onPress={() => { navigation.goBack(); console.log(navigation.goBack(), 'Props Order') }}
            >
                <Icon size={30} style={{ marginLeft: 25, color: '#EF1C25' }} name='ios-arrow-back' />
            </TouchableOpacity>,
        headerTitle: 'Pengaturan Alamat'
    });


    constructor(props) {
        super(props);
        this.state = {
            mainAddress: false
        };
    }

    onPressMainAddress = () => {
        this.setState({ mainAddress: !this.state.mainAddress });
    }


    render() {
        return (


            <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>

                <View style={{ flex: 1, height: 80, marginTop: 35, marginLeft: 15, marginRight: 15 }}>

                    <View style={{ flex: 1, }}>
                        <View >
                            <Text style={{ paddingLeft: 5, fontFamily: 'Quicksand-Bold', fontSize: 15, color: 'black' }}>Nama Penerima</Text>
                        </View>
                        <View>
                            <ContainerSection>
                                <Input
                                    placeholder=''
                                />
                            </ContainerSection>
                        </View>
                    </View>

                </View>


                <View style={{ flex: 1, height: 100, marginLeft: 15, marginRight: 15, marginTop: 5 }}>
                    <View >
                        <Text style={{ paddingLeft: 5, fontFamily: 'Quicksand-Bold', fontSize: 15, color: 'black' }}>Simpan Alamat sebagai</Text>
                        <Text style={{ paddingLeft: 5, fontFamily: 'Quicksand-Regular', fontSize: 13, color: '#9D9D9D' }} >(contoh : alamat rumah, alamat kantor...)</Text>
                    </View>
                    <View>
                        <ContainerSection>
                            <Input
                                placeholder=''
                            />
                        </ContainerSection>
                    </View>
                </View>

                <View style={{ flex: 1, height: 330, marginLeft: 15, marginRight: 15, marginTop: 3 }}>
                    <View style={{ flex: 1, height: 80, marginTop: 3 }}>
                        <View >
                            <Text style={{ paddingLeft: 5, fontFamily: 'Quicksand-Bold', fontSize: 15, color: 'black' }}>Provinsi</Text>
                        </View>
                        <View>
                            <ContainerSection>
                                <Input
                                    placeholder=''
                                />
                            </ContainerSection>
                        </View>
                    </View>

                    <View style={{ flex: 1, height: 80, marginTop: 3 }}>
                        <View >
                            <Text style={{ paddingLeft: 5, fontFamily: 'Quicksand-Bold', fontSize: 15, color: 'black' }}>Kota</Text>
                        </View>
                        <View>
                            <ContainerSection>
                                <Input
                                    placeholder=''
                                />
                            </ContainerSection>
                        </View>
                    </View>

                    <View style={{ flex: 1, height: 80, marginTop: 3 }}>
                        <View >
                            <Text style={{ paddingLeft: 5, fontFamily: 'Quicksand-Bold', fontSize: 15, color: 'black' }}>Kecamatan</Text>
                        </View>
                        <View>
                            <ContainerSection>
                                <Input
                                    placeholder=''
                                />
                            </ContainerSection>
                        </View>
                    </View>

                    <View style={{ flex: 1, height: 80, marginTop: 3 }}>
                        <View >
                            <Text style={{ paddingLeft: 5, fontFamily: 'Quicksand-Bold', fontSize: 15, color: 'black' }}>Informasi Tambahan</Text>
                        </View>
                        <View>
                            <ContainerSection>
                                <Input
                                    placeholder=''
                                />
                            </ContainerSection>
                        </View>
                    </View>

                </View>


                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', height: 100, marginLeft: 15, marginRight: 15 }}>


                    <Text style={{ paddingLeft: 5, fontFamily: 'Quicksand-Bold', fontSize: 15, color: 'black' }}>Atur sebagai Alamat Utama</Text>

                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', height: '100%' }}>
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
                            switchOn={this.state.mainAddress}
                            onPress={this.onPressMainAddress}
                            circleColorOff='white'
                            circleColorOn='#ef1c25'
                        />
                    </View>
                </View>

                <View style={{ flex: 1, justifyContent: 'center', height: 45, marginLeft: 20, marginTop: 10, marginRight: 20, borderRadius: 30, backgroundColor: '#ef1c25', alignContent: 'center' }}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.navigate('SettingAddressBuyer')}>
                        <Text style={{ textAlign: 'center', color: 'white', fontSize: 15, fontFamily: 'Quicksand-Bold' }}>SIMPAN</Text>
                    </TouchableOpacity>
                </View>

                <View style={{ height: 30, flex: 1, }} />

            </ScrollView >



        )
    }

}

const styles = StyleSheet.create({
    textStyle: {
        color: 'black',
        marginLeft: 5,
        fontSize: 12,

        fontFamily: 'Quicksand-Regular'
    },
    buttonJoin: {
        backgroundColor: '#ef1c25',
        borderRadius: 20,
        height: 35,
        width: 180,
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 50
    },



});

export default SettingAddressDetailBuyerPage