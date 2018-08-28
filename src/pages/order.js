import React, { Component } from 'react';
import { NavigationActions, StackActions } from 'react-navigation';
import { AsyncStorage, StyleSheet, ScrollView, Text, Picker, Keyboard, ToastAndroid, TouchableOpacity, View, Image, FlatList } from 'react-native';
import { ContainerSection, Input, Button, Spinner, InputNumber } from '../components/common';
import ImagePicker from 'react-native-image-picker';
import Carousel from 'react-native-snap-carousel';
import { sliderWidth, itemWidth } from '../shared/slider.styles';
import axios from 'axios';
import { IPSERVER } from '../shared/config';
import uuid from 'react-native-uuid';
import Icon from 'react-native-vector-icons/Ionicons';

export class OrderPage extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        headerLeft:
            <TouchableOpacity
                onPress={() => {
                    navigation.goBack();
                    console.log(navigation, 'Props Order')
                }}
            >
                <Icon size={30} style={{ marginLeft: 25, color: '#EF1C25' }} name='ios-arrow-back' />
            </TouchableOpacity>,
        headerTitle: 'Rancangan Pesanan'
    });

    constructor(props) {
        super(props)

        this.state = {
            loading: false,
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
            numberPcs: '',
            unitQuantity: '',
            dataCategory: '',
            dataSubCategory: '',
            dataAddress: '',
            dataMaterial: '',
            dataSubMaterial: '',
            propertyPhoto: [],
            firstmaterial: false,
            dataCheckBoxSubMaterial: [],
            subCategory: [],
            dataOrderResponse: ''
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
                        this.setState({ dataAddress: response.data });
                    }).catch(error => {
                        console.log(error, 'Error Address');
                        return ToastAndroid.show('Connection Time Out, Server Maybe Down', ToastAndroid.SHORT);
                    })
                });
            }).catch(error => {
                console.log(error, 'Error Kategori');
                return ToastAndroid.show('Connection Time Out, Server Maybe Down', ToastAndroid.SHORT);
            })
    }

    onSelect = data => {
        this.setState(data, () => {
            console.log(this.state.dataCheckBoxSubMaterial, 'OOO');
        });
    };

    onChange = (name, value) => {
        this.setState({ [name]: value }, () => {
            console.log(this.state[name]);
        })
    }

    onChangeQty = (name, value) => {
        console.log(value, 'Value');
        if (value.charAt(0) === '0') {
            this.setState({ [name]: '' }, () => {
                console.log(this.state[name]);
            })
        } else if (isNaN(parseInt(value))) {
            this.setState({ [name]: '' }, () => {
                console.log(this.state[name]);
            })
        } else {
            this.setState({ [name]: value }, () => {
                console.log(this.state[name]);
            })
        }
    }

    onChangePicker = (name, value) => {
        this.setState({ [name]: value }, () => {
            console.log('Kategori Picker');
        })
    }

    minusNumber() {
        const reg = /^\d+$/;
        const result = reg.test(this.state.numberPcs);
        if (result) {
            const negatif = this.state.numberPcs - 1;
            if (negatif < 0) {
                this.setState({ numberPcs: '' })
                console.log('Tes 3');
            } else {
                this.setState({
                    numberPcs: this.state.numberPcs - 1
                });
                console.log('Tes 4');
            }
        } else {
            this.setState({ numberPcs: '' });
        }
    }

    plusNumber() {
        const reg = /^\d+$/;
        const result = reg.test(this.state.numberPcs);
        if (result) {
            console.log('true');
            if (this.state.numberPcs === '') {
                this.setState({ numberPcs: 0 }, () => {
                    this.setState({
                        numberPcs: parseInt(this.state.numberPcs) + 1
                    });
                })
            } else {
                this.setState({
                    numberPcs: parseInt(this.state.numberPcs) + 1
                });
            }
        } else {
            console.log('false');
            if (this.state.numberPcs === '') {
                this.setState({
                    numberPcs: 0
                }, () => {
                    this.setState({
                        numberPcs: this.state.numberPcs + 1
                    });
                });
            } else {
                this.setState({ numberPcs: '' });
            }
        }
    }

    onValidation() {
        Keyboard.dismiss();

        const {
            nameProduct,
            categoryProduct,
            photoTemp,
            dataCheckBoxSubMaterial,
            serveDelivery,
            addressDelivery,
            numberPcs,
            unitQuantity
        } = this.state;
        console.log(this.state, 'Data Order');
        switch (nameProduct) {
            case '':
                return ToastAndroid.show('Nama Produk Tidak Boleh Kosong', ToastAndroid.SHORT);
            default:
                switch (categoryProduct) {
                    case "0":
                        return ToastAndroid.show('Kategori Produk Tidak Boleh Kosong', ToastAndroid.SHORT);
                    case '':
                        return ToastAndroid.show('Kategori Produk Tidak Boleh Kosong', ToastAndroid.SHORT);
                    default:
                        const designPhoto = photoTemp.length;
                        switch (designPhoto) {
                            case 0:
                                return ToastAndroid.show('Design Foto Produk Tidak Boleh Kosong', ToastAndroid.SHORT);
                            default:
                                console.log('Sukses Semua');
                                switch (numberPcs) {
                                    case '':
                                        return ToastAndroid.show('Jumlah dipesan tidak boleh kosong', ToastAndroid.SHORT);
                                    default:
                                        switch (unitQuantity) {
                                            case '':
                                                return ToastAndroid.show('Unit Quantity tidak boleh kosong', ToastAndroid.SHORT);
                                            default:
                                                const lengthMaterial = dataCheckBoxSubMaterial.length;
                                                switch (lengthMaterial) {
                                                    case 0:
                                                        return ToastAndroid.show('Material tidak boleh kosong', ToastAndroid.SHORT);
                                                    default:
                                                        switch (serveDelivery) {
                                                            case '':
                                                                return ToastAndroid.show('Jasa Pengiriman tidak boleh kosong', ToastAndroid.SHORT);
                                                            case "0":
                                                                return ToastAndroid.show('Jasa Pengiriman tidak boleh kosong', ToastAndroid.SHORT);
                                                            default:
                                                                switch (addressDelivery) {
                                                                    case "0":
                                                                        return ToastAndroid.show('Alamat tidak boleh kosong', ToastAndroid.SHORT);
                                                                    default:
                                                                        console.log('Sukses Semuanya');
                                                                    // return this.prosesOrder();
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
            photoTemp,
            propertyPhoto,
            dataCheckBoxSubMaterial
        } = this.state;

        console.log(this.state);

        var body = new FormData();
        var request = new XMLHttpRequest();

        this.state.photoTemp.map((item, index) => {
            const nameFile = 'IMG_' + uuid.v1();
            if (item.data === 1) {
                var photo = {
                    uri: item.uri,
                    type: 'image/jpeg',
                    name: nameFile.toUpperCase() + '.jpg'
                };
                body.append('photo', photo);
            }
        });
        console.log(body, 'Body');

        body._parts.map((item, index) => {
            const itemNew = item.slice(1);
            const newpropertyPhoto = this.state.propertyPhoto;
            newpropertyPhoto[this.state.propertyPhoto.length] = itemNew;
            this.setState({ propertyPhoto: newpropertyPhoto });
        })

        console.log(this.state.propertyPhoto, 'ITIL');

        request.onreadystatechange = (e) => {
            if (request.readyState !== 4) {
                return;
            }

            if (request.status === 200) {
                console.log('success', request.responseText);
            } else {
                console.warn('error', request);
            }
        };

        axios.post(`${IPSERVER}/ApapunOrders/CreateOrder`, {
            userId,
            nameProduct,
            categoryProduct,
            numberPcs,
            serveDelivery,
            addressDelivery,
            catatanTambahan,
            unitQuantity,
            photoTemp,
            propertyPhoto,
            dataCheckBoxSubMaterial
        })
            .then(response => {
                console.log(response, 'Response Order Proses');
                request.open('POST', `${IPSERVER}/ApapunStorageImages/imagesUpload`);
                request.send(body);
                console.log(response.data[0].idOrder, 'ID ORDER')
                this.setState({ loading: false, propertyPhoto: [], dataOrderResponse: response.data[0].idOrder }, () => {
                    console.log(this.state.dataOrderResponse, 'Response Order');
                    const resetAction = StackActions.reset({
                        index: 1,
                        actions: [
                            NavigationActions.navigate({ routeName: 'Dashboard' }),
                            NavigationActions.navigate({ routeName: 'FindingCrafter', params: this.state.dataOrderResponse }),
                        ],
                    });
                    this.props.navigation.dispatch(resetAction);
                });
                ToastAndroid.show('Sukses Membuat Pesanan', ToastAndroid.SHORT);
            }).catch(error => {
                console.log(error, 'Error Order Proses');
                this.setState({ loading: false, propertyPhoto: [] });
                return ToastAndroid.show('Connection Time Out, Server Maybe Down', ToastAndroid.SHORT);
            });
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
                let source = { uri: response.uri, data: 1 };
                if (this.state.photoTemp.length === 0) {
                    let pushFirst = {
                        uri: `${IPSERVER}/ApapunStorages/assets/download/upload-image.png`,
                        data: 2
                    };

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
                    if (identify[1].data === 2) {
                        console.log('Foto Sama');
                        const newSplicePhoto = this.state.photoTemp;
                        newSplicePhoto[1] = source;
                        this.setState({ photoTemp: newSplicePhoto }, () => {
                            console.log(this.state.photoTemp, 'Data Foto');
                        });
                    } else if (identify[2].data === 2) {
                        const newSplicePhoto = this.state.photoTemp;
                        newSplicePhoto[2] = source;
                        this.setState({ photoTemp: newSplicePhoto }, () => {
                            console.log(this.state.photoTemp, 'Data Foto');
                        });
                    } else if (identify[3].data === 2) {
                        const newSplicePhoto = this.state.photoTemp;
                        newSplicePhoto[3] = source;
                        this.setState({ photoTemp: newSplicePhoto }, () => {
                            console.log(this.state.photoTemp, 'Data Foto');
                        });
                    } else if (identify[4].data === 2) {
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

    renderSelectedMaterial(item, index) {
        console.log(item, 'ITEM SELECT MATERIAL');
        return (
            <View style={{ flexDirection: 'column', marginTop: 10, marginRight: 5 }} key={index}>
                <View style={{ height: 35, backgroundColor: 'white', flexDirection: 'row', borderWidth: 1, borderColor: '#A9A9A9', borderRadius: 30, paddingLeft: 7, paddingRight: 7, }}>
                    <Text style={{ textAlign: 'center', marginTop: 8, fontSize: 13, fontFamily: 'Quicksand-Bold', color: 'black' }}>{item.material_name}</Text>
                    <Text style={{ textAlign: 'center', marginTop: 8, fontSize: 13, fontFamily: 'Quicksand-Bold', color: 'black' }}> - </Text>
                    <Text style={{ textAlign: 'center', marginTop: 8, fontSize: 13, fontFamily: 'Quicksand-Bold', color: 'black' }}>{item.submaterial_name.length >= 12 ? `${item.submaterial_name.substring(0, 12)}...` : `${item.submaterial_name}`}</Text>
                </View>
            </View>
        )
    }

    renderProductItem = (itemPhoto, index) => {
        const { tempPhoto } = this.state
        return (
            <View key={index} style={{ marginRight: 5 }}>
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
            </View >
        )
    }

    _renderItem = (item, index) => {
        const number = parseInt(item.index) + 1;
        return (
            <View>
                <Image
                    source={item.item}
                    style={{ width: '100%', height: 200 }}
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
                    marginLeft: '5%',
                    marginRight: '5%',
                    marginBottom: 20
                }}
                onPress={() => this.onValidation()}
            // onPress={() => this.props.navigation.navigate('FindingCrafter')}
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
            unitQuantity,
            firstmaterial,
            dataCheckBoxSubMaterial,
            dataMaterial,
            dataSubMaterial
        } = this.state;

        return (
            <ScrollView
                style={styles.containerStyle}
                keyboardShouldPersistTaps="always"
                ref={ref => this.scrollView = ref}
            >
                <View style={{ flex: 1, marginLeft: 10, marginRight: 10, marginTop: 10 }}>
                    <Text style={{ fontFamily: 'Quicksand-Bold', color: 'black', fontSize: 15, flex: 1, marginTop: 10, paddingLeft: 5 }}>Nama Produk</Text>
                    <ContainerSection>
                        <Input
                            placeholder='Nama Produk'
                            color='black'
                            value={nameProduct}
                            onChangeText={v => this.onChange('nameProduct', v)}
                        />
                    </ContainerSection>
                </View>

                <View style={{ flex: 1, marginLeft: 10, marginRight: 10 }}>
                    <ContainerSection>
                        <View style={styles.pickerContainer}>
                            <Text style={styles.pickerTextStyle}>Kategori Produk</Text>
                            <View style={styles.pickerStyle}>
                                <Picker
                                    selectedValue={categoryProduct}
                                    onValueChange={(v) => this.onChangePicker('categoryProduct', v)}
                                    itemStyle={{fontFamily:"Quicksand-Regular", color:'black'}}
                                >
                                    <Picker.Item label='Pilih Kategori Produk' value='0' 
                                    />
                                    {this.renderKategori()}
                                </Picker>
                            </View>
                        </View>
                    </ContainerSection>
                </View>

                <Text style={[styles.pickerTextStyle, { marginLeft: 15, marginTop: 7 }]}>Upload Design Anda</Text>
                <View>
                    {
                        this.state.photoTemp.length === 0 ?
                            <View style={{ flex: 1, width: '100%', height: 374, backgroundColor: 'grey', }}>
                                <Image
                                    source={require('../assets/images/create-design.jpg')}
                                    style={{ height: '100%', width: '100%' }}
                                    resizeMode='cover'
                                />
                                <View style={{ flex: 1, flexDirection: 'row', position: 'absolute', top: 150, marginLeft: 35, marginRight: 35 }}>
                                    <Text style={{ fontSize: 15, color: 'white', textAlign: 'center', fontFamily: 'Quicksand-Regular', justifyContent: 'center' }}>
                                        Semakin detail desain Anda, semakin besar kemungkinan crafter kami untuk lebih mudah mengerti dalam memenuhi permintaan Anda.
                                    </Text>
                                </View>
                                <View style={{ flex: 1, position: 'absolute', top: 300, alignItems: 'center', alignSelf: 'center' }}>
                                    <ContainerSection>
                                        <TouchableOpacity
                                            onPress={() => this.designPhotoUpload('tempUploadDesign')}
                                            style={styles.button}
                                        >
                                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                                <Image style={{ width: 25, height: 20, marginTop: 6 }} source={require('../assets/images/add_picture.png')} />
                                                <Text style={{ paddingLeft: 20, fontSize: 13, color: 'white', marginTop: 6, fontFamily: 'Quicksand-Bold' }}>Tambah Gambar</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </ContainerSection>
                                </View>
                            </View>
                            :
                            <View>
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
                </View>
                {
                    this.state.photoTemp.length > 0 ?
                        <View style={styles.containerFlatList}>
                            {this.returnDesignPhoto()}
                            <Text style={{ flex: 1, textAlign: 'right', fontFamily: 'Quicksand-Regular', fontSize: 13, paddingTop: 5 }}>Maksimal upload 5 gambar</Text>
                        </View>

                        :
                        <View style={{ marginBottom: 20 }} />
                }

                <ContainerSection>
                    <View style={{ flex: 1, height: 100, marginLeft: 10, marginRight: 10 }}>
                        <View style={{ flexDirection: 'row', height: 50, alignItems: 'center' }}>
                            <Text style={{ fontSize: 15, fontFamily: 'Quicksand-Bold', color: 'black' }}>Jumlah yang dipesan :</Text>
                            <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
                                <TouchableOpacity
                                    onPress={() => this.minusNumber()}
                                    style={{ width: 30, height: 30, justifyContent: 'center', marginRight: 5, backgroundColor: 'red', borderRadius: 5 }}
                                >
                                    <Icon size={17.5} style={{ color: 'white', alignSelf: 'center' }} name='md-remove' />
                                </TouchableOpacity>
                                <View style={{ width: 60, height: 40 }}>
                                    <InputNumber
                                        style={{ alignSelf: 'center', textAlign: 'center' }}
                                        value={numberPcs.toString()}
                                        placeholder="0"
                                        onChangeText={val => this.onChangeQty('numberPcs', val)}
                                        keyboardType='numeric'
                                    />
                                </View>
                                <TouchableOpacity
                                    onPress={() => this.plusNumber()}
                                    style={{ width: 30, height: 30, justifyContent: 'center', marginLeft: 5, backgroundColor: 'red', borderRadius: 5 }}
                                >
                                    <Icon size={17.5} style={{ color: 'white', alignSelf: 'center' }} name='md-add' />
                                </TouchableOpacity>
                            </View>
                        </View>
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


                <View style={{ flex: 1, marginLeft: 10, marginRight: 10 }}>
                    <Text style={[styles.pickerTextStyle, { marginLeft: 5, marginTop: 10 }]}>Material</Text>
                </View>
                <View>
                    {
                        dataCheckBoxSubMaterial.length === 0 || dataCheckBoxSubMaterial.length === undefined ?
                            <View style={{ flex: 1, height: 170, backgroundColor: 'grey',  }}>
                                <Image
                                    source={require('../assets/images/create-material.png')}
                                    style={{ width: '100%', height: 170, }}
                                    resizeMode='cover'
                                />
                                <View style={{ flex: 1, flexDirection: 'column', position: 'absolute', alignSelf: 'center', top: 25, }}>
                                    <Text style={{ fontSize: 15, color: 'white', textAlign: 'center', fontFamily: 'Quicksand-Regular' }}>
                                        Pilih material yang sesuai untuk 
                                    </Text>
                                    <Text style={{ fontSize: 15, color: 'white', textAlign: 'center', fontFamily: 'Quicksand-Regular' }}>
                                     desain Anda
                                    </Text>
                                </View>
                                <View style={{ flex: 1, position: 'absolute', top: 100, alignItems: 'center', alignSelf: 'center' }}>
                                    <ContainerSection>
                                        <TouchableOpacity
                                            onPress={() => {
                                                this.props.navigation.navigate('Material', { onSelect: this.onSelect });
                                                // this.props.navigation.navigate('Material')
                                            }}
                                            style={styles.button}
                                        >
                                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                                <Image style={{ width: 20, height: 20, marginTop: 6 }} source={require('../assets/images/Materiall.png')} />
                                                <Text style={{ paddingLeft: 20, fontSize: 13, color: 'white', marginTop: 6, fontFamily: 'Quicksand-Bold' }}>Tambah Material</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </ContainerSection>
                                </View>
                            </View>
                            :
                            <View style={{ flex: 1, paddingLeft: 5, paddingRight: 5, marginBottom: 5 }}>
                                <View>
                                    <ContainerSection>
                                        <TouchableOpacity
                                            onPress={() => this.props.navigation.navigate('Material', { onSelect: this.onSelect, dataSub: this.state.dataCheckBoxSubMaterial })}
                                            style={styles.buttonsMaterial}
                                        >
                                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                                <Image style={{ width: 25, height: 25, marginTop: 6 }} source={require('../assets/images/ic_material.png')} />
                                                <Text style={{ paddingLeft: 15, fontSize: 13, color: 'red', marginTop: 8, fontFamily: 'Quicksand-Regular' }}>Tambah Material</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </ContainerSection>
                                </View>
                                <View style={{ flex: 1, flexWrap: 'wrap' }}>
                                    {
                                        <FlatList
                                            data={dataCheckBoxSubMaterial}
                                            extraData={this.state}
                                            horizontal={false}
                                            renderItem={({ item, index }) => this.renderSelectedMaterial(item, index)}
                                            showsHorizontalScrollIndicator={false}
                                            numColumns={2}
                                        />
                                    }
                                </View>
                            </View>
                    }
                </View>

                <ContainerSection>
                    <View style={{ flex: 1, marginLeft: 10, marginRight: 10 }}>
                        <Text style={styles.pickerTextStyle}>Jasa Pengiriman</Text>
                        <View style={styles.pickerStyle}>
                            <Picker
                                selectedValue={serveDelivery}
                                onValueChange={v => this.onChange('serveDelivery', v)}
                            >
                                <Picker.Item label='Pilih Jasa Pengiriman' value='0' />
                                <Picker.Item label='JNE Reguler' value='JNE REG' />
                                <Picker.Item label='JNE Oke' value='JNE OK' />
                                <Picker.Item label='TIKI Reguler' value='TIKI REG' />
                                <Picker.Item label='POS Kilat Indonesia' value='POS KILAT' />
                                <Picker.Item label='Gojek' value='Gojek' />
                                <Picker.Item label='Lainnya (Crafter memakai jasa pengirimannya sendiri)' value='LAIN NYA' />
                            </Picker>
                        </View>
                    </View>
                </ContainerSection>
                <ContainerSection>
                    <View style={{ flex: 1, marginLeft: 10, marginRight: 10 }}>
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
                    <View style={{ flex: 1, marginLeft: 10, marginRight: 10, flexDirection: 'row', paddingTop: 5 }}>
                        <View style={{}}>
                            <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, color: 'black' }}>Catatan Tambahan </Text>
                        </View>
                        <View style={{ alignSelf: 'center' }}>
                            <TouchableOpacity onPress={() => this.setState({ notice: !this.state.notice })}>
                                <Image style={{ width: 15, height: 15, }} source={require('../assets/images/Information.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </ContainerSection>
                {
                    this.state.notice === false ?
                        <View />
                        :
                        <Text style={{ paddingLeft: 15, fontSize: 13, color: 'red' }}>
                            ***) Anda dapat menuliskan informasi penting tambahan lainya agar crafter mudah memahami pesanan anda.
                            contoh: Ukuran, Nama Produk (Jika anda tahu nama produk nya), dsb.
                            </Text>
                }
                <ContainerSection>
                    <View style={{ flex: 1, marginLeft: 10, marginRight: 10, flexDirection: 'row', paddingTop: 5 }}>
                        <Input
                            placeholder='Catatan Tambahan'
                            value={catatanTambahan}
                            multiline
                            onChangeText={v => this.onChange('catatanTambahan', v)}
                        />
                    </View>
                </ContainerSection>
                <ContainerSection>
                    {this.renderButton()}
                </ContainerSection>
            </ScrollView >
        );
    }

}
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    containerFlatList: {
        paddingBottom: 3,
        paddingRight: 3,
        paddingLeft: 3,
        paddingTop: 3,
    },
    pickerContainer: {
        flex: 1,
        marginBottom: 5
    },
    pickerStyle: {
        borderColor: '#a9a9a9',
        borderRadius: 3,
        paddingLeft: 5,
        borderWidth: 1,
        fontFamily:'Quicksand-Regular'
    },
    pickerTextStyle: {
        fontFamily: 'Quicksand-Bold',
        color: 'black',
        fontSize: 15,
        flex: 1,
        marginTop: 7,
        marginBottom: 7
        // alignSelf: 'center'
    },
    pickerUnitStyle: {
        width: 130,
        marginLeft: 3,
        borderColor: '#a9a9a9',
        borderRadius: 5,
        borderWidth: 1,
        height: 45,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignSelf: 'flex-end'
    },
    buttonMaterial: {
        borderWidth: 1,
        borderRadius: 30,
        height: 38,
        alignItems: 'center',
        paddingTop: 2
    },
    buttonsMaterial: {
        width: '93%',
        height: 38,
        paddingTop: 2
    },
    button: {
        backgroundColor: 'rgb(0, 0, 0)',
        borderWidth: 1,
        borderRadius: 30,
        width: '93%',
        height: 38,
        alignItems: 'center',
        paddingTop: 2
    },
    buttons: {
        backgroundColor: 'rgb(0, 0, 0)',
        borderWidth: 1,
        borderRadius: 30,
        width: '93%',
        height: 38,
        position: 'absolute',
        alignItems: 'center',
        // textAlign: 'center',
        paddingTop: 2
    },
    textBackground: {
        position: 'absolute'
    }
});

export default OrderPage;