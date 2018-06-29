import React, { Component } from 'react'
import { View, Text, ImageBackground, Image, AsyncStorage, TouchableOpacity, ScrollView, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, StatusBar, Modal } from 'react-native'
import { Container, ContainerSection, Button, Input, InputDate } from '../components/common';
// import axios from 'axios';
import { COLOR } from './../shared/config';



export class SettingAddressDetailBuyerPage extends React.Component {

    static navigationOptions = {
        headerTitle: 'Edit Detail Address'
    }

    render() {
        return (
            < View
                style={{ width: '100%', height: '100%', backgroundColor: '#e8e8e8' }
                }
            >
                <StatusBar
                    backgroundColor={COLOR.headerBar}
                    barStyle="dark-content"
                />

                <ScrollView>

                    <View style={{ paddingTop: 20, height: 90 }}>
                        <View >
                            <Text style={styles.textStyle}>Nama Penerima</Text>
                        </View>
                        <View>
                            <ContainerSection>
                                <Input
                                    placeholder=''
                                />
                            </ContainerSection>
                        </View>
                    </View>


                    <View style={{ paddingTop: 20, height: 90 }}>
                        <View >
                            <Text style={styles.textStyle}>Simpan Alamat sebagai</Text>
                            <Text> alamat rumah, alamat kantor</Text>
                        </View>
                        <View>
                            <ContainerSection>
                                <Input
                                    placeholder=''
                                />
                            </ContainerSection>
                        </View>
                    </View>

                    <View style={{ paddingTop: 20, height: 90 }}>
                        <View >
                            <Text style={styles.textStyle}>Location</Text>
                            <Text> pastikan lokasi yang anda tandai pada peta sesuai dengan alamat yang anda isi</Text>
                        </View>
                        <View>
                            <ContainerSection>
                                <Input
                                    placeholder=''
                                />
                            </ContainerSection>
                        </View>
                    </View>

                    <View style={{ paddingTop: 20, height: 90 }}>
                        <View >
                            <Text style={styles.textStyle}>Provinsi</Text>
                        </View>
                        <View>
                            <ContainerSection>
                                <Input
                                    placeholder=''
                                />
                            </ContainerSection>
                        </View>
                    </View>

                    <View style={{ paddingTop: 20, height: 90 }}>
                        <View >
                            <Text style={styles.textStyle}>Kota</Text>
                        </View>
                        <View>
                            <ContainerSection>
                                <Input
                                    placeholder=''
                                />
                            </ContainerSection>
                        </View>
                    </View>

                    <View style={{ paddingTop: 20, height: 90 }}>
                        <View >
                            <Text style={styles.textStyle}>Kecamatan</Text>
                        </View>
                        <View>
                            <ContainerSection>
                                <Input
                                    placeholder=''
                                />
                            </ContainerSection>
                        </View>
                    </View>

                    <View style={{ paddingTop: 20, height: 90 }}>
                        <View >
                            <Text style={styles.textStyle}>Informasi Tambahan</Text>
                        </View>
                        <View>
                            <ContainerSection>
                                <Input
                                    placeholder=''
                                />
                            </ContainerSection>
                        </View>
                    </View>

                     <Text style={{ marginLeft: 5, marginTop: 10, fontWeight: 'bold' }}>Atur sebagai Alamat Utama</Text>


                    <TouchableOpacity style={styles.buttonJoin}
                        onPress={() => this.props.navigation.navigate('SettingAddressBuyerPage')}>
                        <Text style={{ textAlign: 'center', color: 'white', fontSize: 15, fontFamily: 'Quicksand-Bold' }}>SIMPAN</Text>
                    </TouchableOpacity>


                </ScrollView>
            </ View >


        )
    }

}

const styles = StyleSheet.create({
    textStyle: {
        color: 'black',
        marginLeft: 5,
        fontSize: 12,
        fontWeight: 'bold',
        fontFamily: 'Quicksand-Regular'
    },
    buttonJoin: {
        backgroundColor: 'red',
        borderRadius: 20,
        height: 35,
        width: 180,
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 50
    },



});

export default SettingAddressDetailBuyerPage