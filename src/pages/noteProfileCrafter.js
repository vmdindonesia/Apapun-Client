import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, ToastAndroid, TouchableWithoutFeedback } from 'react-native'
import { ContainerSection, Card } from '../components/common';
import Icon from 'react-native-vector-icons/Ionicons';
import axios from 'axios';
import { IPSERVER } from './../shared/config';


export class NoteProfileCrafterPage extends React.Component {

    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {
            loading: true,
            expanded: false,
            dataNote: ''
        }
    }

    componentDidMount() {
        console.log(this.props, 'Props Image');
        axios.post(`${IPSERVER}/ApapunCrafterNotes/getCrafterNote`, {
            crafterId: this.props.naviparams.crafterId
        })
            .then(response => {
                console.log(response, 'Data Profile');
                this.setState({ dataNote: response.data }, () => {
                    console.log(this.state.dataNote, 'PPPP');
                    this.setState({ loading: false });
                });
            }).catch(error => {
                console.log(error, 'Error Get Rating');
                this.setState({ loading: false });
                return ToastAndroid.show('Connection Time Out, Server Maybe Down', ToastAndroid.SHORT);
            });
    }

    renderNote = (data) => {
        console.log(data, 'Data Note');
        return (
            <Card style={{ borderBottomWidth: 1, borderColor: '#eaeaea' }}>
                <View style={styles.card}>
                    <ContainerSection>
                        <TouchableWithoutFeedback
                            onPress={() => {
                                this.setState({ expanded: !this.state.expanded });
                                console.log(this.state.expanded, 'Request Klik')
                            }}>
                            <View style={{ flex: 1, flexDirection: 'row' }}>
                                <Text style={{ fontSize: 18, fontFamily: 'Quicksand-Bold' }}>{data.item.subject}</Text>
                                <View style={{ flex: 1 }}>
                                    <Icon size={30} style={{ alignSelf: 'flex-end' }} name={this.state.expanded ? 'md-arrow-dropup' : 'md-arrow-dropdown'} />
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    </ContainerSection>
                    {
                        this.state.expanded ?
                            <View>
                                <Text>{data.item.note}</Text>
                            </View>
                            :
                            <View />
                    }
                </View>
            </Card>
        )
    }


    render() {

        return (
            <View style={{ flex: 1 }}>
                {
                    this.state.dataNote.length === 0 ?
                        <View style={{ flex: 1 }}>
                            <Text style={{ textAlign: 'center' }}>Maaf, Belum ada Image</Text>
                        </View>
                        :
                        <View style={{ flex: 1, marginBottom: '10%' }}>
                            <FlatList
                                data={this.state.dataNote}
                                renderItem={this.renderNote.bind(this)}
                                extraData={this.state}
                            />
                        </View>
                }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    card: {
        borderTopWidth: 1,
        borderColor: '#eaeaea',
        padding: 5
    },
})

export default NoteProfileCrafterPage;