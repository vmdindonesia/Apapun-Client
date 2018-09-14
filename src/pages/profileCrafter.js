import React, { Component } from 'react';
import {
    View, Text, ImageBackground, Image, TouchableNativeFeedback, Alert,
    TouchableOpacity, ScrollView, ToastAndroid, FlatList, StyleSheet
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { ImagesProfileCrafterPage } from './imagesProfileCrafter';
import { UlasanOnCrafterProfilePage } from './UlasanOnCrafterProfile';
import { NoteProfileCrafterPage } from './noteProfileCrafter';
import { Spinner } from '../components/common';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import axios from 'axios';
import { IPSERVER } from './../shared/config';
import numeral from 'numeral';
import moment from 'moment';
import { NavigationActions, StackActions } from 'react-navigation';


export class ProfileCrafterPage extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        headerLeft:
            <TouchableOpacity
                onPress={() => { navigation.goBack(); console.log(navigation.goBack(), 'Props Order') }}
            >
                <Icon size={30} style={{ marginLeft: 25, color: '#EF1C25' }} name='ios-arrow-back' />
            </TouchableOpacity>,
        headerTitle: 'Profil Crafter'
    });

    static navigationOptions = {
        headerLeft:
            <TouchableOpacity
                onPress={() => { console.log(this.props, 'Props Order') }}
            >
                <Icon size={30} style={{ marginLeft: 25, color: '#EF1C25' }} name='ios-arrow-back' />
            </TouchableOpacity>,
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            screen: 'images',
            dataDetail: ''
        }
    }

    componentDidMount() {
        console.log(this.props.navi.state.params, 'Props From Search Crafter Page');
        this.setState({ dataDetail: this.props.navi.state.params.dataOrder }, () => {
            console.log(this.state.dataDetail, 'Data Detail DidMount');
            this.setState({ loading: false })
        });
    }

    alert = (msg) => {
        console.log(msg)
    }

    renderScreen = () => {
        if (this.state.screen === 'images') {
            return <ImagesProfileCrafterPage navi={this.props.navigation} naviparams={this.state.dataDetail.item} />
        } else if (this.state.screen === 'note') {
            return <NoteProfileCrafterPage navi={this.props.navigation} naviparams={this.state.dataDetail.item} />
        } else if (this.state.screen === 'ulasan') {
            return <UlasanOnCrafterProfilePage navi={this.props.navigation} naviparams={this.state.dataDetail.item} />
        }
    }

    onRefresh() {
        this.setState({
            loading: false
        }, () => {
            this.componentDidMount();
        })
    }

    prosesDealBetCrafter() {
        const orderId = this.state.dataDetail.item.orderId;
        const crafterId = this.state.dataDetail.item.crafterId;
        const status = 'Approve';
        console.log(this.props, 'Props');
        axios.post(`${IPSERVER}/ApapunBets/ApproveBet`, {
            orderId,
            crafterId,
            status
        })
            .then(response => {
                console.log(response, 'Sukses Bet Crafter Deal');
                const resetAction = StackActions.reset({
                    index: 1,
                    actions: [
                        NavigationActions.navigate({ routeName: 'CrafterMyOrder' }),
                        NavigationActions.navigate({ routeName: 'PaymentMethod' }),
                    ],
                });
                this.props.navi.dispatch(resetAction);

                ToastAndroid.show('Sukses Proses order. Anda Harap Bayar DP untuk melanjutkan!', ToastAndroid.SHORT);
            }).catch(error => {
                console.log(error, 'Error Kategori');
                return ToastAndroid.show('Connection Time Out, Server Maybe Down', ToastAndroid.SHORT);
            });
    }

    render() {
        const {
            menuContainerStyle, tabContainer, tabContainerActive, tabText, tabTextActive
        } = styles;
        const { screen } = this.state;

        const {
            dataDetail
        } = this.state;

        return (
            <View style={{ flex: 1 }}>
                {
                    this.state.loading ?
                        <Spinner size="small" />
                        :
                        <ScrollView
                            // contentContainerStyle={{ position: 'absolute' }}
                            showsVerticalScrollIndicator={false}
                        >
                            <ImageBackground
                                source={require('./../assets/images/background_profile.jpeg')}
                                style={styles.backgroundStyle}
                            >
                                <View>

                                    <View style={styles.containerImage}>
                                        <Image style={styles.containerPhoto}
                                            source={{ uri: `${IPSERVER}/ApapunStorageImages/images/download/${this.state.dataDetail.item.ApapunCrafter === undefined ? 'https://www.coastalsocks.com.ng/wp-content/uploads/2014/04/default-avatar.png' : this.state.dataDetail.item.ApapunCrafter.profileImage}` }}
                                        />
                                    </View>
                                </View>
                            </ImageBackground >
                            <View style={{ flex: 1, height: '100%' }}>
                                <View style={{ flex: 1 }}>
                                    <View style={{ width: '100%' }} >
                                        <Text style={styles.textStyle}>{this.state.dataDetail.item.ApapunCrafter === undefined ? '-' : this.state.dataDetail.item.ApapunCrafter.craftername}</Text>
                                    </View>
                                </View>
                                <View style={{ flexDirection: 'row', flex: 1 }}>
                                    <Image
                                        style={styles.locationIcon}
                                        source={require('./../assets/images/location_icon.png')}
                                    />
                                    <View style={{ flex: 1 }}>
                                        <Text style={[styles.textStyle2, { marginLeft: 10 }]}>{this.state.dataDetail.item.ApapunCrafter === undefined ? '-' : this.state.dataDetail.item.ApapunCrafter.ApapunUsers.ApapunUsersAddress.ApapunProvinces.name}</Text>
                                    </View>
                                </View>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    {
                                        this.state.dataDetail.item.ApapunCrafter === undefined ?
                                            <View />
                                            :
                                            this.state.dataDetail.item.ApapunCrafter.review === 'Buruk' ?
                                                <Image
                                                    style={styles.emojiIcon}
                                                    source={require('./../assets/images/Buruk.png')}
                                                    resizeMode='contain'
                                                />
                                                :
                                                this.state.dataDetail.item.ApapunCrafter.review === 'Cukup' ?
                                                    <Image
                                                        style={styles.emojiIcon}
                                                        source={require('./../assets/images/Cukup.png')}
                                                        resizeMode='contain'
                                                    />
                                                    :
                                                    this.state.dataDetail.item.ApapunCrafter.review === 'Bagus' ?
                                                        <Image
                                                            style={styles.emojiIcon}
                                                            source={require('./../assets/images/Bagus.png')}
                                                            resizeMode='contain'
                                                        />
                                                        :
                                                        this.state.dataDetail.item.ApapunCrafter.review === 'Sempurna' ?
                                                            <Image
                                                                style={styles.emojiIcon}
                                                                source={require('./../assets/images/sempurna.png')}
                                                                resizeMode='contain'
                                                            />
                                                            :
                                                            <View />
                                    }
                                    <View style={{ flex: 1 }}>
                                        <Text style={[styles.textStyle2, { marginLeft: 7 }]}>Rating: ({this.state.dataDetail.item.ApapunCrafter === undefined ? '-' : this.state.dataDetail.item.ApapunCrafter.review})</Text>
                                    </View>
                                </View>
                                <View style={{ height: 60, justifyContent: 'center', flex: 1, marginTop: 25 }}>
                                    <Text style={{ fontFamily: 'Quicksand-Regular', textAlign: 'center', marginLeft: 15, marginRight: 15, fontSize: 13, color: 'black' }}>{this.state.dataDetail.item.ApapunCrafter === undefined ? '-' : this.state.dataDetail.item.ApapunCrafter.biodata}</Text>
                                </View>

                                <View style={{ flex: 1, marginTop: 10 }}>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={{ flex: 1, marginBottom: 10 }}>
                                            <TouchableNativeFeedback onPress={() => this.setState({ screen: 'images' })}>
                                                <View style={screen === 'images' ? tabContainerActive : tabContainer}>
                                                    <Text style={screen === 'images' ? tabTextActive : tabText}>Gambar</Text>
                                                </View>
                                            </TouchableNativeFeedback>
                                        </View>
                                        <View style={{ flex: 1, marginBottom: 10 }}>
                                            <TouchableNativeFeedback onPress={() => this.setState({ screen: 'note' })}>
                                                <View style={screen === 'note' ? tabContainerActive : tabContainer}>
                                                    <Text style={screen === 'note' ? tabTextActive : tabText}>Catatan</Text>
                                                </View>
                                            </TouchableNativeFeedback>
                                        </View>
                                        <View style={{ flex: 1, marginBottom: 10 }}>
                                            <TouchableNativeFeedback onPress={() => this.setState({ screen: 'ulasan' })}>
                                                <View style={screen === 'ulasan' ? tabContainerActive : tabContainer}>
                                                    <Text style={screen === 'ulasan' ? tabTextActive : tabText}>Ulasan</Text>
                                                </View>
                                            </TouchableNativeFeedback>
                                        </View>
                                    </View>
                                    <View style={{ flex: 1 }}>
                                        {this.renderScreen()}
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                }
                <View style={{ width: '100%', height: 50, flexDirection: 'row', backgroundColor: 'rgba(0,0,0,0.9)' }}>
                    <View style={{ width: '10%', height: '100%', justifyContent: 'center', alignItems: 'center', marginLeft: 3, }}>
                        <TouchableOpacity>
                            <Image style={{ width: 15, height: 15 }}
                                source={require('../assets/images/Information.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: '33%', height: '100%', justifyContent: 'center' }}>
                        <Text style={{ color: 'white', textAlign: 'center', fontSize: 13, fontFamily: 'Quicksand-Regular' }}>Harga Pesanan</Text>
                        <Text
                            style={{
                                color: 'red', fontFamily: 'Quicksand-Bold', textAlign: 'center',
                                fontSize: 15
                            }}
                        >Rp {this.state.dataDetail.item === undefined ? '-' : numeral(this.state.dataDetail.item.price).format('0,0')}
                        </Text>
                    </View>
                    <View style={{ width: '33%', height: '100%', justifyContent: 'center' }}>
                        <Text style={{ color: 'white', textAlign: 'center', fontSize: 13, fontFamily: 'Quicksand-Regular' }}>Estimasi Selesai</Text>
                        <Text
                            style={{
                                color: 'red', fontFamily: 'Quicksand-Bold', textAlign: 'center',
                                fontSize: 15
                            }}
                        >{this.state.dataDetail.item === undefined ? '-' : moment(this.state.dataDetail.item.finishOrder).format('Do MMM YY')}
                        </Text>
                    </View>
                    <View style={{ width: wp('20%'), height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate('Chat')} >
                            <Image style={{ width: 30, height: 30 }}
                                source={require('../assets/images/Chat.png')} />
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ width: '100%', height: 50, flexDirection: 'row', backgroundColor: 'rgba(0,0,0,0.9)' }}>
                    <View style={{ width: '100%', height: '100%', justifyContent: 'center' }}>
                        <TouchableOpacity
                            style={{
                                borderWidth: 0, borderRadius: 25, backgroundColor: '#ef1c25',
                                flex: 1, justifyContent: 'center', marginLeft: 15, marginRight: 15, marginTop: 5, marginBottom: 10
                            }}
                            onPress={() => Alert.alert(
                                'PILIH CRAFTER INI',
                                'Pesanan anda akan terkunci, apakah anda yakin?',
                                [
                                    { text: 'Tidak', onPress: () => console.log('Cancel Pressed!') },
                                    {
                                        text: 'Ya', onPress: () => {
                                            this.prosesDealBetCrafter();
                                            // this.props.navi.navigate('PaymentMethod');
                                        }
                                    },
                                ],
                            )}>
                            <Text style={{
                                color: 'white', fontFamily: 'Quicksand-Bold', textAlign: 'center',
                                fontSize: 18
                            }}>Pilih</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        borderTopWidth: 1,
        borderColor: '#eaeaea',
        padding: 5
    },
    menuContainerStyle: {
        flex: 1
    },
    backgroundStyle: {
        width: '100%',
        height: 200
    },
    containerImage: {
        justifyContent: 'flex-end',
        top: 100,
        left: 15,
        position: 'absolute',
    },
    containerPhoto: {
        height: 155,
        width: 155,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 3
    },
    textStyle: {
        marginTop: 10,
        marginLeft: '50%',
        fontFamily: 'Quicksand-Bold',
        fontSize: 15,
        alignSelf: 'auto',
        color: 'black'
    },
    textStyle2: {
        marginTop: 7,
        fontFamily: 'Quicksand-Regular',
        fontSize: 13,
        alignSelf: 'auto',
        marginRight: 10,
        color: 'black'
    },
    locationIcon: {
        marginLeft: '50%',
        height: 15,
        width: 10,
        marginTop: 7
    },
    emojiIcon: {
        marginLeft: '48.5%',
        height: 20,
        width: 20,
        marginTop: 5
    },
    tabContainer: {
        height: 50,
        justifyContent: 'center',
    },
    tabContainerActive: {
        height: 50,
        justifyContent: 'center',
        borderBottomColor: 'red',
        borderBottomWidth: 1
    },
    tabText: {
        textAlign: 'center',
        fontSize: 13
    },
    tabTextActive: {
        textAlign: 'center',
        fontSize: 13,
        fontFamily: 'Quicksand-Bold'
    },
    item: {
        height: 100,
        width: 110,
        borderRadius: 4,
        alignSelf: 'stretch',
        resizeMode: 'cover',

    },
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})

export default ProfileCrafterPage;