import React, { Component } from 'react';
import {
    View, Text, ImageBackground, Image, TouchableNativeFeedback, Alert,
    ToastAndroid, ScrollView, TouchableWithoutFeedback, FlatList, StyleSheet
} from 'react-native'
import axios from 'axios';
import { IPSERVER } from './../shared/config';


export class ImagesProfileCrafterPage extends React.Component {

    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {
            photo: ''
        };
    }

    componentDidMount() {
        console.log(this.props, 'Props Image');
        axios.post(`${IPSERVER}/ApapunImages/getCrafterImage`, {
            crafterId: this.props.naviparams.crafterId
        })
            .then(response => {
                console.log(response, 'Data Profile');
                this.setState({ photo: response.data }, () => {
                    console.log(this.state.photo, 'PPPP');
                    this.setState({ loading: false });
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
            <View style={{
                borderRadius: 4,
                elevation: 2,
                marginLeft: 12,
                marginBottom: '2%',
                backgroundColor: '#FFF'
            }}>
                <Image
                    style={{
                        height: 100,
                        width: 120,
                        borderRadius: 4,
                        alignSelf: 'stretch',
                        resizeMode: 'cover',
                    }}
                    source={{ uri: data.item }}
                />
            </View>
        )
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                {
                    this.state.photo.length === 0 ?
                        <View style={{ flex: 1 }}>
                            <Text style={{ textAlign: 'center' }}>Maaf, Belum ada Image</Text>
                        </View>
                        :
                        <View style={{ flex: 1 }}>
                            <FlatList
                                data={this.state.photo}
                                renderItem={this.renderProductItem.bind(this)}
                                showsHorizontalScrollIndicator={false}
                                horizontal={false}
                                numColumns={3}
                            />
                        </View>
                }
            </View>
        )
    }
}

export default ImagesProfileCrafterPage;