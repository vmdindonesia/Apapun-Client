import React, { Component } from 'react'
import {
    View, Text, ImageBackground, Image, TouchableNativeFeedback, Alert,
    TouchableOpacity, ScrollView, TouchableWithoutFeedback, FlatList, StyleSheet
} from 'react-native'
import { ContainerSection, Card } from '../components/common';
import Icon from 'react-native-vector-icons/Ionicons';

export class MenuCrafterPage extends React.Component {

    static navigationOptions = {
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
            imageExpanded: false,
            noteExpanded: false,
            reviewExpanded: false,
            accBankExpanded: false,
            myOrderExpanded: false

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
        const { imageExpanded, noteExpanded, reviewExpanded, accBankExpanded, myOrderExpanded } = this.state;

        return (
            <View style={{ flex: 1 }}>
                <ScrollView>
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
                    <View style={{ height: '100%', marginBottom: '60%' }}>
                        <View style={{ flex: 1 }}>
                            <View style={{ width: '100%' }} >
                                <Text style={styles.textStyle}>Gal Gadot</Text>
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
                        <View style={{ height: 60, justifyContent: 'center', flex: 1, marginTop: 10 }}>
                            <Text style={{ fontFamily: 'Quicksand-Regular', textAlign: 'center', marginLeft: 15, marginRight: 15, fontSize: 13 }}>Lulusan S2 Interior Design di Singapura -
                        Mendapatkan rekor MURI "Pembuat Meja dengan 10 Fungsi" - Pemenang Design Interior Awards 2017 - Resmi anggota ASEPHI</Text>
                        </View>
                        <View style={{ width: '100%', height: 45, paddingLeft: 20, paddingRight: 20 }}>
                            <TouchableOpacity
                                onPress={() => this.props.navi.navigate('EditProfileCrafter')}
                                style={{
                                    backgroundColor: 'black', width: '100%', height: 40,
                                    borderRadius: 15, justifyContent: 'center'
                                }}
                            >
                                <Text style={{ fontFamily: 'Quicksand-Bold', color: 'white', fontSize: 13, textAlign: 'center' }}>Edit Profil</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ width: '100%', marginTop: 10, height: '100%' }}>
                            <View style={styles.card}>
                                <ContainerSection>
                                    <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Gambar')}>
                                        {/* onPress={() => { this.setState({ imageExpanded: !imageExpanded }); console.log(this.state.imageExpanded, 'Request Klik') }} */}
                                        <View style={{ flex: 1, flexDirection: 'row' }}>
                                            <Text style={{ fontSize: 15, fontFamily: 'Quicksand-Bold' }}>Gambar</Text>
                                            <View style={{ flex: 1 }}>
                                                <Icon size={30} style={{ alignSelf: 'flex-end' }} name='md-arrow-dropright' />
                                            </View>
                                        </View>
                                    </TouchableWithoutFeedback>
                                </ContainerSection>
                                {
                                    imageExpanded ?
                                        <View>
                                            <FlatList
                                                data={this.state.photo}
                                                contentContainerStyle={styles.list}
                                                renderItem={this.renderProductItem.bind(this)}
                                                showsHorizontalScrollIndicator={false}
                                            />
                                        </View>
                                        :
                                        <View />
                                }
                            </View>
                            <View style={styles.card}>
                                <ContainerSection>
                                    <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Gambar')}>
                                        {/* onPress={() => { this.setState({ imageExpanded: !imageExpanded }); console.log(this.state.imageExpanded, 'Request Klik') }} */}
                                        <View style={{ flex: 1, flexDirection: 'row' }}>
                                            <Text style={{ fontSize: 15, fontFamily: 'Quicksand-Bold' }}>Catatan</Text>
                                            <View style={{ flex: 1 }}>
                                                <Icon size={30} style={{ alignSelf: 'flex-end' }} name='md-arrow-dropright' />
                                            </View>
                                        </View>
                                    </TouchableWithoutFeedback>
                                </ContainerSection>
                                {
                                    imageExpanded ?
                                        <View>
                                            <FlatList
                                                data={this.state.photo}
                                                contentContainerStyle={styles.list}
                                                renderItem={this.renderProductItem.bind(this)}
                                                showsHorizontalScrollIndicator={false}
                                            />
                                        </View>
                                        :
                                        <View />
                                }
                            </View>
                            <View style={styles.card}>
                                <ContainerSection>
                                    <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Gambar')}>
                                        {/* onPress={() => { this.setState({ imageExpanded: !imageExpanded }); console.log(this.state.imageExpanded, 'Request Klik') }} */}
                                        <View style={{ flex: 1, flexDirection: 'row' }}>
                                            <Text style={{ fontSize: 15, fontFamily: 'Quicksand-Bold' }}>Ulasan</Text>
                                            <View style={{ flex: 1 }}>
                                                <Icon size={30} style={{ alignSelf: 'flex-end' }} name='md-arrow-dropright' />
                                            </View>
                                        </View>
                                    </TouchableWithoutFeedback>
                                </ContainerSection>
                                {
                                    imageExpanded ?
                                        <View>
                                            <FlatList
                                                data={this.state.photo}
                                                contentContainerStyle={styles.list}
                                                renderItem={this.renderProductItem.bind(this)}
                                                showsHorizontalScrollIndicator={false}
                                            />
                                        </View>
                                        :
                                        <View />
                                }
                            </View>
                            <View style={styles.card}>
                                <ContainerSection>
                                    <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Gambar')}>
                                        {/* onPress={() => { this.setState({ imageExpanded: !imageExpanded }); console.log(this.state.imageExpanded, 'Request Klik') }} */}
                                        <View style={{ flex: 1, flexDirection: 'row' }}>
                                            <Text style={{ fontSize: 15, fontFamily: 'Quicksand-Bold' }}>Akun Bank</Text>
                                            <View style={{ flex: 1 }}>
                                                <Icon size={30} style={{ alignSelf: 'flex-end' }} name='md-arrow-dropright' />
                                            </View>
                                        </View>
                                    </TouchableWithoutFeedback>
                                </ContainerSection>
                                {
                                    imageExpanded ?
                                        <View>
                                            <FlatList
                                                data={this.state.photo}
                                                contentContainerStyle={styles.list}
                                                renderItem={this.renderProductItem.bind(this)}
                                                showsHorizontalScrollIndicator={false}
                                            />
                                        </View>
                                        :
                                        <View />
                                }
                            </View>
                            <View style={styles.card}>
                                <ContainerSection>
                                    <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('Gambar')}>
                                        {/* onPress={() => { this.setState({ imageExpanded: !imageExpanded }); console.log(this.state.imageExpanded, 'Request Klik') }} */}
                                        <View style={{ flex: 1, flexDirection: 'row' }}>
                                            <Text style={{ fontSize: 15, fontFamily: 'Quicksand-Bold' }}>Pesanan Saya</Text>
                                            <View style={{ flex: 1 }}>
                                                <Icon size={30} style={{ alignSelf: 'flex-end' }} name='md-arrow-dropright' />
                                            </View>
                                        </View>
                                    </TouchableWithoutFeedback>
                                </ContainerSection>
                                {
                                    imageExpanded ?
                                        <View>
                                            <FlatList
                                                data={this.state.photo}
                                                contentContainerStyle={styles.list}
                                                renderItem={this.renderProductItem.bind(this)}
                                                showsHorizontalScrollIndicator={false}
                                            />
                                        </View>
                                        :
                                        <View />
                                }
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        borderTopWidth: 2,
        borderColor: '#ddd',
        // paddingLeft: 15, paddingRight: 15
        padding: 10,
    },
    menuContainerStyle: {
        flex: 4
    },
    backgroundStyle: {
        width: '100%',
        height: '30%',
        // flex: 1,
        // position: 'absolute',
        // backgroundColor: 'pink'
    },
    containerImage: {
        justifyContent: 'flex-end',
        top: 170,
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
        alignSelf: 'auto'
    },
    textStyle2: {
        marginTop: 10,
        fontFamily: 'Quicksand-Regular',
        fontSize: 13,
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
        marginLeft: '48%',
        height: 30,
        width: 30,
        marginTop: 5
    },
    item: {
        height: 80,
        width: 90,
        borderRadius: 2,
        alignSelf: 'stretch',
        resizeMode: 'cover',

    },
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})

export default MenuCrafterPage;