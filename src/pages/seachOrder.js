import React, { Component } from 'react';
import { StyleSheet, Text, TouchableNativeFeedback, View, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native';
import { OrderForCrafterPage } from './orderForCrafter';
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
            // screen: 'Custom'
            photo: [
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',
            ]
        }

    }

    renderOrderList = (data) => {
        console.log(data, '098');
        return (
            <TouchableOpacity>
                <View style={styles.card}>
                    <View style={styles.thumbnailContainerStyle}>
                        <Image
                            style={styles.thumbnailStyle}
                            source={{ uri: data.item }}
                        />
                    </View>
                </View>
            </TouchableOpacity>
        )
    }


    render() {

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
                                source={require('./../assets/images/ic_list.png')}
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
                        data={this.state.photo}
                        // contentContainerStyle={styles.list}
                        renderItem={this.renderOrderList.bind(this)}
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
        margin: 10,
    },
    thumbnailStyle: {
        alignSelf: 'stretch',
        height: 160,
        width: 170,
        resizeMode: 'cover',
        borderRadius: 4
    }
})
export default searchOrderPage;