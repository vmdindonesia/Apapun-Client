import React, { Component } from 'react';
import { View, Text, Image, AsyncStorage, TouchableOpacity, ScrollView, StyleSheet, FlatList } from 'react-native'
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';


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
                'https://www.arsitag.com/proxy-s3-arsitagx-master-article/article-photo/117/xDesain-interior-ruang-tamu-dan-kamar-tidur-rumah-sederhana-yang-murah-namun-menawan-cover.jpg.pagespeed.ic.j16ohCgrU3.jpg',
                'http://www.queenyqueen.com/wp-content/uploads/2017/03/Set-Meja-Makan-Minimalis.jpg',
                'http://www.queenyqueen.com/wp-content/uploads/2017/11/Lemari-Pakaian-Telephone-6-300x300.jpg',
                'http://www.queenyqueen.com/wp-content/uploads/2018/05/Cermin-Hias-Modern-300x300.jpg',
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',

            ],
        }
    }

    renderProductItem = (data) => {
        console.log(data, '098');
        return (
            <TouchableOpacity>

                <View style={styles.thumbnailContainerStyle}>
                    <Image
                        style={styles.thumbnailStyle}
                        source={{ uri: data.item }}
                    />
                </View>

            </TouchableOpacity>
        )
    }

    renderButton = () => {
        return (
            <View style={{ flex: 1, backgroundColor: '#000', borderRadius: 30 }}>
                <TouchableOpacity>
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
