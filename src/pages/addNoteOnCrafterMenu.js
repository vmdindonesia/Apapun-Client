import React, { Component } from 'react';
import { ToastAndroid, View, Keyboard, Text, TextInput, ImageBackground, Image, AsyncStorage, TouchableOpacity, ScrollView, StyleSheet, TouchableHighlight, TouchableWithoutFeedback, StatusBar, Modal } from 'react-native'
import axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons';
import { Container, ContainerSection, Button, Input, InputNumber } from '../components/common';
import { IPSERVER } from '../shared/config';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export class addNoteOnCrafterMenuPage extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        headerLeft:
            <TouchableOpacity
                onPress={() => { navigation.goBack(); console.log(navigation.goBack(), 'Props Order') }}
            >
                <Icon size={30} style={{ marginLeft: 25, color: '#EF1C25' }} name='ios-arrow-back' />
            </TouchableOpacity>,
        headerTitle: 'Catatan',
    });

    constructor(props) {
        super(props)

        this.state = {
            subject: '',
            note: '',
            crafterId: ''
        }
    }

    onChange = (name, value) => {
        this.setState({ [name]: value }, () => {
            console.log(this.state[name]);
        })
    }

    componentDidMount() {
        this.setState({
            crafterId: this.props.navigation.state.params.crafter_Id
        });
    }

    onValidation() {
        const {
            subject,
            note
        } = this.state;
        Keyboard.dismiss();
        switch (subject) {
            case '':
                return ToastAndroid.show('Title Catatan Tidak Boleh Kosong', ToastAndroid.SHORT);
            default:
                switch (note) {
                    case '':
                        return ToastAndroid.show('Deskripsi Tidak Boleh Kosong', ToastAndroid.SHORT);
                    default:
                        return this.addNote();
                }
        }
    }

    addNote() {
        axios.post(`${IPSERVER}/ApapunCrafterNotes/CreateCrafterNote`, {
            crafterId: this.state.crafterId,
            subject: this.state.subject,
            note: this.state.note
        })
            .then(response => {
                console.log(response, 'Sukses Note');
                console.log(this.props)
                this.props.navigation.goBack();
            }).catch(error => {
                console.log(error, 'Error Note');
                return ToastAndroid.show('Connection Time Out, Server Maybe Down', ToastAndroid.SHORT);
            });
    }

    renderButton = () => {
        if (this.state.loading) {
            return <Spinner size="small" />
        }
        return (
            <View style={{ width: wp('87%'), height: hp('6.5%'), backgroundColor: 'rgb(209, 0, 0)', borderRadius: 30, justifyContent: 'center', bottom: 25 }}>
                <TouchableOpacity
                    onPress={() => this.onValidation()}
                >
                    <Text style={{ textAlign: 'center', fontSize: 15, color: 'white', fontFamily: 'Quicksand-Bold' }}>Simpan</Text>
                </TouchableOpacity>
            </View>
        )

    }
    render() {
        const { subject, note } = this.state;
        return (
            <View style={{
                flex: 1, backgroundColor: 'white', marginTop: 5
            }}>

                <View style={{ flex: 1, height: 200, marginTop: 25, marginLeft: 20, marginRight: 20 }}>
                    <Text style={{ fontSize: 15, color: 'black', fontFamily: 'Quicksand-Bold', paddingLeft: 5, }}>Subject</Text>

                    <View style={{ marginTop: 5 }}>
                        <ContainerSection>
                            <Input
                                placeholder='Judul Catatan'
                                onChangeText={val => this.onChange('subject', val)}
                                value={subject}
                            />
                        </ContainerSection>
                    </View>

                    <View>
                        <ContainerSection style={{ height: 50 }}>
                            <Input
                                multiline={true}
                                numberOfLines={5}
                                placeholder='Deskripsi Catatan'
                                onChangeText={val => this.onChange('note', val)}
                                value={note}
                            />
                        </ContainerSection>
                    </View>

                </View>
                <View style={{ alignSelf: 'center' }}>
                {this.renderButton()}
                </View>
            </View>
        )
    }

}

const styles = StyleSheet.create({


});

export default addNoteOnCrafterMenuPage;

