import React, { Component } from 'react';
import { NavigationActions } from 'react-navigation'
import { StatusBar, StyleSheet,ScrollView, BackHandler, Text, Picker, Alert, Keyboard, ToastAndroid, TouchableOpacity, View, Image } from 'react-native'
import { Container, ContainerSection, Input, Button, Spinner } from '../components/common'
import AutoComplete from '../components/AutoComplete'

export class OrderPage extends React.Component {
    static navigationOptions = {
        headerTitle: 'Pengaturan Pesanan'
    }

    render() {
        const resizeMode = 'contain';
        
    
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
                        value={organization}
                        onChangeText={v => this.onChangeInput('organization', v)}
                    />
                </ContainerSection>
            </ScrollView>
            )
    };
}
        
const styles = StyleSheet.create({
                        container:  {
                        flex: 1,
                        justifyContent : 'center'
                  },
                });
              
export default OrderPage;