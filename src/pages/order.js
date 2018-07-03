import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation';
import { AsyncStorage, StyleSheet, ScrollView, Text, Picker, Keyboard, ToastAndroid, TouchableOpacity, View, Image, FlatList, Modal } from 'react-native';
import { Container, ContainerSection, Input, Button, Spinner, InputNumber, InputSearch } from '../components/common';
import ImagePicker from 'react-native-image-picker';
import Carousel from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from './../shared/slider.styles';
import axios from 'axios';
import { IPSERVER } from './../shared/config';
import uuid from 'react-native-uuid';

export class OrderPage extends React.Component {
    static navigationOptions = {
        headerTitle: 'Custom Order'
    }

    constructor(props) {
        super(props)

        this.state = {
            loading: false,
            modalVisible: false,
            userId: '',
            nameProduct: '',
            categoryProduct: '',
            subCategoryProduct: '',
            tempUploadDesign: '',
            uploadDesign: [],
            nameFileImages: [],
            uploadMaterial: null,
            notice: false,
            serveDelivery: '',
            addressDelivery: '',
            catatanTambahan: '',
            numberPcs: 0,
            unitQuantity: '',
            dataCategory: '',
            dataSubCategory: '',
            dataAddress: ''
        }
    }

    componentDidMount() {
        axios.get(`${IPSERVER}/ApapunKategoris`)
            .then(response => {
                console.log(response.data, 'Response Kategori');
                this.setState({ dataCategory: response.data });
                AsyncStorage.getItem('VMDDEVELOPER', (err, result) => {
                    console.log(JSON.parse(result), 'Data Login');
                    const dataLog = JSON.parse(result);
                    console.log(dataLog.userId, 'userID');
                    const idUser = dataLog.userId;
                    this.setState({ userId: idUser });
                    axios.post(`${IPSERVER}/ApapunUsersAddresses/getUserAddress`, { idUser }).then(response => {
                        console.log(response, 'Response Address')
                        this.setState({ dataAddress: response.data })
                    }).catch(error => {
                        console.log(error, 'Error Address');
                    })
                });
            }).catch(error => {
                console.log(error, 'Error Kategori');
            })
    }

    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }

    fetchSubKategori() {
        axios.post(`${IPSERVER}/ApapunSubkategoris/getSubkategori`, {
            params: {
                kategoriId: this.state.categoryProduct
            }
        })
            .then(response => {
                console.log(response.data, 'Response Sub Kategori');
                this.setState({ dataSubCategory: response.data });
                return this.renderSubKategori();
            }).catch(error => {
                console.log(error, 'Error Sub Kategori');
            })
    }

    onChange = (name, value) => {
        this.setState({ [name]: value }, () => {
            console.log(this.state[name]);
        })
    }

    onChangePicker = (name, value) => {
        this.setState({ [name]: value }, () => {
            console.log('Kategori Picker');
            this.fetchSubKategori();
        })
    }

    minusNumber() {
        console.log('Minus');
        if (this.state.numberPcs === 0) {
            this.setState({
                numberPcs: this.state.numberPcs
            });
        } else {
            this.setState({
                numberPcs: this.state.numberPcs - 1
            });
        }
    }

    plusNumber() {
        console.log('Plus');
        this.setState({
            numberPcs: this.state.numberPcs + 1
        });
    }

    onValidation() {
        Keyboard.dismiss();

        const {
            nameProduct,
            categoryProduct,
            uploadDesign,
            uploadMaterial,
            serveDelivery,
            addressDelivery,
            numberPcs,
            subCategoryProduct,
            unitQuantity
        } = this.state;

        switch (nameProduct) {
            case '':
                return ToastAndroid.show('Nama Produk Tidak Boleh Kosong', ToastAndroid.SHORT);
            default:
                switch (categoryProduct) {
                    case 0:
                        return ToastAndroid.show('Kategori Produk Tidak Boleh Kosong', ToastAndroid.SHORT);
                    case '':
                        return ToastAndroid.show('Kategori Produk Tidak Boleh Kosong', ToastAndroid.SHORT);
                    default:
                        const designPhoto = uploadDesign.length;
                        switch (designPhoto) {
                            case 0:
                                return ToastAndroid.show('Design Foto Produk Tidak Boleh Kosong', ToastAndroid.SHORT);
                            default:
                                console.log('Sukses Semua');
                                switch (serveDelivery) {
                                    case '':
                                        return ToastAndroid.show('Jasa Pengiriman tidak boleh kosong', ToastAndroid.SHORT);
                                    default:
                                        switch (numberPcs) {
                                            case 0:
                                                return ToastAndroid.show('Jumlah dipesan tidak boleh kosong', ToastAndroid.SHORT);
                                            default:
                                                switch (addressDelivery) {
                                                    case '':
                                                        return ToastAndroid.show('Alamat tidak boleh kosong', ToastAndroid.SHORT);
                                                    case 0:
                                                        return ToastAndroid.show('Alamat tidak boleh kosong', ToastAndroid.SHORT);
                                                    default:
                                                        switch (subCategoryProduct) {
                                                            case '':
                                                                return ToastAndroid.show('Sub Kategori tidak boleh kosong', ToastAndroid.SHORT);
                                                            case 0:
                                                                return ToastAndroid.show('Sub Kategori tidak boleh kosong', ToastAndroid.SHORT);
                                                            default:
                                                                switch (unitQuantity) {
                                                                    case '':
                                                                        return ToastAndroid.show('Unit Quantity tidak boleh kosong', ToastAndroid.SHORT);
                                                                    case 0:
                                                                        return ToastAndroid.show('Unit Quantity tidak boleh kosong', ToastAndroid.SHORT);
                                                                    default:
                                                                        return this.prosesOrder();
                                                                }
                                                        }
                                                }
                                        }
                                }
                        }
                }
        }
    }

    prosesOrder() {
        this.setState({ loading: true });
        const {
            nameProduct,
            userId,
            addressDelivery,
            catatanTambahan,
            numberPcs,
            unitQuantity,
            serveDelivery,
            categoryProduct,
            subCategoryProduct,
            nameFileImages
        } = this.state;

        console.log(this.state);
        axios.post(`${IPSERVER}/ApapunOrders/CreateOrder`, {
            userId,
            nameProduct,
            addressDelivery,
            catatanTambahan,
            numberPcs,
            unitQuantity,
            serveDelivery,
            categoryProduct,
            subCategoryProduct,
            nameFileImages
        })
            .then(response => {
                console.log(response, 'Response Order Proses');
                this.setState({ loading: true });
            }).catch(error => {
                console.log(error, 'Error Order Proses');
                this.setState({ loading: true });
            })
            this.setState({ loading: false });
            return ToastAndroid.show('Sukses Order', ToastAndroid.SHORT);
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
                console.log(response, 'DATA IMAGEEEE');
                this.imageUpload(source, response);

                this.setState({ [names]: source }, () => {
                    console.log(this.state[name], 'Name State');

                    const newUploadDesign = this.state.uploadDesign;
                    newUploadDesign[this.state.uploadDesign.length] = source;
                    this.setState({ uploadDesign: newUploadDesign }, () => {
                        console.log(this.state.uploadDesign, 'Ship Name Max');
                        return this.returnDesignPhoto();
                    });

                });
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

    renderProductItem = (itemPhoto) => {
        console.log(itemPhoto, 'Render Poto');
        return (
            <View style={{ paddingRight: 5 }}>
                <TouchableOpacity
                    key={itemPhoto}
                // onPress={() => { this.props.navi.navigate('DetailFishes', { datas: itemProduct.item.Fish }) }}
                >
                    <Image
                        source={itemPhoto}
                        style={{ width: 85, height: 70 }}
                        resizeMode='cover'
                    />
                </TouchableOpacity>
            </View>
        )
    }

    returnDesignPhoto() {
        console.log(this.state.uploadDesign, 'XAXAXA');
        return (
            <View>
                <FlatList
                    data={this.state.uploadDesign}
                    extraData={this.state}
                    horizontal
                    keyExtractor={(index) => index.uri}
                    renderItem={({ item }) => this.renderProductItem(item)}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        )
    }

    _renderItem = (item, index) => {
        console.log(item, 'Item Paralax');
        const number = parseInt(item.index) + 1;
        console.log(number, 'LPLPLPLPLP');
        return (
            <View>
                <Image
                    source={item.item}
                    style={{ width: sliderWidth, height: 200 }}
                    resizeMode='stretch'
                />
                <View style={{ position: 'absolute', backgroundColor: 'rgba(22, 22, 22, 0.5)', width: 40, height: 40, borderRadius: 50, marginLeft: 15, marginTop: 10 }}>
                    <Text style={{ textAlign: 'center', fontFamily: 'Quicksand-Bold', color: 'white', fontSize: 20, paddingTop: 8 }}>{number}</Text>
                </View>
            </View>
        )
    }

    renderKategori = () => {
        const resultKategori = this.state.dataCategory;
        if (resultKategori) {
            return resultKategori.map((data, index) => {
                return <Picker.Item label={data.name} value={data.id} key={index} />
            })
        }
        return <Picker.Item label='Tidak ada Kategori' value='0' />
    }

    renderAddress = () => {
        const resultAddress = this.state.dataAddress;
        console.log(resultAddress, 'Data Address');
        if (resultAddress) {
            return resultAddress.map((data, index) => {
                return <Picker.Item label={data.type} value={data.addressId} key={index} />
            })
        }
        return <Picker.Item label='Tidak ada Address' value='0' />
    }

    renderSubKategori = () => {
        const resultSubKategori = this.state.dataSubCategory;
        if (resultSubKategori) {
            return resultSubKategori.map((data, index) => {
                return <Picker.Item label={data.name} value={data.id} key={index} />
            })
        }
        return <Picker.Item label='Anda harus  memilih kategori' value='0' />
    }

    renderButton = () => {
        if (this.state.loading) {
            return <Spinner size="small" />
        }
        return (
            <Button
                style={{
                    backgroundColor: '#FF1000',
                    justifyContent: 'center',
                    borderRadius: 30,
                    marginTop: 30,
                    marginLeft: '15%',
                    marginRight: '15%',
                    marginBottom: 20
                }}
                onPress={() => this.onValidation()}
            >
                <Text style={{ color: '#FFFFFF', fontFamily: 'Quicksand-Bold' }}>Mencari Crafter</Text>
            </Button>
        )
    }

    render() {
        const {
            nameProduct,
            categoryProduct,
            uploadDesign,
            uploadMaterial,
            serveDelivery,
            addressDelivery,
            catatanTambahan,
            numberPcs,
            subCategoryProduct,
            unitQuantity
        } = this.state;

        console.log(this.state.categoryProduct, 'OKOKOKOK');
        return (
            <ScrollView
                style={styles.containerStyle}
                keyboardShouldPersistTaps="always"
                ref={ref => this.scrollView = ref}
            >
                <ContainerSection>
                    <Input
                        placeholder='Nama Produk'
                        label='Nama Produk'
                        value={nameProduct}
                        onChangeText={v => this.onChange('nameProduct', v)}
                    />
                </ContainerSection>
                <ContainerSection>
                    <View style={styles.pickerContainer}>
                        <Text style={styles.pickerTextStyle}>Kategori Produk</Text>
                        <View style={styles.pickerStyle}>
                            <Picker
                                selectedValue={categoryProduct}
                                onValueChange={(v) => this.onChangePicker('categoryProduct', v)}
                            >
                                <Picker.Item label='Pilih Kategori Produk' value='0' />
                                {this.renderKategori()}
                            </Picker>
                        </View>
                    </View>
                </ContainerSection>

                <ContainerSection>
                    <View style={styles.pickerContainer}>
                        <Text style={styles.pickerTextStyle}>Sub Kategori Produk</Text>
                        <View style={styles.pickerStyle}>
                            <Picker
                                selectedValue={subCategoryProduct}
                                onValueChange={(v) => this.onChange('subCategoryProduct', v)}
                            >
                                <Picker.Item label='Pilih Sub Kategori Produk' value='0' />
                                {this.renderSubKategori()}
                            </Picker>
                        </View>
                    </View>
                </ContainerSection>

                <Text style={[styles.pickerTextStyle, { marginLeft: 5, marginTop: 10 }]}>Upload Design Anda</Text>
                <ContainerSection>
                    <View style={{ flex: 1, width: '100%' }}>
                        <View>
                            {
                                uploadDesign.length < 2 ?
                                    <View>
                                        <Image
                                            source={require('../assets/images/create-design.png')}
                                            style={{ width: '100%', height: 300 }}
                                            resizeMode='cover'
                                        />
                                        <View style={[styles.textBackground, { flex: 1, flexDirection: 'row' }]}>
                                            <Text style={{ fontSize: 13, color: 'white', marginTop: 80, textAlign: 'center', fontFamily: 'Quicksand-Regular' }}>Semakin detail desain Anda, semakin besar kemungkinan crafter kami untuk lebih mudah mengerti dalam memenuhi permintaan Anda.</Text>
                                        </View>
                                        <TouchableOpacity
                                            onPress={() => this.designPhotoUpload('tempUploadDesign')}
                                            style={styles.button}
                                        >
                                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                                <Image style={{ width: 20, height: 20, marginLeft: 5, marginTop: 6 }} source={require('../assets/images/logo-image.png')} />
                                                <Text style={{ paddingLeft: 10, fontSize: 14, textAlign: 'center', color: 'white', marginTop: 6, fontFamily: 'Quicksand-Bold' }}>Tambah Gambar</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                    :
                                    <View>
                                        <Carousel
                                            ref={(c) => { this._carousel = c; }}
                                            data={this.state.uploadDesign}
                                            renderItem={this._renderItem}
                                            sliderWidth={sliderWidth}
                                            itemWidth={itemWidth}
                                        />
                                    </View>
                            }
                        </View>
                    </View>
                </ContainerSection>

                {
                    this.state.uploadDesign.length > 0 ?
                        <View style={styles.containerFlatList}>
                            {this.returnDesignPhoto()}
                        </View>
                        :
                        <View style={{ marginBottom: 20 }} />

                }

                <ContainerSection>
                    <View style={{ flex: 3, flexDirection: 'column' }}>
                        <Text style={styles.pickerTextStyle}>Jumlah dipesan :</Text>
                    </View>
                    <TouchableOpacity onPress={() => this.minusNumber()} style={{ marginLeft: -30 }}>
                        <Image
                            style={{ width: 25, height: 25, borderRadius: 5, marginTop: 8, marginLeft: 2 }}
                            source={require('../assets/images/minus.png')}
                        />
                    </TouchableOpacity>
                    <View style={{ height: 40, width: 60, marginLeft: 4 }}>
                        <InputNumber
                            value={numberPcs.toString()}
                            onChangeText={val => this.onChange('numberPcs', val)}
                            keyboardType='numeric'
                        />
                    </View>
                    <TouchableOpacity onPress={() => this.plusNumber()} style={{ marginLeft: 4, marginRight: 4 }}>
                        <Image
                            style={{ width: 25, height: 25, borderRadius: 5, marginTop: 8 }}
                            source={require('../assets/images/plus.png')}
                        />
                    </TouchableOpacity>
                    <View style={{ flex: 2 }}>
                        <View style={styles.pickerUnitStyle}>
                            <Picker
                                selectedValue={unitQuantity}
                                onValueChange={v => this.onChange('unitQuantity', v)}
                            >
                                <Picker.Item label='Pilih' value='' />
                                <Picker.Item label='Pcs' value='Pcs' />
                                <Picker.Item label='Lusin' value='Lusin' />
                            </Picker>
                        </View>
                    </View>
                </ContainerSection>

                <Text style={[styles.pickerTextStyle, { marginLeft: 5, marginTop: 10 }]}>Material</Text>
                <ContainerSection>
                    <View style={{ flex: 1, width: '100%' }}>
                        <View>
                            {
                                uploadMaterial === null ?
                                    <View>
                                        <Image
                                            source={require('../assets/images/create-material.png')}
                                            style={{ width: '100%', height: 120 }}
                                            resizeMode='cover'
                                        />
                                        <View style={[styles.textBackground, { flex: 1, flexDirection: 'row' }]}>
                                            <Text style={{ fontSize: 13, color: 'white', marginTop: 12, marginLeft: 30, marginRight: 30, textAlign: 'center', fontFamily: 'Quicksand-Regular' }}>Pilih material yang sesuai dengan desain Anda.</Text>
                                        </View>
                                        <TouchableOpacity
                                            onPress={() => {
                                                // this.setModalVisible(true)
                                                return ToastAndroid.show('Material Under Development', ToastAndroid.SHORT);
                                            }}
                                            style={styles.buttons}
                                        >
                                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                                <Image style={{ width: 20, height: 20, marginTop: 6, marginLeft: 5 }} source={require('../assets/images/logo-material.png')} />
                                                <Text style={{ paddingLeft: 10, fontSize: 14, textAlign: 'center', color: 'white', marginTop: 6, fontFamily: 'Quicksand-Bold' }}>Pemilihan Material</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>

                                    :
                                    <Image source={uploadMaterial} />
                            }
                        </View>
                    </View>
                </ContainerSection>
                <ContainerSection>
                    <View style={styles.pickerContainer}>
                        <Text style={styles.pickerTextStyle}>Jasa Pengiriman</Text>
                        <View style={styles.pickerStyle}>
                            <Picker
                                selectedValue={serveDelivery}
                                onValueChange={v => this.onChange('serveDelivery', v)}
                            >
                                <Picker.Item label='Pilih Jasa Pengiriman' value='0' />
                                <Picker.Item label='JNE' value='JNE' />
                                <Picker.Item label='TIKI' value='TIKI' />
                                <Picker.Item label='Pos Indonesia' value='Pos Indonesia' />
                                <Picker.Item label='Gojek' value='Gojek' />
                            </Picker>
                        </View>
                    </View>
                </ContainerSection>
                <ContainerSection>
                    <View style={styles.pickerContainer}>
                        <Text style={styles.pickerTextStyle}>Alamat Pengiriman</Text>
                        <View style={styles.pickerStyle}>
                            <Picker
                                selectedValue={addressDelivery}
                                onValueChange={v => this.onChange('addressDelivery', v)}
                            >
                                <Picker.Item label='Pilih Alamat Pengiriman' value='0' />
                                {this.renderAddress()}
                            </Picker>
                        </View>
                    </View>
                </ContainerSection>
                <ContainerSection>
                    <View style={{ flex: 1, flexDirection: 'row' }}>
                        <View>
                            <Text style={{ padding: 5, fontFamily: 'Quicksand-Bold' }}> Catatan Tambahan </Text>
                        </View>
                        <View style={{ flex: 1 }}>
                            <TouchableOpacity onPress={() => this.setState({ notice: !this.state.notice })}>
                                <Image style={{ width: 13, height: 13, marginTop: 7 }} source={require('../assets/images/Information.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ContainerSection>
                {
                    this.state.notice === false ?
                        <View />
                        :
                        <Text style={{ paddingLeft: 15, fontSize: 10, color: 'red' }}>
                            ***) Anda dapat menuliskan informasi penting tambahan lainya agar crafter mudah memahami pesanan anda.
                            contoh: Ukuran, Nama Produk (Jika anda tahu nama produk nya), dsb.
                        </Text>
                }
                <ContainerSection>
                    <Input
                        placeholder='Catatan Tambahan'
                        value={catatanTambahan}
                        onChangeText={v => this.onChange('catatanTambahan', v)}
                    />
                </ContainerSection>
                <ContainerSection>
                    {this.renderButton()}
                </ContainerSection>

                {/* <Modal
                    animationType="slide"
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {
                        alert('Modal has been closed.');
                    }}>
                    <View style={{ marginTop: 22 }}>
                        <View>
                            <InputSearch
                                autoFocus
                                onChangeText={(text) => {
                                    this.querySuggestion(text);
                                }}
                                value={txt}
                                // onChangeText={v => this.onChangeInput('txt', v)}
                                placeholder="Cari Material..."
                                icon={ic_search}
                            />

                            <TouchableOpacity
                                onPress={() => {
                                    this.setModalVisible(!this.state.modalVisible);
                                }}>
                                <Text>Hide Modal</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal> */}
            </ScrollView >
        );
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    containerFlatList: {
        paddingBottom: 20,
        paddingRight: 5,
        paddingLeft: 5,
        paddingTop: 5
    },
    pickerContainer: {
        flex: 1,
        marginBottom: 5
    },
    pickerStyle: {
        borderColor: '#a9a9a9',
        borderRadius: 3,
        paddingLeft: 5,
        borderWidth: 1
    },
    pickerTextStyle: {
        fontFamily: 'Quicksand-Bold',
        color: '#5e5e5e',
        fontSize: 14,
        flex: 1,
        marginTop: 10,
        marginBottom: 10
    },
    pickerUnitStyle: {
        borderColor: '#a9a9a9',
        borderRadius: 5,
        paddingLeft: 4,
        borderWidth: 1,
        height: 40,
        backgroundColor: '#fff'
    },
    button: {
        backgroundColor: 'rgb(45, 45, 45)',
        borderWidth: 1,
        borderRadius: 30,
        width: '80%',
        height: 35,
        position: 'absolute',
        marginTop: 220,
        marginLeft: 30,
        justifyContent: 'center',
        alignItems: 'center',

    },
    buttons: {
        backgroundColor: 'rgb(45, 45, 45)',
        borderWidth: 1,
        borderRadius: 30,
        width: '80%',
        height: 35,
        position: 'absolute',
        marginTop: 75,
        marginLeft: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textBackground: {
        position: 'absolute'
    }
});

export default OrderPage;