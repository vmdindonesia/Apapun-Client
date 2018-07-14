import React, { Component } from 'react'
import { View, Text, ImageBackground, Image, AsyncStorage, TouchableOpacity, ScrollView, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, StatusBar, Modal, ToastAndroid } from 'react-native'
import { Container, ContainerSection, Button, Input, InputSearch, InputDate } from '../components/common';
import { Card, CheckBox } from 'react-native-elements'
// import axios from 'axios';
import { COLOR } from './../shared/config';
import Icon from 'react-native-vector-icons/Ionicons';



export class IdeaFashionPage extends React.Component {

    static navigationOptions = {
        headerTitle: 'Fashion'
    }

    constructor(props) {
        super(props)
        this.state = {
            requestManExpanded: false,
            requestWomanExpanded: false,
            requestAccessoriesExpanded: false,
            requestContainer: null
        }
    }

    render() {

        const {
            requestManExpanded,
            requestWomanExpanded,
            requestAccessoriesExpanded,
            requestContainer
        } = this.state

        return (
            <View style={{ flex: 1 }}>

                <ScrollView>
                    <View style={{ flex: 1, flexDirection: 'column', height: '100%' }}>

                        <View style={{ flex: 1, height: 200, width: '100%', backgroundColor: 'skyblue' }}>
                            <Image
                                style={{
                                    flex: 1,
                                    width: '100%',
                                    height: '100%',
                                    // backgroundColor: 'red'
                                }}
                                source={require('./../assets/images/man_fashion.jpg')}
                            // resizeMode='contain'
                            />
                        </View>

                        <Card style={{ borderBottomWidth: 1, borderColor: '#eaeaea' }}>
                            <View style={{
                                // borderTopWidth: 1,
                                borderColor: '#eaeaea',
                                // padding: 5
                            }}>
                                <ContainerSection>
                                    <TouchableWithoutFeedback
                                        // onPress={() => { this.setState({ requestManExpanded: !requestManExpanded }); }}
                                        onPress={() => { ToastAndroid.show('Under Development', ToastAndroid.SHORT); }}
                                    >
                                        <View style={{ flex: 1, flexDirection: 'row' }}>
                                            <Text style={{ fontSize: 15 }}>Atasan Pria</Text>
                                            <View style={{ flex: 1 }}>
                                                <Icon size={20} style={{ alignSelf: 'flex-end' }} name={requestManExpanded ? 'md-arrow-dropup' : 'md-arrow-dropdown'} />
                                            </View>
                                        </View>
                                    </TouchableWithoutFeedback>
                                </ContainerSection>
                                {/* {
                                    requestManExpanded ?
                                        <ContainerSection>
                                            {
                                                requestContainer ?
                                                    <View style={{ flexDirection: 'column' }}>
                                                        <View>
                                                            <Text style={{ textAlign: 'center' }}>Apakah anda ingin melakukan permintaan sample atau survei nelayan?</Text>
                                                        </View>
                                                        <View style={{ paddingTop: 10 }}>
                                                            <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                                                <CheckBox
                                                                    style={{ flex: 1, padding: 10 }}
                                                                    rightText={surpei}
                                                                    // onClick={() => this.checkBoxSurvey()}
                                                                    // isChecked={survey}
                                                                />

                                                                <CheckBox
                                                                    style={{ flex: 1, padding: 10 }}
                                                                    rightText={sampel}
                                                                    // onClick={() => this.checkBoxSample()}
                                                                    // isChecked={sample}
                                                                />
                                                            </View>
                                                        </View>

                                                    </View>
                                                    :
                                                    <View />
                                            }

                                        </ContainerSection>
                                        :
                                        <View />
                                } */}
                            </View>
                        </Card>

                        <Card style={{ borderBottomWidth: 1, borderColor: '#eaeaea', }}>
                            <View style={{
                                // borderTopWidth: 1,
                                borderColor: '#eaeaea',
                                // padding: 5
                            }}>
                                <ContainerSection>
                                    <TouchableWithoutFeedback
                                        // onPress={() => { this.setState({ requestWomanExpanded: !requestWomanExpanded }); }}
                                        onPress={() => { ToastAndroid.show('Under Development', ToastAndroid.SHORT); }}
                                    >
                                        <View style={{ flex: 1, flexDirection: 'row' }}>
                                            <Text style={{ fontSize: 15 }}>Atasan Wanita</Text>
                                            <View style={{ flex: 1 }}>
                                                <Icon size={20} style={{ alignSelf: 'flex-end' }} name={requestWomanExpanded ? 'md-arrow-dropup' : 'md-arrow-dropdown'} />
                                            </View>
                                        </View>
                                    </TouchableWithoutFeedback>
                                </ContainerSection>
                            </View>
                        </Card>


                        <Card style={{ borderBottomWidth: 1, borderColor: '#eaeaea', }}>
                            <View style={{
                                // borderTopWidth: 1,
                                borderColor: '#eaeaea',
                                // padding: 5
                            }}>
                                <ContainerSection>
                                    <TouchableWithoutFeedback
                                        // onPress={() => { this.setState({ requestAccessoriesExpanded: !requestAccessoriesExpanded }); }}
                                        onPress={() => { ToastAndroid.show('Under Development', ToastAndroid.SHORT); }}
                                    >
                                        <View style={{ flex: 1, flexDirection: 'row' }}>
                                            <Text style={{ fontSize: 15 }}>Accessories</Text>
                                            <View style={{ flex: 1 }}>
                                                <Icon size={20} style={{ alignSelf: 'flex-end' }} name={requestAccessoriesExpanded ? 'md-arrow-dropup' : 'md-arrow-dropdown'} />
                                            </View>
                                        </View>
                                    </TouchableWithoutFeedback>
                                </ContainerSection>
                            </View>
                        </Card>



                    </View>
                </ScrollView>

            </View>
        )
    }

}

const styles = StyleSheet.create({


});

export default IdeaFashionPage

