import React, { Component } from 'react';
import { StyleSheet, ScrollView, FlatList, Text, View, Image, TouchableOpacity, AsyncStorage } from 'react-native';
import { Input, InputNumber, ContainerSection, InputDate, Button } from '../components/common';
import Swiper from 'react-native-swiper';
import DatePicker from 'react-native-datepicker'
import { NavigationActions, StackActions } from 'react-navigation';
import numeral from 'numeral';
import axios from 'axios';
import { IPSERVER } from './../shared/config';
import Icon from 'react-native-vector-icons/Ionicons';
import Carousel from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from '../shared/slider.styles';

export class OrderForCrafterPage extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        headerLeft:
            <TouchableOpacity
                onPress={() => { navigation.goBack(); console.log(navigation.goBack(), 'Props Order') }}
            >
                <Icon size={30} style={{ marginLeft: 25, color: '#EF1C25' }} name='ios-arrow-back' />
            </TouchableOpacity>,
        headerTitle: 'Rancangan Pesanan'
    });

    constructor(props) {
        super(props)
        this.state = {
            date: '',
            price: '',
            detailOrderData: '',
            orderId: '',
            crafterId: '',
        }
    }

    componentDidMount() {
        console.log(this.props.navigation.state.params.datas, 'Get params order');
        const dataDetail = this.props.navigation.state.params.datas.item;
        this.setState({
            detailOrderData: dataDetail,
            orderId: dataDetail.orderId
        }, () => {
            AsyncStorage.getItem('VMDDEVELOPER', (err, result) => {
                if (result) {
                    const dataStorage = JSON.parse(result);
                    console.log(dataStorage, 'Data Storage');
                    this.setState({ crafterId: dataStorage.crafterId });
                } else {
                    console.log(err, 'Error Storage');
                }
            });
        });
    }

    onChangePrice = (name, value) => {
        this.setState({ [name]: value });
    }

    onValidation() {
        const {
            price,
            date
        } = this.state;

        switch (price) {
            case 0:
                return ToastAndroid.show('Harga Tidak Boleh Kosong atau Nol', ToastAndroid.SHORT);
            case '':
                return ToastAndroid.show('Harga Tidak Boleh Kosong atau Nol', ToastAndroid.SHORT);
            default:
                switch (date) {
                    case '':
                        return ToastAndroid.show('Tanggal Tidak Boleh Kosong', ToastAndroid.SHORT);
                    default:
                        this.onProgressBet();
                }
        }
    }

    onProgressBet() {
        const {
            price,
            date,
            crafterId,
            orderId
        } = this.state;

        const priceDelivery = 0;
        const description = 'Bet Crafter Custom Order';
        const finishOrder = date;
        axios.post(`${IPSERVER}/ApapunBets/CreateBet`, {
            price,
            priceDelivery,
            crafterId,
            description,
            orderId,
            finishOrder
        }).then(response => {
            console.log(response.data, 'Get Order');
            this.setState({
                loading: false
            }, () => {
                ToastAndroid.show('Success Bet! Thanks For Bet. Let Buyer for confirmation are you chooses.', ToastAndroid.SHORT);
                this.props.navigation.goBack();
            });
        }).catch(error => {
            console.log(error, 'Err Get Order');
            this.setState({ loading: false });
            ToastAndroid.show('Connection Time Out, Server Maybe Down', ToastAndroid.SHORT);
        })
    }

    renderButton = () => {
        if (this.state.loading) {
            return <Spinner size="small" />
        }
        return (
            <Button
                style={{
                    backgroundColor: '#FF1000',
                    justifyContent: 'center',
                    borderRadius: 30,
                    marginTop: 30,
                    marginLeft: '15%',
                    marginRight: '15%',
                    marginBottom: 20
                }}
                onPress={() => this.onValidation()}
            >
                <Text style={{ color: '#FFFFFF', fontFamily: 'Quicksand-Bold' }}>Ambil Pesanan</Text>
            </Button>
        )
    }

    renderProductItem = (data) => {
        console.log(data, 'Image');
        return (
            <View
                style={{
                    borderRadius: 4,
                    elevation: 2,
                    backgroundColor: '#fff',
                    marginRight: 5,
                    height: 110
                }}
            >
                <Image
                    style={styles.item}
                    source={{ uri: `${IPSERVER}/ApapunStorageImages/images/download/${data.item === undefined ? 'https://www.coastalsocks.com.ng/wp-content/uploads/2014/04/default-avatar.png' : data.item.name}` }}
                />
            </View>
        )
    }

    _renderItem = (data, index) => {
        console.log(data, 'Item Carousel');
        const number = parseInt(data.index) + 1;
        return (
            <View>
                <Image
                    source={{ uri: `${IPSERVER}/ApapunStorageImages/images/download/${data.item === undefined ? 'https://www.coastalsocks.com.ng/wp-content/uploads/2014/04/default-avatar.png' : data.item.name}` }}
                    style={{ width: '100%', height: 200 }}
                    resizeMode='stretch'
                />
                <View style={{ position: 'absolute', backgroundColor: 'rgba(22, 22, 22, 0.5)', width: 40, height: 40, borderRadius: 50, marginLeft: 15, marginTop: 10 }}>
                    <Text style={{ textAlign: 'center', fontFamily: 'Quicksand-Bold', color: 'white', fontSize: 20, paddingTop: 8 }}>{number}</Text>
                </View>
            </View>
        )
    }

    renderMaterial = (data) => {
        console.log(data, 'Data Material');
        return (
            <View style={{
                marginTop: 3, height: 30, padding: 10, marginRight: 5,
                borderWidth: 1, borderRadius: 35, justifyContent: 'center'
            }}>
                <Text style={{ textAlign: 'center', fontFamily: 'Quicksand-Regular', fontSize: 13 }}>{data.item.ApapunMaterial.materialName} : {data.item.ApapunSubmaterial.materialName}</Text>
            </View>
        )
    }

    render() {
        const { detailOrderData, price, date } = this.state;
        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.containerSlide}>
                        {
                            detailOrderData.length === 0 ?
                                <View />
                                :
                                <Carousel
                                    ref={(c) => { this._carousel = c; }}
                                    data={detailOrderData.ApapunImages}
                                    extraData={this.state}
                                    renderItem={this._renderItem}
                                    sliderWidth={sliderWidth}
                                    itemWidth={itemWidth}
                                />
                        }
                    </View>
                </View>
                <View style={{ height: 110 }}>
                    <View style={{ flex: 1, marginLeft: 5 }}>
                        <FlatList
                            data={this.state.detailOrderData.ApapunImages}
                            horizontal
                            renderItem={this.renderProductItem.bind(this)}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>
                <View style={styles.containerForText}>
                    <View style={styles.containerText}>
                        <Text style={{
                            fontFamily: 'Quicksand-Bold',
                            marginTop: 15
                        }}>Nama Produk</Text>
                        <View style={{ flex: 1, marginTop: 3 }}>
                            <Input
                                editable={false}
                                value={detailOrderData.nameProduct}
                            />
                        </View>
                    </View>
                    <View style={[styles.containerText, { marginLeft: 4 }]}>
                        <Text style={{
                            fontFamily: 'Quicksand-Bold',
                            marginTop: 15
                        }}>
                            Kategori </Text>
                        <View style={{ flex: 1, marginTop: 3, marginRight: 10 }}>
                            <Input
                                editable={false}
                                value={detailOrderData.ApapunSubKategoris === undefined ? '-' : detailOrderData.ApapunSubKategoris.ApapunKategoris.name}
                            />
                        </View>
                    </View>
                </View>
                <View style={[styles.containerProduction, { marginLeft: 5 }]}>
                    <Text style={{
                        fontFamily: 'Quicksand-Bold',
                        marginTop: 20
                    }}>
                        Jumlah Produksi </Text>
                    <View style={{ marginTop: 10, marginLeft: 5, height: 40, width: '10%' }}>
                        <Input
                            editable={false}
                            value={detailOrderData.quantityProduct}
                        />
                    </View>
                    <View style={{ marginTop: 10, marginLeft: 5, height: 40, width: '15%' }}>
                        <Input
                            editable={false}
                            value={detailOrderData.unitQuantity}
                        />

                    </View>
                </View>
                <Text style={{ fontFamily: 'Quicksand-Bold', marginTop: 5, fontSize: 15, marginLeft: 5 }}>Material</Text>
                <View style={styles.containerForText}>
                    <FlatList
                        data={detailOrderData.ApapunOrderMaterial}
                        horizontal
                        renderItem={this.renderMaterial.bind(this)}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
                <Text style={{
                    fontFamily: 'Quicksand-Bold',
                    marginTop: 10, marginLeft: 5
                }}>
                    Catatan Tambahan </Text>
                <View style={{ marginLeft: 5, marginRight: 5, backgroundColor: '#fff' }}>
                    <Text style={{ fontFamily: 'Quicksand-Regular', marginLeft: 5, marginTop: 5, marginRight: 5 }}>
                        {detailOrderData.noteDelivery}
                    </Text>
                </View>
                <Text style={{
                    fontFamily: 'Quicksand-Bold',
                    marginTop: 10, marginLeft: 5
                }}>
                    Jasa Pengiriman </Text>
                <View style={{ marginLeft: 5, marginRight: 5, flex: 1, flexDirection: 'row', backgroundColor: '#fff' }}>
                    {
                        detailOrderData.length === 0 ?
                            <View />
                            :
                            <View>
                                {
                                    detailOrderData.deliveryProvider === 'JNE REG' ?
                                        <Image
                                            style={{
                                                height: 55,
                                                width: 80,
                                                marginLeft: 30,
                                                alignSelf: 'center'
                                            }}
                                            source={require('./../assets/images/ic_jne.png')}
                                        />
                                        :
                                        <View>
                                            {
                                                detailOrderData.deliveryProvider === 'JNE OK' ?
                                                    <Image
                                                        style={{
                                                            height: 55,
                                                            width: 80,
                                                            marginLeft: 30,
                                                            alignSelf: 'center'
                                                        }}
                                                        source={require('./../assets/images/ic_jne.png')}
                                                    />
                                                    :
                                                    <View>
                                                        {
                                                            detailOrderData.deliveryProvider === 'TIKI REG' ?
                                                                <Image
                                                                    style={{
                                                                        height: 55,
                                                                        width: 80,
                                                                        marginLeft: 30,
                                                                        alignSelf: 'center'
                                                                    }}
                                                                    source={require('./../assets/images/ic_tiki.png')}
                                                                />
                                                                :
                                                                <View>
                                                                    {
                                                                        detailOrderData.deliveryProvider === 'POS KILAT' ?
                                                                            <Image
                                                                                style={{
                                                                                    height: 55,
                                                                                    width: 80,
                                                                                    marginLeft: 30,
                                                                                    alignSelf: 'center'
                                                                                }}
                                                                                source={require('./../assets/images/ic_pos.png')}
                                                                            />
                                                                            :
                                                                            <View>
                                                                                {
                                                                                    detailOrderData.deliveryProvider === 'Gojeg' ?
                                                                                        <Image
                                                                                            style={{
                                                                                                height: 55,
                                                                                                width: 80,
                                                                                                marginLeft: 30,
                                                                                                alignSelf: 'center'
                                                                                            }}
                                                                                            source={require('./../assets/images/ic_gojeg.png')}
                                                                                        />
                                                                                        :
                                                                                        <View>
                                                                                            {
                                                                                                detailOrderData.deliveryProvider === 'LAIN NYA' ?
                                                                                                    <Image
                                                                                                        style={{
                                                                                                            height: 55,
                                                                                                            width: 80,
                                                                                                            marginLeft: 30,
                                                                                                            alignSelf: 'center'
                                                                                                        }}
                                                                                                        source={require('./../assets/images/ic_logo2.png')}
                                                                                                    />
                                                                                                    :
                                                                                                    <View />
                                                                                            }
                                                                                        </View>
                                                                                }
                                                                            </View>
                                                                    }
                                                                </View>
                                                        }
                                                    </View>
                                            }
                                        </View>
                                }
                            </View>
                    }
                    <Text style={{ marginLeft: 10, marginTop: 35, flex: 1, fontFamily: 'Quicksand-Bold' }}>
                        {detailOrderData.deliveryProvider}
                    </Text>
                </View>
                <Text style={{
                    fontFamily: 'Quicksand-Bold',
                    marginTop: 10, marginLeft: 5
                }}>
                    Alamat Pengiriman </Text>
                <View style={{ height: 120, backgroundColor: '#fff', marginLeft: 5, marginRight: 5, marginTop: 5 }}>
                    <Text style={{ fontFamily: 'Quicksand-Bold', marginTop: 8, marginLeft: 5 }}>{detailOrderData.ApapunUsersAddress === undefined ? '-' : detailOrderData.ApapunUsersAddress.type} {'\n'}</Text>
                    <Text style={{ fontFamily: 'Quicksand-Regular', marginLeft: 5 }}>Penerima: <Text style={{ fontFamily: 'Quicksand-Bold' }}>{detailOrderData.ApapunUsersAddress === undefined ? '-' : detailOrderData.ApapunUsersAddress.addressOwner} {'\n'}{'\n'}</Text>
                        <Text style={{ fontFamily: 'Quicksand-Regular', marginLeft: 5 }}>{detailOrderData.ApapunUsers === undefined ? '-' : detailOrderData.ApapunUsers.noPhone} {'\n'}{detailOrderData.ApapunUsersAddress === undefined ? '-' : detailOrderData.ApapunUsersAddress.addressTxt},{'\n'}
                            {detailOrderData.ApapunUsersAddress === undefined ? '-' : detailOrderData.ApapunUsersAddress.ApapunProvinces.name}, {detailOrderData.ApapunUsersAddress === undefined ? '-' : detailOrderData.ApapunUsersAddress.ApapunRegencies.name}, {detailOrderData.ApapunUsersAddress === undefined ? '-' : detailOrderData.ApapunUsersAddress.ApapunDistricts.name} </Text></Text>
                </View>
                <View style={{ flex: 1, marginTop: 10, marginLeft: 5, paddingRight: 5, paddingLeft: 5, backgroundColor: '#fff' }}>
                    <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15 }}>Harga</Text>
                    <View style={{ flex: 1, flexDirection: 'row', marginTop: 5 }}>
                        <View
                            style={{
                                borderRadius: 100, backgroundColor: 'black', width: 30, height: 30,
                                justifyContent: 'center', flexDirection: 'row', marginTop: 3
                            }}
                        >
                            <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 20, color: 'white', textAlign: 'center' }}>Rp</Text>
                        </View>
                        <View style={{ flex: 1, marginLeft: 10, marginRight: 5 }}>
                            {/* price.toString() */}
                            <InputNumber
                                style={{ alignSelf: 'center', textAlign: 'center' }}
                                value={numeral(parseInt(price, 0)).format('0,0')}
                                placeholder="0"
                                onChangeText={val => this.onChangePrice('price', val.replace(/\./g, ''))}
                                keyboardType='numeric'
                            />
                        </View>
                    </View>
                    <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, marginTop: 5 }}>Selesai Pembuatan</Text>
                    <ContainerSection>
                        <DatePicker
                            style={{ flex: 1 }}
                            date={date}
                            showIcon={false}
                            androidMode='spinner'
                            placeholder="select date"
                            format="DD-MM-YYYY"
                            confirmBtnText="Confirm"
                            cancelBtnText="Cancel"
                            onDateChange={(date) => { this.setState({ date: date }) }}
                        />
                    </ContainerSection>

                    <ContainerSection>
                        {this.renderButton()}
                    </ContainerSection>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        height: 90,
        width: 120,
        borderRadius: 4,
        alignSelf: 'stretch',
        resizeMode: 'cover'
    },
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },
    containerSlide: {
        width: '100%',
        height: 250,
        padding: 5
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    wrapper: {
    },
    containerSmallImage: {
        flexDirection: 'row',
        flex: 1
    },
    smallImage: {
        flex: 1,
        width: 80,
        height: 80
    },
    containerForText: {
        flex: 1,
        flexDirection: 'row',
        width: '100%',
        marginTop: 5,
        marginLeft: 5
    },
    containerText: {
        flex: 1
    },
    containerProduction: {
        flex: 1,
        flexDirection: 'row'
    }
});

export default OrderForCrafterPage;