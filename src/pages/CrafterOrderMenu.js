import React, { Component } from 'react';
import { StyleSheet, Text, AsyncStorage, View, ScrollView, TouchableOpacity, ImageBackground, ToastAndroid } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import { IPSERVER } from './../shared/config';

export class CrafterOrderMenuPage extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        headerLeft:
            <TouchableOpacity
                onPress={() => { navigation.goBack(); console.log(navigation.goBack(), 'Props Order') }}
            >
                <Icon size={30} style={{ marginLeft: 25, color: '#EF1C25' }} name='ios-arrow-back' />
            </TouchableOpacity>,
        headerTitle: 'Pesanan'
    });

    constructor(props) {
        super(props)
        this.state = {
            dataCategoryCrafter: '',
            categoryId: []
        }
    }

    componentDidMount() {
        console.log('HI')
        AsyncStorage.getItem("VMDDEVELOPER").then((value) => {
            const idCrafter = JSON.parse(value).crafterId; //24
            console.log(idCrafter, 'ID Crafter')
            axios.post(`${IPSERVER}/ApapunCrafters/getCrafter`, { idCrafter }).then(response => {
                for (let i = 0; i < response.data.length; i++) {
                    this.setState({ dataCategoryCrafter: response.data }, () => {
                        console.log(this.state.dataCategoryCrafter, 'Response Server');
                        const newPushdataCraf = this.state.categoryId;
                        newPushdataCraf[this.state.categoryId.length] = this.state.dataCategoryCrafter[i].crafterKategori;
                        this.setState({ categoryId: newPushdataCraf }, () => {
                            console.log(this.state.categoryId, 'Data Crafter ID');
                        });
                    });
                }
            }).catch(error => {
                console.log(error, 'Error Get Crafter');
                ToastAndroid.show('Connection Time Out, Server Maybe Down', ToastAndroid.SHORT);
            })
        });
    }


    render() {
        const { categoryId } = this.state
        return (
            <ScrollView style={{ flex: 1, backgroundColor: '#e5e5e5' }}>
                <View style={{ flex: 1, height: 300, }}>
                    <View style={{ flex: 1, flexDirection: 'row', marginTop: 10, marginBottom: 5, marginLeft: 10, marginRight: 10, justifyContent: 'center', borderRadius: 10, }}>
                        <TouchableOpacity style={{ flex: 1 }}
                            onPress={() => this.props.navigation.navigate('searchOrder', { type_order: 'Custom Order', categoryId: categoryId })}
                        >
                            <ImageBackground
                                style={{ flex: 1, width: '100%', borderRadius: 100, flexDirection: 'row' }}
                                source={require('./../assets/images/bg_custom.png')}
                                resizeMode='cover'
                            >
                                <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.7)', justifyContent: 'center', flexDirection: 'column' }}>
                                    <Text style={{ fontSize: 15, paddingLeft: 10, fontFamily: 'Quicksand-Regular', color: 'white', fontWeight: 'bold' }}>CUSTOM</Text>
                                    <Text style={{ fontSize: 15, paddingLeft: 10, fontFamily: 'Quicksand-Regular', color: 'red', fontWeight: 'bold' }}>123 Order</Text>
                                </View>
                                <View style={{ flex: 1 }} />
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>



                    <View style={{ flex: 1, flexDirection: 'row', marginTop: 5, marginBottom: 5, marginLeft: 10, marginRight: 10, justifyContent: 'center', borderRadius: 10, }}>
                        <TouchableOpacity style={{ flex: 1 }}
                            onPress={() => this.props.navi.navigate('searchOrder', { type_order: 'Capture n Get', categoryId: categoryId })}
                        >
                            <ImageBackground
                                style={{ flex: 1, width: '100%', borderRadius: 100, flexDirection: 'row' }}
                                source={require('./../assets/images/bg_CapturenGet.png')}
                                resizeMode='cover'
                            >
                                <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.7)', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 15, paddingLeft: 10, fontFamily: 'Quicksand-Regular', color: 'white', fontWeight: 'bold' }}>CAPTURE & GET</Text>
                                    <Text style={{ fontSize: 15, paddingLeft: 10, fontFamily: 'Quicksand-Regular', color: 'red', fontWeight: 'bold' }}>30 Order</Text>
                                </View>
                                <View style={{ flex: 1 }} />
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>

                    <View style={{ flex: 1, flexDirection: 'row', marginTop: 5, marginBottom: 5, marginLeft: 10, marginRight: 10, justifyContent: 'center', borderRadius: 10, }}>
                        <TouchableOpacity style={{ flex: 1 }}
                            onPress={() => this.props.navi.navigate('searchOrder', { type_order: 'Idea Market', categoryId: categoryId })}
                        >
                            <ImageBackground
                                style={{ flex: 1, width: '100%', borderRadius: 100, flexDirection: 'row' }}
                                source={require('./../assets/images/bg_market.png')}
                                resizeMode='cover'
                            >
                                <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.7)', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: 15, paddingLeft: 10, fontFamily: 'Quicksand-Regular', color: 'white', fontWeight: 'bold' }}>MARKET</Text>
                                    <Text style={{ fontSize: 15, paddingLeft: 10, fontFamily: 'Quicksand-Regular', color: 'red', fontWeight: 'bold' }}>23 Order</Text>
                                </View>
                                <View style={{ flex: 1 }} />
                            </ImageBackground>
                        </TouchableOpacity>
                    </View>

                </View>

            </ScrollView >

        );
    }
}

const styles = StyleSheet.create({

})
export default CrafterOrderMenuPage;