import React, { Component } from 'react';
import { StyleSheet, Text, TouchableNativeFeedback, View, ScrollView, TouchableOpacity, Image, FlatList, ToastAndroid } from 'react-native';
import axios from 'axios';
import { IPSERVER } from './../shared/config';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

import Icon from 'react-native-vector-icons/Ionicons';

export class searchOrderPage extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        headerLeft:
            <TouchableOpacity
                onPress={() => { navigation.goBack(); console.log(navigation.goBack(), 'Props Order') }}
            >
                <Icon size={30} style={{ marginLeft: 25, color: '#EF1C25' }} name='ios-arrow-back' />
            </TouchableOpacity>,
        headerTitle: 'Crafter Menu',
        headerStyle: {
            shadowOpacity: 0,
            elevation: 0,
        }
    });

    constructor(props) {
        super(props)
        this.state = {
            dataOrder: '',
            loading: true
        }

    }

    componentDidMount() {
        console.log(this.props.navigation.state.params, 'mantap');
        const categoryId = this.props.navigation.state.params.categoryId;
        const typeOrder = this.props.navigation.state.params.type_order
        axios.post(`${IPSERVER}/ApapunOrders/getOrderActiveByCategory`, {
            categoryId, typeOrder
        }).then(response => {
            console.log(response.data, 'Get Order');
            this.setState({ dataOrder: response.data, loading: false })
        }).catch(error => {
            console.log(error, 'Err Get Order');
            this.setState({ loading: false });
            ToastAndroid.show('Connection Time Out, Server Maybe Down', ToastAndroid.SHORT);
        })
    }

    handleRefresh = () => {
        console.log('Refresh');
        this.setState({
            loading: true
        }, () => {
            this.componentDidMount();
        })
    }

    renderOrderList = (data) => {
        console.log(data, '098');
        return (
            <View style={{ padding: 10 }}>
                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('OrderForCrafter', { datas: data })}
                >
                    <View style={styles.card}>
                        <View style={styles.thumbnailContainerStyle}>
                            <Image
                                style={styles.thumbnailStyle}
                                source={{ uri: `${IPSERVER}/ApapunStorageImages/images/download/${data.item.ApapunImages[0].name}` }}
                                resizeMode='cover'
                            />
                        </View>
                        <View style={{ flex: 1, height: 110, width: '100%', flexDirection: 'row', position: 'absolute', top: 135, backgroundColor: 'rgba(0,0,0,0.6)' }} >
                            <Image
                                style={{ width: 15, height: 18, marginTop: 5, marginLeft: 10, marginRight: 5, marginTop: 7 }}
                                source={require('./../assets/images/location_icon.png')}
                                resizeMode='contain'
                            />
                            <View style={{ flex: 1 }}>
                                <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 13, color: 'white' }}>{data.item.ApapunUsersAddress.ApapunProvinces.name}</Text>
                                <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 13, color: 'white' }}>{data.item.ApapunUsersAddress.ApapunDistricts.name}</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity >
            </View>
        )
    }


    render() {
        const { dataOrder } = this.state;
        return (
            <View style={{ flex: 1, }}>
                {
                    this.state.dataOrder.length === 0 ?
                        <View>
                            <Text>Maaf, Belum ada order</Text>
                        </View>
                        :
                        <FlatList
                            data={this.state.dataOrder}
                            renderItem={this.renderOrderList.bind(this)}
                            showsHorizontalScrollIndicator={false}
                            horizontal={false}
                            numColumns={2}
                            extraData={this.state}
                            refreshing={this.state.loading}
                            onRefresh={() => this.handleRefresh()}
                        />
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 4,
        elevation: 2,
        backgroundColor: '#FFF'
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1
    },
    thumbnailStyle: {
        alignSelf: 'center',
        height: hp('26.5%'),
        width: wp('45%'),
        borderRadius: 4
    }
})
export default searchOrderPage;