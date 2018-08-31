import React, { Component } from 'react';
import { View, Text, FlatList, Image, Alert, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import { Container, ContainerSection, Button, Input, InputDate } from '../components/common';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import { IPSERVER } from '../shared/config';
import moment from 'moment';

export class CatatanPage extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        headerLeft:
            <TouchableOpacity
                onPress={() => { navigation.goBack(); console.log(navigation.goBack(), 'Props Order') }}
            >
                <Icon size={30} style={{ marginLeft: 25, color: '#EF1C25' }} name='ios-arrow-back' />
            </TouchableOpacity>,
        headerTitle: 'Catatan'
    });

    constructor(props) {
        super(props)

        this.state = {
            crafterId: '',
            dataCatetan: ''
        }
    }

    componentDidMount() {
        this.setState({
            crafterId: this.props.navigation.state.params.crafter_Id
        }, () => {
            axios.post(`${IPSERVER}/ApapunCrafterNotes/getCrafterNote`, {
                crafterId: this.state.crafterId
            })
                .then(response => {
                    this.setState({ dataCatetan: response.data }, () => {
                        console.log(this.state.dataCatetan, 'Data dataCatetan');
                        this.setState({ loading: false });
                    });
                }).catch(error => {
                    console.log(error, 'Error Get dataCatetan');
                    this.setState({ loading: false });
                    return ToastAndroid.show('Connection Time Out, Server Maybe Down', ToastAndroid.SHORT);
                });
        });
    }

    renderButton = () => {
        return (
            <Button
                style={{
                    backgroundColor: '#000',
                    justifyContent: 'center',
                    borderRadius: 30,
                }}
                onPress={() => this.props.navigation.navigate('addNoteOnCrafterMenu', { crafter_Id: this.state.crafterId })}
            >
                <Text style={{ color: '#FFFFFF', fontFamily: 'Quicksand-Bold' }}>Tambah Catatan</Text>
            </Button>
        )
    }


    deleteCatetan(value) {
        Alert.alert(
            'Delete Catatan',
            'Yakin ingin menghapus catatan ini ?',
            [
                {
                    text: 'OK', onPress: () => {
                        axios.post(`${IPSERVER}/ApapunCrafterNotes/deleteCrafterNote`, {
                            crafterId: this.state.crafterId,
                            id: value
                        })
                            .then(response => {
                                console.log(response, 'Delete Note');
                                this.componentDidMount();
                            }).catch(error => {
                                console.log(error, 'Error Get dataCatetan');
                                this.setState({ loading: false });
                                return ToastAndroid.show('Connection Time Out, Server Maybe Down', ToastAndroid.SHORT);
                            });
                    }
                },
                { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' }
            ],
            { cancelable: false }
        )
    }

    editCatetan(value) {
        this.props.navigation.navigate('addNoteOnCrafterMenu', { crafter_Id: this.state.crafterId, idNote: value })
    }

    renderCatetan = (data) => {
        console.log(data, 'Data Data List');
        return (
            <View style={{ width: '100%', height: 50, flexDirection: 'row', marginTop: 10, backgroundColor: '#fff', alignItems: 'center' }}>
                <View style={{ flexDirection: 'column', flex: 1, paddingLeft: 15 }}>
                    <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, color: 'black' }}>{data.item.subject}</Text>
                    <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 13 }}>{moment(data.item.createdAt).format('DD MMM YYYY')}</Text>
                </View>
                <View style={{
                    flexDirection: 'row', flex: 1, backgroundColor: '#fff',
                    justifyContent: 'flex-end', paddingRight: 25
                }}>
                    <TouchableOpacity
                        onPress={() => {
                            this.editCatetan(data.item.id);
                        }}
                    >
                        <Image style={{ height: 20, width: 20, borderRadius: 0, marginRight: 15 }}
                            source={require('./../assets/images/pen_address.png')}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            this.deleteCatetan(data.item.id);
                        }}
                    >
                        <Image style={{ height: 20, width: 15, borderRadius: 0 }}
                            source={require('./../assets/images/trash_address.png')}
                        />
                    </TouchableOpacity>
                </View>
            </View>
        )
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ width: '85%', height: 40, alignSelf: 'center', marginTop: 20 }}>
                    {this.renderButton()}
                </View>

                <FlatList
                    data={this.state.dataCatetan}
                    renderItem={this.renderCatetan.bind(this)}
                    extraData={this.state}
                />
            </View>
        );
    }
}

export default CatatanPage;
