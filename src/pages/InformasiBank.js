import React, { Component } from 'react'
import { View, Text, ImageBackground, Image, AsyncStorage, TouchableOpacity, ScrollView, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, StatusBar, Modal } from 'react-native'
import { Container, ContainerSection, Button, Input, InputDate } from '../components/common';
// import axios from 'axios';
import { COLOR } from './../shared/config';
import { CheckBox } from 'react-native-elements';

export class InformasiBankPage extends React.Component {

    static navigationOptions = {
        header: null
    }
    render() {
        return (
            <ScrollView
                style={styles.containerStyle}
                keyboardShouldPersistTaps="always"
                ref={ref => this.scrollView = ref}
            >

                <View style={{ flexDirection: 'row', height: 80, width: '100%', alignItems: 'center' }}>


                    <Image style={{ height: 18, width: 18, borderRadius: 0, }}
                        source={require('./../assets/images/envelope.png')}
                    />

                    <Text style={{ fontSize: 20, fontFamily: 'Quicksand-Bold', paddingLeft: 10, alignItems: 'center' }}>
                        total apresiasi design
                        </Text>
                </View>

                    <Text style={{ fontSize: 30, fontFamily: 'Quicksand-Bold'}}>
                        Rp. 120.000
                    </Text>

             <ContainerSection>
                    <Input
                        Text=''
                        label='Nama Depan'
                    />
                </ContainerSection>

                <ContainerSection>
                    <Input
                        Text=''
                        label='Nama Belakang'
                    />
                </ContainerSection>

                <ContainerSection>
                    <Input
                        Text=''
                        label='No Rekening'
                    />
                </ContainerSection>

                <ContainerSection>
                    <Input
                        Text=''
                        label='Nama Bank'
                    />
                </ContainerSection>

                <ContainerSection>
                    <Input
                        Text=''
                        label='Cabang'
                    />
                </ContainerSection>

                <Text style={[styles.pickerTextStyle, { marginLeft: 5, marginTop: 10 }]}>Photo Profil Asli</Text>
                <ContainerSection>
                    <View style={{ flex: 1, width: '100%' }}>

                        <View>
                            <Image
                                source={require('../assets/images/ariel.jpg')}
                                style={{ width: '100%', height: 300 }}
                                resizeMode='cover'
                            />

                        </View>

                    </View>
                </ContainerSection>


                <Text style={[styles.pickerTextStyle, { marginLeft: 5, marginTop: 10 }]}>Photo KTP</Text>
                <ContainerSection>
                    <View style={{ flex: 1, width: '100%' }}>

                        <View>
                            <Image
                                source={require('../assets/images/ktp.jpg')}
                                style={{ width: '100%', height: 300 }}
                                resizeMode='cover'
                            />

                        </View>

                    </View>
                </ContainerSection>

                <Text style={[styles.pickerTextStyle, { marginLeft: 5, marginTop: 10 }]}>Photo Rekening Anda</Text>
                <ContainerSection>
                    <View style={{ flex: 1, width: '100%' }}>

                        <View>
                            <Image
                                source={require('../assets/images/rekening.jpg')}
                                style={{ width: '100%', height: 300 }}
                                resizeMode='cover'
                            />

                        </View>

                    </View>
                </ContainerSection>


            </ScrollView >
        )
    }
}


const styles = StyleSheet.create({
    button: {
        backgroundColor: 'red',
        borderRadius: 20,
        height: 35,
        width: 180,
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 20
    },


})

export default InformasiBankPage