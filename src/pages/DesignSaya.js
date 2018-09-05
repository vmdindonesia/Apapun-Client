import React, { Component } from 'react';
import { View, Text, Animated, ImageBackground, Image, Picker, AsyncStorage, TouchableOpacity, ScrollView, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, FlatList, StatusBar, Modal } from 'react-native'
// import axios from 'axios';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';

export class DesignSayaPage extends React.Component {


    static navigationOptions = ({ navigation }) => ({
        headerLeft:
            <TouchableOpacity
                onPress={() => { navigation.goBack(); console.log(navigation.goBack(), 'Props Order') }}
            >
                <Icon size={30} style={{ marginLeft: 25, color: '#EF1C25' }} name='ios-arrow-back' />
            </TouchableOpacity>,
        headerTitle: 'Design Saya',
        headerStyle: {
            elevation: 0
        }
    });

    constructor(props) {
        super(props)
        this.state = {
            photo: [
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',
            ],
            photos: [
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg'
            ],
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


    renderProductItem = (data) => {
        console.log(data, '098');
        return (
            <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('PageDesign')}>
                <View style={styles.card}>
                    <View style={styles.thumbnailContainerStyle}>
                        <Image
                            style={styles.thumbnailStyle}
                            source={{ uri: data.item }}
                        />
                    </View>
                    <View style={{ marginLeft: 10, flex: 1, marginBottom: 20 }}>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Text style={{ textAlign: 'left', fontSize: 15, fontFamily: 'Quicksand-Bold', color: 'black', alignSelf: 'center' }}>
                                My Own Table </Text>
                            <View style={{ flex: 1, marginLeft: 25 }}>
                                <Image
                                    style={{ width: 25, height: 25 }}
                                    source={require('./../assets/images/Cukup.png')}
                                    resizeMode='stretch'
                                />
                                <Text style={{ fontSize: 13, marginRight: '10%', paddingTop: '5%', fontFamily: 'Quicksand-Regular' }}>
                                    (10)
                            </Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', marginRight: 10, marginTop: 10 }}>
                            <Text style={{ fontSize: 13, fontFamily: 'Quicksand-Regular', color: 'black' }}>
                                Total Apresiasi
                            </Text>
                            <Text style={{ fontSize: 13, marginLeft: 30, fontFamily: 'Quicksand-Regular', color: 'black' }}>
                                Terjual
                            </Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', marginRight: 10, marginTop: 5 }}>
                            <Text style={{ fontSize: 13, marginLeft: '10%', fontFamily: 'Quicksand-Regular', color: 'red' }}>
                                Rp. 20.000
                            </Text>
                            <Text style={{ fontSize: 13, marginLeft: 50, fontFamily: 'Quicksand-Regular', color: 'red' }}>
                                10
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }


    renderProdu = (data) => {
        console.log(data, '098');
        return (
            <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('PageDesign')}>
                <View style={styles.cardi}>
                    <View style={styles.thumbnailContainerStyle}>
                        <Image
                            style={styles.thumbnailStyle}
                            source={{ uri: data.item }}
                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <View style={{ flex: 1, justifyContent: 'center', marginTop: 5 }}>
                            <Text style={{ textAlign: 'center', fontSize: 13, fontFamily: 'Quicksand-Regular', color: 'black' }}>
                                Desain belum terdaftar di Market
                            </Text>
                        </View>
                        <TouchableOpacity
                            style={{ marginBottom: 10, marginTop: 10 }}
                            onPress={() => this.props.navigation.navigate('SettingProduct')}
                        >
                            <View style={styles.buttonSignUp}>
                                <Text style={styles.signupButton}>Daftar</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </TouchableWithoutFeedback>
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
                flex: 1,
            }}>


                <View style={{
                    width: '100%',
                    height: '15%',
                    paddingTop: 10,
                    paddingBottom: 10,
                    flexDirection: 'row',
                    backgroundColor: '#FFF'
                }}>
                    <TouchableOpacity
                        style={{
                            justifyContent: 'center',
                            alignContent: 'center',
                            flex: 1
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
                        justifyContent: 'center',
                        alignContent: 'center',
                        flex: 1
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
                            <View style={{ height: 150, backgroundColor: 'white', alignItems: 'center', zIndex: 1, marginTop: -100 }}>

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
                                        <Text style={{ paddingTop: 5, fontFamily: 'Quicksand-Regular', fontSize: 15, paddingLeft: 20, color: 'black' }}>Ulasan</Text>
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
                            <View style={{ height: 270, backgroundColor: 'white', alignItems: 'center', zIndex: 1, marginTop: -75 }}>

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

                                <View style={{ height: 70, justifyContent: 'center', marginTop: 5 }}>

                                    <View style={{ backgroundColor: 'white', flexDirection: 'row' }}>

                                        <Text style={{ paddingLeft: 5, fontSize: 15, fontFamily: 'Quicksand-Regular', color: 'black', alignSelf: 'center' }}>Ulasan</Text>

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
                                                <Picker.Item label='Pilih Ulasan' />
                                                <Picker.Item label='Buruk' value='Buruk' />
                                                <Picker.Item label='Cukup' value='Cukup' />
                                                <Picker.Item label='Bagus' value='Bagus' />
                                                <Picker.Item label='Sempurna' value='Sempurna' />
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
                <View style={{ flex: 1, backgroundColor: '#eaeaea' }}>
                    <FlatList
                        data={this.state.photo}
                        renderItem={this.renderProductItem.bind(this)}
                        showsHorizontalScrollIndicator={false}
                        numColumns={2}
                        horizontal={false}
                    />
                    <FlatList
                        data={this.state.photos}
                        renderItem={this.renderProdu.bind(this)}
                        showsHorizontalScrollIndicator={false}
                        numColumns={2}
                        horizontal={false}
                    />
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({
    butin: {
        zIndex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        height: 44,
        paddingTop: 260,
        width: 200,
        marginBottom: 30,
        position: 'absolute'
    },
    signupButton: {
        textAlign: 'center',
        color: 'white',
        fontSize: 15,
        fontFamily: 'Quicksand-Reguler'
    },
    cardi: {
        borderRadius: 4,
        elevation: 2,
        marginLeft: 5,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        width: wp('48%'),
    },
    card: {
        borderRadius: 4,
        elevation: 3,
        marginLeft: 5,
        marginTop: 5,
        backgroundColor: '#FFF',
        justifyContent: 'center',
        width: wp('48%'),
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    thumbnailStyle: {
        alignSelf: 'center',
        height: 120,
        // flex: 1,
        width: 160,
        resizeMode: 'stretch',
        borderRadius: 4
    },
    buttonSignUp: {
        backgroundColor: '#ef1c25',
        borderRadius: 20,
        height: 30,
        width: 100,
        justifyContent: 'center',
        alignSelf: 'center',
    }



})

export default DesignSayaPage