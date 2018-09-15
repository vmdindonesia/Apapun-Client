import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, TouchableOpacity, TouchableWithoutFeedback, View, Image, Alert, FlatList } from 'react-native';
import axios from 'axios';
import { Spinner } from '../components/common';
import { IPSERVER } from './../shared/config';
import moment from 'moment';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export class CrafterPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            loadingCrafter: false,
            dataCrafterBet: ''
        }
    }

    alert = (msg) => {
        console.log(msg)
    }

    componentDidMount() {
        console.log(this.props.navi.state.params, 'Props From Order Page');
        const orderId = this.props.navi.state.params;
        // const orderId = 'ORDER-1'
        axios.post(`${IPSERVER}/ApapunBets/getBetCrafterByOrder`, { orderId }).then(response => {
            console.log(response.data, 'Response Get Bet')
            this.setState({ dataCrafterBet: response.data }, () => {
                console.log(this.state.dataCrafterBet[0].ApapunBet.length, 'PANJANG');
                if (this.state.dataCrafterBet[0].ApapunBet.length === 0) {
                    this.setState({
                        loading: false
                    });
                } else {
                    this.setState({
                        loading: false,
                        loadingCrafter: true,
                    })
                }
            });
        }).catch(error => {
            console.log(error, 'Error Get Order Betting');
            this.setState({ loading: false })
            return ToastAndroid.show('Connection Time Out, Server Maybe Down', ToastAndroid.SHORT);
        })
    }

    renderProductItem = (data) => {
        console.log(data, '098');
        return (
            <TouchableWithoutFeedback onPress={() => this.props.navi.navigate('searchCrafterOnProfile', { dataOrder: data })}>
                <View style={styles.card}>
                    <View style={styles.thumbnailContainerStyle}>
                        <Image
                            style={styles.thumbnailStyle}
                            source={{ uri: `${IPSERVER}/ApapunStorageImages/images/download/${data.item.ApapunCrafter.profileImage}` }}
                            resizeMode='cover'
                        />
                    </View>
                    <View style={{ marginLeft: 10, marginTop: 10, flexDirection: 'column', flex: 1 }}>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Text style={{ textAlign: 'left', fontSize: 15, fontFamily: 'Quicksand-Bold', color: 'black' }}>
                                {data.item.ApapunCrafter.craftername}
                            </Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', marginRight: 7, }}>
                            {
                                data.item.ApapunCrafter.review === 'Buruk' ?
                                    <Image
                                        style={{ width: 20, height: 27 }}
                                        source={require('./../assets/images/Buruk.png')}
                                        resizeMode='contain'
                                    />
                                    :
                                    data.item.ApapunCrafter.review === 'Cukup' ?
                                        <Image
                                            style={{ width: 20, height: 27 }}
                                            source={require('./../assets/images/Cukup.png')}
                                            resizeMode='contain'
                                        />
                                        :
                                        data.item.ApapunCrafter.review === 'Bagus' ?
                                            <Image
                                                style={{ width: 20, height: 27 }}
                                                source={require('./../assets/images/Bagus.png')}
                                                resizeMode='contain'
                                            />
                                            :
                                            data.item.ApapunCrafter.review === 'Sempurna' ?
                                                <Image
                                                    style={{ width: 20, height: 27 }}
                                                    source={require('./../assets/images/sempurna.png')}
                                                    resizeMode='contain'
                                                />
                                                :
                                                <View />
                            }
                            <Text style={{ fontSize: 13, marginLeft: 7, fontFamily: 'Quicksand-Regular', color: 'black', marginTop: 5 }}>
                                {data.item.ApapunCrafter.review}
                            </Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', marginRight: 10, marginBottom: 10 }}>
                            <Image
                                style={{ width: 18, height: 18, alignSelf: 'center' }}
                                source={require('./../assets/images/loc_mainprof.png')}
                                resizeMode='contain'
                            />
                            <Text style={{ fontSize: 13, marginLeft: 7, fontFamily: 'Quicksand-Regular', color: 'black', marginTop: 5 }}>
                                {data.item.ApapunCrafter.ApapunUsers.ApapunUsersAddress.ApapunDistricts.name}
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }

    onDeleteOrder() {
        const dateOrder = this.state.dataCrafterBet[0].createdAt;
        const newDate = moment(dateOrder).format('YYYY-MM-DD HH:mm');
        console.log(newDate, 'Data Pesanan');
    }

    render() {
        const {
            loading,
            loadingCrafter
        } = this.state;
        return (
            <View style={{ flex: 1, backgroundColor: '#eaeaea' }}>
                {
                    loading ?
                        <View style={{ flex: 1 }}>
                            <Spinner size="small" />
                        </View>
                        :
                        <View style={{ flex: 1 }}>
                            {
                                loadingCrafter === false ?
                                    <View>
                                        <ScrollView
                                            style={{
                                                backgroundColor: '#eaeaea'
                                            }}
                                            showsVerticalScrollIndicator={false}>
                                            <View style={{ flex: 1, height: 250, justifyContent: 'flex-end', marginTop: 35 }}>
                                                <Image
                                                    style={{
                                                        width: '95%',
                                                        height: '95%',
                                                        borderRadius: 0,
                                                        alignSelf: 'center'
                                                    }}
                                                    source={require('./../assets/images/cari_crafter.png')}
                                                    resizeMode='contain'
                                                />
                                            </View>
                                            <View style={{ flex: 1, height: 45, justifyContent: 'center', }}>
                                                <Text style={{ fontSize: 15, color: 'black', fontFamily: 'Quicksand-Bold', textAlign: 'center' }}>TUNGGU SEBENTAR YAH!</Text>
                                            </View>
                                            <View style={{ flex: 1, height: 90, flexDirection: 'column', }}>
                                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                                                    <View style={{ width: '13%', height: '100%', justifyContent: 'center', }}>
                                                        <Image
                                                            style={{
                                                                width: '57%',
                                                                height: '57%',
                                                                borderRadius: 0,
                                                                alignSelf: 'center'
                                                            }}
                                                            source={require('./../assets/images/kaca_pembesar.png')}
                                                            resizeMode='contain' />
                                                    </View>

                                                    <View style={{ width: '83%', height: '100%', padding: 5, justifyContent: 'center' }}>
                                                        <Text style={{ fontSize: 13, color: 'black', fontFamily: 'Quicksand-Regular', textAlign: 'left' }}>Saat ini kami sedang mencarikan CRAFTER untuk Anda. Silakan tunggu ya.</Text>

                                                    </View>
                                                </View>
                                                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
                                                    <View style={{ width: '13%', height: '100%', justifyContent: 'center', }}>
                                                        <Image
                                                            style={{
                                                                width: '57%',
                                                                height: '57%',
                                                                borderRadius: 0,
                                                                alignSelf: 'center'
                                                            }}
                                                            source={require('./../assets/images/24_h.png')}
                                                            resizeMode='contain' />
                                                    </View>

                                                    <View style={{ width: '83%', height: '100%', padding: 5, justifyContent: 'center' }}>
                                                        <Text style={{ fontSize: 13, color: 'black', fontFamily: 'Quicksand-Regular', textAlign: 'left' }}>Anda bisa membatalkan pesanan ini setelah 24 Jam</Text>
                                                    </View>
                                                </View>
                                            </View>

                                        </ScrollView>

                                        <View style={{ width: '90%', height: 40, backgroundColor: 'black', borderRadius: 50, justifyContent: 'center', alignSelf: 'center', marginTop: 20 }}>
                                            <TouchableOpacity>
                                                <Text style={{ fontSize: 15, color: 'white', fontFamily: 'Quicksand-Bold', textAlign: 'center' }}>Batalkan Pesanan</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    :
                                    <View style={{ flex: 1 }}>
                                        <View style={{ flex: 1, marginLeft: 10 }}>
                                            <FlatList
                                                data={this.state.dataCrafterBet[0].ApapunBet}
                                                renderItem={this.renderProductItem.bind(this)}
                                                showsHorizontalScrollIndicator={false}
                                                showsVerticalScrollIndicator={false}
                                                numColumns={2}
                                                horizontal={false}
                                            />
                                        </View>
                                        <View style={styles.containerButton}>
                                            <TouchableOpacity style={[styles.buttonStop, { backgroundColor: 'orange' }]}>
                                                <Text style={{ fontFamily: 'Quicksand-Bold', color: 'white' }}>Berhenti Mencari</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity
                                                style={styles.buttonStop}
                                                onPress={() => Alert.alert(
                                                    'BATALKAN PESANAN',
                                                    'apakah anda yakin ingin membatalkan pesanannya?',
                                                    [
                                                        { text: 'Cancel', onPress: () => console.log('Cancel Pressed!') },
                                                        { text: 'OK', onPress: () => this.onDeleteOrder() }, //ondelete blm dibuat
                                                    ],
                                                )}>
                                                <Text style={{ fontFamily: 'Quicksand-Bold', color: 'white' }}>Batalkan Pesanan</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                            }
                        </View>
                }
            </View>
        )
    };
}

const styles = StyleSheet.create({
    containerBoxProfile: {
        marginLeft: 3,
        marginRight: 3,
        marginTop: 25,
        height: 200,
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#ef1c25'
    },
    containerImage: {
        flex: 1,
        marginLeft: 10
    },
    imageCrafter: {
        height: 90,
        width: 150,
    },
    boxName: {
        borderWidth: 0,
        borderRadius: 1,
        width: '100%',
        height: '32%',
        elevation: 1,
        paddingLeft: 3,
        paddingRight: 3,
    },
    containerButton: {
        width: '100%',
        height: 70,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        alignItems: 'center',
        marginBottom: 0
    },
    buttonStop: {
        flex: 1,
        height: 50,
        borderColor: 0,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ef1c25',
        borderRadius: 25,
        margin: 5
    },
    card: {
        borderRadius: 4,
        elevation: 2,
        margin: 3,
        backgroundColor: '#FFF',
        width: wp('46%')
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    thumbnailStyle: {
        alignSelf: 'center',
        height: 150,
        width: 150,
        borderRadius: 4
    },
});

export default CrafterPage;