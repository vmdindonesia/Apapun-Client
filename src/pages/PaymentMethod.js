import React, { Component } from 'react'
import { View, Text, ImageBackground, Image, AsyncStorage, TouchableOpacity, ScrollView, StyleSheet, FlatList, TouchableHighlight, TouchableWithoutFeedback, StatusBar, Modal } from 'react-native'
import { Container, ContainerSection, Button, Input, InputSearch, InputDate } from '../components/common';
// import axios from 'axios';
import { COLOR } from './../shared/config';
import SwitchToggle from 'react-native-switch-toggle';
import { Card, CheckBox } from 'react-native-elements'



export class PaymentMethodPage extends React.Component {

    static navigationOptions = {
        headerTitle: 'Pembayaran'
    }

    constructor(props) {
        super(props);
        this.state = {
            CreditCardPayment: false,
            BankTransferPayment: false,
        };
    }

    StatusPayment = (value) => {
        console.log(value, 'Value')
        this.setState({
            StatusPayment: value,
            images: [
                'https://cdn.pixabay.com/photo/2016/04/28/00/28/shell-1357930_960_720.jpg',
                'https://cdn.pixabay.com/photo/2016/04/28/00/28/shell-1357930_960_720.jpg',
                'https://cdn.pixabay.com/photo/2016/04/28/00/28/shell-1357930_960_720.jpg',
                'https://cdn.pixabay.com/photo/2016/04/28/00/28/shell-1357930_960_720.jpg',
                'https://cdn.pixabay.com/photo/2016/04/28/00/28/shell-1357930_960_720.jpg',
                'https://cdn.pixabay.com/photo/2016/04/28/00/28/shell-1357930_960_720.jpg',
            ]
        })
    }

    render() {

        const {
            CreditCardPayment,
            BankTransferPayment
        } = this.state

        return (
            <View style={{ flex: 1, backgroundColor: '#e5e5e5' }}>

                <ScrollView>


                    <View style={{
                        flex: 1,
                        height: 200,
                        // backgroundColor: 'skyblue',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}>

                        <View style={{ alignItems: 'center', flexDirection: 'row', height: 35, width: '92.5%', margin: 5 }}>
                            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 15 }}>Jumlah Biaya </Text>
                        </View>

                        <View style={{ flex: 1, flexDirection: 'column', width: '100%', backgroundColor: 'white', alignItems: 'center' }}>
                            <View style={{ width: '90%', height: 25, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 0.5, borderBottomColor: '#e5e5e5' }}>
                                <Text style={{ color: 'black', fontSize: 12, }}>Harga Produk</Text>
                                <View style={{ flex: 1, alignItems: 'flex-end', }}>
                                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 12 }}>Rp. 100.000</Text>
                                </View>
                            </View>

                            <View style={{ width: '90%', height: 25, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 0.5, borderBottomColor: '#e5e5e5' }}>
                                <Text style={{ color: 'black', fontSize: 12, }}>Pengiriman</Text>
                                <View style={{ flex: 1, alignItems: 'flex-end', }}>
                                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 12 }}>Rp. 25.000</Text>
                                </View>
                            </View>

                            <View style={{ width: '90%', height: 25, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 0.5, borderBottomColor: '#e5e5e5' }}>
                                <Text style={{ color: 'black', fontSize: 12, }}>Jumlah yang Dipesan</Text>
                                <View style={{ flex: 1, alignItems: 'flex-end', }}>
                                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 12 }}>1 Pcs</Text>
                                </View>
                            </View>

                            <View style={{ width: '90%', height: 60, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 0.5, borderBottomColor: '#e5e5e5' }}>
                                <Text style={{ color: 'red', fontWeight: 'bold', fontSize: 15, }}>TOTAL</Text>
                                <View style={{ flex: 1, alignItems: 'flex-end', }}>
                                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 17 }}>Rp. 125.000</Text>
                                </View>
                            </View>

                        </View>

                    </View>


                    <View style={{
                        flex: 1,
                        height: 30,
                        // backgroundColor: 'skyblue',
                        flexDirection: 'column',
                        // alignItems: 'center'
                        // marginTop: 5
                    }}>

                        <View style={{ alignItems: 'center', flexDirection: 'row', height: 20, width: '92.5%', margin: 5 }}>
                            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 15 }}>Metode Pembayaran</Text>
                        </View>
                    </View>

                    <View style={{ flex: 1, backgroundColor: 'white', marginLeft: 5, marginRight: 5, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity style={{ justifyContent: 'center' }}
                            onPress={() => this.setState({ CreditCardPayment: !this.state.CreditCardPayment })}
                        >
                            <View style={{ width: '92.5%', flexDirection: 'row', justifyContent: 'center', margin: 10 }}>
                                <View style={{ flexDirection: 'column', width: '75%' }}>
                                    <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}>Kartu Kredit</Text>
                                    <Text style={{ color: 'black', fontSize: 12 }}>pembayaran kartu kredit berlaku untuk pemegang visa dan mastercard </Text>
                                </View>
                                <View style={{ flexDirection: 'row', width: '25%', alignContent: 'center', alignItems: 'center' }}>
                                    <View style={{ flex: 1 }}>
                                        <Image
                                            style={{ width: 35, height: 35, alignSelf: 'center' }}
                                            source={require('./../assets/images/ic_visa.png')}
                                            resizeMode='contain'
                                        />
                                    </View>
                                    <View style={{ flex: 1 }}>
                                        <Image
                                            style={{ width: 35, height: 35, alignSelf: 'center' }}
                                            source={require('./../assets/images/ic_mastercard.png')}
                                            resizeMode='contain'
                                        />
                                    </View>


                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>

                    {
                        CreditCardPayment === true ?
                            < View style={{
                                flex: 1,
                                height: 500,
                                backgroundColor: 'white',
                                flexDirection: 'column',
                                // alignItems: 'center'
                                marginBottom: 5,
                                marginLeft: 5,
                                marginRight: 5
                            }}>

                                <View style={{ borderWidth: 0.5, borderColor: '#e5e5e5', backgroundColor: '#e5e5e5', width: '80%', alignSelf: 'center', flexDirection: 'row' }} />

                                <View style={{ height: 150, margin: 10 }}>

                                    <View style={{ marginTop: 5, height: 20, backgroundColor: 'white' }}>
                                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 15 }}>Kartu Yang Disimpan</Text>
                                    </View>

                                    <View style={{ flex: 1, flexDirection: 'row', marginTop: 5, marginBottom: 5, height: 20, backgroundColor: 'white' }}>

                                        <FlatList
                                            data={this.state.images}
                                            horizontal
                                            showsHorizontalScrollIndicator={false}
                                        />
                                    </View>

                                </View>


                                <View style={{ height: 80, marginLeft: 10, marginLeft: 10 }}>
                                    <View style={{ height: 20, }}>
                                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 15 }}>Nomor Kartu Kredit</Text>
                                    </View>
                                    <ContainerSection>
                                        <Input
                                            placeholder=''
                                        />
                                    </ContainerSection>
                                </View>

                                <View style={{ height: 80, marginLeft: 10, marginLeft: 10 }}>
                                    <View style={{ flex: 2, flexDirection: 'row' }}>
                                        <View style={{ flex: 1 }}>
                                            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 15, }}>Nomor Kartu Kredit</Text>
                                            <ContainerSection>
                                                <Input
                                                    placeholder=''
                                                />
                                            </ContainerSection>
                                        </View>
                                        <View style={{ flex: 1 }}>
                                            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 15, }}>CCV/CCV</Text>
                                            <ContainerSection>
                                                <Input
                                                    placeholder=''
                                                />
                                            </ContainerSection>
                                        </View>

                                    </View>
                                </View>

                                <View style={{ height: 80, marginLeft: 10, marginLeft: 10 }}>
                                    <View style={{ height: 20, backgroundColor: 'white' }}>
                                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 15 }}>Nama Pemegang Kartu</Text>
                                    </View>
                                    <ContainerSection>
                                        <Input
                                            placeholder='please input your number of credit card'
                                        />
                                    </ContainerSection>
                                </View>


                            </View>
                            :
                            <View />

                    }



                    {/* <View style={{ flex: 1, backgroundColor: 'white', margin: 5, flexDirection: 'column', justifyContent: 'center' }}>
                        <TouchableOpacity style={{ justifyContent: 'center' }}
                            onPress={() => this.setState({ BankTransferPayment: !this.state.BankTransferPayment })}
                        >

                            <View style={{ flexDirection: 'column', width: '70%', margin: 12.5 }}>
                                <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}>Bank Transfer</Text>
                                <Text style={{ color: 'black', fontSize: 12 }}>pembayaran dapat dilakukan via ATM, Internet Bank atau Mobile Banking. </Text>
                            </View>

                        </TouchableOpacity>
                    </View>

                    {
                        BankTransferPayment === true ?
                            < View style={{
                                flex: 1,
                                height: 60,
                                backgroundColor: 'white',
                                flexDirection: 'column',
                                // alignItems: 'center'
                                marginBottom: 5,
                                marginLeft: 5,
                                marginRight: 5,
                                borderBottomWidth: 1,

                            }}>


                            </View>
                            :
                            <View />

                    } */}







                </ScrollView>

            </View >
        )
    }

}




const styles = StyleSheet.create({


});

export default PaymentMethodPage;

