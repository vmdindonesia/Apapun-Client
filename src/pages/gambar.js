import React, { Component } from 'react';
import { View, Text, Image, ToastAndroid, TouchableOpacity, ScrollView, StyleSheet, FlatList } from 'react-native'
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import ImagePicker from 'react-native-image-picker';
import uuid from 'react-native-uuid';
import axios from 'axios';
import { IPSERVER } from '../shared/config';

export class GambarPage extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        headerLeft:
            <TouchableOpacity
                onPress={() => { navigation.goBack(); console.log(navigation.goBack(), 'Props Order') }}
            >
                <Icon size={30} style={{ marginLeft: 25, color: '#EF1C25' }} name='ios-arrow-back' />
            </TouchableOpacity>,
        headerTitle: 'Gambar'
    });

    constructor(props) {
        super(props)
        this.state = {
            photo: '',
            imageUri: '',
            crafterId: ''
        }
    }

    componentDidMount() {
        // console.log(this.props.navigation.state.params.itemId, 'Props Profile');
        this.setState({
            crafterId: this.props.navigation.state.params.crafter_Id
        }, () => {
            const { crafterId } = this.state;
            axios.post(`${IPSERVER}/ApapunImages/getCrafterImage`, {
                crafterId: crafterId
            })
                .then(response => {
                    console.log(response, 'Data Profile');
                    this.setState({ photo: response.data }, () => {
                        console.log(this.state.photo, 'PPPP');
                    });
                }).catch(error => {
                    console.log(error, 'Error Get Data Profile');
                    this.setState({ loading: false });
                    return ToastAndroid.show('Connection Time Out, Server Maybe Down', ToastAndroid.SHORT);
                });
        });
    }

    tambahGambar() {
        const options = {
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackup: true
            }
        }

        ImagePicker.showImagePicker(options, (response) => {
            console.log('Response = ', response);

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

                // You can also display the image using data:
                // let source = { uri: 'data:image/jpeg;base64,' + response.data };

                this.setState({
                    imageUri: source
                }, () => {
                    const nameFile = 'IMG_' + uuid.v1();
                    var body = new FormData();
                    var photo = {
                        uri: this.state.imageUri.uri,
                        type: 'image/jpeg',
                        name: nameFile.toUpperCase() + '.jpg'
                    };
                    body.append('photo', photo);
                    console.log(body, 'Body Append');
                    var request = new XMLHttpRequest();
                    request.onreadystatechange = (e) => {
                        if (request.readyState !== 4) {
                            return;
                        }

                        if (request.status === 200) {
                            console.log('success', request.responseText);
                            this.onRefresh();
                        } else {
                            console.warn('error', request);
                        }
                    };

                    axios.post(`${IPSERVER}/ApapunImages/CreateCrafterImage`, {
                        crafterId: this.state.crafterId,
                        name: nameFile.toUpperCase() + '.jpg'
                    })
                        .then(response => {
                            console.log(response, 'Data Upload Image');
                            request.open('POST', `${IPSERVER}/ApapunStorages/imagesUpload`);
                            request.send(body);
                            // this.onRefresh();
                        }).catch(error => {
                            console.log(error, 'Error Upload Image');
                            this.setState({ loading: false });
                            return ToastAndroid.show('Connection Time Out, Server Maybe Down', ToastAndroid.SHORT);
                        });
                });
            }
        });
    }

    onRefresh() {
        axios.post(`${IPSERVER}/ApapunImages/getCrafterImage`, {
            crafterId: this.state.crafterId
        })
            .then(response => {
                console.log(response, 'Data Profile');
                this.setState({ photo: response.data }, () => {
                    console.log(this.state.photo, 'PPPP');
                });
            }).catch(error => {
                console.log(error, 'Error Get Data Profile');
                this.setState({ loading: false });
                return ToastAndroid.show('Connection Time Out, Server Maybe Down', ToastAndroid.SHORT);
            });
    }

    renderProductItem = (data) => {
        console.log(data, '098');
        return (
            <TouchableOpacity>

                <View style={styles.thumbnailContainerStyle}>
                    <Image
                        style={styles.thumbnailStyle}
                        source={{ uri: `${IPSERVER}/ApapunStorageImages/images/download/${data.item.name === undefined ? 'https://www.coastalsocks.com.ng/wp-content/uploads/2014/04/default-avatar.png' : data.item.name}` }}
                    />
                </View>

            </TouchableOpacity>
        )
    }

    renderButton = () => {
        return (
            <View style={{ flex: 1, backgroundColor: '#000', borderRadius: 30 }}>
                <TouchableOpacity
                    onPress={() => { this.tambahGambar() }}
                >
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignSelf: 'center', marginTop: 5 }}>
                        <Image style={{ width: 25, height: 20, marginTop: 5 }} source={require('../assets/images/add_picture.png')} />
                        <Text style={{ paddingLeft: 20, fontSize: 15, color: 'white', fontFamily: 'Quicksand-Bold', marginTop: 7.5 }}>Tambah Gambar</Text>
                    </View>
                </TouchableOpacity>
            </View>

        )
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ width: '85%', height: 40, alignSelf: 'center', marginTop: 20 }}>
                    {this.renderButton()}
                </View>
                <View style={{ flex: 1, marginTop: 20, marginBottom: 10, marginLeft: 1.5, marginRight: 1.5 }}>
                    <FlatList
                        data={this.state.photo}
                        // contentContainerStyle={styles.list}
                        renderItem={this.renderProductItem.bind(this)}
                        showsHorizontalScrollIndicator={false}
                        horizontal={false}
                        numColumns={3}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    thumbnailStyle: {
        alignSelf: 'stretch',
        height: hp('18%'),
        width: wp('33.3%'),
        resizeMode: 'cover',
        marginBottom: 2.5,
        marginRight: 2.5
        // marginTop: 1.5
    },
})

export default GambarPage;
