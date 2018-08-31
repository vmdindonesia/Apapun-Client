import React, { Component } from 'react';
import { ToastAndroid, View, Text, ImageBackground, Image, AsyncStorage, TouchableOpacity, FlatList, ScrollView, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, StatusBar, Modal } from 'react-native'
// import axios from 'axios';
import Swiper from 'react-native-swiper';
import { Container, ContainerSection, Button, Input, InputDate, InputNumber } from '../components/common';

export class clickProductOnCrafterMenuPage extends React.Component {


    static navigationOptions = {
        headerTitle: 'Crafter Menu',
        headerStyle: {
            // shadowOpacity: 0,
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
            ]
        }
    }

    renderProductImage = (data) => {
        console.log(data, '098');
        return (
            <TouchableOpacity>

                <View style={{ flex: 1, flexDirection: 'row', marginTop: 5, marginRight: 5, marginBottom: 5, }}>
                    <Image
                        style={styles.thumbnailStyle}
                        source={{ uri: data.item }}
                    />
                </View>

            </TouchableOpacity >
        )
    }



    render() {
        return (
            <View style={{
                flex: 1,
                backgroundColor: 'white'
            }}>

                <View style={{ width: '100%', height: 65, flexDirection: 'row', }}>
                    <View style={{ width: '50%', flexDirection: 'row', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>

                        <TouchableOpacity >
                            <Image
                                style={{
                                    width: 25,
                                    height: 26.5,
                                    alignSelf: 'center'
                                }}
                                resizeMode='stretch'
                                source={require('./../assets/images/List.png')}
                            />
                            <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 15, color: 'black', paddingTop: 3 }}>Pesanan Saya</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={{ flexDirection: 'column', borderColor: '#ddd', borderWidth: 0.5, height: '50%', alignSelf: 'center' }} />

                    <View style={{ width: '50%', flexDirection: 'row', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>

                        <TouchableOpacity >
                            <Image
                                style={{
                                    width: 25,
                                    height: 26.5,
                                    alignSelf: 'center'
                                }}
                                resizeMode='stretch'
                                source={require('./../assets/images/ic_menu.png')}
                            />
                            <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 15, color: 'black', paddingTop: 3 }}>Menu</Text>
                        </TouchableOpacity>

                    </View>
                </View>

                <ScrollView style={{
                    backgroundColor: '#eaeaea',
                    flex: 1
                }}>

                    <View style={{ flex: 1, height: 250, marginTop: 5, marginLeft: 10, marginRight: 10 }}>
                        <Swiper
                            // style={styles.wrapper}
                            showsButtons={false}
                            showsPagination={false}
                        >
                            <View style={styles.slide1}>
                                <Image
                                    // style={styles.imageStyle}
                                    source={require('./../assets/images/swiperFirst.png')}
                                    resizeMode='cover'
                                />
                            </View>
                            <View style={styles.slide2}>
                                <Image
                                    // style={styles.imageStyle}
                                    source={require('./../assets/images/swiperSecond.png')}
                                    resizeMode='cover'
                                />
                            </View>
                        </Swiper>
                    </View>

                    <View style={{ flex: 1, height: 100, marginTop: 10, marginLeft: 10, marginRight: 10, }}>

                        <FlatList
                            data={this.state.photo}
                            // contentContainerStyle={styles.list}
                            renderItem={this.renderProductImage.bind(this)}
                            showsHorizontalScrollIndicator={false}
                            horizontal={true}
                        // numColumns={3}
                        />

                    </View>

                    <View style={{ flex: 1, height: 55, flexDirection: 'row', marginTop: 10, marginLeft: 10, marginRight: 10 }}>

                        <View style={{ height: 50, flex: 1, marginRight: 10 }}>
                            <View>
                                <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, color: 'black', }}>Nama Produk</Text>
                            </View>
                            <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', marginTop: 5 }}>
                                <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 13, color: 'black', paddingLeft: 5 }}>My Own Table</Text>
                            </View>
                        </View>

                        <View style={{ height: 50, flex: 1 }}>
                            <View >
                                <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, color: 'black', }}>Kategori</Text>
                            </View>
                            <View style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', marginTop: 5 }}>
                                <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 13, color: 'black', paddingLeft: 5 }}>Furniture</Text>
                            </View>
                        </View>

                    </View>

                    <View style={{ flex: 1, height: 50, flexDirection: 'row', marginTop: 5, marginLeft: 10, marginRight: 10, alignItems: 'center' }}>

                        <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, color: 'black', }}>Jumlah yang dipesan</Text>

                        <View style={{ marginLeft: 10, width: 25, height: '60%', backgroundColor: 'white', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: 5, borderWidth: 2, borderColor: '#cbcbcb' }}>
                            <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 13, color: 'black' }}>1</Text>
                        </View>


                        <View style={{ marginLeft: 3, width: 50, height: '60%', backgroundColor: 'white', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', borderRadius: 5, borderWidth: 2, borderColor: '#cbcbcb' }}>
                            <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 13, color: 'black' }}>PCS</Text>
                        </View>


                    </View>

                    <View style={{ flex: 1, height: 75, flexDirection: 'row', marginTop: 10, marginLeft: 10, marginRight: 10 }}>

                        <View style={{ flex: 1, }}>
                            <View >
                                <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, color: 'black', }}>Material</Text>
                            </View>
                            <View style={{ flexDirection: 'row', }}>
                                <View style={{ height: 40, backgroundColor: 'white', borderRadius: 20, borderWidth: 1, margin: 5, justifyContent: 'center', borderWidth: 2, borderColor: '#b6b6b6', padding: 5 }}>
                                    <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 13, color: 'black', textAlign: 'center', padding: 5 }}>Kayu - RedWood</Text>
                                </View>

                                <View style={{ height: 40, backgroundColor: 'white', borderRadius: 20, borderWidth: 1, margin: 5, justifyContent: 'center', borderWidth: 2, borderColor: '#b6b6b6', padding: 5 }}>
                                    <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 13, color: 'black', textAlign: 'center', padding: 5 }}>Besi - Beton</Text>
                                </View>



                            </View>
                        </View>

                    </View>

                    <View style={{ flex: 1, justifyContent: 'center', marginLeft: 10, marginRight: 10, }}>

                        <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, color: 'black', }}>Catatan Tambahan</Text>

                        <View style={{ flex: 1, alignContent: 'center', justifyContent: 'center', marginTop: 5 }}>
                            <Text style={{ fontSize: 13, fontFamily: 'Quicksand-Regular', color: 'black', padding: 10, alignSelf: 'center', backgroundColor: 'white' }}>Dibagian atas meja tolong diberikan ukiran "cemara", bentuk
                            tulisan saya percayakan kepada anda. </Text>
                        </View>

                    </View>


                    <View style={{ height: 120, flex: 1, justifyContent: 'center', marginTop: 5, marginLeft: 10, marginRight: 10, }}>

                        <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, color: 'black', }}>Jasa Pengiriman</Text>


                        <View style={{ flex: 1, marginTop: 5, backgroundColor: 'white', alignSelf: 'center', justifyContent: 'center', alignContent: 'center', flexDirection: 'row' }}>

                            <Image
                                style={{
                                    height: 55,
                                    width: 80,
                                    // borderRadius: 100,
                                    // alignSelf: 'fle',
                                    marginLeft: 30,
                                    alignSelf: 'center'
                                }}
                                source={require('./../assets/images/ic_pos.png')}
                            />

                            <View style={{ flex: 1, alignSelf: 'center', justifyContent: 'center' }}>
                                <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, color: 'black', paddingLeft: 15 }}>Pos Indonesia</Text>
                            </View>
                        </View>

                    </View>

                    <View style={{ flex: 1, justifyContent: 'center', marginTop: 13, marginLeft: 10, marginRight: 10, }}>

                        <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, color: 'black' }}>Alamat Pengiriman</Text>

                        <View style={{ flex: 1, backgroundColor: 'white', marginTop: 5, justifyContent: 'center', padding: 10 }}>
                            <Text style={{ fontSize: 13, fontFamily: 'Quicksand-Bold', color: 'black', }}>Home 1</Text>
                            <Text style={{ fontSize: 13, paddingTop: 3, fontFamily: 'Quicksand-Regular', color: 'black', }}>Penerima : <Text style={{ fontSize: 13, fontFamily: 'Quicksand-Bold', color: 'black' }}>Judy</Text> </Text>
                            <Text style={{ fontSize: 13, fontFamily: 'Quicksand-Regular', color: 'black', paddingTop: 10 }}>(+62)<Text> 84485300 </Text></Text>
                            <Text style={{ fontSize: 13, fontFamily: 'Quicksand-Regular', color: 'black', }}>Jl. Duri Kepa 4 No 5 </Text>
                            <Text style={{ fontSize: 13, fontFamily: 'Quicksand-Regular', color: 'black', }} >Kebon Jeruk, Jakarta Barat </Text>
                        </View>

                    </View>

                    <View style={{ height: 359, flex: 1, justifyContent: 'center', marginTop: 20, backgroundColor: 'white' }}>

                        <Text style={{ fontFamily: 'Quicksand-Bold', color: 'black', fontSize: 15, paddingLeft: 20, paddingTop: 10 }}>Harga Jasa</Text>

                        <View style={{ width: '95%', height: 70, flexDirection: 'row', marginTop: 5, marginLeft: 20, marginRight: 20, backgroundColor: 'white', }}>
                            <View
                                style={{
                                    borderRadius: 100, backgroundColor: 'black', width: 30, height: 30,
                                    justifyContent: 'center', flexDirection: 'row', marginTop: 12, alignContent: 'center'
                                }}
                            >
                                <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 13, color: 'white', textAlign: 'center', paddingTop: 5 }}>Rp</Text>
                            </View>
                            <View style={{ flex: 1, marginLeft: 10, marginRight: 10 }}>
                                <ContainerSection>
                                    <Input

                                        placeholder='silakan isi harga jasa pembuatan'
                                    />
                                </ContainerSection>
                            </View>
                        </View>

                        <Text style={{ fontFamily: 'Quicksand-Bold', color: 'black', fontSize: 15, paddingLeft: 20, }}>Harga Pengiriman</Text>

                        <View style={{ width: '95%', height: 80, flexDirection: 'row', marginTop: 5, marginLeft: 20, marginRight: 20, backgroundColor: 'white', }}>
                            <View
                                style={{
                                    borderRadius: 100, backgroundColor: 'black', width: 30, height: 30,
                                    justifyContent: 'center', flexDirection: 'row', marginTop: 12, alignContent: 'center'
                                }}
                            >
                                <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 13, color: 'white', textAlign: 'center', paddingTop: 5 }}>Rp</Text>
                            </View>
                            <View style={{ flex: 1, marginLeft: 10, marginRight: 10 }}>
                                <ContainerSection>
                                    <Input

                                        placeholder='silakan isi harga pengiriman'
                                    />
                                </ContainerSection>
                            </View>
                        </View>

                        <Text style={{ fontFamily: 'Quicksand-Bold', color: 'black', fontSize: 15, paddingLeft: 20, marginTop: -10 }}>Selesai Pembuatan</Text>

                        <View style={{ width: '95%', height: 80, flexDirection: 'row', paddingTop: 3, marginLeft: 12, marginRight: 20, backgroundColor: 'white', }}>

                            <View style={{ flex: 1, }}>
                                <ContainerSection>
                                    <Input

                                        placeholder=''
                                    />
                                </ContainerSection>
                            </View>

                        </View>

                        <View style={{ flex: 1, marginLeft: 10, marginRight: 10, marginTop: -25 }}>
                            <TouchableOpacity
                                style={{
                                    borderRadius: 25, flex: 1, backgroundColor: '#ef1c25', justifyContent: 'center',
                                    marginTop: 35, marginBottom: 10,
                                }}
                                onPress={() => this.props.navigation.navigate('ProductReadyToSend')}
                            >
                                <Text style={{ fontFamily: 'Quicksand-Bold', textAlign: 'center', color: 'white' }}>Ambil Pesanan</Text>
                            </TouchableOpacity>

                        </View>





                    </View>









                </ScrollView >





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

export default clickProductOnCrafterMenuPage

