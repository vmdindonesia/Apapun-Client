import React, { Component } from 'react';
import { StyleSheet, ScrollView, FlatList, Text, View, Image, TouchableOpacity } from 'react-native';
import { Input, InputNumber, ContainerSection, InputDate, Button } from '../components/common';
import Swiper from 'react-native-swiper';
import DatePicker from 'react-native-datepicker'
import { NavigationActions, StackActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

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
            photo: [
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg'

            ],
            // estimationTime: '',
            date: '',
            detailOrderData: '',
            kategory: ''
        }
    }

    componentDidMount() {
        console.log(this.props.navigation.state.params.datas, 'Get params order');
        const dataDetail = this.props.navigation.state.params.datas.item;
        this.setState({ detailOrderData: dataDetail }, () => {
            if (this.state.detailOrderData.quantityProduct === "1") {
                this.setState({ kategory: 'Fashion' })
            } else if (this.state.detailOrderData.quantityProduct === "2") {
                this.setState({ kategory: 'Lifestyle' });
            } else if (this.state.detailOrderData.quantityProduct === "3") {
                this.setState({ kategory: 'Furniture' });
            } else if (this.state.detailOrderData.quantityProduct === "4") {
                this.setState({ kategory: 'Beauty' });
            }
            console.log(this.state.detailOrderData, 'DATA ORDER DETAIL');
        });
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
            // onPress={() => this.onValidation()}
            >
                <Text style={{ color: '#FFFFFF', fontFamily: 'Quicksand-Bold' }}>Ambil Pesanan</Text>
            </Button>
        )
    }

    renderProductItem = (data) => {
        // console.log(data, '098');
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
                    source={{ uri: data.item }}
                />
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
        const { detailOrderData, kategory } = this.state;
        console.log(detailOrderData, 'Detail');

        return (
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.containerSlide}>
                        <Swiper
                            style={styles.wrapper}
                            showsButtons={false}
                            showsPagination={false}
                        >
                            <View style={styles.slide1}>
                                <Image
                                    style={styles.imageStyle}
                                    source={require('./../assets/images/swiperFirst.png')}
                                    resizeMode='cover'
                                />
                            </View>
                            <View style={styles.slide2}>
                                <Image
                                    style={styles.imageStyle}
                                    source={require('./../assets/images/swiperSecond.png')}
                                    resizeMode='cover'
                                />
                            </View>
                        </Swiper>
                    </View>
                </View>
                <View style={{ height: 110 }}>
                    <View style={{ flex: 1, marginLeft: 5 }}>
                        <FlatList
                            data={this.state.photo}
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
                            <InputNumber
                                // value={numberPcs.toString()}
                                // onChangeText={val => this.onChange('numberPcs', val)}
                                keyboardType='numeric'
                            />
                        </View>
                    </View>
                    <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, marginTop: 5 }}>Selesai Pembuatan</Text>
                    <ContainerSection>
                        <DatePicker
                            style={{ flex: 1 }}
                            date={this.state.date}
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