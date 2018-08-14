import React, { Component } from 'react';
import { View, Text, Image, AsyncStorage, TouchableOpacity, ScrollView, StyleSheet, FlatList } from 'react-native'
import { Container, Button } from '../components/common';
import Icon from 'react-native-vector-icons/Ionicons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


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
            photo: [
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg'
            ],
        }
    }

    renderProductItem = (data) => {
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

    renderButton = () => {
        // if (this.state.loading) {
        //     return <Spinner size="small" />
        // }
        return (
            <Button
                style={{
                    backgroundColor: '#000',
                    justifyContent: 'center',
                    borderRadius: 30,
                }}
            // onPress={() => this.onValidation()}
            >
                <Text style={{ color: '#FFFFFF', fontFamily: 'Quicksand-Bold' }}>Tambah Gambar</Text>
            </Button>
        )
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ width: '85%', height: 40, alignSelf: 'center', marginTop: 20 }}>
                    {this.renderButton()}
                </View>
                <View style={{ flex: 1, marginTop: 15, marginBottom: 15 }}>
                    <FlatList
                        data={this.state.photo}
                        // contentContainerStyle={styles.list}
                        renderItem={this.renderProductItem.bind(this)}
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
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8.5,
    },
    thumbnailStyle: {
        alignSelf: 'stretch',
        height: hp ('26.5%'),
        width: wp ('45%'),
        resizeMode: 'cover',
        borderRadius: 4
    },
    card: {
        borderRadius: 4,
        elevation: 2,
        backgroundColor: '#FFF'
    }
})

export default GambarPage;
