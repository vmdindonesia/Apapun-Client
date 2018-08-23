import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback, StyleSheet } from 'react-native'
import { ContainerSection, Card } from '../components/common';
import Icon from 'react-native-vector-icons/Ionicons';

export class NoteProfileCrafterPage extends React.Component {

    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {
            requestExpanded: false,
            generalExpanded: false
        }
    }

    render() {
        const { requestExpanded, generalExpanded } = this.state;
        return (
            <View style={{ flex: 1, marginBottom: '10%' }}>
                <Card style={{ borderBottomWidth: 1, borderColor: '#eaeaea' }}>
                    <View style={styles.card}>
                        <ContainerSection>
                            <TouchableWithoutFeedback onPress={() => { this.setState({ requestExpanded: !requestExpanded }); console.log(this.state.requestExpanded, 'Request Klik') }}>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <Text style={{ fontSize: 18, fontFamily: 'Quicksand-Bold' }}>Alamat Workshop</Text>
                                    <View style={{ flex: 1 }}>
                                        <Icon size={30} style={{ alignSelf: 'flex-end' }} name={requestExpanded ? 'md-arrow-dropup' : 'md-arrow-dropdown'} />
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                        </ContainerSection>
                        {
                            requestExpanded ?
                                <View>
                                    <Text>TANGERANG, Gading Serpong, Perumahan Cluster DALTON - Jl. Dalton Timur 2 no.19
                                        Kota Tangerang Selatan - Serpong - Banten 081296128433
                                </Text>
                                </View>
                                :
                                <View />
                        }
                    </View>
                </Card>
                <Card style={{ borderBottomWidth: 1, borderColor: '#eaeaea' }}>
                    <View style={styles.card}>
                        <ContainerSection>
                            <TouchableWithoutFeedback onPress={() => { this.setState({ generalExpanded: !generalExpanded }); console.log(this.state.generalExpanded, 'Request Klik') }}>
                                <View style={{ flex: 1, flexDirection: 'row' }}>
                                    <Text style={{ fontSize: 18, fontFamily: 'Quicksand-Bold' }}>General</Text>
                                    <View style={{ flex: 1 }}>
                                        <Icon size={30} style={{ alignSelf: 'flex-end' }} name={generalExpanded ? 'md-arrow-dropup' : 'md-arrow-dropdown'} />
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                        </ContainerSection>
                        {
                            generalExpanded ?
                                <View>
                                    <Text>Aku Cinta Kamu</Text>
                                </View>
                                :
                                <View />
                        }
                    </View>
                </Card>
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