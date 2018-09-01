import React, { Component } from 'react';
import { View, Text, ImageBackground, ToastAndroid, Image, RefreshControl, TouchableOpacity, ScrollView, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, StatusBar, Modal } from 'react-native'
import axios from 'axios';
import { IPSERVER } from '../shared/config';
import Icon from 'react-native-vector-icons/Ionicons';
import { Container, ContainerSection, Button, InputLogin, Spinner, Input } from '../components/common';
import numeral from 'numeral';
import moment from 'moment';

export class ProfileBuyerPage extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        header: null
    });

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            userId: '',
            dataProfile: '',
            dataPresentase: '',
        };
    }

    componentDidMount() {
        console.log(this.props.navigation.state.params.itemId, 'Props Profile');
        this.setState({ userId: this.props.navigation.state.params.itemId }, () => {
            const { userId } = this.state;
            axios.post(`${IPSERVER}/ApapunUsers/getUserProfile`, {
                userId: userId
            })
                .then(response => {
                    console.log(response, 'Data Profile');
                    this.setState({ dataProfile: response.data }, () => {
                        axios.post(`${IPSERVER}/ApapunUsers/getHighlightUser`, {
                            userId: userId
                        })
                            .then(response => {
                                this.setState({ dataPresentase: response.data }, () => {
                                    console.log(this.state.dataPresentase, 'Data Presentase');
                                    this.setState({ loading: false });
                                });
                            }).catch(error => {
                                console.log(error, 'Error Get Dashboard Profile');
                                this.setState({ loading: false });
                                return ToastAndroid.show('Connection Time Out, Server Maybe Down', ToastAndroid.SHORT);
                            });
                    });
                }).catch(error => {
                    console.log(error, 'Error Get Data Profile');
                    this.setState({ loading: false });
                    return ToastAndroid.show('Connection Time Out, Server Maybe Down', ToastAndroid.SHORT);
                });
        });
    }


    onRefresh() {
        this.setState({
            loading: true
        }, () => {
            this.setState({ loading: false });
        });
    }

    render() {
        const { loading } = this.state;
        return (
            <View style={{ flex: 1 }}>
                {
                    loading ?
                        <Spinner size="small" />
                        :
                        <ScrollView
                            style={{ flex: 1 }}
                            refreshControl={
                                <RefreshControl
                                    refreshing={this.state.loading}
                                    onRefresh={this.onRefresh.bind(this)}
                                />
                            }
                            showsVerticalScrollIndicator={false}
                        >
                            <TouchableOpacity style={{ zIndex: 6, height: 70, width: 70, marginTop: 20, }}
                                onPress={() => this.props.navigation.goBack()}
                            >
                                <View style={{ height: 45, width: 45, borderRadius: 100, backgroundColor: 'rgba(0,0,0,0.7)', justifyContent: 'center', paddingLeft: 7.5, marginLeft: 25, }}>
                                    <Icon size={30} style={{ paddingLeft: 7.5, color: 'white' }} name='ios-arrow-back' />
                                </View>
                            </TouchableOpacity>

                            <ImageBackground
                                source={require('./../assets/images/background_profile_compressed.jpeg')}
                                style={styles.backgroundStyle}
                            >

                                <View style={{ zIndex: 0 }}>

                                    <View style={styles.containerImage}>
                                        <Image style={styles.containerPhoto}
                                            source={require('./../assets/images/profile.png')}
                                        />
                                    </View>

                                    <View style={styles.containerMainForm}>

                                        <View style={{ flexDirection: 'row', height: 75, width: '85%', }}>

                                            <View style={{ flex: 1, height: 75, justifyContent: 'center', }}>
                                                <Text style={{ fontSize: 25, fontFamily: 'Quicksand-Bold', color: 'black' }}>Gal Gadot</Text>
                                            </View>

                                            <View style={{ flex: 1, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center' }}>
                                                <TouchableOpacity
                                                    onPress={() => this.props.navigation.navigate('EditProfileBuyer')}>
                                                    <View style={{ height: 50, width: 50, backgroundColor: '#ef1c25', borderRadius: 100, borderWidth: 2, borderColor: '#e5e5e5', justifyContent: 'center', alignItems: 'center' }}>
                                                        <Image style={{ height: 18, width: 18, borderRadius: 0, }}
                                                            source={require('./../assets/images/pen_white.png')}
                                                        />
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                        </View>

                                        <View style={{ width: '85%', borderColor: 'rgba(226, 226, 226, 0.2)', borderWidth: 1, marginTop: -5 }} />


                                        <View style={{ flexDirection: 'row', height: 35, width: '85%', alignItems: 'center', }}>

                                            <View style={{
                                                flexDirection: 'row',
                                                //  backgroundColor: 'blue',
                                                height: '100%', width: '15%',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}>
                                                <Image style={{ height: 18, width: 18, borderRadius: 0, }}
                                                    source={require('./../assets/images/envelope.png')}
                                                />
                                            </View>

                                            <View style={{
                                                flexDirection: 'row',
                                                // backgroundColor: 'skyblue', 
                                                height: '100%', width: '85%',
                                                alignItems: 'center',
                                            }}>
                                                <Text style={{ fontSize: 15, paddingLeft: 10, fontFamily: 'Quicksand-Regular', color: 'black' }}>
                                                    {this.state.dataProfile.email}
                                                </Text>
                                            </View>

                                        </View>


                                        <View style={{ flexDirection: 'row', height: 35, width: '85%', alignItems: 'center' }}>

                                            <View style={{
                                                flexDirection: 'row',
                                                //  backgroundColor: 'blue',
                                                height: '100%', width: '15%',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}>
                                                <Image style={{ height: 18, width: 18, borderRadius: 0, }}
                                                    source={require('./../assets/images/telp_mainprof.png')}
                                                />
                                            </View>

                                            <View style={{
                                                flexDirection: 'row',
                                                // backgroundColor: 'skyblue', 
                                                height: '100%', width: '85%',
                                                alignItems: 'center',
                                            }}>
                                                <Text style={{ paddingLeft: 10, fontSize: 15, fontFamily: 'Quicksand-Regular', color: 'black', color: 'black' }}>
                                                    {this.state.dataProfile.phone}
                                                </Text>
                                            </View>

                                        </View>

                                        <View style={{ flexDirection: 'row', height: 35, width: '85%', alignItems: 'center', }}>

                                            <View style={{
                                                flexDirection: 'row',
                                                //  backgroundColor: 'blue',
                                                height: '100%', width: '15%',
                                                alignItems: 'center',
                                                justifyContent: 'center'
                                            }}>
                                                <Image style={{ height: 18, width: 18, borderRadius: 0, }}
                                                    source={require('./../assets/images/birthday_cake.png')}
                                                />
                                            </View>

                                            <View style={{
                                                flexDirection: 'row',
                                                // backgroundColor: 'skyblue', 
                                                height: '100%', width: '85%',
                                                alignItems: 'center',
                                            }}>
                                                <Text style={{ paddingLeft: 10, fontSize: 15, fontFamily: 'Quicksand-Regular', color: 'black' }}>
                                                    {moment(this.state.dataProfile.birth_date).format('DD/MM/YYYY')}
                                                </Text>
                                            </View>

                                        </View>

                                        <View style={{ flexDirection: 'row', height: 70, width: '85%', marginTop: 5 }}>

                                            <View style={{
                                                flexDirection: 'row',
                                                //  backgroundColor: 'blue',
                                                height: '100%', width: '15%',
                                                // alignItems: 'center',
                                                justifyContent: 'center'
                                            }}>
                                                <Image style={{ height: 18, width: 18, borderRadius: 0, }}
                                                    source={require('./../assets/images/black_loc_mainprof.png')}
                                                />
                                            </View>


                                            <View style={{
                                                flexDirection: 'column',
                                                // backgroundColor: 'skyblue', 
                                                height: '100%', width: '85%',
                                                // alignItems: 'center',
                                            }}>
                                                <Text style={{ paddingLeft: 10, fontSize: 15, fontFamily: 'Quicksand-Regular', textAlign: 'left', color: 'black' }}>
                                                    {this.state.dataProfile.province}, {this.state.dataProfile.city}, {this.state.dataProfile.district}
                                                </Text>
                                            </View>

                                        </View>
                                    </View>



                                    <View style={styles.containerSecondForm}>


                                        <View style={{ flexDirection: 'row', height: 70, width: '85%', }}>

                                            <View style={{
                                                flexDirection: 'row',
                                                //  backgroundColor: 'blue',
                                                height: '100%', width: '15%',
                                                alignItems: 'center',
                                                // justifyContent: 'center'
                                            }}>
                                                <TouchableWithoutFeedback>
                                                    <TouchableOpacity
                                                        onPress={() => this.props.navigation.navigate('AkunBank')}>
                                                        <Image style={{ height: 40, width: 40, borderRadius: 0, }}
                                                            source={require('./../assets/images/ic_wallet.png')}
                                                        />
                                                    </TouchableOpacity>
                                                </TouchableWithoutFeedback>
                                            </View>

                                            <View style={{
                                                flexDirection: 'column',
                                                // backgroundColor: 'skyblue',
                                                height: '100%', width: '85%',
                                                // alignItems: 'center',
                                                justifyContent: 'center'
                                            }}>
                                                <Text style={{ paddingLeft: 10, fontSize: 15, fontFamily: 'Quicksand-Regular', textAlign: 'left', color: 'black' }}>
                                                    Total Apresiasi Design Anda
                                                </Text>
                                                <Text style={{ paddingLeft: 10, fontSize: 15, fontFamily: 'Quicksand-Bold', textAlign: 'left', color: 'black' }}>
                                                    Rp. {numeral(this.state.dataPresentase[0].user_total_apresiasi).format('0,0')}
                                                </Text>
                                            </View>

                                        </View>

                                    </View>



                                    <View style={styles.containerThirdForm}>

                                        <View style={{
                                            flexDirection: 'row',
                                            //  backgroundColor: 'yellow', 
                                            height: 70, width: '85%',
                                        }}>

                                            <View style={{
                                                flexDirection: 'row',
                                                //  backgroundColor: 'blue',
                                                height: '100%', width: '15%',
                                                alignItems: 'center',
                                                // justifyContent: 'center'
                                            }}>
                                                <TouchableWithoutFeedback>
                                                    <TouchableOpacity
                                                        onPress={() => this.props.navigation.navigate('DesignSaya')}>
                                                        <Image style={{ height: 40, width: 40, borderRadius: 0, }}
                                                            source={require('./../assets/images/ic_design.png')}
                                                        />
                                                    </TouchableOpacity>
                                                </TouchableWithoutFeedback>
                                            </View>

                                            <View style={{
                                                // flexDirection: 'column',
                                                // backgroundColor: 'skyblue',
                                                height: '100%', width: '85%',
                                                // alignItems: 'center',
                                                justifyContent: 'center',
                                                marginBottom: 30
                                            }}>
                                                <Text style={{ paddingLeft: 10, fontSize: 15, fontFamily: 'Quicksand-Regular', textAlign: 'left', color: 'black' }}>
                                                    Total Design Anda
                                                </Text>
                                                <Text style={{ paddingLeft: 10, fontSize: 15, fontFamily: 'Quicksand-Bold', textAlign: 'left', color: 'black' }}>
                                                    {numeral(this.state.dataPresentase[0].user_jml_desain).format('0,0')} Desain
                                                </Text>
                                            </View>
                                        </View>
                                    </View>


                                    {/* <View style={styles.containerTh}>
                            <View style={{
                                flexDirection: 'column',
                                height: '100%', width: '100%',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                <Text style={{ fontSize: 19, textAlign: 'center', fontFamily: 'Quicksand-Bold', color: 'black' }}>
                                    Hargai Desainmu
                                    </Text>
                                <Text style={{ fontSize: 16, textAlign: 'center', fontFamily: 'Quicksand-Regular', color: 'black' }}>
                                    Share dan opresiasikan desainmu
                                    </Text>
                                <Text style={{ fontSize: 16, textAlign: 'center', fontFamily: 'Quicksand-Regular', color: 'black' }}>
                                    ke seluruh indonesia
                                    </Text>
                            </View>
                        </View> */}
                                </View>

                                {/* <View style={styles.butin}>
                        <TouchableOpacity style={styles.buttonSignUp}
                            onPress={() => this.props.navigation.navigate('pengaturanBank')}>
                            <Text style={styles.signupButton}>Pengaturan</Text>
                        </TouchableOpacity>
                    </View> */}

                            </ImageBackground >
                        </ScrollView>
                }
            </View>
        );
    }


}

const styles = StyleSheet.create({
    backgroundStyle: {
        width: '100%',
        height: '55%',
        // backgroundColor: 'gray',
        // zIndex: 0,
        marginTop: -70,
        marginBottom: 10
    },
    containerImage: {
        // flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        paddingTop: 30,
        zIndex: 2,
        marginBottom: 10
        // backgroundColor: 'yellow'

    },
    containerPhoto: {
        height: 200,
        width: 200,
        borderRadius: 100,
        // zIndex: 5
        borderColor: 'white',
        borderWidth: 3
    },
    containerMainForm: {
        flex: 1,
        borderRadius: 20,
        backgroundColor: '#ffffff',
        shadowColor: 'black',
        shadowOffset: { width: 10, heigth: 10 },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 3,
        flexDirection: 'column',
        marginTop: 15,
        height: 260,
        width: '90%',
        alignItems: 'center',
        // justifyContent: 'center',
        alignSelf: 'center',
        // zIndex: 1,
        borderWidth: 1,
        borderColor: '#d6d7da',
        // backgroundColor: 'red'
    },
    containerSecondForm: {
        // flex: 1,
        borderRadius: 20,
        backgroundColor: '#ffffff',
        shadowColor: 'black',
        shadowOffset: { width: 10, heigth: 10 },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 3,
        flexDirection: 'row',
        marginTop: 5,
        height: 70,
        width: '90%',
        // alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        // zIndex: 2,
        borderWidth: 0.5,
        borderColor: '#d6d7da',
    },
    containerThirdForm: {
        // flex: 1,
        borderRadius: 20,
        backgroundColor: '#ffffff',
        shadowColor: 'black',
        shadowOffset: { width: 10, heigth: 10 },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 3,
        flexDirection: 'row',
        marginTop: 5,
        // zIndex: 3,
        marginBottom: 5,
        height: 70,
        width: '90%',
        // alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        borderWidth: 0.5,
        borderColor: '#d6d7da',
        // backgroundColor:'red'
    },
    containerTh: {
        borderRadius: 20,
        backgroundColor: '#ffffff',
        shadowColor: 'black',
        shadowOffset: { width: 10, heigth: 10 },
        shadowRadius: 5,
        shadowOpacity: 1.0,
        elevation: 3,
        flexDirection: 'row',
        marginBottom: 30,
        marginTop: 5,
        height: 180,
        width: '90%',
        // alignItems: 'center',
        // zIndex: 2,
        justifyContent: 'center',
        alignSelf: 'center',
        borderWidth: 0.5,
        borderColor: '#d6d7da'
    },
    icons: {
        height: 30,
        width: 30,
        borderRadius: 100,
    },
    signupButton: {
        textAlign: 'center',
        color: 'white',
        fontSize: 15,
        fontFamily: 'Quicksand-Bold',

    },
    buttonSignUp: {
        backgroundColor: '#ef1c25',
        borderRadius: 20,
        height: 40,
        width: 140,
        marginTop: -50,
        justifyContent: 'center',
        alignSelf: 'center',
        fontFamily: 'Quicksand-Regular'
        // zIndex: 2
    },
    butin: {
        // zIndex: 1,
        // marginTop: -50,
        // justifyContent: 'center',
        // alignItems: 'center',
        height: 100,
        // width: 410
    }
});

export default ProfileBuyerPage

