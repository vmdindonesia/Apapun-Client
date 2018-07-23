import React, { Component } from 'react'
import {
    View, Text, ImageBackground, Image, TouchableNativeFeedback, Alert,
    TouchableOpacity, ScrollView, TouchableWithoutFeedback, FlatList, StyleSheet
} from 'react-native'
import { COLOR } from './../shared/config';
import { ContainerSection, Card } from '../components/common';
import Icon from 'react-native-vector-icons/Ionicons';

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
            statusMenu: 'gambar',
            photo: [
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg'
            ],
            requestExpanded: false,
            generalExpanded: false
        };
    }

    alert = (msg) => {
        console.log(msg)
    }

    statusMenus = (value) => {
        console.log(value, 'Value')
        this.setState({
            statusMenu: value
        })
    }

    renderProductItem = (data) => {
        console.log(data, '098');
        return (
            <View style={{ marginBottom: 7, paddingLeft: 7 }}>
                <Image
                    style={styles.item}
                    source={{ uri: data.item }}
                />
            </View>
        )
    }

    render() {

        const {
            menuContainerStyle, tabContainer, tabContainerActive, tabText, tabTextActive
        } = styles;
        const { statusMenu, requestExpanded, generalExpanded } = this.state;

        return (
            <View style={{ flex: 1, flexDirection: 'column' }}>
                <View style={{ flex: 1 }}>
                    <ImageBackground
                        source={require('./../assets/images/background_profile.jpeg')}
                        style={styles.backgroundStyle}
                    >
                        <View>

                            <View style={styles.containerImage}>
                                <Image style={styles.containerPhoto}
                                    source={require('./../assets/images/profile.png')}
                                />
                            </View>
                        </View>
                    </ImageBackground >

                    <View style={{ flexDirection: 'column' }}>
                        <View style={{ width: '100%' }} >
                            <Text style={styles.textStyle}>Gal Gadot</Text>
                        </View>
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                style={styles.locationIcon}
                                source={require('./../assets/images/location_icon.png')}
                            />
                            <View style={{ flex: 1 }}>
                                <Text style={[styles.textStyle2, { marginLeft: 10 }]}>Indonesia, Kalimantan Selatan</Text>
                            </View>
                        </View>
                        <View style={{ width: '100%', flexDirection: 'row' }}>
                            <Image
                                style={styles.emojiIcon}
                                source={require('./../assets/images/Cukup.png')}
                            />
                            <View style={{ flex: 1 }}>
                                <Text style={[styles.textStyle2, { marginLeft: 7 }]}>Rating: Cukup (35)</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ width: '100%', height: '20%', justifyContent: 'center' }}>
                        <Text style={{ fontFamily: 'Quicksand-Regular', textAlign: 'center', marginLeft: 15, marginRight: 15 }}>Lulusan S2 Interior Design di Singapura -
                        Mendapatkan rekor MURI "Pembuat Meja dengan 10 Fungsi" - Pemenang Design Interior Awards 2017 - Resmi anggota ASEPHI</Text>
                    </View>
                    <View style={menuContainerStyle}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ flex: 1, borderColor: '#3484d7', borderRightWidth: 0.3, marginBottom: 10 }}>
                                <TouchableNativeFeedback onPress={() => this.setState({ statusMenu: 'gambar' })}>
                                    <View style={statusMenu === 'gambar' ? tabContainerActive : tabContainer}>
                                        <Text style={statusMenu === 'gambar' ? tabTextActive : tabText}>Gambar</Text>
                                    </View>
                                </TouchableNativeFeedback>
                            </View>
                            <View style={{ flex: 1, borderColor: '#3484d7', borderRightWidth: 0.3, marginBottom: 10 }}>
                                <TouchableNativeFeedback onPress={() => this.setState({ statusMenu: 'catatan' })}>
                                    <View style={statusMenu === 'catatan' ? tabContainerActive : tabContainer}>
                                        <Text style={statusMenu === 'catatan' ? tabTextActive : tabText}>Catatan</Text>
                                    </View>
                                </TouchableNativeFeedback>
                            </View>
                            <View style={{ flex: 1, borderColor: '#3484d7', borderRightWidth: 0.3, marginBottom: 10 }}>
                                <TouchableNativeFeedback onPress={() => this.setState({ statusMenu: 'ulasan' })}>
                                    <View style={statusMenu === 'ulasan' ? tabContainerActive : tabContainer}>
                                        <Text style={statusMenu === 'ulasan' ? tabTextActive : tabText}>Ulasan</Text>
                                    </View>
                                </TouchableNativeFeedback>
                            </View>
                        </View>
                        {
                            statusMenu === 'gambar' ?
                                <View style={{ flex: 1 }}>
                                    <FlatList
                                        data={this.state.photo}
                                        contentContainerStyle={styles.list}
                                        renderItem={this.renderProductItem.bind(this)}
                                        showsHorizontalScrollIndicator={false}
                                    />
                                </View>
                                :
                                <View>
                                    {
                                        statusMenu === 'catatan' ?
                                            <ScrollView>
                                                <Card style={{ borderBottomWidth: 1, borderColor: '#eaeaea' }}>
                                                    <View style={styles.card}>
                                                        <ContainerSection>
                                                            <TouchableWithoutFeedback onPress={() => { this.setState({ requestExpanded: !requestExpanded }); console.log(this.state.requestExpanded, 'Request Klik') }}>
                                                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                                                    <Text style={{ fontSize: 18, fontFamily: 'Quicksand-Bold' }}>Alamat Workshop</Text>
                                                                    <View style={{ flex: 1 }}>
                                                                        <Icon size={30} style={{ alignSelf: 'flex-end' }} name={requestExpanded ? 'md-arrow-dropup' : 'md-arrow-dropdown'} />
                                                                    </View>
                                                                </View>
                                                            </TouchableWithoutFeedback>
                                                        </ContainerSection>
                                                        {
                                                            requestExpanded ?
                                                                <View>
                                                                    <Text>TANGERANG, Gading Serpong, Perumahan Cluster DALTON - Jl. Dalton Timur 2 no.19
                                                                        Kota Tangerang Selatan - Serpong - Banten 081296128433
                                                            </Text>
                                                                </View>
                                                                :
                                                                <View />
                                                        }
                                                    </View>
                                                </Card>
                                                <Card style={{ borderBottomWidth: 1, borderColor: '#eaeaea' }}>
                                                    <View style={styles.card}>
                                                        <ContainerSection>
                                                            <TouchableWithoutFeedback onPress={() => { this.setState({ generalExpanded: !generalExpanded }); console.log(this.state.generalExpanded, 'Request Klik') }}>
                                                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                                                    <Text style={{ fontSize: 18, fontFamily: 'Quicksand-Bold' }}>General</Text>
                                                                    <View style={{ flex: 1 }}>
                                                                        <Icon size={30} style={{ alignSelf: 'flex-end' }} name={generalExpanded ? 'md-arrow-dropup' : 'md-arrow-dropdown'} />
                                                                    </View>
                                                                </View>
                                                            </TouchableWithoutFeedback>
                                                        </ContainerSection>
                                                        {
                                                            generalExpanded ?
                                                                <View>
                                                                    <Text>Aku Cinta Kamu</Text>
                                                                </View>
                                                                :
                                                                <View />
                                                        }
                                                    </View>
                                                </Card>
                                            </ScrollView>
                                            :
                                            <View>
                                                {
                                                    statusMenu === 'ulasan' ?
                                                        <View>
                                                            <Text>ulasan</Text>
                                                        </View>
                                                        :
                                                        <View />
                                                }
                                            </View>
                                    }
                                </View>
                        }
                    </View>
                    <View style={{ flex: 1.5, flexDirection: 'row', backgroundColor: 'rgba(0,0,0,0.9)' }}>
                        <View style={{ width: '5%', height: '100%', justifyContent: 'center', alignItems: 'center', marginLeft: 3 }}>
                            <TouchableOpacity>
                                <Image style={{ width: 15, height: 15 }}
                                    source={require('../assets/images/Information.png')} />
                            </TouchableOpacity>
                            {/* popup informasi ketika ditouch */}
                        </View>
                        <View style={{ width: '25%', height: '100%', justifyContent: 'center' }}>
                            <Text style={{ color: 'white', textAlign: 'center', fontSize: 13, fontFamily: 'Quicksand-Regular' }}>Harga Pesanan</Text>
                            <Text
                                style={{
                                    color: 'red', fontFamily: 'Quicksand-Bold', textAlign: 'center',
                                    fontSize: 15
                                }}
                            >Rp 860.000
                                </Text>
                        </View>
                        <View style={{ width: '28%', height: '100%', justifyContent: 'center' }}>
                            <Text style={{ color: 'white', textAlign: 'center', fontSize: 13, fontFamily: 'Quicksand-Regular' }}>Estimasi Selesai</Text>
                            <Text
                                style={{
                                    color: 'red', fontFamily: 'Quicksand-Bold', textAlign: 'center',
                                    fontSize: 15
                                }}
                            >27 Feb 18
                                </Text>
                        </View>
                        <View style={{ width: '10%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                        <TouchableOpacity>
                            <Image style={{ width: 30, height: 30 }}
                                source={require('../assets/images/Chat.png')} />
                        </TouchableOpacity>
                        </View>
                        <View style={{ width: '32%', height: '100%', justifyContent: 'center', marginLeft: 5 }}>
                            <TouchableOpacity
                                style={{
                                    borderWidth: 0, borderRadius: 25, backgroundColor: 'red',
                                    height: 40, width: 100, justifyContent: 'center'
                                }}
                                onPress={() => Alert.alert(
                                    'PILIH CRAFTER INI',
                                    'Pesanan anda akan terkunci, apakah anda yakin?',
                                    [
                                        { text: 'Tidak', onPress: () => console.log('Cancel Pressed!') },
                                        { text: 'Ya', onPress: () => this.props.navigation.navigate('DetailInformationOrder') },
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
        flex: 4
    },
    backgroundStyle: {
        width: '100%',
        height: '30%'
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
        fontSize: 20,
        alignSelf: 'auto'
    },
    textStyle2: {
        marginTop: 10,
        fontFamily: 'Quicksand-Regular',
        fontSize: 15,
        alignSelf: 'auto',
        marginRight: 10
    },
    locationIcon: {
        marginLeft: '50%',
        height: 15,
        width: 10,
        marginTop: 10
    },
    emojiIcon: {
        marginLeft: '50%',
        height: 15,
        width: 15,
        marginTop: 10
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
        fontSize: 14
    },
    tabTextActive: {
        textAlign: 'center',
        fontSize: 14,
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