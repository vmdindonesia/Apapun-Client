import React, { Component } from 'react';
import { ToastAndroid, View, Text, ImageBackground, Image, AsyncStorage, TouchableOpacity, Picker, ScrollView, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, StatusBar, Modal } from 'react-native'
import axios from 'axios';
import { IPSERVER } from './../shared/config';

export class OrderOnMyOrderPage extends React.Component {

    pressBUtton() {
        console.log('Press!');
        console.log(this.props, 'Props')
        this.props.navi.navigate('DetailOrder')
    }

    static navigationOptions = {
        headerTitle: 'Pesanan Saya',
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
            sort: false,
            filter: false,
            StatusSearching: 'Pilih Status'
        }
    }

    componentDidMount() {
        console.log(this.props.navi.state.params, 'Props From Order Page');
        const orderId = this.props.navi.state.params;
        axios.post(`${IPSERVER}/ApapunBets/getBetCrafterByOrder`, { orderId }).then(response => {
            console.log(response.data, 'Response Get Bet')
            this.setState({ dataCrafterBet: response.data });
        }).catch(error => {
            console.log(error, 'Error Get Order Betting');
            return ToastAndroid.show('Connection Time Out, Server Maybe Down', ToastAndroid.SHORT);
        });
    }

    onChange = (name, value) => {
        this.setState({ [name]: value }, () => {
            console.log(this.state[name]);
        })
    }


    render() {

        const {
            sort,
            filter,
            StatusSearching
        } = this.state

        return (
            <View style={{
                flex: 1
            }}>

                <View style={{
                    // marginTop: 5,
                    width: '100%',
                    height: '12.5%',
                    paddingTop: 10,
                    paddingBottom: 10,
                    // flex : 1,
                    flexDirection: 'row',
                    backgroundColor: 'white'
                }}>
                    <TouchableOpacity style={{
                        alignSelf: 'center', width: '50%',
                        height: '100%',
                        justifyContent: 'center',
                        alignContent: 'center',
                        flexDirection: 'column',
                    }}
                        onPress={() => this.setState({ sort: !this.state.sort, filter: false })}
                    >

                        <Image
                            style={{
                                width: 25,
                                height: 26.5,
                                borderRadius: 0,
                                alignSelf: 'center',

                            }}
                            source={require('./../assets/images/ic_sort.png')}
                        />
                        <Text style={{ paddingTop: 5, fontFamily: 'Quicksand-Bold', fontSize: 13, color: 'black', textAlign: 'center' }}>Urutkan</Text>


                    </TouchableOpacity>

                    <View style={{ flexDirection: 'column', borderColor: '#e5e5e5', borderWidth: 1, height: '70%', alignSelf: 'center' }} />


                    <TouchableOpacity style={{
                        alignSelf: 'center', width: '50%',
                        height: '100%',
                        // backgroundColor: 'blue',
                        justifyContent: 'center',
                        alignContent: 'center',
                        flexDirection: 'column'
                    }}
                        onPress={() => this.setState({ filter: !this.state.filter, sort: false })}
                    >

                        <Image
                            style={{
                                width: 25,
                                height: 26.5,
                                borderRadius: 0,
                                alignSelf: 'center'
                            }}
                            source={require('./../assets/images/ic_filter.png')}
                        />
                        <Text style={{ paddingTop: 5, fontFamily: 'Quicksand-Bold', fontSize: 13, color: 'black', textAlign: 'center' }}>Filter</Text>

                    </TouchableOpacity>
                </View>

                {

                    sort === true ?

                        <TouchableWithoutFeedback
                            onPress={() => this.setState({ sort: false })}
                        >
                            <View style={{ height: 200, backgroundColor: 'white', alignItems: 'center', zIndex: 1, marginTop: -70 }}>

                                <View style={{ height: 55, justifyContent: 'center', alignItems: 'center', }}>
                                    <Text style={{ paddingTop: 5, fontFamily: 'Quicksand-Bold', fontSize: 15, color: 'black' }}>Urutkan Berdasarkan</Text>
                                </View>

                                <TouchableOpacity style={{ height: 30, width: '100%', marginTop: 5 }}>
                                    <View style={{ height: 30, width: '100%', }}>
                                        <Text style={{ paddingTop: 5, fontFamily: 'Quicksand-Regular', fontSize: 15, paddingLeft: 20, color: 'black' }}>Tanggal Pesanan : Terbaru</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity style={{ height: 30, width: '100%', }}>
                                    <View style={{ height: 30, width: '100%', }}>
                                        <Text style={{ paddingTop: 5, fontFamily: 'Quicksand-Regular', fontSize: 15, paddingLeft: 20, color: 'black' }}>Tanggal Pesanan : Terlama</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity style={{ height: 30, width: '100%', }}>
                                    <View style={{ height: 30, width: '100%', }}>
                                        <Text style={{ paddingTop: 5, fontFamily: 'Quicksand-Regular', fontSize: 15, paddingLeft: 20, color: 'black' }}>Nama Crafter : A - Z</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity style={{ height: 30, width: '100%', }}>
                                    <View style={{ height: 30, width: '100%', }}>
                                        <Text style={{ paddingTop: 5, fontFamily: 'Quicksand-Regular', fontSize: 15, paddingLeft: 20, color: 'black' }}>Nama Crafter : Z - A</Text>
                                    </View>
                                </TouchableOpacity>

                            </View>
                        </TouchableWithoutFeedback>
                        :
                        <View />
                }


                {

                    filter === true ?

                        <TouchableWithoutFeedback
                            onPress={() => this.setState({ filter: false })}
                        >
                            <View style={{ height: 200, backgroundColor: 'white', alignItems: 'center', zIndex: 1, marginTop: -70 }}>

                                <View style={{ height: 40, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ paddingTop: 5, fontFamily: 'Quicksand-Bold', fontSize: 15, color: 'black' }}>Filter</Text>
                                </View>

                                <View style={{ height: 70, justifyContent: 'center', marginTop: 5 }}>

                                    <View style={{ backgroundColor: 'white', flexDirection: 'row' }}>

                                        <Text style={{ paddingLeft: 5, fontSize: 15, fontFamily: 'Quicksand-Regular', color: 'black', alignSelf: 'center' }}>Status</Text>

                                    </View>

                                    <View style={{ flex: 1, width: '90%', flexDirection: 'row', justifyContent: 'flex-end', marginTop: 5 }}>
                                        <View style={{
                                            flex: 1, borderColor: '#e5e5e5', borderRadius: 5, borderWidth: 2, justifyContent: 'center',
                                            backgroundColor: '#fff',
                                        }}>
                                            <Picker
                                                selectedValue={StatusSearching}
                                                onValueChange={v => this.onChange('StatusSearching', v)}
                                            >
                                                <Picker.Item label='Pilih Status Filter' value='0' />
                                                <Picker.Item label='Mencari Crafter' value='1' />
                                                <Picker.Item label='Proses Transaksi' value='2' />
                                                <Picker.Item label='Sedang Dproses' value='34' />
                                                <Picker.Item label='Sedang Diantar' value='SedangDiantar' />
                                            </Picker>
                                        </View>
                                    </View>

                                </View>

                                <View style={{ height: 60, width: '95%', flexDirection: 'row', marginTop: 12.5 }}>

                                    <View style={{ flex: 1, backgroundColor: 'black', justifyContent: 'center', margin: 10, borderRadius: 30 }}>
                                        <TouchableOpacity>
                                            <Text style={{ margin: 7, fontSize: 15, fontFamily: 'Quicksand-Regular', color: 'white', alignSelf: 'center' }}>Hapus Filter</Text>
                                        </TouchableOpacity>
                                    </View>

                                    <View style={{ flex: 1, backgroundColor: 'red', justifyContent: 'center', margin: 10, borderRadius: 30 }}>
                                        <TouchableOpacity>
                                            <Text style={{ fontSize: 15, fontFamily: 'Quicksand-Regular', color: 'white', alignSelf: 'center' }}>Pasang Filter</Text>
                                        </TouchableOpacity>
                                    </View>

                                </View>

                            </View>
                        </TouchableWithoutFeedback>
                        :
                        <View />
                }





                <ScrollView style={{
                    backgroundColor: '#eaeaea',
                    flex: 1
                }}>
                    <TouchableOpacity
                        // onPress={() => this.pressBUtton()}
                        onPress={() => { this.props.navi.navigate('OrderWithTrack'); }}
                    >
                        <View style={{
                            height: 165,
                            width: '100%',
                            // backgroundColor: 'blue',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            flex: 2,
                            marginTop: 10
                        }}>

                            <View style={{
                                width: '37%',
                                height: 155,
                                backgroundColor: 'skyblue',
                                alignSelf: 'center'
                            }}>
                                <Image
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        borderRadius: 0,
                                        alignSelf: 'center'
                                    }}
                                    source={require('./../assets/images/table1_example.jpg')}
                                />
                            </View>


                            <View style={{
                                width: '55%',
                                height: 150,
                                // backgroundColor: 'white',
                                alignSelf: 'center',
                                flexDirection: 'column',
                                // flex: 1,
                                // borderRadius: 20,
                                backgroundColor: '#ffffff',
                                // shadowColor: 'black',
                                shadowOffset: { width: 10, heigth: 10 },
                                shadowRadius: 5,
                                shadowOpacity: 1.0,
                                // borderWidth: 0.5,
                                borderColor: '#d6d7da',
                            }}>

                                <View style={{
                                    width: '100%',
                                    height: 100,
                                    // backgroundColor: 'black'
                                    // justifyContent: 'center',
                                    flexDirection: 'row'
                                }}>
                                    <View style={{
                                        height: 100,
                                        width: '60%',
                                        // backgroundColor: 'red',
                                        justifyContent: 'center'
                                    }}>
                                        <View style={{ alignSelf: 'center' }}>

                                            <Text style={{ fontSize: 13, color: 'red', fontFamily: 'Quicksand-Regular' }}>19749373437D</Text>
                                            <Text style={{ fontSize: 15, paddingTop: 5, fontFamily: 'Quicksand-Bold', color: 'black' }}>My Own Table</Text>
                                            <Text style={{ fontSize: 13, paddingTop: 5, fontFamily: 'Quicksand-Regular', color: 'black' }}>Dipesan Dari : </Text>
                                            <Text style={{ color: 'red', fontSize: 13, paddingTop: 3, fontFamily: 'Quicksand-Regular' }}>Workshop</Text>

                                        </View>

                                    </View>
                                    <View style={{
                                        height: 100,
                                        width: '40%',
                                        // backgroundColor: 'skyblue',
                                        justifyContent: 'center'
                                    }}>
                                        <Image
                                            style={{
                                                width: 50,
                                                height: 50,
                                                borderRadius: 100,

                                                alignSelf: 'center',
                                                // paddingTop:-15
                                            }}
                                            source={require('./../assets/images/ic_onprocess.png')}
                                        />
                                    </View>
                                </View>


                                <View style={{
                                    width: '100%',
                                    height: 50,
                                    // backgroundColor: 'yellow',
                                    flexDirection: 'row',
                                    flex: 2
                                    // justifyContent:'center'
                                }}>
                                    <View style={{
                                        height: 50,
                                        width: '50%',
                                        // backgroundColor: 'red',
                                        justifyContent: 'center'
                                    }}>
                                        <Text style={{ fontSize: 13, textAlign: 'center', fontFamily: 'Quicksand-Regular' , color: 'black'}}>Jumlah : (2)</Text>
                                    </View>
                                    <View style={{
                                        height: 50,
                                        width: '50%',
                                        // backgroundColor: 'blue',
                                        justifyContent: 'center',
                                    }}>
                                        <Text style={{ fontSize: 13, textAlign: 'center', fontFamily: 'Quicksand-Bold', color: 'black'   }} >Rp. 1.500.000 </Text>
                                    </View>
                                </View>


                            </View>

                        </View>
                    </TouchableOpacity>


                    <TouchableOpacity
                        onPress={() => this.props.navi.navigate('OrderWithTrack')}
                    >
                        <View style={{
                            height: 165,
                            width: '100%',
                            // backgroundColor: 'blue',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            flex: 2,
                            marginTop: 10
                        }}>
                            <View style={{
                                width: '37%',
                                height: 155,
                                backgroundColor: 'skyblue',
                                alignSelf: 'center'
                            }}>
                                <Image
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        borderRadius: 0,
                                        alignSelf: 'center'
                                    }}
                                    source={require('./../assets/images/vans_shoes.jpg')}
                                />
                            </View>

                            <View style={{
                                width: '55%',
                                height: 150,
                                // backgroundColor: 'white',
                                alignSelf: 'center',
                                flexDirection: 'column',
                                // flex: 1,
                                // borderRadius: 20,
                                backgroundColor: '#ffffff',
                                // shadowColor: 'black',
                                shadowOffset: { width: 10, heigth: 10 },
                                shadowRadius: 5,
                                shadowOpacity: 1.0,
                                // borderWidth: 0.5,
                                borderColor: '#d6d7da',
                            }}>

                                <View style={{
                                    width: '100%',
                                    height: 100,
                                    // backgroundColor: 'black'
                                    // justifyContent: 'center',
                                    flexDirection: 'row'
                                }}>
                                    <View style={{
                                        height: 100,
                                        width: '60%',
                                        // backgroundColor: 'red',
                                        justifyContent: 'center'
                                    }}>
                                        <View style={{ alignSelf: 'center' }}>
                                            {/* <TouchableOpacity> */}
                                            <Text style={{ fontSize: 13, color: 'red', fontFamily: 'Quicksand-Regular' }}>1934378UDJA9</Text>
                                            <Text style={{ fontSize: 13, paddingTop: 5, fontFamily: 'Quicksand-Bold', color: 'black' }}>Vans Shoes</Text>
                                            <Text style={{ fontSize: 13, paddingTop: 5, fontFamily: 'Quicksand-Regular', color: 'black' }}>Dipesan Dari : </Text>
                                            <Text style={{ color: 'red', fontSize: 13, paddingTop: 3, fontFamily: 'Quicksand-Regular' }}>Seija Company</Text>
                                            {/* </TouchableOpacity> */}
                                        </View>

                                    </View>
                                    <View style={{
                                        height: 100,
                                        width: '40%',
                                        // backgroundColor: 'skyblue',
                                        justifyContent: 'center'
                                    }}>
                                        <Image
                                            style={{
                                                width: 50,
                                                height: 50,
                                                borderRadius: 100,

                                                alignSelf: 'center',
                                                // paddingTop:-15
                                            }}
                                            source={require('./../assets/images/ic_sending.png')}
                                        />
                                    </View>


                                </View>

                                <View style={{
                                    width: '100%',
                                    height: 50,
                                    // backgroundColor: 'yellow',
                                    flexDirection: 'row',
                                    flex: 2
                                    // justifyContent:'center'
                                }}>
                                    <View style={{
                                        height: 50,
                                        width: '50%',
                                        // backgroundColor: 'red',
                                        justifyContent: 'center'
                                    }}>
                                        <Text style={{ fontSize: 13, textAlign: 'center', fontFamily: 'Quicksand-Regular', color: 'black' }}>Jumlah : (1)</Text>
                                    </View>
                                    <View style={{
                                        height: 50,
                                        width: '50%',
                                        // backgroundColor: 'blue',
                                        justifyContent: 'center',
                                    }}>
                                        <Text style={{ fontSize: 13, textAlign: 'center', fontFamily: 'Quicksand-Bold', color: 'black'  }} >Rp. 900.000 </Text>
                                    </View>
                                </View>


                            </View>
                        </View>
                    </TouchableOpacity>

                </ScrollView>





            </View>
        )
    }

}

const styles = StyleSheet.create({


});

export default OrderOnMyOrderPage

