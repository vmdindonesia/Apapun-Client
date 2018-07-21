import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, TouchableOpacity, View, Image, Alert, FlatList } from 'react-native';

export class CrafterPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            photo: [
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',
            ],
        }
    }

    alert = (msg) => {
        console.log(msg)
    }

    renderProductItem = (data) => {
        console.log(data, '098');
        return (
            <View style={styles.containerBoxProfile}>
                <View style={styles.containerImage}>
                    <Image
                        style={styles.imageCrafter}
                        source={{ uri: data.item }}
                        resizeMode='cover'
                    />
                    <View style={styles.boxName}>
                        <View>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', width: '100%', paddingTop: 5 }}>
                                <Text style={{ textAlign: 'right', fontFamily: 'Quicksand-Regular', fontSize: 13, marginRight: 5 }}>Sempurna</Text>
                                <Image style={{ width: 15, height: 15 }}
                                    source={require('./../assets/images/kiss_icon.jpg')} />
                            </View>
                            <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 13, marginTop: 5 }}>Roy Kiyoshi</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Image
                                    style={{ width: 10, height: 10 }}
                                    source={require('./../assets/images/black_loc_mainprof.png')}
                                />
                                <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 13 }}>Indonesia, Jakarta</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    render() {
        return (
            <View style={{ flex: 1 }} >
                <View style={{ flex: 1 }}>
                    <View>
                        <Text style={{ fontFamily: 'Quicksand-Bold', textAlign: 'center', marginTop: 10 }}>MOHON TUNGGU</Text>
                        <Text style={{ fontFamily: 'Quicksand-Regular', textAlign: 'center', marginLeft: 15, marginRight: 15 }}>Sedang dalam proses mencari crafter untuk produkmu</Text>
                    </View>
                    <View style={styles.containerCrafter}>
                        <FlatList
                            data={this.state.photo}
                            contentContainerStyle={styles.list}
                            renderItem={this.renderProductItem.bind(this)}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>
                <View style={styles.containerButton}>
                    <TouchableOpacity style={[styles.buttonStop, { backgroundColor: 'orange' }]}>
                        <Text style={{ fontFamily: 'Quicksand-Bold', color: 'white' }}>Berhenti Mencari</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonStop}
                        onPress={() => Alert.alert(
                            'BATALKAN PESANAN',
                            'apakah anda yakin ingin membatalkan pesanannya?',
                            [
                                { text: 'Cancel', onPress: () => console.log('Cancel Pressed!') },
                                { text: 'OK', onPress: () => this.onDeleteBTN }, //ondelete blm dibuat
                            ],
                        )}>
                        <Text style={{ fontFamily: 'Quicksand-Bold', color: 'white' }}>Batalkan Pesanan</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerCrafter: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center'
    },
    containerBoxProfile: {
        marginLeft: 35,
        marginRight: 10,
        width: 150,
        height: 200,
        flex: 1,
        flexDirection: 'column',
    },
    containerImage: {
        flex: 1,
        marginLeft: 3
    },
    imageCrafter: {
        height: 130,
        width: 130,
    },
    boxName: {
        borderWidth: 0,
        borderRadius: 1,
        width: '88%',
        height: '32%',
        elevation: 1,
        paddingLeft: 3,
        paddingRight: 3,
    },
    containerButton: {
        width: '100%',
        height: 70,
        flexDirection: 'row',
        backgroundColor: 'white',
        alignItems: 'center'
    },
    buttonStop: {
        flex: 1,
        height: 50,
        borderColor: 0,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        borderRadius: 25
    },
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
});

export default CrafterPage;