import React, { Component } from 'react';
import { ToastAndroid, View, Text, ImageBackground, Image, Picker, AsyncStorage, TouchableOpacity, FlatList, ScrollView, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, StatusBar, Modal } from 'react-native'
// import axios from 'axios';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Container, ContainerSection, Button, Input, InputDate, InputNumber } from '../components/common';
import Icon from 'react-native-vector-icons/Ionicons';

export class ListHoodiePage extends React.Component {


    static navigationOptions = ({ navigation }) => ({
        headerLeft:
            <TouchableOpacity
                onPress={() => { navigation.goBack(); console.log(navigation.goBack(), 'Props Order') }}
            >
                <Icon size={30} style={{ marginLeft: 25, color: '#EF1C25' }} name='ios-arrow-back' />
            </TouchableOpacity>,
        headerTitle: 'Hoodie',
        headerStyle: {
            // shadowOpacity: 0,
            elevation: 0,
            borderBottomColor: 'white',
            borderBottomWidth: 0
        },
    });


    onChange = (name, value) => {
        this.setState({ [name]: value }, () => {
            console.log(this.state[name]);
        })
    }



    constructor(props) {
        super(props)
        this.state = {
            // screen: 'Custom'
            sort: false,
            filter: false,
            StatusSearching: 'Pilih Status',
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
            <TouchableOpacity
                onPress={() => this.props.navigation.navigate('onClickProductOnIdeaFashion')}
            >

                <View style={styles.card}>
                    <View style={styles.thumbnailContainerStyle}>
                        <Image
                            style={styles.thumbnailStyle}
                            source={{ uri: data.item }}
                        />
                    </View>
                    <View style={{ width: wp('50%'), height: 100, backgroundColor: 'white' }}>

                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>

                            <View style={{ flex: 1 }}>
                                <Text style={{ fontFamily: 'Quicksand-Regular', fontWeight: 'bold', fontSize: 15, color: 'black', paddingLeft: 10 }}>Kaos Ilusi</Text>
                            </View>

                            <View style={{ flex: 1, flexDirection: 'column', alignItems: 'flex-end' }}>
                                <Image
                                    style={{
                                        width: 23,
                                        height: 23,
                                        // alignSelf: 'center'
                                        marginRight: 10
                                    }}
                                    resizeMode='stretch'
                                    source={require('./../assets/images/sempurna.png')}
                                />
                                <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 15, color: 'black', paddingRight: 10 }}>(2)</Text>
                            </View>


                        </View>

                        <View style={{ flex: 1, flexDirection: 'row' }}>

                            <View style={{ width: '30%', flexDirection: 'column', justifyContent: 'center', }}>
                                <View style={{ height: 40, width: 40, borderRadius: 100, backgroundColor: 'black', marginLeft: 10 }}>
                                    {/* <Image
                                        style={{
                                            width: 50,
                                            height: 50,
                                            // alignSelf: 'center'
                                            borderRadius: 100
                                        }}
                                        resizeMode='cover'
                                        source={require('./../assets/images/profile.png')}
                                    /> */}
                                </View>
                            </View>

                            <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center' }}>

                                <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 13, color: 'black', }}>Didesain oleh</Text>
                                <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 13, color: 'red', }}>Gal Gadot</Text>
                            </View>



                        </View>

                    </View>
                </View>

            </TouchableOpacity >
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
                backgroundColor: 'white'
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
                            <View style={{ height: 120, backgroundColor: 'white', alignItems: 'center', zIndex: 1, marginTop: -70 }}>

                                <View style={{ height: 55, justifyContent: 'center', alignItems: 'center', }}>
                                    <Text style={{ paddingTop: 5, fontFamily: 'Quicksand-Bold', fontSize: 15, color: 'black' }}>Urutkan Berdasarkan</Text>
                                </View>

                                <TouchableOpacity style={{ height: 30, width: '100%', }}>
                                    <View style={{ height: 30, width: '100%', }}>
                                        <Text style={{ paddingTop: 5, fontFamily: 'Quicksand-Regular', fontSize: 15, paddingLeft: 20, color: 'black' }}>Ulasan</Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity style={{ height: 30, width: '100%', }}>
                                    <View style={{ height: 30, width: '100%', }}>
                                        <Text style={{ paddingTop: 5, fontFamily: 'Quicksand-Regular', fontSize: 15, paddingLeft: 20, color: 'black' }}>Terbaru</Text>
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


                <View style={{ flex: 1, marginTop: 10, backgroundColor: '#eaeaea' }}>
                    <FlatList
                        data={this.state.photo}
                        showsVerticalScrollIndicator={false}
                        // contentContainerStyle={{ flex: 1 }}
                        renderItem={this.renderProductImage.bind(this)}
                        showsHorizontalScrollIndicator={false}
                        horizontal={false}
                        numColumns={2}
                    />
                </View>
            </View >
        )
    }

}

const styles = StyleSheet.create({

    // thumbnailContainerStyle: {

    //     margin: 10,
    // },
    // thumbnailStyle: {
    //     height: 90,
    //     width: 90,
    //     resizeMode: 'cover',
    //     // borderRadius: 1
    // },
    card: {
        borderRadius: 4,
        elevation: 3,
        marginLeft: 5,
        marginTop: 2, marginBottom: 2,
        marginBottom: '2%',
        backgroundColor: '#FFF',
        justifyContent: 'center',
        width: wp('48%'),
        flex: 1,
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


});

export default ListHoodiePage;

