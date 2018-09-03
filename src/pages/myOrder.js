import React, { Component } from 'react';
import { ToastAndroid, View, Text, ImageBackground, Image, AsyncStorage, TouchableOpacity, FlatList, ScrollView, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, StatusBar, Modal } from 'react-native'
import axios from 'axios';
import Swiper from 'react-native-swiper';
import { Container, ContainerSection, Button, Input, InputDate, Spinner } from '../components/common';
import { IPSERVER } from './../shared/config'

export class MyOrderPage extends React.Component {


    static navigationOptions = {
        headerTitle: 'Mencari Crafter',
        headerStyle: {
            loading: true,
            elevation: 0,
            borderBottomColor: 'white',
            borderBottomWidth: 0
        },
    }


    constructor(props) {
        super(props)
        this.state = {
            // screen: 'Custom'
            photo: [
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',
            ],
            dataDetailOrder: ''
        }
    }

    componentDidMount() {
        console.log(this.props.navi.state.params, 'Props From Order Page');
        const orderId = this.props.navi.state.params;
        // const orderId = 'ORDER-17';
        axios.post(`${IPSERVER}/ApapunOrders/getOrderById`, { orderId }).then(response => {
            console.log(response.data, 'Response Get Order')
            this.setState({ dataDetailOrder: response.data, loading: false }, () => {
                console.log(this.state.dataDetailOrder[0].nameProduct, 'XXX');
            });
        }).catch(error => {
            console.log(error, 'Error Get Order');
            this.setState({ loading: false });
            return ToastAndroid.show('Connection Time Out, Server Maybe Down', ToastAndroid.SHORT);
        })
    }

    renderProductImage = (data) => {
        console.log(data, '098');
        return (
            <TouchableOpacity>

                <View style={{ flex: 1, flexDirection: 'row', marginTop: 5, marginRight: 5, marginBottom: 5, }}>
                    <Image
                        style={styles.thumbnailStyle}
                        source={{ uri: `${IPSERVER}/ApapunStorageImages/images/download/${data.item.name}` }}
                    />
                </View>

            </TouchableOpacity >
        )
    }

    renderMaterial = (data) => {
        console.log(data, 'Data Material');
        return (
            <View style={{ flexDirection: 'row', }}>
                <View style={{ height: 40, backgroundColor: 'white', borderRadius: 20, borderWidth: 1, margin: 5, justifyContent: 'center', borderWidth: 2, borderColor: '#b6b6b6', padding: 5 }}>
                    <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 13, color: 'black', textAlign: 'center', padding: 5 }}>{data.ApapunMaterial.materialName} - {data.ApapunSubmaterial.materialName}</Text>
                </View>
            </View>
        )
    }


    render() {
        return (
            <View style={{
                flex: 1
            }}>
                {
                    this.state.loading ?
                        <Spinner size="small" />
                        :
                        <ScrollView style={{
                            backgroundColor: '#eaeaea',
                            flex: 1
                        }}
                        showsVerticalScrollIndicator={false}>

                            <View style={{ flex: 1, height: 250, marginTop: 5, marginLeft: 10, marginRight: 10 }}>
                                <Swiper
                                    // style={styles.wrapper}
                                    showsButtons={false}
                                    showsPagination={false}
                                    height={200}
                                >
                                    <View style={styles.slide1}>
                                        {
                                            this.state.dataDetailOrder.length === 0 ?
                                                <View />
                                                :
                                                <View>
                                                    {
                                                        this.state.dataDetailOrder[0].ApapunImages.map((data) => {
                                                            console.log(data, 'Swiper SP');
                                                            <Image
                                                                // style={styles.imageStyle}
                                                                source={{ uri: `${IPSERVER}/ApapunStorageImages/images/download/${data.name}` }}
                                                                resizeMode='cover'
                                                            />
                                                        })
                                                    }
                                                </View>

                                        }
                                    </View>
                                </Swiper>
                            </View>

                            <View style={{ flex: 1, height: 100, marginTop: 10, marginLeft: 10, marginRight: 10, }}>
                                <FlatList
                                    data={this.state.dataDetailOrder.length === 0 ? this.state.dataDetailOrder : this.state.dataDetailOrder[0].ApapunImages}
                                    renderItem={this.renderProductImage.bind(this)}
                                    showsHorizontalScrollIndicator={false}
                                    horizontal={true}
                                    extraData={this.state}
                                />
                            </View>

                            <View style={{ flex: 1, height: 55, flexDirection: 'row', marginTop: 10, marginLeft: 10, marginRight: 10 }}>

                                <View style={{ height: 50, flex: 1, marginRight: 10 }}>
                                    <View>
                                        <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, color: 'black', }}>Nama Produk</Text>
                                    </View>
                                    <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', marginTop: 5 }}>
                                        <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 13, color: 'black', paddingLeft: 5 }}>{this.state.dataDetailOrder.length === 0 ? '-' : this.state.dataDetailOrder[0].nameProduct}</Text>
                                    </View>
                                </View>

                                <View style={{ height: 50, flex: 1 }}>
                                    <View >
                                        <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, color: 'black', }}>Kategori</Text>
                                    </View>
                                    <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', marginTop: 5 }}>
                                        <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 13, color: 'black', paddingLeft: 5 }}>{this.state.dataDetailOrder.length === 0 ? '-' : this.state.dataDetailOrder[0].ApapunKategori.name}</Text>
                                    </View>
                                </View>

                            </View>

                            <View style={{ flex: 1, height: 50, flexDirection: 'row', marginTop: 5, marginLeft: 10, marginRight: 10, alignItems: 'center' }}>

                                <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, color: 'black', }}>Jumlah yang dipesan</Text>

                                <View style={{ marginLeft: 10, width: 25, height: '60%', backgroundColor: 'white', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: 5, borderWidth: 2, borderColor: '#cbcbcb' }}>
                                    <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 13, color: 'black' }}>{this.state.dataDetailOrder.length === 0 ? '-' : this.state.dataDetailOrder[0].quantityProduct}</Text>
                                </View>


                                <View style={{ marginLeft: 3, width: 50, height: '60%', backgroundColor: 'white', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: 5, borderWidth: 2, borderColor: '#cbcbcb' }}>
                                    <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 13, color: 'black' }}>{this.state.dataDetailOrder.length === 0 ? '-' : this.state.dataDetailOrder[0].unitQuantity}</Text>
                                </View>


                            </View>

                            <View style={{ flex: 1, height: 75, flexDirection: 'row', marginTop: 10, marginLeft: 10, marginRight: 10 }}>

                                <View style={{ flex: 1 }}>
                                    <View >
                                        <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, color: 'black', }}>Material</Text>
                                    </View>
                                    {

                                    }
                                    <FlatList
                                        data={this.state.dataDetailOrder.length === 0 ? this.state.dataDetailOrder : this.state.dataDetailOrder[0].ApapunOrderMaterial}
                                        extraData={this.state}
                                        horizontal={false}
                                        renderItem={({ item, index }) => this.renderMaterial(item, index)}
                                        showsHorizontalScrollIndicator={false}
                                        numColumns={2}
                                    />
                                </View>

                            </View>

                            <View style={{ flex: 1, justifyContent: 'center', marginLeft: 10, marginRight: 10, }}>

                                <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, color: 'black', }}>Catatan Tambahan</Text>

                                <View style={{ flex: 1, backgroundColor: 'white', marginTop: 5 }}>
                                    <Text style={{ fontSize: 13, fontFamily: 'Quicksand-Regular', color: 'black', padding: 10 }}>{this.state.dataDetailOrder.length === 0 ? '-' : this.state.dataDetailOrder[0].noteDelivery}</Text>
                                </View>

                            </View>


                            <View style={{ height: 120, flex: 1, justifyContent: 'center', marginTop: 5, marginLeft: 10, marginRight: 10, }}>

                                <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, color: 'black', }}>Jasa Pengiriman</Text>

                                <View style={{ flex: 1, marginTop: 5, backgroundColor: 'white', flexDirection: 'row' }}>
                                    {
                                        this.state.dataDetailOrder.length === 0 ?
                                            <View />
                                            :
                                            <View style={{ flex: 1, alignSelf: 'center', justifyContent: 'center' }}>
                                                {
                                                    this.state.dataDetailOrder[0].deliveryProvider === 'JNE REG' ?
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
                                                                this.state.dataDetailOrder[0].deliveryProvider === 'JNE OK' ?
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
                                                                            this.state.dataDetailOrder[0].deliveryProvider === 'TIKI REG' ?
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
                                                                                        this.state.dataDetailOrder[0].deliveryProvider === 'POS KILAT' ?
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
                                                                                                    this.state.dataDetailOrder[0].deliveryProvider === 'Gojeg' ?
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
                                                                                                                this.state.dataDetailOrder[0].deliveryProvider === 'LAIN NYA' ?
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
                                    <View style={{ flex: 1, alignSelf: 'center', justifyContent: 'center' }}>
                                        <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, color: 'black', paddingLeft: 15 }}>{this.state.dataDetailOrder.length === 0 ? '-' : this.state.dataDetailOrder[0].deliveryProvider}</Text>
                                    </View>
                                </View>

                            </View>

                            <View style={{ flex: 1, justifyContent: 'center', marginTop: 13, marginLeft: 10, marginRight: 10, }}>

                                <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, color: 'black' }}>Alamat Pengiriman</Text>

                                <View style={{ flex: 1, backgroundColor: 'white', marginTop: 5, justifyContent: 'center', padding: 10 }}>
                                    <Text style={{ fontSize: 13, fontFamily: 'Quicksand-Bold', color: 'black', }}>Home 1</Text>
                                    <Text style={{ fontSize: 13, paddingTop: 3, fontFamily: 'Quicksand-Regular', color: 'black', }}>Penerima : <Text style={{ fontSize: 13, fontFamily: 'Quicksand-Bold', color: 'black' }}>{this.state.dataDetailOrder.length === 0 ? '-' : this.state.dataDetailOrder[0].ApapunUsers.realm}</Text> </Text>
                                    <Text style={{ fontSize: 13, fontFamily: 'Quicksand-Regular', color: 'black', paddingTop: 10 }}>{this.state.dataDetailOrder.length === 0 ? '-' : this.state.dataDetailOrder[0].noPhone}</Text>
                                    <Text style={{ fontSize: 13, fontFamily: 'Quicksand-Regular', color: 'black', }}>{this.state.dataDetailOrder.length === 0 ? '-' : this.state.dataDetailOrder[0].ApapunUsersAddress.addressTxt}</Text>
                                    <Text style={{ fontSize: 13, fontFamily: 'Quicksand-Regular', color: 'black', }} >{this.state.dataDetailOrder.length === 0 ? '-' : this.state.dataDetailOrder[0].ApapunUsersAddress.ApapunDistricts.name}, {this.state.dataDetailOrder.length === 0 ? '-' : this.state.dataDetailOrder[0].ApapunUsersAddress.ApapunRegencies.name} </Text>
                                </View>
                            </View>
                            <View style={{ flex: 1, height: 20 }} />
                        </ScrollView >
                }
            </View >
        )
    }

}

const styles = StyleSheet.create({

    thumbnailContainerStyle: {

        margin: 10,
    },
    thumbnailStyle: {
        height: 90,
        width: 90,
        resizeMode: 'cover',
        // borderRadius: 1
    }


});

export default MyOrderPage

