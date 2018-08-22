import React, { Component } from 'react';
import {
    View, Text, ImageBackground, Image, TouchableNativeFeedback, Alert,
    TouchableOpacity, ScrollView, TouchableWithoutFeedback, FlatList, StyleSheet
} from 'react-native'
import { COLOR } from '../shared/config';
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


    constructor(props) {
        super(props);
        this.state = {
            statusMenu: 'gambar',
            photo: [
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',
            ],
            pictureExpanded: true,
            noteExpanded: false,
            reviewExpanded: false,
            subNote: false,
            subNoteGeneral: false
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

    renderProductImage = (data) => {
        console.log(data, '098');
        return (
            <View style={{ flex: 1, flexDirection: 'row', marginTop: 10, marginRight: 10, marginBottom: 10, }}>
                <Image
                    style={{ height: 110, width: 110, resizeMode: 'cover', margin: 5 }}
                    source={{ uri: data.item }}
                />
            </View>
        )
    }

    render() {

        const {
            tabActive, tabNotActive, textActive, textNotActive,
        } = styles;
        const { pictureExpanded, noteExpanded, reviewExpanded, subNote, subNoteGeneral } = this.state;

        return (
            <View style={{ flex: 1, backgroundColor: 'white', }}>

                <ScrollView>
                    <Image
                        source={require('./../assets/images/back_home.png')}
                        style={{ flex: 1, height: 225 }}
                        resizeMode='cover'
                    />

                    <View style={{ flex: 1, flexDirection: 'row', height: 220, marginTop: -110, }}>

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                            < View style={{ borderRadius: 100, height: 180, width: 180, justifyContent: 'center' }}>
                                <Image
                                    style={{ height: 160, width: 160, borderRadius: 100, borderWidth: 5, borderColor: 'white', alignSelf: 'center' }}
                                    source={require('./../assets/images/profile.png')}
                                />
                            </View>
                        </View>

                        <View style={{ flex: 1, }}>

                            <View style={{ flex: 1, }}>

                            </View>

                            <View style={{ flex: 1, justifyContent: 'center' }}>
                                <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, paddingTop: 5, color: 'black' }}>Gal Gadot </Text>

                                <View style={{ flex: 1, }}>

                                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                                        <Image
                                            style={{ height: 40, width: 15, marginLeft: 3 }}
                                            source={require('./../assets/images/loc_mainprof.png')}
                                            resizeMode='contain'
                                        />
                                        <View style={{ flex: 1 }}>
                                            <Text style={{ marginLeft: 12, fontSize: 15, color: 'black', fontFamily: 'Quicksand-Regular' }}>Indonesia, Banten</Text>
                                        </View>
                                    </View>

                                    <View style={{ flex: 1, flexDirection: 'row', }}>
                                        <Image
                                            style={{ height: 25, width: 25, marginTop: -3, marginLeft: -2 }}
                                            source={require('./../assets/images/Cukup.png')}
                                            resizeMode='contain'
                                        />
                                        < View style={{ flex: 1 }}>
                                            <Text style={{ marginLeft: 7, fontSize: 15, color: 'black', fontFamily: 'Quicksand-Regular' }}>Rating:<Text style={{ fontFamily: 'Quicksand-Regular', color: 'red', fontSize: 13 }}> Cukup (35)</Text></Text>
                                        </View>
                                    </View>

                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={{ flex: 1, height: 80, alignItems: 'center', }}>
                        <View style={{ height: '100%', width: '80%', }}>
                            <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 15, color: '#787878', fontStyle: 'italic', textAlign: 'center' }}>Lulusan S2
                            Interior Desain di Singapura - Mendapatkan rekor MURI "Pembuat Meja dengan 10 Fungsi" - Pemenang Desain Interior
                                Awards 2017- Resmi Anggota Asephi    </Text>
                        </View>
                    </View>

                    <View style={{ flex: 1, flexDirection: 'row', height: 50, borderBottomWidth: 1, borderBottomColor: '#eaeaea' }}>

                        <TouchableOpacity style={{ flex: 1 }}
                            onPress={() => this.setState({ pictureExpanded: true, noteExpanded: false, reviewExpanded: false })}
                        >
                            <View style={pictureExpanded === true ? tabActive : tabNotActive}>
                                <Text style={pictureExpanded === true ? textActive : textNotActive}>Gambar</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ flex: 1 }}
                            onPress={() => this.setState({ noteExpanded: true, pictureExpanded: false, reviewExpanded: false })}
                        >
                            <View style={noteExpanded === true ? tabActive : tabNotActive}>
                                <Text style={noteExpanded === true ? textActive : textNotActive}>Catatan</Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={{ flex: 1 }}
                            onPress={() => this.setState({ reviewExpanded: true, pictureExpanded: false, noteExpanded: false })}
                        >
                            <View style={reviewExpanded === true ? tabActive : tabNotActive}>
                                <Text style={reviewExpanded === true ? textActive : textNotActive}>Ulasan</Text>
                            </View>
                        </TouchableOpacity>

                    </View>

                    {
                        pictureExpanded === true ?
                            <View style={{ flex: 1, backgroundColor: 'white' }}>
                                <View style={{ flex: 1, marginTop: 5, marginLeft: 10, marginRight: 10, }}>

                                    <FlatList
                                        data={this.state.photo}
                                        // contentContainerStyle={styles.list}
                                        renderItem={this.renderProductImage.bind(this)}
                                        showsVerticalScrollIndicator={false}
                                        horizontal={false}
                                        numColumns={3}
                                    />

                                </View>
                            </View>
                            :
                            <View />
                    }

                    {
                        noteExpanded === true ?
                            <View style={{ flex: 1, backgroundColor: '#eaeaea' }}>

                                <TouchableOpacity
                                    onPress={() => this.setState({ subNote: !this.state.subNote })}
                                >

                                    <View style={{ flex: 1, height: 70, flexDirection: 'row', marginTop: 5, marginLeft: 5, marginRight: 5, backgroundColor: 'white', justifyContent: 'center' }}>


                                        <View style={{ flex: 1, justifyContent: 'center' }}>
                                            <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, color: 'black', paddingLeft: 25 }}>Alamat Workshop</Text>
                                            <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 13, color: 'black', paddingLeft: 25 }}>3 Januari 2018</Text>
                                        </View>


                                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', }}>

                                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                                                {
                                                    subNote === true ?
                                                        <Icon
                                                            size={30}
                                                            name='md-arrow-dropup'
                                                            // type='entypo'
                                                            color='black'
                                                            style={{ marginRight: 10 }}
                                                        />
                                                        :
                                                        <Icon
                                                            size={30}
                                                            name='md-arrow-dropdown'
                                                            // type='entypo'
                                                            color='black'
                                                            style={{ marginRight: 10 }}
                                                        />
                                                }

                                            </View>
                                        </View>

                                    </View>

                                </TouchableOpacity>

                                {
                                    subNote === true ?
                                        <View style={{ flex: 1, width: '90%', backgroundColor: 'white', alignSelf: 'center', marginTop: 10, marginLeft: 20, marginRight: 20, marginBottom: 10, padding: 10 }}>
                                            <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 13, color: 'black', textAlign: 'justify' }}>TANGERANG, Gading Serpong, Perumahan
                                          Cluster Dalton - Jl. Dalton Timur 2 no. 19 Kota Tangerang Selatan - Serpong, Banten 0896122344556F</Text>
                                        </View>
                                        :
                                        <View />
                                }


                                <TouchableOpacity
                                    onPress={() => this.setState({ subNoteGeneral: !this.state.subNoteGeneral })}
                                >

                                    <View style={{ flex: 1, height: 70, flexDirection: 'row', marginTop: 5, marginLeft: 5, marginRight: 5, backgroundColor: 'white', justifyContent: 'center' }}>


                                        <View style={{ flex: 1, justifyContent: 'center' }}>
                                            <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, color: 'black', paddingLeft: 25 }}>General</Text>
                                            <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 13, color: 'black', paddingLeft: 25 }}>29 Desember 2017</Text>
                                        </View>


                                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', }}>

                                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                                                {
                                                    subNoteGeneral === true ?
                                                        <Icon
                                                            size={30}
                                                            name='md-arrow-dropup'
                                                            // type='entypo'
                                                            color='black'
                                                            style={{ marginRight: 10 }}
                                                        />
                                                        :
                                                        <Icon
                                                            size={30}
                                                            name='md-arrow-dropdown'
                                                            // type='entypo'
                                                            color='black'
                                                            style={{ marginRight: 10 }}
                                                        />
                                                }

                                            </View>
                                        </View>

                                    </View>

                                </TouchableOpacity>

                                {
                                    subNoteGeneral === true ?
                                        <View style={{ flex: 1, width: '90%', backgroundColor: 'white', alignSelf: 'center', marginTop: 10, marginLeft: 20, marginRight: 20, marginBottom: 10, padding: 10 }}>
                                            <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 13, color: 'black', textAlign: 'justify' }}>Ini adalah isi dari kolom general</Text>
                                        </View>
                                        :
                                        <View />
                                }



                            </View>
                            :
                            <View />



                    }

                    {
                        reviewExpanded === true ?
                            <View style={{ flex: 1, backgroundColor: '#eaeaea' }}>



                                <View style={{ width: '100%', height: 85, flexDirection: 'row', backgroundColor: 'white' }}>
                                    <View style={{ width: '25%', flexDirection: 'column', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>
                                        <Image
                                            style={{
                                                width: 65,
                                                height: 55,
                                                alignSelf: 'center'
                                            }}
                                            resizeMode='stretch'
                                            source={require('./../assets/images/Buruk.png')}
                                        />
                                        {/* <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 13, color: 'black', alignSelf: 'center', marginTop: 5 }}>Buruk</Text> */}


                                    </View>



                                    <View style={{ width: '25%', flexDirection: 'column', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>


                                        <Image
                                            style={{
                                                width: 65,
                                                height: 55,
                                                alignSelf: 'center',
                                                marginTop: 5
                                            }}
                                            resizeMode='stretch'
                                            source={require('./../assets/images/Cukup.png')}
                                        />
                                        {/* <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 13, color: 'black', alignSelf: 'center', marginTop: 3 }}>Cukup</Text> */}


                                    </View>


                                    <View style={{ width: '25%', flexDirection: 'column', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>


                                        <Image
                                            style={{
                                                width: 65,
                                                height: 55,
                                                alignSelf: 'center',
                                                marginTop: 5,
                                                alignItems: 'center'
                                            }}
                                            resizeMode='stretch'
                                            source={require('./../assets/images/Bagus.png')}
                                        />
                                        {/* <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 13, color: 'black', alignSelf: 'center', marginTop: 5 }}>Baik</Text> */}


                                    </View>



                                    <View style={{ width: '25%', flexDirection: 'column', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>


                                        <Image
                                            style={{
                                                width: 65,
                                                height: 60,
                                                alignSelf: 'center'
                                            }}
                                            resizeMode='stretch'
                                            source={require('./../assets/images/sempurna.png')}
                                        />
                                        {/* <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 13, color: 'black', alignSelf: 'center', marginTop: 11 }}>Sempurna</Text> */}

                                    </View>

                                </View>

                                <View style={{ width: '100%', height: 20, flexDirection: 'row', backgroundColor: 'white', marginTop: -10 }}>
                                <View style={{ width: '25%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

                                        <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 13, color: 'black' }}>Buruk</Text>

                                    </View>

                                    <View style={{ width: '25%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

                                        <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 13, color: 'black' }}>Cukup</Text>

                                    </View>

                                    <View style={{ width: '25%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

                                        <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 13, color: 'black' }}>Baik</Text>

                                    </View>

                                    <View style={{ width: '25%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

                                        <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 13, color: 'black' }}>Sempurna</Text>

                                    </View>

                                </View>

                                <View style={{ width: '100%', height: 20, flexDirection: 'row', backgroundColor: 'white', }}>
                                    <View style={{ width: '25%', flexDirection: 'column',justifyContent: 'center',  alignItems: 'center' }}>

                                        <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 13, color: 'black' }}>(0)</Text>

                                    </View>

                                    <View style={{ width: '25%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

                                        <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 13, color: 'black' }}>(1)</Text>

                                    </View>

                                    <View style={{ width: '25%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

                                        <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 13, color: 'black', }}>(2)</Text>

                                    </View>

                                    <View style={{ width: '25%', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>

                                        <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 13, color: 'black', }}>(4)</Text>

                                    </View>

                                </View>

                                <View style={{ width: '100%', height: 5, flexDirection: 'row', backgroundColor: 'white', }} />


                                <ScrollView style={{
                                    backgroundColor: '#eaeaea',
                                    flex: 1,
                                }}>

                                    <View style={{ flex: 1, backgroundColor: 'white', margin: 15 }}>

                                        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10, marginRight: 20, marginLeft: 20 }}>

                                            <View style={{ width: '60%', flexDirection: 'row', alignItems: 'center', }}>
                                                <View style={{ height: 65, width: 65, borderRadius: 100, backgroundColor: 'black' }}>
                                                    {/* <Image
                                        style={{
                                            width: 50,
                                            height: 50,
                                            alignSelf: 'center',
                                            borderRadius: 50
                                        }}
                                        resizeMode='stretch'
                                        source={require('./../assets/images/profile.png')}
                                    /> */}
                                                </View>

                                                <View style={{ justifyContent: 'center', flex: 1 }}>
                                                    <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 13, color: 'black', paddingLeft: 10 }}>Gal Gadot</Text>
                                                    <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 13, color: 'black', paddingLeft: 10 }}>28 Januari 2018, 18.04</Text>
                                                </View>
                                            </View>

                                            <View style={{ flexDirection: 'column', borderColor: '#e5e5e5', borderWidth: 1, height: '40%', alignSelf: 'center', marginLeft: 10 }} />


                                            <View style={{ width: '40%', height: '100%', flexDirection: 'row', }}>
                                                <Image
                                                    style={{
                                                        width: 65,
                                                        height: 60,
                                                        alignSelf: 'center',
                                                        marginLeft: 15
                                                    }}
                                                    resizeMode='stretch'
                                                    source={require('./../assets/images/sempurna.png')}
                                                />
                                            </View>
                                        </View>

                                        <View style={{ marginTop: 5, marginLeft: 10, marginRight: 10, marginBottom: 15, }}>

                                            <View style={{}}>
                                                <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, color: 'black', paddingLeft: 10 }}>Rekomen Banget</Text>
                                            </View>
                                            <View style={{ paddingTop: 5, flex: 1 }}>
                                                <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 13, color: 'black', paddingLeft: 10 }}>Kecocokan barang dengan barang yang saya buat cukup memuaskan Kecocokan barang dengan barang yang saya buat cukup memuaskanKecocokan barang dengan barang yang saya buat cukup memuaskan.</Text>
                                            </View>
                                        </View>

                                    </View>

                                </ScrollView >


                            </View >
                            :
                            <View />
                    }
                </ScrollView>

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
                        >Rp 860.000
                                </Text>
                    </View>
                    <View style={{ width: '33%', height: '100%', justifyContent: 'center' }}>
                        <Text style={{ color: 'white', textAlign: 'center', fontSize: 13, fontFamily: 'Quicksand-Regular' }}>Estimasi Selesai</Text>
                        <Text
                            style={{
                                color: 'red', fontFamily: 'Quicksand-Bold', textAlign: 'center',
                                fontSize: 15
                            }}
                        >27 Feb 18
                                </Text>
                    </View>
                    <View style={{ width: '24%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
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
                                    { text: 'Ya', onPress: () => this.props.navi.navigate('PaymentMethod') },
                                ],
                            )}>
                            <Text style={{
                                color: 'white', fontFamily: 'Quicksand-Bold', textAlign: 'center',
                                fontSize: 18
                            }}>Pilih</Text>
                        </TouchableOpacity>
                    </View>
                </View>


            </View >
        );
    }
}

const styles = StyleSheet.create({

    tabActive: {
        flex: 1,
        justifyContent: 'center',
        borderBottomWidth: 2,
        borderBottomColor: '#ef1c25',
    },
    tabNotActive: {
        flex: 1,
        justifyContent: 'center',
    },
    textActive: {
        fontFamily: 'Quicksand-Regular',
        fontSize: 15,
        color: 'black',
        textAlign: 'center'
    },
    textNotActive: {
        fontFamily: 'Quicksand-Regular',
        fontSize: 15,
        color: '#cfcfcf',
        textAlign: 'center'
    }

})

export default ProfileCrafterPage;