import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, AsyncStorage, TouchableOpacity, ScrollView, StyleSheet, FlatList, TouchableHighlight, TouchableWithoutFeedback, StatusBar, Modal } from 'react-native'
import { Container, ContainerSection, Button, Input, InputSearch, InputDate } from '../components/common';
// import axios from 'axios';
import { COLOR } from '../shared/config';
import SwitchToggle from 'react-native-switch-toggle';
import { Card, CheckBox } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons';


export class PaymentMethodPage extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        headerLeft:
            <TouchableOpacity
                onPress={() => { navigation.goBack(); console.log(navigation.goBack(), 'Props Order') }}
            >
                <Icon size={30} style={{ marginLeft: 25, color: '#EF1C25' }} name='ios-arrow-back' />
            </TouchableOpacity>,
        headerTitle: 'Pembayaran'
    });

    constructor(props) {
        super(props);
        this.state = {
            CreditCardPayment: false,
            BankTransferPayment: false,
            toggleSecureSave: false
        };
    }

    onPressSecureSave = () => {
        this.setState({ toggleSecureSave: !this.state.toggleSecureSave });
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
            <View style={{ flex: 1, backgroundColor: '#eaeaea' }}>

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
                            <View style={{ width: '90%', height: 30, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 0.5, borderBottomColor: '#e5e5e5' }}>
                                <Text style={{ color: 'black', fontSize: 13, }}>Harga Produk</Text>
                                <View style={{ flex: 1, alignItems: 'flex-end', }}>
                                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 13 }}>Rp. 100.000</Text>
                                </View>
                            </View>

                            <View style={{ width: '90%', height: 30, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 0.5, borderBottomColor: '#e5e5e5' }}>
                                <Text style={{ color: 'black', fontSize: 13, }}>Pengiriman</Text>
                                <View style={{ flex: 1, alignItems: 'flex-end', }}>
                                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 13 }}>Rp. 30.000</Text>
                                </View>
                            </View>

                            <View style={{ width: '90%', height: 27, flexDirection: 'row', alignItems: 'center', borderBottomWidth: 0.5, borderBottomColor: '#e5e5e5' }}>
                                <Text style={{ color: 'black', fontSize: 13, }}>Jumlah yang Dipesan</Text>
                                <View style={{ flex: 1, alignItems: 'flex-end', }}>
                                    <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 13 }}>1 Pcs</Text>
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
                        height: 35,
                        // backgroundColor: 'skyblue',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        // alignItems: 'center'
                        margin: 5
                    }}>

                        {/* <View style={{ alignItems: 'center', flexDirection: 'row', height: 35, width: '92.5%', margin: 5 }}> */}
                        <Text style={{ paddingLeft: 10, color: 'black', fontWeight: 'bold', fontSize: 15 }}>Metode Pembayaran</Text>
                        {/* </View> */}
                    </View>

                    <View style={{ flex: 1, backgroundColor: 'white', marginLeft: 5, marginRight: 5, flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity style={{ justifyContent: 'center' }}
                            onPress={() => this.setState({ CreditCardPayment: !this.state.CreditCardPayment })}
                        >
                            <View style={{ width: '92.5%', flexDirection: 'row', justifyContent: 'center', margin: 10 }}>
                                <View style={{ flexDirection: 'column', width: '75%' }}>
                                    <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}>Kartu Kredit</Text>
                                    <Text style={{ color: 'black', fontSize: 13 }}>pembayaran kartu kredit berlaku untuk pemegang visa dan mastercard </Text>
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
                                height: 680,
                                backgroundColor: 'white',
                                flexDirection: 'column',
                                // alignItems: 'center'
                                marginBottom: 5,
                                marginLeft: 5,
                                marginRight: 5
                            }}>

                                <View style={{ borderWidth: 0.5, borderColor: '#e5e5e5', backgroundColor: '#e5e5e5', width: '80%', alignSelf: 'center', flexDirection: 'row' }} />

                                <View style={{ height: 150, margin: 15 }}>

                                    <View style={{ marginTop: 5, height: 20, }}>
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


                                <View style={{ height: 80, marginLeft: 10, marginRight: 10 }}>
                                    <View style={{ height: 20, }}>
                                        <Text style={{ paddingLeft: 7.5, color: 'black', fontWeight: 'bold', fontSize: 15 }}>Nomor Kartu Kredit</Text>
                                    </View>
                                    <ContainerSection>
                                        <Input
                                            placeholder='please input your number of credit card'
                                        />
                                    </ContainerSection>
                                </View>

                                <View style={{ height: 80, marginLeft: 10, marginRight: 10 }}>
                                    <View style={{ flex: 2, flexDirection: 'row' }}>
                                        <View style={{ flex: 1 }}>
                                            <Text style={{ paddingLeft: 7.5, color: 'black', fontWeight: 'bold', fontSize: 15, }}>Tanggal Kadaluarsa</Text>
                                            <ContainerSection>
                                                <Input
                                                    placeholder=''
                                                />
                                            </ContainerSection>
                                        </View>
                                        <View style={{ flex: 1 }}>
                                            <Text style={{ paddingLeft: 7.5, color: 'black', fontWeight: 'bold', fontSize: 15, }}>CCV/CCV</Text>
                                            <ContainerSection>
                                                <Input
                                                    placeholder=''
                                                />
                                            </ContainerSection>
                                        </View>

                                    </View>
                                </View>

                                <View style={{ height: 80, marginLeft: 10, marginRight: 10 }}>
                                    <View style={{ height: 20, }}>
                                        <Text style={{ paddingLeft: 7.5, color: 'black', fontWeight: 'bold', fontSize: 15 }}>Nama Pemegang Kartu</Text>
                                    </View>
                                    <ContainerSection>
                                        <Input
                                            placeholder=''
                                        />
                                    </ContainerSection>
                                </View>

                                <View style={{ height: 110, marginLeft: 10, marginRight: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

                                    <View style={{ width: '15%', height: '100%', justifyContent: 'center', flexDirection: 'column', }}>
                                        <Image
                                            style={{ width: 50, height: 50, }}
                                            source={require('./../assets/images/ic_secure.png')}
                                            resizeMode='contain'
                                        />
                                    </View>

                                    <View style={{ width: '35%', height: '100%', justifyContent: 'center', flexDirection: 'column', }}>
                                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>Midtrans</Text>
                                        <Text style={{ fontSize: 13, color: 'black' }}>secured payments</Text>
                                    </View>

                                    <View style={{ width: '50%', height: '100%', alignItems: 'center', flexDirection: 'row', }}>
                                        <View style={{ flex: 1 }}>
                                            <Image
                                                style={{ width: 55, height: 90, alignSelf: 'center' }}
                                                source={require('./../assets/images/ic_visaverify.jpg')}
                                                resizeMode='contain'
                                            />
                                        </View>
                                        <View style={{ flex: 1 }}>
                                            <Image
                                                style={{ width: 55, height: 100, alignSelf: 'center' }}
                                                source={require('./../assets/images/ic_mastercardverify.jpg')}
                                                resizeMode='contain'
                                            />
                                        </View>
                                        <View style={{ flex: 1 }}>
                                            <Image
                                                style={{ width: 55, height: 90, alignSelf: 'center' }}
                                                source={require('./../assets/images/ic_norton.jpg')}
                                                resizeMode='contain'
                                            />
                                        </View>
                                    </View>
                                </View>


                                <View style={{ height: 70, marginLeft: 15, marginRight: 15, flexDirection: 'row', }}>
                                    <View style={{ height: '100%', width: '80%', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>Simpan Kartu</Text>
                                        <Text style={{ fontSize: 13, color: 'black' }}>informasi kartu disimpan dengan aman</Text>
                                    </View>
                                    <View style={{ height: '100%', width: '20%', justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'row' }}>
                                        <SwitchToggle
                                            containerStyle={{
                                                // marginTop: 16,
                                                width: 65,
                                                height: 30,
                                                borderRadius: 25,
                                                // backgroundColor: '#ccc',
                                                padding: 5,
                                            }}
                                            circleStyle={{
                                                width: 20,
                                                height: 20,
                                                borderRadius: 19,
                                                backgroundColor: 'white', // rgb(102,134,205)
                                            }}
                                            switchOn={this.state.toggleSecureSave}
                                            onPress={this.onPressSecureSave}
                                            circleColorOff='white'
                                            circleColorOn='red'
                                        />
                                    </View>
                                </View>

                                <View style={{ backgroundColor: 'red', height: 50, marginLeft: 10, marginRight: 10, marginTop: 20, borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailInformationOrder')}>
                                        <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold', }}>BAYAR</Text>
                                    </TouchableOpacity>
                                </View>


                            </View>
                            :
                            <View />

                    }



                    <View style={{ flex: 1, backgroundColor: 'white', marginLeft: 5, marginRight: 5, flexDirection: 'column', justifyContent: 'center' }}>
                        <TouchableOpacity style={{ justifyContent: 'center' }}
                            onPress={() => this.setState({ BankTransferPayment: !this.state.BankTransferPayment })}
                        >
                            <View style={{ flexDirection: 'column', width: '70%', margin: 15 }}>
                                <Text style={{ color: 'black', fontSize: 15, fontWeight: 'bold' }}>Bank Transfer</Text>
                                <Text style={{ color: 'black', fontSize: 12 }}>pembayaran dapat dilakukan via ATM, Internet Bank atau Mobile Banking. </Text>
                            </View>

                        </TouchableOpacity>
                    </View>

                    {
                        BankTransferPayment === true ?
                            < View style={{
                                flex: 1,
                                height: 530,
                                backgroundColor: 'white',
                                flexDirection: 'column',
                                // alignItems: 'center'
                                marginBottom: 5,
                                marginLeft: 5,
                                marginRight: 5
                            }}>

                                <View style={{ borderWidth: 0.5, borderColor: '#e5e5e5', width: '80%', alignSelf: 'center', flexDirection: 'row' }} />

                                <View style={{ height: 200, }}>

                                    <View style={{ flex: 1, height: '50%', flexDirection: 'row', margin: 5, justifyContent: 'center' }}>

                                        <View style={{ width: '14%', height: '100%', flexDirection: 'row', }}>
                                            <CheckBox
                                                containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}

                                                checked={false}
                                            />
                                        </View>

                                        <View style={{ width: '36%', height: '100%', flexDirection: 'row', justifyContent: 'center' }}>
                                            <Image
                                                style={{ width: 110, height: 65, alignSelf: 'center' }}
                                                source={require('./../assets/images/ic_BCA.jpg')}
                                                resizeMode='contain'
                                            />
                                        </View>

                                        <View style={{ width: '14%', height: '100%', flexDirection: 'row', }}>
                                            <CheckBox
                                                containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}

                                                checked={false}
                                            />
                                        </View>

                                        <View style={{ width: '36%', height: '100%', flexDirection: 'row', justifyContent: 'center' }}>
                                            <Image
                                                style={{ width: 110, height: 65, alignSelf: 'center' }}
                                                source={require('./../assets/images/ic_BNI.jpg')}
                                                resizeMode='contain'
                                            />

                                        </View>

                                    </View>

                                    <View style={{ flex: 1, height: '50%', flexDirection: 'row', margin: 5, justifyContent: 'center' }}>

                                        <View style={{ width: '14%', height: '100%', flexDirection: 'row', }}>
                                            <CheckBox
                                                containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}

                                                checked={true}
                                            />
                                        </View>

                                        <View style={{ width: '36%', height: '100%', flexDirection: 'row', justifyContent: 'center' }}>
                                            <Image
                                                style={{ width: 110, height: 65, alignSelf: 'center' }}
                                                source={require('./../assets/images/ic_Mandiri.jpg')}
                                                resizeMode='contain'
                                            />
                                        </View>

                                        <View style={{ width: '14%', height: '100%', flexDirection: 'row', }} />
                                        <View style={{ width: '36%', height: '100%', flexDirection: 'row', justifyContent: 'center' }} />

                                    </View>
                                </View>

                                <View style={{ height: 50, marginLeft: 15, marginRight: 17.5, flexDirection: 'row', }}>
                                    <View style={{ height: '100%', width: '80%', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 13, color: 'black' }}>Atas Nama</Text>
                                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>APAPUN Indoensia</Text>
                                    </View>
                                    <View style={{ height: '100%', width: '20%', justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'row' }}>
                                        <Image
                                            style={{ width: 90, height: 55, alignSelf: 'center' }}
                                            source={require('./../assets/images/ic_Mandiri.jpg')}
                                            resizeMode='contain'
                                        />
                                    </View>
                                </View>

                                <View style={{ height: 50, marginLeft: 15, marginRight: 17.5, flexDirection: 'row', }}>
                                    <View style={{ height: '100%', width: '80%', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 13, color: 'black' }}>Nomor Rekening</Text>
                                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>123  456 7899</Text>
                                    </View>
                                    <View style={{ height: '100%', width: '20%', justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'row' }}>
                                        <Text style={{ color: 'red', fontSize: 15 }}>COPY</Text>
                                    </View>
                                </View>

                                <View style={{ height: 50, marginLeft: 15, marginRight: 17.5, flexDirection: 'row', }}>
                                    <View style={{ height: '100%', width: '80%', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: 13, color: 'black' }}>Total Pembayaran</Text>
                                        <Text style={{ fontSize: 15, fontWeight: 'bold', color: 'black' }}>Rp. 860.000</Text>
                                    </View>
                                    <View style={{ height: '100%', width: '20%', justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'row', }}>
                                        <Text style={{ color: 'red', fontSize: 15 }}>COPY</Text>
                                    </View>
                                </View>

                                <View style={{ height: 120, marginLeft: 15, marginRight: 17.5, flexDirection: 'column', justifyContent: 'center' }}>

                                    <Text style={{ color: 'black', fontSize: 13, textAlign: 'center', }}>Pembayaran harus dilakukan dalam waktu 24 jam {'\n'}
                                        atau pesanan akan dibatalkan.{'\n'}Pesanan akan diproses setelah Anda melakukan pembayaran </Text>

                                </View>

                                <View style={{ backgroundColor: 'red', height: 50, marginLeft: 10, marginRight: 10, marginTop: 10, borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('DetailInformationOrder')}>
                                        <Text style={{ color: 'white', fontSize: 15, fontWeight: 'bold', }}>BAYAR</Text>
                                    </TouchableOpacity>
                                </View>








                            </View>
                            :
                            <View />

                    }







                </ScrollView>

            </View >
        )
    }

}




const styles = StyleSheet.create({


});

export default PaymentMethodPage;

