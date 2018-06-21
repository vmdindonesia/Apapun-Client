import React, { Component } from 'react';
import { StyleSheet, ScrollView, BackHandler, Text, Picker, Alert, Keyboard, ToastAndroid, TouchableOpacity, View, Image } from 'react-native';
import { COLOR } from './../shared/config';
import { Container, ContainerSection, Input, Button, Spinner, InputNumber } from '../components/common';

export class CrafterPage extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ScrollView>
                <TouchableOpacity style={{flex: 1, flexDirection: 'column' }}>
                <Text>Pesanan Saya</Text>
                    </TouchableOpacity>
                </ScrollView>
    );
    }
}

export default CrafterPage;