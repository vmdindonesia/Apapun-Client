import React, { Component } from 'react';
import { ToastAndroid, View, Text, FlatList, Image, AsyncStorage, TouchableOpacity, TextInput, ScrollView, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, StatusBar, Modal } from 'react-native'
import axios from 'axios';
import { IPSERVER } from '../shared/config';
import moment from 'moment';
import Swiper from 'react-native-swiper';
import { Container, ContainerSection, Button, Input, InputDate, InputNumber } from '../components/common';

export class UlasanOnCrafterProfilePage extends React.Component {


    static navigationOptions = {
        headerTitle: 'Ulasan',
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
            crafterId: '',
            dataCommentar: '',
            dataTotal: '',
            loading: true,
        }
    }

    componentDidMount() {
        this.setState({
            crafterId: this.props.navigation.state.params.crafter_Id
        }, () => {
            axios.post(`${IPSERVER}/ApapunReviews/getReviewByCrafterId`, {
                crafterId: this.state.crafterId
            })
                .then(response => {
                    console.log(response, 'Data Commentar')
                    this.setState({ dataCommentar: response.data }, () => {
                        axios.post(`${IPSERVER}/ApapunReviews/getTotalReviewByCrafterId`, {
                            crafterId: this.state.crafterId
                        })
                            .then(response => {
                                console.log(response, 'Data Total')
                                this.setState({ dataTotal: response.data, loading: false });
                            }).catch(error => {
                                console.log(error, 'Error Total');
                                this.setState({ loading: false })
                                return ToastAndroid.show('Connection Time Out, Server Maybe Down', ToastAndroid.SHORT);
                            });
                    });
                }).catch(error => {
                    console.log(error, 'Error Commentar');
                    this.setState({ loading: false })
                    return ToastAndroid.show('Connection Time Out, Server Maybe Down', ToastAndroid.SHORT);
                });
        });
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

    handleRefresh = () => {
        console.log('Refresh');
        this.setState({
            loading: true
        }, () => {
            this.componentDidMount();
        })
    }



    renderCommentar = (data) => {
        console.log(data, '098');
        return (
            <View style={{ flex: 1, backgroundColor: 'white', marginTop: 12.5, marginLeft: 15, marginRight: 15 }}>

                <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10, marginRight: 20, marginLeft: 20 }}>

                    <View style={{ width: '60%', flexDirection: 'row', alignItems: 'center', }}>
                        <View style={{ height: 65, width: 65, borderRadius: 100, backgroundColor: 'black' }}>
                            <Image
                                style={{
                                    width: 50,
                                    height: 50,
                                    alignSelf: 'center',
                                    borderRadius: 50
                                }}
                                resizeMode='stretch'
                                source={{ uri: `${IPSERVER}/ApapunStorageImages/images/download/${data.item.profile_url === undefined ? 'https://www.coastalsocks.com.ng/wp-content/uploads/2014/04/default-avatar.png' : data.item.profile_url}` }}
                            />
                        </View>

                        <View style={{ justifyContent: 'center', flex: 1 }}>
                            <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 13, color: 'black', paddingLeft: 10 }}>{data.item.realm}</Text>
                            <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 13, color: 'black', paddingLeft: 10 }}>{moment(data.item.created_at).format('DD MMMM YYYY, h:mm')}</Text>
                        </View>
                    </View>
                    <View style={{ width: '40%', height: '100%', flexDirection: 'row' }}>
                        {
                            data.item.rating === 1 ?
                                <Image
                                    style={{
                                        width: 50,
                                        height: 50,
                                        alignSelf: 'center',
                                        marginLeft: 50
                                    }}
                                    resizeMode='contain'
                                    source={require('./../assets/images/Buruk.png')}
                                />
                                :
                                data.item.rating === 2 ?
                                    <Image
                                        style={{
                                            width: 50,
                                            height: 50,
                                            alignSelf: 'center',
                                            marginLeft: 50
                                        }}
                                        resizeMode='contain'
                                        source={require('./../assets/images/Cukup.png')}
                                    />
                                    :
                                    data.item.rating === 3 ?
                                        <Image
                                            style={{
                                                width: 50,
                                                height: 50,
                                                alignSelf: 'center',
                                                marginLeft: 50
                                            }}
                                            resizeMode='contain'
                                            source={require('./../assets/images/Bagus.png')}
                                        />
                                        :
                                        data.item.rating === 4 ?
                                            <Image
                                                style={{
                                                    width: 50,
                                                    height: 50,
                                                    alignSelf: 'center',
                                                    marginLeft: 50
                                                }}
                                                resizeMode='contain'
                                                source={require('./../assets/images/sempurna.png')}
                                            />
                                            :
                                            <View />
                        }
                    </View>
                </View>
                <View style={{ margin: 5, height: '80%', }}>
                    <View style={{}}>
                        <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, color: 'black', paddingLeft: 10 }}>{data.item.title}</Text>
                    </View>
                    <View style={{ paddingTop: 5, flex: 1 }}>
                        <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 13, color: 'black', paddingLeft: 10 }}>{data.item.description}</Text>
                    </View>
                </View>
            </View>
        )
    }

    renderTotal = (data) => {
        console.log(data.item.total, 'Total');
        return (
            <View style={{ width: '25%', flexDirection: 'column', alignItems: 'center' }}>
                <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 13, color: 'black', alignSelf: 'center' }}>({data.item.total === null ? 0 : data.item.total})</Text>
            </View>
        )
    }



    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ width: '100%', height: 90, flexDirection: 'row', }}>
                    <View style={{ width: '25%', flexDirection: 'column', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>

                        <Image
                            style={{
                                width: 50,
                                height: 50,
                                alignSelf: 'center'
                            }}
                            resizeMode='contain'
                            source={require('./../assets/images/Buruk.png')}
                        />
                        <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 13, color: 'black', alignSelf: 'center', marginTop: 5 }}>Buruk</Text>
                    </View>

                    <View style={{ width: '25%', flexDirection: 'column', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            style={{
                                width: 50,
                                height: 50,
                                alignSelf: 'center',
                                marginTop: 5
                            }}
                            resizeMode='contain'
                            source={require('./../assets/images/Cukup.png')}
                        />
                        <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 13, color: 'black', alignSelf: 'center', marginTop: 3 }}>Cukup</Text>
                    </View>
                    <View style={{ width: '25%', flexDirection: 'column', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            style={{
                                width: 50,
                                height: 50,
                                alignSelf: 'center',
                                marginTop: 5
                            }}
                            resizeMode='contain'
                            source={require('./../assets/images/Bagus.png')}
                        />
                        <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 13, color: 'black', alignSelf: 'center', marginTop: 5 }}>Baik</Text>
                    </View>
                    <View style={{ width: '25%', flexDirection: 'column', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                        <Image
                            style={{
                                width: 50,
                                height: 50,
                                alignSelf: 'center'
                            }}
                            resizeMode='contain'
                            source={require('./../assets/images/sempurna.png')}
                        />
                        <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 13, color: 'black', alignSelf: 'center', marginTop: 11 }}>Sempurna</Text>
                    </View>
                </View>

                <FlatList
                    data={this.state.dataTotal}
                    renderItem={this.renderTotal.bind(this)}
                    showsHorizontalScrollIndicator={false}
                    horizontal={false}
                    numColumns={4}
                    extraData={this.state}
                    refreshing={this.state.loading}
                    onRefresh={() => this.handleRefresh()}
                />

                <View style={{ flex: 1, backgroundColor: 'red', flexDirection: 'row' }}>
                    <FlatList
                        data={this.state.dataCommentar}
                        renderItem={this.renderCommentar.bind(this)}
                        extraData={this.state}
                    />
                </View>
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

export default UlasanOnCrafterProfilePage;

