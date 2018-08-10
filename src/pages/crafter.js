import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, TouchableOpacity, TouchableWithoutFeedback, View, Image, Alert, FlatList } from 'react-native';

export class CrafterPage extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            photo: [
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg'
            ],
        }
    }

    alert = (msg) => {
        console.log(msg)
    }

    renderProductItem = (data) => {
        console.log(data, '098');
        return (
            <TouchableWithoutFeedback onPress={() => this.props.navi.navigate('ProfileCrafter')}>
                <View style={styles.card}>
                    <View style={styles.thumbnailContainerStyle}>
                        <Image
                            style={styles.thumbnailStyle}
                            source={{ uri: data.item }}
                        />
                    </View>
                    <View style={{ marginLeft: 10, marginTop: 10, flexDirection: 'column', flex: 1 }}>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <Text style={{ textAlign: 'left', fontSize: 15, fontFamily: 'Quicksand-Bold', color: 'black' }}>
                                Rendy Sutandy
                            </Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', marginRight: 7, marginTop: 10 }}>
                            <Image
                                style={{ width: 20, height: 18 }}
                                source={require('./../assets/images/Cukup.png')}
                                resizeMode='stretch'
                            />
                            <Text style={{ fontSize: 13, marginLeft: '2%', fontFamily: 'Quicksand-Regular', color: 'black' }}>
                                Buruk
                            </Text>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', marginRight: 10, marginTop: 7, marginBottom: 10 }}>
                            <Image
                                style={{ width: 18, height: 18 }}
                                source={require('./../assets/images/loc_mainprof.png')}
                                resizeMode='contain'
                            />
                            <Text style={{ fontSize: 13, marginLeft: '2%', fontFamily: 'Quicksand-Regular', color: 'black' }}>
                                Jakarta Barat
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        )
    }

    render() {
        return (
            <View style={{ flex: 1, backgroundColor: '#eaeaea' }} >
                <ScrollView>
                    <View style={{ flex: 1 }}>
                        <View style={{ marginTop: 10 }}>
                            <Text style={{ fontFamily: 'Quicksand-Bold', textAlign: 'center', marginTop: 10 }}>MOHON TUNGGU</Text>
                            <Text style={{ fontFamily: 'Quicksand-Regular', textAlign: 'center', marginLeft: 15, marginTop: 8, marginRight: 15 }}>Sedang dalam proses mencari crafter untuk produkmu</Text>
                        </View>
                        <View style={styles.containerCrafter}>
                            <FlatList
                                data={this.state.photo}
                                renderItem={this.renderProductItem.bind(this)}
                                showsHorizontalScrollIndicator={false}
                                numColumns={2}
                                horizontal={false}
                            />
                        </View>
                    </View>
                </ScrollView>


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
        // backgroundColor:
        flexDirection: 'column',
        // width: '100%',
        alignItems: 'center',
        marginTop: 10

    },
    containerBoxProfile: {
        marginLeft: 3,
        marginRight: 3,
        marginTop: 25,
        height: 200,
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'red'
    },
    containerImage: {
        flex: 1,
        marginLeft: 10
    },
    imageCrafter: {
        height: 90,
        width: 150,
    },
    boxName: {
        borderWidth: 0,
        borderRadius: 1,
        width: '100%',
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
        alignItems: 'center',
        // marginTop: '20%',
        // bottom: 0
        // bottom: 0
    },
    buttonStop: {
        flex: 1,
        height: 50,
        borderColor: 0,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        borderRadius: 25,
        margin: 5
    },
    card: {
        borderRadius: 4,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
        margin: 5,
        marginBottom: '2%',
        backgroundColor: '#FFF',
        justifyContent: 'center',
        width: '47%'
    },
    thumbnailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    thumbnailStyle: {
        alignSelf: 'center',
        height: 120,
        width: 150,
        resizeMode: 'stretch',
        borderRadius: 4
    },
});

export default CrafterPage;