import React, { Component } from 'react';
import { View, Text, ImageBackground, Image, AsyncStorage, TouchableOpacity, ScrollView, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, StatusBar, Modal, ToastAndroid, Picker } from 'react-native'
import { Container, ContainerSection, Button, Input, InputSearch, InputDate, InputNumber } from '../components/common';
import { Card, CheckBox } from 'react-native-elements'
// import axios from 'axios';
import { COLOR } from '../shared/config';
// import { Icon } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons';



export class detailsendingIdeaPage extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        headerLeft:
            <TouchableOpacity
                onPress={() => { navigation.goBack(); console.log(navigation.goBack(), 'Props Order') }}
            >
                <Icon size={30} style={{ marginLeft: 25, color: '#EF1C25' }} name='ios-arrow-back' />
            </TouchableOpacity>,
        headerTitle: 'Detail Pengiriman'
    });

    constructor(props) {
        super(props)
        this.state = {
            // ManUp: false
            numberPcs: 0,
            unitQuantity: 'PCS',
            sendingService: 'Pos Indonesia',
            sendingAddress: 'HOME'
        }
    }


    onChange = (name, value) => {
        this.setState({ [name]: value }, () => {
            console.log(this.state[name]);
        })
    }

    minusNumber() {
        console.log(this.state.numberPcs, 'Angka Minus');
        if (this.state.numberPcs === '') {
            this.setState({
                numberPcs: 0
            });
        }
        else if (this.state.numberPcs === 0) {
            this.setState({
                numberPcs: this.state.numberPcs
            });
        } else {
            this.setState({
                numberPcs: this.state.numberPcs - 1
            });
        }
    }

    plusNumber() {
        console.log('Plus');
        this.setState({
            numberPcs: parseInt(this.state.numberPcs) + 1
        });
    }


    render() {

        const {
            numberPcs,
            unitQuantity,
            sendingService,
            sendingAddress
        } = this.state


        return (
            <View style={{ flex: 1, backgroundColor: 'white' }}>

                <ScrollView>

                    <View style={{ flex: 1, height: 85, marginRight: 15, marginLeft: 15, marginTop: 15 }}>

                        <View style={{ flex: 1, backgroundColor: 'white', flexDirection: 'column' }}>

                            <View style={{ flex: 1, backgroundColor: 'white', flexDirection: 'row' }}>
                                <View style={{ flex: 1, justifyContent: 'center' }}>
                                    <Text style={{ paddingLeft: 5, fontSize: 15, fontWeight: 'bold', fontFamily: 'Quicksand-Regular', color: 'black' }}>Jumlah yang dipesan :</Text>
                                </View>

                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>

                                    <TouchableOpacity
                                        onPress={() => this.minusNumber()}
                                        style={{ width: 25, height: 25, justifyContent: 'center', marginRight: 5 }}
                                    >
                                        <Image
                                            style={{ width: 30, height: 30, borderRadius: 12.5, alignSelf: 'center' }}
                                            source={require('../assets/images/minus.png')}
                                        />
                                    </TouchableOpacity>
                                    <View style={{ width: 45, height: 40, }}>
                                        <InputNumber
                                            style={{ alignSelf: 'center', textAlign: 'center', borderWidth: 5, borderColor: '#e5e5e5' }}
                                            value={numberPcs.toString()}
                                            onChangeText={val => this.onChange('numberPcs', val)}
                                            keyboardType='numeric'
                                        />
                                    </View>
                                    <TouchableOpacity
                                        onPress={() => this.plusNumber()}
                                        style={{ width: 25, height: 25, justifyContent: 'center', marginLeft: 5 }}
                                    >
                                        <Image
                                            style={{ width: 30, height: 30, borderRadius: 12.5, alignSelf: 'center' }}
                                            source={require('../assets/images/plus.png')}
                                        />
                                    </TouchableOpacity>
                                </View>
                            </View>

                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                                <View style={{
                                    width: 105, borderColor: '#e5e5e5', borderRadius: 5, borderWidth: 2, height: 35, justifyContent: 'center',
                                    backgroundColor: '#fff',
                                }}>
                                    <Picker
                                        selectedValue={unitQuantity}
                                        onValueChange={v => this.onChange('unitQuantity', v)}
                                    >
                                        <Picker.Item label='PCS' value='Pcs' />
                                        <Picker.Item label='LUSIN' value='Lusin' />
                                    </Picker>
                                </View>
                            </View>
                        </View>

                    </View>

                    <View style={{ flex: 1, height: 165, marginRight: 15, marginLeft: 15 }}>

                        <View style={{ flex: 1, backgroundColor: '' }}>
                            <View style={{ flex: 1, backgroundColor: 'white', flexDirection: 'row' }}>

                                <Text style={{ paddingLeft: 5, fontSize: 15, fontWeight: 'bold', fontFamily: 'Quicksand-Regular', color: 'black', alignSelf: 'center' }}>Jasa Pengiriman</Text>

                            </View>

                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                                <View style={{
                                    flex: 1, borderColor: '#e5e5e5', borderRadius: 5, borderWidth: 2, justifyContent: 'center',
                                    backgroundColor: '#fff',
                                }}>
                                    <Picker
                                        selectedValue={sendingService}
                                        onValueChange={v => this.onChange('sendingService', v)}
                                    >
                                        <Picker.Item label='Pos Indonesia' value='PosIdn' />
                                        <Picker.Item label='Tiki' value='Tiki' />
                                        <Picker.Item label='JNE Regular' value='Jne' />
                                    </Picker>
                                </View>
                            </View>


                        </View>


                        <View style={{ flex: 1, backgroundColor: 'white' }}>
                            <View style={{ flex: 1, backgroundColor: 'white', flexDirection: 'row' }}>

                                <Text style={{ paddingLeft: 5, fontSize: 15, fontWeight: 'bold', fontFamily: 'Quicksand-Regular', color: 'black', alignSelf: 'center' }}>Alamat Pengiriman</Text>

                            </View>

                            <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                                <View style={{
                                    flex: 1, borderColor: '#e5e5e5', borderRadius: 5, borderWidth: 2, justifyContent: 'center',
                                    backgroundColor: '#fff',
                                }}>
                                    <Picker
                                        selectedValue={sendingAddress}
                                        onValueChange={v => this.onChange('sendingAddress', v)}
                                    >
                                        <Picker.Item label='Home' value='Home' />
                                        <Picker.Item label='Office' value='Office' />
                                        {/* <Picker.Item label='Tiki' value='Tiki' /> */}
                                    </Picker>
                                </View>
                            </View>
                        </View>

                    </View>




                </ScrollView>

                <TouchableOpacity style={{ backgroundColor: '#ef1c25', height: 40, margin: 15, borderRadius: 20, justifyContent: 'center' }}
                 onPress={() => this.props.navigation.navigate('searchCrafterIdeaMarket')} 
                >
                    <Text style={{ fontSize: 15, fontWeight: 'bold', fontFamily: 'Quicksand-Regular', color: 'white', alignSelf: 'center' }}>MENCARI CRAFTER</Text>
                </TouchableOpacity>

            </View>
        )
    }

}

const styles = StyleSheet.create({





});

export default detailsendingIdeaPage;

