import React, { Component } from 'react';
import { ToastAndroid, View, Text, Picker, FlatList, Image, AsyncStorage, TouchableOpacity, ScrollView, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, StatusBar, Modal } from 'react-native'
import axios from 'axios';
import { IPSERVER } from '../shared/config';

export class crafterMenuListOrderPage extends React.Component {


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
            StatusSearching: 'Pilih Status',
            dataOrder: '',
            loading: true
        }
    }

    componentDidMount() {
        console.log(this.props, 'Props Order Saya')
        axios.post(`${IPSERVER}/ApapunBets/getBetCrafterByCrafterId`, {
            crafterId: this.props.navigation.state.params.crafter_Id
        })
            .then(response => {
                this.setState({ dataOrder: response.data, loading: false }, () => {
                    console.log(this.state.dataOrder, 'Data Order');
                });
            }).catch(error => {
                console.log(error, 'Error Get Order');
                this.setState({ loading: false });
                return ToastAndroid.show('Connection Time Out, Server Maybe Down', ToastAndroid.SHORT);
            });
    }

    handleRefresh = () => {
        console.log('Refresh');
        this.setState({
            loading: true
        }, () => {
            this.componentDidMount();
        })
    }

    onChange = (name, value) => {
        this.setState({ [name]: value }, () => {
            console.log(this.state[name]);
        })
    }

    renderOrder = (data) => {
        console.log(data, 'Data Order');
        return (
            <TouchableOpacity
            // onPress={() => this.pressBUtton()}
            // onPress={() => this.props.navi.navigate('OrderWithTrack')}
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
                        width: '35%',
                        height: 155,
                        // backgroundColor: 'skyblue',
                        alignSelf: 'center'
                    }}>
                        <Image
                            style={{
                                width: '100%',
                                height: '100%',
                                borderRadius: 0,
                                alignSelf: 'center'
                            }}
                            source={{ uri: `${IPSERVER}/ApapunStorageImages/images/download/${data.image_order === undefined ? 'https://www.coastalsocks.com.ng/wp-content/uploads/2014/04/default-avatar.png' : data.image_order}` }}
                        />
                    </View>

                    <View style={{
                        width: '55%',
                        height: 140,
                        // backgroundColor: 'black',
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
                            height: 85,
                            // backgroundColor: 'skyblue',
                            // justifyContent: 'center',
                            flexDirection: 'row'
                        }}>
                            <View style={{
                                height: 100,
                                // width: '60%',
                                // backgroundColor: 'red',
                                // justifyContent: 'center',
                                flex: 1
                            }}>
                                <View style={{ paddingTop: 15, paddingLeft: 10 }}>
                                    <Text style={{ fontSize: 13, fontFamily: 'Quicksand-Regular', color: 'black' }}>Pesanan          :</Text>
                                    <Text style={{ fontSize: 13, fontFamily: 'Quicksand-Regular', color: 'black' }}>Dipesan Oleh  :</Text>
                                    <Text style={{ fontSize: 13, fontFamily: 'Quicksand-Regular', color: 'black' }}>Service Type   :</Text>
                                </View>
                            </View>

                            <View style={{
                                height: 100,
                                flex: 1,
                                // width: '40%',
                                // backgroundColor: 'yellow',
                                // justifyContent: 'center'
                            }}>
                                <View style={{ paddingTop: 13.5, paddingLeft: 5 }}>
                                    <Text style={{ fontSize: 12, fontFamily: 'Quicksand-Regular', color: 'black', fontWeight: 'bold' }}>{data.order_id}</Text>
                                    <Text style={{ fontSize: 12, fontFamily: 'Quicksand-Regular', color: 'black', fontWeight: 'bold' }}>{data.realm}</Text>
                                    <Text style={{ fontSize: 12, fontFamily: 'Quicksand-Regular', color: 'black', fontWeight: 'bold' }}>{data.kategori}</Text>
                                    {/* <Text style={{ fontSize: 12, fontFamily: 'Quicksand-Regular', color: 'black', fontWeight: 'bold' }}>(Adv.Custom)</Text> */}
                                </View>
                            </View>
                        </View>

                        <View style={{
                            width: '100%',
                            height: 45,
                            // backgroundColor: 'yellow',
                            flexDirection: 'row',
                            flex: 2
                            // justifyContent:'center'
                        }}>
                            <View style={{
                                height: '100%',
                                // width: '50%',
                                // backgroundColor: 'red',
                                justifyContent: 'center',
                                flex: 1
                            }}>
                                <View style={{ margin: 5, borderRadius: 100, borderColor: 'gray', borderWidth: 2, flex: 1, justifyContent: 'center' }}>
                                    {/* <TouchableOpacity> */}
                                        <Text style={{ fontSize: 13, textAlign: 'center', fontFamily: 'Quicksand-Regular', color: 'green', fontWeight: 'bold' }}>{data.status}</Text>
                                    {/* </TouchableOpacity> */}
                                </View>
                            </View>
                            <View style={{
                                height: 50,
                                // width: '50%',
                                flex: 1,
                                // backgroundColor: 'blue',
                                justifyContent: 'center',
                            }}>
                                <TouchableOpacity>
                                    <Image
                                        style={{
                                            width: 30,
                                            height: 30,
                                            borderRadius: 0,
                                            // alignSelf: 'center'
                                            marginLeft: 5
                                        }}
                                        source={require('./../assets/images/Chat.png')}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
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
                                width: 18,
                                height: 18,
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
                                width: 18,
                                height: 18,
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
                                                <Picker.Item label='OK' value='1' />
                                                <Picker.Item label='Pending' value='2' />
                                                <Picker.Item label='Batal' value='3' />
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

                                    <View style={{ flex: 1, backgroundColor: '#ef1c25', justifyContent: 'center', margin: 10, borderRadius: 30 }}>
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

                <FlatList
                    data={this.state.dataOrder}
                    renderItem={({ item, index }) => this.renderOrder(item, index)}
                    extraData={this.state}
                    refreshing={this.state.loading}
                    onRefresh={() => this.handleRefresh()}
                />
            </View >
        )
    }

}

const styles = StyleSheet.create({


});

export default crafterMenuListOrderPage

