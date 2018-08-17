import React, { Component } from 'react';
import { ToastAndroid, View, Text, Picker, ImageBackground, Image, AsyncStorage, TouchableOpacity, ScrollView, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, StatusBar, Modal } from 'react-native'
import { Container, ContainerSection, Button, Input, InputSearch, InputDate } from '../components/common';
// import axios from 'axios';
import { COLOR } from '../shared/config';



export class WishlistOnMyOrderPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            sort: false,
            filter: false,
            StatusSearching: 'Pilih Status'
        }
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
                    // marginT  op: 5,
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
                                width: 33,
                                height: 24.5,
                                borderRadius: 0,
                                alignSelf: 'center',
                                marginTop: 1.5
                            }}
                            source={require('./../assets/images/ic_sort.png')}
                        />
                        <Text style={{ marginTop: 3, paddingTop: 2, fontFamily: 'Quicksand-Regular', fontSize: 13, color: 'black', textAlign: 'center' }}>Urutkan</Text>


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
                        <Text style={{ paddingTop: 5, fontFamily: 'Quicksand-Regular', fontSize: 13, color: 'black', textAlign: 'center' }}>Filter</Text>

                    </TouchableOpacity>
                </View>
                {

                    sort === true ?

                        <TouchableWithoutFeedback
                            onPress={() => this.setState({ sort: false })}
                        >
                            <View style={{ height: 120, backgroundColor: 'white', alignItems: 'center', zIndex: 1, marginTop: -70 }}>

                                <View style={{ height: 55, justifyContent: 'center', alignItems: 'center', }}>
                                    <Text style={{ paddingTop: 5, fontFamily: 'Quicksand-Bold', fontSize: 15, color: 'black' }}>Urutkan Berdasarkan</Text>
                                </View>

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
                                                <Picker.Item label='Pilih Jenis Pemesanan' />
                                                <Picker.Item label='Custom Order' value='Custom' />
                                                <Picker.Item label='Capture And Get' value='Capture' />
                                                <Picker.Item label='Idea Market' value='Idea' />
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

                    <View style={{
                        height: 140,
                        width: '100%',
                        // backgroundColor: 'blue',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        flex: 2,
                        marginTop: 10
                    }}>

                        <View style={{
                            width: '37%',
                            height: 125,
                            // backgroundColor: 'skyblue',
                            // alignSelf: 'center'
                        }}>
                            <Image
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: 0,
                                    alignSelf: 'center'
                                }}
                                source={require('./../assets/images/pot_bunga.jpg')}
                            />
                        </View>


                        <View style={{
                            width: '55%',
                            height: 115,
                            // backgroundColor: 'white',
                            // alignSelf: 'center',
                            flexDirection: 'row',
                            // flex: 1,
                            // borderRadius: 20,
                            backgroundColor: '#ffffff',
                            // shadowColor: 'black',
                            shadowOffset: { width: 10, heigth: 10 },
                            shadowRadius: 5,
                            shadowOpacity: 1.0,
                            // borderWidth: 0.5,
                            borderColor: '#d6d7da',
                            zIndex: 1,
                            marginTop: 5
                        }}>

                            <View style={{
                                height: '100%',
                                width: '100%',
                                paddingLeft: 20,
                                marginTop: 20
                                // backgroundColor: 'red',
                                // justifyContent: 'center'
                            }}>
                                <View style={{ justifyContent: 'center' }}>

                                    <Text style={{ fontSize: 15, paddingTop: 5, fontFamily: 'Quicksand-Bold', color: 'black' }}>Elegant Pottery</Text>
                                    <Text style={{ fontSize: 13, paddingTop: 5, fontFamily: 'Quicksand-Regular', color: 'black' }}>Dipesan Dari :
                                          <Text style={{ color: 'red', fontSize: 13, paddingTop: 3, fontFamily: 'Quicksand-Regular' }}>Workshop</Text></Text>


                                </View>
                            </View>
                        </View>

                        <View style={{
                            backgroundColor: 'red',
                            height: 40,
                            width: 100,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 100,
                            zIndex: 2,
                            marginLeft: -110,
                            marginTop: 100,
                            paddingRight: 10,
                            marginRight: 10
                        }}>
                            <TouchableOpacity style={{ alignSelf: 'center', paddingRight: 15, marginLeft: 7.5 }}
                                onPress={() => this.props.navi.navigate('Captureandget')}
                            >
                                <Image
                                    style={{
                                        width: 17,
                                        height: 17,
                                        borderRadius: 0,
                                        // alignSelf: 'center'
                                    }}
                                    source={require('./../assets/images/pen_white.png')}
                                    resizeMode='contain'
                                />
                            </TouchableOpacity>


                            <View style={{ flexDirection: 'column', borderColor: 'black', borderWidth: 0.5, height: '50%', }} />

                            <TouchableOpacity style={{ alignSelf: 'center', paddingLeft: 15 }}
                                onPress={() => { ToastAndroid.show('Under Development', ToastAndroid.SHORT); }}
                            >
                                <Image
                                    style={{
                                        width: 14,
                                        height: 20,
                                        borderRadius: 0,
                                        alignSelf: 'center'
                                    }}
                                    source={require('./../assets/images/trash_white.png')}
                                    resizeMode='contain'
                                />
                            </TouchableOpacity>

                        </View>
                    </View>

                    <View style={{
                        height: 140,
                        width: '100%',
                        // backgroundColor: 'blue',
                        flexDirection: 'row',
                        justifyContent: 'center',
                        flex: 2,
                        marginTop: 10
                    }}>

                        <View style={{
                            width: '37%',
                            height: 125,
                            // backgroundColor: 'skyblue',
                            // alignSelf: 'center'
                        }}>
                            <Image
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: 0,
                                    alignSelf: 'center'
                                }}
                                source={require('./../assets/images/air_jordan.jpg')}
                            />
                        </View>


                        <View style={{
                            width: '55%',
                            height: 115,
                            // backgroundColor: 'white',
                            // alignSelf: 'center',
                            flexDirection: 'row',
                            // flex: 1,
                            // borderRadius: 20,
                            backgroundColor: '#ffffff',
                            // shadowColor: 'black',
                            shadowOffset: { width: 10, heigth: 10 },
                            shadowRadius: 5,
                            shadowOpacity: 1.0,
                            // borderWidth: 0.5,
                            borderColor: '#d6d7da',
                            zIndex: 1,
                            marginTop: 5
                        }}>

                            <View style={{
                                height: '100%',
                                width: '100%',
                                paddingLeft: 20,
                                marginTop: 20
                                // backgroundColor: 'red',
                                // justifyContent: 'center'
                            }}>
                                <View style={{ justifyContent: 'center' }}>

                                    <Text style={{ fontSize: 15, paddingTop: 5, fontFamily: 'Quicksand-Bold', color: 'black' }}>Air Jordan</Text>
                                    <Text style={{ fontSize: 13, paddingTop: 5, fontFamily: 'Quicksand-Regular', color: 'black' }}>Dipesan Dari :
                                          <Text style={{ color: 'red', fontSize: 13, paddingTop: 3, fontFamily: 'Quicksand-Regular' }}>Market</Text></Text>


                                </View>
                            </View>
                        </View>

                        <View style={{
                            backgroundColor: 'red',
                            height: 40,
                            width: 100,
                            flexDirection: 'row',
                            justifyContent: 'center',
                            alignItems: 'center',
                            borderRadius: 100,
                            zIndex: 2,
                            marginLeft: -110,
                            marginTop: 100,
                            paddingRight: 10,
                            marginRight: 10
                        }}>
                            <TouchableOpacity style={{ alignSelf: 'center', paddingRight: 15, marginLeft: 7.5 }}
                                onPress={() => this.props.navi.navigate('')}
                            >
                                <Image
                                    style={{
                                        width: 20,
                                        height: 20,
                                        borderRadius: 0,
                                        // alignSelf: 'center'

                                    }}
                                    resizeMode='contain'
                                    source={require('./../assets/images/keranjang.png')}
                                />
                            </TouchableOpacity>

                            <View style={{ flexDirection: 'column', borderColor: 'black', borderWidth: 0.5, height: '50%', }} />


                            <TouchableOpacity style={{ alignSelf: 'center', paddingLeft: 15 }}
                                onPress={() => { ToastAndroid.show('Under Development', ToastAndroid.SHORT); }}
                            >
                                <Image
                                    style={{
                                        width: 14,
                                        height: 20,
                                        borderRadius: 0,
                                        alignSelf: 'center'
                                    }}
                                    source={require('./../assets/images/trash_white.png')}
                                    resizeMode='contain'
                                />
                            </TouchableOpacity>

                        </View>
                    </View>





                </ScrollView>


            </View >
        )
    }

}

const styles = StyleSheet.create({


});

export default WishlistOnMyOrderPage

