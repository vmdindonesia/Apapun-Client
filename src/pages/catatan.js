import React, { Component } from 'react'
import { View, Text, ImageBackground, Image, AsyncStorage, TouchableOpacity, ScrollView, StyleSheet } from 'react-native'
import { Container, ContainerSection, Button, Input, InputDate } from '../components/common';

export class CatatanPage extends React.Component {

    static navigationOptions = {
        headerTitle: 'Catatan '

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
                <View style={{ width: '100%', height: 50, flexDirection: 'row', marginTop: 10, backgroundColor: '#fff', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'column', flex: 1, paddingLeft: 15 }}>
                        <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15 }}>Alamat Workshop</Text>
                        <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 13 }}>13 Jan 2018</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row', flex: 1, backgroundColor: '#fff',
                        justifyContent: 'flex-end', paddingRight: 15
                    }}>
                        <Image style={{ height: 20, width: 20, borderRadius: 0, marginRight: 15 }}
                            source={require('./../assets/images/pen_address.png')}
                        />
                        <Image style={{ height: 20, width: 15, borderRadius: 0 }}
                            source={require('./../assets/images/trash_address.png')}
                        />
                    </View>
                </View>
                <View style={{ width: '100%', height: 50, backgroundColor: '#fff', flexDirection: 'row', marginTop: 5, alignItems: 'center' }}>
                    <View style={{ flexDirection: 'column', flex: 1, paddingLeft: 15 }}>
                        <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15 }}>General</Text>
                        <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 13 }}>13 Jan 2018</Text>
                    </View>
                    <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'flex-end', paddingRight: 15 }}>
                        <Image style={{ height: 20, width: 20, borderRadius: 0, marginRight: 15 }}
                            source={require('./../assets/images/pen_address.png')}
                        />
                        <Image style={{ height: 20, width: 15, borderRadius: 0 }}
                            source={require('./../assets/images/trash_address.png')}
                        />
                    </View>
                </View>
            </View>
        );
    }
}

export default CatatanPage;
