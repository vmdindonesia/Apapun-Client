import React, { Component } from 'react';
import { ToastAndroid, View, Text, ImageBackground, Image, AsyncStorage, TouchableOpacity, ScrollView, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, StatusBar, Modal } from 'react-native'
// import axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons';

export class crafterMenuNotePage extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        headerLeft:
            <TouchableOpacity
                onPress={() => { navigation.goBack(); console.log(navigation.goBack(), 'Props Order') }}
            >
                <Icon size={30} style={{ marginLeft: 25, color: '#EF1C25' }} name='ios-arrow-back' />
            </TouchableOpacity>,
        headerTitle: 'Catatan',

    });



    render() {
        return (
            <ScrollView style={{
                flex: 1, backgroundColor: '#e5e5e5'
            }}
            showsVerticalScrollIndicator={false}>

                <TouchableOpacity
                    onPress={() => this.props.navigation.navigate('addNoteOnCrafterMenu')}
                >
                    <View style={{ flex: 1, margin: 20, height: 50, borderRadius: 30, backgroundColor: 'black', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, color: 'white' }}>Tambah Catatan</Text>
                    </View>
                </TouchableOpacity>

                <View style={{ flex: 1, height: 80, marginBottom: 5, marginLeft: 5, marginRight: 5, backgroundColor: 'white', flexDirection: 'row' }}>

                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, color: 'black', paddingLeft: 25 }}>Alamat Workshop</Text>
                        <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 13, color: 'black', paddingLeft: 25 }}>3 Januari 2018</Text>
                    </View>

                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', }}>

                        <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'flex-end', paddingRight: 20 }}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('editNoteOnCrafterMenu')}
                            >
                                <Image style={{ height: 22.5, width: 22.5, borderRadius: 0, }}
                                    source={require('./../assets/images/pen_address.png')}
                                />

                            </TouchableOpacity>

                            <TouchableOpacity style={{ paddingLeft: 15 }}>
                                <Image style={{ height: 22.5, width: 17, borderRadius: 0, }}
                                    source={require('./../assets/images/trash_address.png')}
                                />

                            </TouchableOpacity>
                        </View>

                    </View>

                </View>

                <View style={{ flex: 1, height: 80, marginLeft: 5, marginRight: 5, backgroundColor: 'white', flexDirection: 'row' }}>

                    <View style={{ flex: 1, justifyContent: 'center' }}>
                        <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, color: 'black', paddingLeft: 25 }}>General</Text>
                        <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 13, color: 'black', paddingLeft: 25 }}>1 Januari 2018</Text>
                    </View>

                    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', }}>

                        <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'flex-end', paddingRight: 20 }}>
                            <TouchableOpacity>
                                <Image style={{ height: 22.5, width: 22.5, borderRadius: 0, }}
                                    source={require('./../assets/images/pen_address.png')}
                                />

                            </TouchableOpacity>

                            <TouchableOpacity style={{ paddingLeft: 15 }}>
                                <Image style={{ height: 22.5, width: 17, borderRadius: 0, }}
                                    source={require('./../assets/images/trash_address.png')}
                                />

                            </TouchableOpacity>
                        </View>

                    </View>

                </View>





            </ScrollView >
        )
    }

}

const styles = StyleSheet.create({


});

export default crafterMenuNotePage

