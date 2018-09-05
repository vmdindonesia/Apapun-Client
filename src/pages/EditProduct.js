import React, { Component } from 'react';
import { View, Text, FlatList, ImageBackground, Image, AsyncStorage, TouchableOpacity, ScrollView, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, StatusBar, Modal } from 'react-native'
import { Container, ContainerSection, Button, Input, InputSearch, InputDate } from '../components/common';
import ImagePicker from 'react-native-image-picker';
// import axios from 'axios';
import { COLOR } from '../shared/config';
import Icon from 'react-native-vector-icons/Ionicons';
import { IPSERVER } from '../shared/config';
import Carousel from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from '../shared/slider.styles';

export class EditProductPage extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        headerLeft:
            <TouchableOpacity
                onPress={() => { navigation.goBack(); console.log(navigation.goBack(), 'Props Order') }}
            >
                <Icon size={30} style={{ marginLeft: 25, color: '#EF1C25' }} name='ios-arrow-back' />
            </TouchableOpacity>,
        headerTitle: 'Pengaturan Produk'
    });

    constructor(props) {
        super(props)

        this.state = {
            loading: false,
            isModalVisible: false,
            userId: '',
            nameProduct: '',
            categoryProduct: '',
            tempUploadDesign: '',
            uploadDesign: [],
            nameFileImages: [],
            photoTemp: [],
            photoTempCarousel: [],
            tempPhoto: false,
            uploadMaterial: null,
            notice: false,
            serveDelivery: '',
            addressDelivery: '',
            catatanTambahan: '',
            numberPcs: 0,
            unitQuantity: '',
            dataCategory: '',
            dataSubCategory: '',
            dataAddress: '',
            firstmaterial: false,
            buttonfirstmaterial: false,
            subCategory: []
        }
    }

    designPhotoUpload(name) {
        var names = name;
        const options = {
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackup: true
            }
        }

        ImagePicker.showImagePicker(options, (response) => {

            if (response.didCancel) {
                console.log('User cancelled photo picker');
            }
            else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            }
            else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            }
            else {
                let source = { uri: response.uri };

                if (this.state.photoTemp.length === 0) {
                    let pushFirst = { uri: `${IPSERVER}/ApapunStorages/assets/download/upload-image.png`, data: 1 };

                    const newUriPhoto = this.state.photoTemp;
                    newUriPhoto[this.state.photoTemp.length] = source;
                    this.setState({ photoTemp: newUriPhoto }, () => {
                        const newUriPhoto = this.state.photoTemp;
                        for (let i = 0; i < 4; i++) {
                            newUriPhoto[this.state.photoTemp.length] = pushFirst;
                        }
                        this.setState({ photoTemp: newUriPhoto }, () => {
                            return this.returnDesignPhoto();
                        });
                    });
                } else {
                    console.log(this.state.photoTemp, 'Foto-Foto');
                    const identify = this.state.photoTemp;
                    if (identify[1].data === 1) {
                        console.log('Foto Sama');
                        const newSplicePhoto = this.state.photoTemp;
                        newSplicePhoto[1] = source;
                        this.setState({ photoTemp: newSplicePhoto }, () => {
                            console.log(this.state.photoTemp, 'Data Foto');
                        });
                    } else if (identify[2].data === 1) {
                        const newSplicePhoto = this.state.photoTemp;
                        newSplicePhoto[2] = source;
                        this.setState({ photoTemp: newSplicePhoto }, () => {
                            console.log(this.state.photoTemp, 'Data Foto');
                        });
                    } else if (identify[3].data === 1) {
                        const newSplicePhoto = this.state.photoTemp;
                        newSplicePhoto[3] = source;
                        this.setState({ photoTemp: newSplicePhoto }, () => {
                            console.log(this.state.photoTemp, 'Data Foto');
                        });
                    } else if (identify[4].data === 1) {
                        const newSplicePhoto = this.state.photoTemp;
                        newSplicePhoto[4] = source;
                        this.setState({ photoTemp: newSplicePhoto }, () => {
                            console.log(this.state.photoTemp, 'Data Foto');
                            this.setState({ tempPhoto: true })
                        });
                    }
                }
            }
        });
    }

    imageUpload(uriPhoto) {
        console.log(uriPhoto, 'URI TOD');
        const nameFile = 'IMG_' + uuid.v1();
        console.log(nameFile, 'UUID');


        var photo = {
            uri: uriPhoto.uri,
            type: 'image/jpeg',
            name: nameFile.toUpperCase() + '.jpg'
        };

        var body = new FormData();
        body.append('photo', photo);

        const newnameFileImages = this.state.nameFileImages;
        newnameFileImages[this.state.nameFileImages.length] = nameFile.toUpperCase() + '.jpg';
        this.setState({ nameFileImages: newnameFileImages }, () => {
            console.log(this.state.nameFileImages, 'List Name Images Design');

            axios.post(`${IPSERVER}/ApapunStorages/images/upload`, body
            ).then(response => {
                console.log(response, 'Image Berhasil Upload');
            }).catch(error => {
                console.log(error, 'Error Upload Poto');
            })
        });
    }

    renderProductItem = (itemPhoto, index) => {
        const { tempPhoto } = this.state
        return (
            <View key={index} style={{ marginRight: -10 }}>
                {
                    tempPhoto === true ?
                        <Image
                            source={itemPhoto}
                            style={{ width: 85, height: 70 }}
                            resizeMode='contain'
                        />
                        :
                        <TouchableOpacity
                            onPress={() => this.designPhotoUpload('tempUploadDesign')}
                        >
                            <Image
                                source={itemPhoto}
                                style={{ width: 85, height: 70 }}
                                resizeMode='contain'
                            />
                        </TouchableOpacity>
                }
            </View>
        )
    }

    returnDesignPhoto() {
        return (
            <View>
                <FlatList
                    data={this.state.photoTemp}
                    extraData={this.state}
                    horizontal
                    renderItem={({ item, index }) => this.renderProductItem(item, index)}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        )
    }


    render() {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>

                <Text style={[styles.pickerTextStyle, { marginLeft: 5, marginTop: 10 }]}>Upload Design Anda</Text>
                <ContainerSection>
                    {
                        this.state.photoTemp.length === 0 ?
                            <View style={{ flex: 1, height: 374, backgroundColor: 'grey', }}>
                                <Image
                                    source={require('../assets/images/roy-kiyoshi.jpg')}
                                    style={{ height: '100%', width: '100%' }}
                                    resizeMode='cover'
                                />
                                <View style={{ flex: 1, position: 'absolute', top: 300, alignItems: 'center', alignSelf: 'center' }}>
                                    <ContainerSection>
                                        <TouchableOpacity
                                            onPress={() => this.designPhotoUpload('tempUploadDesign')}
                                            style={styles.button}
                                        >
                                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                                <Image style={{ width: 20, height: 20, marginTop: 6 }} source={require('../assets/images/logo-image.png')} />
                                                <Text style={{ paddingLeft: 20, fontSize: 13, color: 'white', marginTop: 6, fontFamily: 'Quicksand-Bold' }}>Tambah Gambar</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </ContainerSection>
                                </View>
                            </View>
                            :
                            <View>
                                <View style={{ flexDirection: 'row', width: '100%', height: 40, paddingLeft: 10, paddingTop: 5, paddingBottom: 10 }}>
                                    <TouchableOpacity style={{ justifyContent: 'center' }}>
                                        <Image
                                            style={{ width: 20, height: 20 }}
                                            source={require('./../assets/images/Image.png')}
                                            resizeMode='contain'
                                        />
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ justifyContent: 'center', borderRightWidth: 0.5, width: '40%', borderRightColor: '#aaa', marginRight: 10 }}>
                                        <Text style={{ fontFamily: 'Quicksand-Regular', color: 'red', fontSize: 13, marginLeft: 10 }}>Tambah Gambar</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={{ justifyContent: 'center', flex: 1 }}>
                                        <Image
                                            style={{ width: 20, height: 20 }}
                                            source={require('./../assets/images/Trash.png')}
                                            resizeMode='contain'
                                        />
                                    </TouchableOpacity>
                                </View>
                                <Carousel
                                    ref={(c) => { this._carousel = c; }}
                                    data={this.state.photoTemp}
                                    extraData={this.state}
                                    renderItem={this._renderItem}
                                    sliderWidth={sliderWidth}
                                    itemWidth={itemWidth}
                                />
                            </View>
                    }
                </ContainerSection>
                {
                    this.state.photoTemp.length > 0 ?
                        <View style={styles.containerFlatList}>
                            {this.returnDesignPhoto()}
                            <Text style={{ flex: 1, textAlign: 'right', fontFamily: 'Quicksand-Regular', fontSize: 13, paddingTop: 5 }}>Maksimal upload 5 gambar</Text>
                        </View>

                        :
                        <View style={{ marginBottom: 20 }} />
                }

                <View style={styles.kond}>
                    <View style={{
                        width: '150%',
                        height: 70,
                        backgroundColor: '',
                        flexDirection: 'row',
                        marginTop: 5
                    }}>

                        <View style={{
                            width: '50%',
                            flexDirection: 'column',
                            paddingTop: 15,
                            height: 100
                        }}>
                            <Text style={{ fontFamily: 'Quicksand-Regular', fontWeight: 'bold', fontSize: 15 }}>Nama Produk</Text>
                            <View style={{ width: '120%', borderWidth: 0, height: 30, paddingLeft: 2, backgroundColor: '#7FFFD4' }}>
                                <Text style={{
                                    fontFamily: 'Quicksand-Regular', alignSelf: 'auto', paddingTop: 10, fontSize: 13
                                }}
                                >My Own Table</Text>
                            </View>

                        </View>
                    </View>

                    <View style={{
                        width: '100%',
                        height: 50,
                        backgroundColor: '',
                        flexDirection: 'row'
                    }}>

                        <View style={{
                            width: '50%',
                            flexDirection: 'column',
                            margintop: 10,
                            height: 50
                        }}>
                            <Text style={{ fontFamily: 'Quicksand-Regular', fontWeight: 'bold', fontSize: 15, paddingTop: 10 }}>Kategori</Text>
                            <View style={{ width: '50%', borderWidth: 0, height: 30, paddingLeft: 2 }}>
                                <Text style={{
                                    fontFamily: 'Quicksand-Regular', alignSelf: 'auto', paddingTop: 10, fontSize: 13, backgroundColor: '#7FFFD4'
                                }}
                                >Furniture</Text>
                            </View>

                        </View>

                        <View style={{
                            width: '50%',
                            margintop: 10,
                            flexDirection: 'column',
                            height: 50
                        }}>
                            <Text style={{ fontFamily: 'Quicksand-Regular', fontWeight: 'bold', fontSize: 15, paddingTop: 10 }}>Sub-Kategori</Text>
                            <View style={{ width: '50%', borderWidth: 0, height: 30, paddingLeft: 2, backgroundColor: 'white' }}>
                                <Text style={{
                                    fontFamily: 'Quicksand-Regular', alignSelf: 'auto', paddingTop: 10, fontSize: 13
                                }}
                                >Meja</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{
                        width: '150%',
                        height: 70,
                        backgroundColor: '',
                        flexDirection: 'row',
                        marginTop: 5
                    }}>

                        <View style={{
                            width: '50%',
                            flexDirection: 'column',
                            paddingTop: 15,
                            height: 100
                        }}>
                            <Text style={{ fontFamily: 'Quicksand-Regular', fontWeight: 'bold', fontSize: 15 }}>Deskripsi Produk</Text>
                            <View style={{ flex: 1, width: 300 }}>

                                <ContainerSection>
                                    <Input
                                        placeholder='silakan isi no deskripsinya'

                                    />
                                </ContainerSection>

                            </View>

                        </View>
                    </View>

                    <View style={{
                        width: '150%',
                        height: 70,
                        backgroundColor: '',
                        paddingTop: 30,
                        flexDirection: 'row',
                        marginTop: 5
                    }}>

                        <View style={{
                            width: '50%',
                            flexDirection: 'column',
                            paddingTop: 15,
                            height: 100
                        }}>
                            <Text style={{ fontFamily: 'Quicksand-Regular', fontWeight: 'bold', fontSize: 15 }}>Apresiasi Design</Text>
                            <View style={{ flex: 1, width: 300 }}>

                                <ContainerSection>
                                    <Input
                                        placeholder='silakan isi no deskripsinya'

                                    />
                                </ContainerSection>

                            </View>

                        </View>

                    </View>

                                
                </View>


            </ScrollView>

        )
    }
}
const styles = StyleSheet.create({
    pickerTextStyle: {
        fontFamily: 'Quicksand-Bold',
        color: '#5e5e5e',
        fontSize: 15,
        flex: 1,
        marginTop: 10,
        marginBottom: 10
    },
    kond: {
        height: 500,
        paddingLeft: 20,
        backgroundColor: 'white'
    },
    containerFlatList: {
        paddingBottom: 5,
        paddingRight: 5,
        paddingLeft: 5,
        paddingTop: 5,
    }


})

export default EditProductPage;