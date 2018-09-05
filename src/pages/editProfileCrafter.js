import React, { Component } from 'react';
import { View, Text, TextInput, Image, AsyncStorage, TouchableOpacity, ScrollView, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, StatusBar, Modal } from 'react-native'
import { Container, ContainerSection, Button, Input, InputDate } from '../components/common';
import { NavigationActions, StackActions } from 'react-navigation';
import { CheckBox } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



export class EditProfileCrafterPage extends React.Component {

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
        super(props);
        this.state = {
            text: 'aishiteru@gmail.com',
            nohp: '+62 812967123388',
            pswd: ''
        };
    }

    renderButton = () => {
        // if (this.state.loading) {
        //     return <Spinner size="small" />
        // }
        return (
            <Button
                style={{
                    backgroundColor: '#FF1000',
                    justifyContent: 'center',
                    borderRadius: 30,
                    marginTop: 30,
                    marginLeft: '15%',
                    marginRight: '15%',
                    marginBottom: 20
                }}

                onPress={() => {
                    const resetAction = StackActions.reset({
                        index: 0,
                        actions: [NavigationActions.navigate({ routeName: 'MenuCrafter' })],
                    });
                    this.props.navigation.dispatch(resetAction);
                }
                }
            >
                <Text style={{ color: '#FFFFFF', fontFamily: 'Quicksand-Bold' }}>Simpan</Text>
            </Button>
        )
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <ScrollView
                    keyboardShouldPersistTaps="always" showsVerticalScrollIndicator={false}
                >
                    <View style={{ flex: 1 }}>
                        <Image
                            style={{ width: '100%', height: 150 }}
                            source={require('./../assets/images/background_profile.jpeg')}
                            resizeMode='cover'
                        />
                    </View>
                    <View style={styles.containerImage}>
                        <Image style={styles.containerPhoto}
                            source={require('./../assets/images/profile.png')}
                        />
                    </View>

                    <View style={{ flex: 1, marginTop: '25%', paddingLeft: 20, paddingRight: 20 }}>
                        <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, color: 'black' }}>Nama sebagai Crafter</Text>
                        <View>
                            <TextInput
                                style={{ borderWidth: 1, borderColor: '#eaeaea', marginTop: 5, height: hp('6%') }}
                                underlineColorAndroid='transparent'
                            />
                        </View>
                        <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, color: 'black', marginTop: 5 }}>Biodata</Text>
                        <View>
                            <TextInput
                                style={{ borderWidth: 1, borderColor: '#eaeaea', marginTop: 5 }}
                                numberOfLines={4}
                                underlineColorAndroid='transparent'
                                multiline={true}
                            />
                        </View>
                        <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, color: 'black', marginTop: 5 }}>Bidang Kemampuan</Text>
                        <View style={{ flex: 1, marginLeft: 25, marginTop: 5 }}>
                            <CheckBox
                                fontFamily='Quicksand-Regular'
                                title='Fashion'
                                containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                            />
                            <CheckBox
                                fontFamily='Quicksand-Regular'
                                title='Furniture & Appliances'
                                containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                            />
                            <CheckBox
                                fontFamily='Quicksand-Regular'
                                title='Beauty'
                                containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                            />
                            <CheckBox
                                fontFamily='Quicksand-Regular'
                                title='Hobbies & Toys'
                                containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                            />
                        </View>
                        <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, color: 'black', marginTop: 10 }}>Jasa Pengiriman Pribadi</Text>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', marginTop: 5 }}>
                            <CheckBox
                                containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                                center
                                title='Punya'
                                checkedIcon='dot-circle-o'
                                uncheckedIcon='circle-o'
                            //   checked={this.state.checked}
                            />
                            <CheckBox
                                containerStyle={{ backgroundColor: 'transparent', borderColor: 'transparent' }}
                                center
                                title='Tidak Punya'
                                checkedIcon='dot-circle-o'
                                uncheckedIcon='circle-o'
                            //   checked={this.state.checked}
                            />
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ width: wp('30%') }}>
                                <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, color: 'black' }}>E - Mail</Text>
                            </View>
                            <View style={{ flex: 1, marginTop: 20 }}>
                                <TextInput
                                    style={{ width: wp('55%'), color: '#aeaeae', alignSelf: 'flex-end', textAlign: 'right' }}
                                    underlineColorAndroid='transparent'
                                    textContentType='emailAddress'
                                    value={this.state.text} />
                                <TouchableHighlight>
                                    <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 13, color: 'red', alignSelf: 'flex-end' }}>{"<Verifikasi>"}</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{ flex: 1, paddingTop: 20 }}>
                                <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, color: 'black' }}>Nomor Telepon</Text>
                            </View>
                            <View style={{ flex: 1, marginTop: 3 }}>
                                <TextInput
                                    style={{ width: wp('55%'), color: '#aeaeae', alignSelf: 'flex-end', textAlign: 'right' }}
                                    underlineColorAndroid='transparent'
                                    textContentType='emailAddress'
                                    value={this.state.nohp} />
                            </View>
                        </View>

                        <View style={{ flex: 1, flexDirection: 'row' }}>
                            <View style={{ flex: 1, paddingTop: 20 }}>
                                <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, color: 'black' }}>Ganti Kata Sandi</Text>
                            </View>
                            <View style={{ flex: 1 }}>
                                <TextInput
                                    style={{ width: wp('55%'), color: '#aeaeae', alignSelf: 'flex-end', textAlign: 'right' }}
                                    underlineColorAndroid='transparent'
                                    textContentType='password'
                                    onChangeText={(pswd) => this.setState({pswd})} />
                            </View>
                        </View>
                        <View style={{ flex: 1 }}>
                            {this.renderButton()}
                        </View>
                    </View>
                </ScrollView>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    card: {
        borderTopWidth: 1,
        borderColor: '#eaeaea',
        padding: 5
    },
    menuContainerStyle: {
        flex: 4
    },
    backgroundStyle: {
        flex: 1
    },
    containerImage: {
        alignSelf: 'center',
        marginTop: 70,
        // left: 15,
        position: 'absolute',
    },
    containerPhoto: {
        height: 155,
        width: 155,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 3
    },
    textStyle: {
        marginTop: 10,
        marginLeft: '50%',
        fontFamily: 'Quicksand-Bold',
        fontSize: 20,
        alignSelf: 'auto'
    },
    textStyle2: {
        marginTop: 10,
        fontFamily: 'Quicksand-Regular',
        fontSize: 15,
        alignSelf: 'auto',
        marginRight: 10
    },
    locationIcon: {
        marginLeft: '50%',
        height: 15,
        width: 10,
        marginTop: 10
    },
    emojiIcon: {
        marginLeft: '50%',
        height: 15,
        width: 15,
        marginTop: 10
    },
    tabContainer: {
        height: 50,
        justifyContent: 'center',
    },
    tabContainerActive: {
        height: 50,
        justifyContent: 'center',
        borderBottomColor: '#ef1c25',
        borderBottomWidth: 1
    },
    tabText: {
        textAlign: 'center',
        fontSize: 14
    },
    tabTextActive: {
        textAlign: 'center',
        fontSize: 14,
        fontFamily: 'Quicksand-Bold'
    },
    item: {
        height: 100,
        width: 110,
        borderRadius: 4,
        alignSelf: 'stretch',
        resizeMode: 'cover',

    },
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})

export default EditProfileCrafterPage;