import React, { Component } from 'react'
import { View, Text, Image, AsyncStorage, TouchableOpacity, ScrollView, StyleSheet, FlatList } from 'react-native'
import { Container, Button, ContainerSection, Input } from '../components/common';

export class EditCatatanPage extends React.Component {

    static navigationOptions = {
        headerTitle: 'Catatan'

    }

    renderButton = () => {
        // if (this.state.loading) {
        //     return <Spinner size="small" />
        // }
        return (
            <Button
                style={{
                    backgroundColor: 'red',
                    justifyContent: 'center',
                    borderRadius: 30,
                }}
            // onPress={() => this.onValidation()}
            >
                <Text style={{ color: '#FFFFFF', fontFamily: 'Quicksand-Bold' }}>Simpan</Text>
            </Button>
        )
    }

    render() {
        return (
            <View style={{ flex: 1, padding: 10 }}>
                <View>
                    <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15 }}>Subject</Text>
                </View>
                <View style={{ width: '100%', height: '10%', marginTop: 5 }}>
                    <Input />
                </View>
                <View style={{ flex: 1 }}>
                    <Input
                        multiline={true}
                    />
                </View>
                <View style={{ width: '100%', height: 40 }}>
                    {this.renderButton()}
                </View>
            </View>
        );
    }

}

export default EditCatatanPage;