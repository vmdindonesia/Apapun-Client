import React, { Component } from 'react';
import { StyleSheet, Text, TouchableNativeFeedback, View, ScrollView, TouchableOpacity, Image, FlatList, ToastAndroid } from 'react-native';
import { OrderForCrafterPage } from './orderForCrafter';
import axios from 'axios';
import { IPSERVER } from './../shared/config';

import Icon from 'react-native-vector-icons/Ionicons';

export class searchOrderPage extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        headerLeft:
            <TouchableOpacity
                onPress={() => { navigation.goBack(); console.log(navigation.goBack(), 'Props Order') }}
            >
                <Icon size={30} style={{ marginLeft: 25, color: '#EF1C25' }} name='ios-arrow-back' />
            </TouchableOpacity>,
        headerTitle: 'Crafter Menu'
    });

    constructor(props) {
        super(props)
        this.state = {
            dataOrder: '',
            photo: [
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',
            ],
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
            this.setState({ dataOrder: response.data })
        }).catch(error => {
            console.log(error, 'Err Get Order');
            ToastAndroid.show('Connection Time Out, Server Maybe Down', ToastAndroid.SHORT);
        })
    }

    renderOrderList = (data) => {
        console.log(data, '098');
        return (
            <TouchableOpacity
                 onPress={() => this.props.navigation.navigate('OrderForCrafter')}
                //onPress={() => this.props.navigation.navigate('OrderForCrafter', { datas: data})}
            >
                <View style={styles.card}>
                    <View style={styles.thumbnailContainerStyle}>
                        <Image
                            style={styles.thumbnailStyle}
                            source={{ uri: 'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg' }}
                           // source={{ uri: `${IPSERVER}/ApapunStorages/images/download/` + data.item.ApapunImages[0].name }}
                        />
                    </View>
                    <View style={{ flex: 1, flexDirection: 'row', position: 'absolute', top: 135, left: 10 }} >
                        <Image
                            style={{ width: 20, height: 20 }}
                            source={require('./../assets/images/location_icon.png')}
                            resizeMode='contain'
                        />
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 13, color: 'white' }}>DKI Jakarta,</Text>
                            <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 13, color: 'white' }}>Jakarta Pusat</Text>
                            {/* <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 13, color: 'white' }}>{data.item.ApapunUsersAddress.ApapunProvinces.name},</Text>
                            <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 13, color: 'white' }}>{data.item.ApapunUsersAddress.ApapunRegencies.name}</Text> */}
                        </View>
                    </View>
                </View>
            </TouchableOpacity >
        )
    }


    render() {
        const { dataOrder } = this.state;
        return (
            <View style={{ flex: 1, }}>
                <View style={{ width: '100%', height: 65, flexDirection: 'row', }}>
                    <View style={{ width: '50%', flexDirection: 'row', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>

                        <TouchableOpacity >
                            <Image
                                style={{
                                    width: 23,
                                    height: 23,
                                    alignSelf: 'center'
                                }}
                                resizeMode='stretch'
                                source={require('./../assets/images/List.png')}
                            />
                            <Text style={{ fontFamily: 'Quicksand-Regular', fontWeight: 'bold', fontSize: 13, color: 'black', paddingTop: 3 }}>Pesanan</Text>
                        </TouchableOpacity>

                    </View>

                    <View style={{ flexDirection: 'column', borderColor: '#e5e5e5', borderWidth: 1, height: '60%', alignSelf: 'center' }} />

                    <View style={{ width: '50%', flexDirection: 'row', backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>

                        <TouchableOpacity >
                            <Image
                                style={{
                                    width: 22.5,
                                    height: 22.5,
                                    alignSelf: 'center'
                                }}
                                resizeMode='stretch'
                                source={require('./../assets/images/ic_menu.png')}
                            />
                            <Text style={{ fontFamily: 'Quicksand-Regular', fontWeight: 'bold', fontSize: 13, color: 'black', paddingTop: 3 }}>Menu</Text>
                        </TouchableOpacity>

                    </View>
                </View>
                <View style={{ flex: 1, }}>
                    <FlatList
                        // data={dataOrder}
                        // contentContainerStyle={styles.list}
                        data={this.state.photo}
                        renderItem={this.renderOrderList.bind(this)}
                        showsHorizontalScrollIndicator={false}
                        horizontal={false}
                        numColumns={2}
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
        marginLeft: 5,
        marginBottom: '2%',
        backgroundColor: '#FFF'
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 15,
        marginBottom: 15,
        flex: 1
    },
    thumbnailStyle: {
        // alignSelf: 'stretch',
        alignSelf: 'center',
        height: 170,
        width: 170,
        resizeMode: 'cover',
        borderRadius: 4
    }
})
export default searchOrderPage;