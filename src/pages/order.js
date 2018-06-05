import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation'
import { StatusBar, StyleSheet, ScrollView, BackHandler, Text, Picker, Alert, Keyboard, ToastAndroid, TouchableOpacity, View, Image } from 'react-native'
import { Container, ContainerSection, Input, Button, Spinner } from '../components/common'
import AutoComplete from '../components/AutoComplete'
import { COLOR } from './../shared/config';

export class OrderPage extends React.Component {
    static navigationOptions = {
        headerTitle: 'Pengaturan Pesanan'
    }

    constructor(props) {
        super(props)

        this.state = {
            nameProduct: ''
        }
    }

    render() {
        const resizeMode = 'contain';
        const { nameProduct } = this.state;

        return (
            <ScrollView
                style={styles.containerStyle}
                keyboardShouldPersistTaps="always"
                ref={ref => this.scrollView = ref}
            >
                <StatusBar
                    backgroundColor={COLOR.primary}
                    barStyle="light-content"
                />
                <ContainerSection>
                    <Input
                        label='Nama Produk'
                        value={nameProduct}
                        onChangeText={v => this.onChangeInput('nameProduct', v)}
                    />
                </ContainerSection>
            </ScrollView>
        )
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
});

export default OrderPage;