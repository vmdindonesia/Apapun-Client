import React, { Component } from 'react';
import { View, Text, Image, AsyncStorage, TouchableOpacity, ScrollView, StyleSheet, Dimensions, Picker } from 'react-native'
import { Container, Button, ContainerSection, Input, InputNumber } from '../components/common';
const { width, height } = Dimensions.get('window');
import Icon from 'react-native-vector-icons/Ionicons';


export class DetailDeliveryPage extends React.Component {

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
    }

    renderButton = () => {
        // if (this.state.loading) {
        //     return <Spinner size="small" />
        // }
        return (
            <Button
                style={{
                    backgroundColor: 'red',
                    justifyContent: 'center',
                    borderRadius: 30,
                }}
            // onPress={() => this.onValidation()}
            >
                <Text style={{ color: '#FFFFFF', fontFamily: 'Quicksand-Bold' }}>Mencari Crafter</Text>
            </Button>
        )
    }


    render() {
        return (
            <View style={{ flex: 1, padding: 10 }}>
                <View style={{ height: 100 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View>
                            <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15 }}>Jumlah yang dipesan</Text>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'flex-end', flexDirection: 'row' }}>
                            <TouchableOpacity style={{ marginRight: 5, justifyContent: 'center' }}>
                                <Image
                                    style={{ width: 25, height: 25, borderRadius: 5 }}
                                    source={require('../assets/images/minus.png')}
                                />
                            </TouchableOpacity >
                            <View style={{ height: 40, width: 50, marginRight: 5 }}>
                                <InputNumber
                                    // value={numberPcs.toString()}
                                    // onChangeText={val => this.onChange('numberPcs', val)}
                                    keyboardType='numeric'
                                />
                            </View>
                            <TouchableOpacity style={{ justifyContent: 'center' }}>
                                <Image
                                    style={{ width: 25, height: 25, borderRadius: 5 }}
                                    source={require('../assets/images/plus.png')}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flex: 1, alignItems: 'flex-end', marginTop: 5 }}>
                        <View style={{
                            borderColor: '#a9a9a9',
                            borderRadius: 5,
                            paddingLeft: 4,
                            borderWidth: 1,
                            width: 105,
                            height: 40,
                            backgroundColor: '#fff',
                            justifyContent: 'center'
                        }}>
                            <Picker
                            // selectedValue={unitQuantity}
                            // onValueChange={v => this.onChange('unitQuantity', v)}
                            >
                                <Picker.Item label='Pcs' value='Pcs' />
                                <Picker.Item label='Lusin' value='Lusin' />
                            </Picker>
                        </View>
                    </View>
                </View>
                <View style={{ height: 80 }}>
                    <View>
                        <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15 }}>Jasa Pengiriman</Text>
                    </View>
                    <View style={{
                        borderColor: 0,
                        borderRadius: 3,
                        paddingLeft: 5,
                        borderWidth: 1
                    }}>
                        <Picker
                        // selectedValue={serveDelivery}
                        // onValueChange={v => this.onChange('serveDelivery', v)}
                        >
                            <Picker.Item label='JNE' value='JNE' />
                            <Picker.Item label='TIKI' value='TIKI' />
                            <Picker.Item label='Pos Indonesia' value='Pos Indonesia' />
                            <Picker.Item label='Gojek' value='Gojek' />
                        </Picker>
                    </View>
                </View>
                <View style={{ flex: 1 }}>
                    <View>
                        <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15 }}>Alamat Pengiriman</Text>
                    </View>
                    <View style={{
                        borderColor: 0,
                        borderRadius: 3,
                        paddingLeft: 5,
                        borderWidth: 1
                    }}>
                        <Picker
                            mode='dropdown'
                        // selectedValue={serveDelivery}
                        // onValueChange={v => this.onChange('serveDelivery', v)}
                        >
                            <Picker.Item label='Home' value='Home' />
                            <Picker.Item label='Office' value='Office' />
                        </Picker>
                    </View>
                </View>
                <View style={{ width: '100%', height: 40 }}>
                    {this.renderButton()}
                </View>

            </View>
        );
    }

}


export default DetailDeliveryPage;