import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation'
import { StatusBar, StyleSheet, ScrollView, BackHandler, Text, Picker, Alert, Keyboard, ToastAndroid, TouchableOpacity, View, Image } from 'react-native'
import { Container, ContainerSection, Input, Button, Spinner } from '../components/common'
import AutoComplete from '../components/AutoComplete'
import { COLOR } from './../shared/config';
import Icon from 'react-native-vector-icons/Ionicons';

export class OrderPage extends React.Component {
    static navigationOptions = {
        headerTitle: 'Pengaturan Pesanan'
    }

    constructor(props) {
        super(props)

        this.state = {
            nameProduct: '',
            categoryProduct: '',
            uploadDesign: null
        }
    }

    render() {

        const { nameProduct, categoryProduct, uploadDesign } = this.state;

        return (
            <ScrollView
                style={styles.containerStyle}
                keyboardShouldPersistTaps="always"
                ref={ref => this.scrollView = ref}
            >
                <StatusBar
                    backgroundColor={COLOR.primary}
                    barStyle="light-content"
                />
                <ContainerSection>
                    <Input
                        label='Nama Produk'
                        value={nameProduct}
                        onChangeText={v => this.onChangeInput('nameProduct', v)}
                    />
                </ContainerSection>
                <ContainerSection>
                    <View style={styles.pickerContainer}>
                        <Text style={styles.pickerTextStyle}>Kategori Produk</Text>
                        <View style={styles.pickerStyle}>
                            <Picker
                                selectedValue={categoryProduct}
                                onValueChange={v => this.onChangeInput('categoryProduct', v)}
                            >
                                <Picker.Item label='Pilih Kategori Produk' value='0' />
                                <Picker.Item label='Fashion' value='Fashion' />
                                <Picker.Item label='Lifestyle' value='Lifestyle' />
                                <Picker.Item label='Lainnya' value='Lainnya' />
                            </Picker>
                        </View>
                    </View>
                </ContainerSection>
                <Text style={[styles.pickerTextStyle, { marginLeft: 5, marginTop: 10 }]}>Upload Design Anda</Text>
                <ContainerSection>
                    <View style={{ flex: 1, width: '100%' }}>
                        <View>
                            {
                                uploadDesign === null ?
                                    <View>
                                        <Image
                                            source={require('../assets/images/create-design.jpg')}
                                            style={{ width: '100%' }}
                                            resizeMode='stretch'
                                        />
                                        <TouchableOpacity
                                            // onPress={() => this.onItemSelected(item)}
                                            style={styles.button}
                                        >
                                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                                <View style={{ flex: 1 }}>
                                                    <Icon size={30} style={{ alignSelf: 'center' }} name='md-arrow-dropdown' />
                                                </View>
                                                <Text style={{ fontSize: 14, flex: 1, textAlign: 'center'}}>Tambah Gambar</Text>
                                                
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                    :
                                    <Image source={uploadDesign} />
                            }
                        </View>
                    </View>
                </ContainerSection>
            </ScrollView>
        );
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    pickerContainer: {
        flex: 1,
        marginBottom: 5
    },
    pickerStyle: {
        borderColor: '#a9a9a9',
        borderRadius: 3,
        paddingLeft: 5,
        borderWidth: 1
    },
    pickerTextStyle: {
        color: '#5e5e5e',
        fontSize: 14,
        fontWeight: 'bold',
        flex: 1,
        marginTop: 10,
        marginBottom: 10
    },
    button: {
        backgroundColor: '#5e5e5e',
        borderColor: 'red',
        borderWidth: 1,
        borderRadius: 30,
        width: '80%',
        height: 35,
        position: 'absolute',
        marginTop: 120,
        marginLeft: 30,
        // marginRight: 70,
        justifyContent: 'center',
        alignItems: 'center',
        // paddingLeft: 30,
        // paddingRight: 30
    }
});

export default OrderPage;