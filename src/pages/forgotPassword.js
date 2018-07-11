import React, { Component } from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity, ToastAndroid, } from 'react-native'
import { Container, ContainerSection, Spinner, Input } from '../components/common';
import { NavigationActions, StackActions } from 'react-navigation';


export class ForgotPasswordPage extends React.Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props)

        this.state = {
            email: '',
            newPassword: '',
            confirmPassword: '',
            loading: false
        }
    }

    onChange = (name, value) => {
        this.setState({ [name]: value }, () => {
            console.log(this.state[name]);
        })
    }

    renderButton = () => {
        if (this.state.loading) {
            return <Spinner size="small" />
        }
        return (
            <TouchableOpacity
                onPress={() => this.onForget()}
                style={styles.buttonSend}
            >
                <Text style={{ color: '#FFFFFF', fontFamily: 'Quicksand-Bold', textAlign: 'center' }}>
                    Kirim
				</Text>
            </TouchableOpacity>
        )
    }

    onForget() {
        ToastAndroid.show('Under Development', ToastAndroid.SHORT);
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'Login' })],
        });
        this.props.navigation.dispatch(resetAction);
    }


    render() {
        const { email, newPassword, confirmPassword } = this.state;

        return (
            <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#422508' }}>
                <Container>
                    <ScrollView
                        keyboardShouldPersistTaps="always"
                        ref={ref => this.scrollView = ref}
                    >

                        <ContainerSection>
                            <Image
                                style={styles.image}
                                source={require('./../assets/images/text_logo.png')}
                                resizeMode='contain'
                            />
                        </ContainerSection>
                        <ContainerSection>
                            <Text style={{ color: '#fff' }}>Please fill the form to recover your account .</Text>
                        </ContainerSection>
                        <ContainerSection>
                            <Input
                                placeholder='Your Email Address'
                                label='Your Email Address'
                                value={email}
                                onChangeText={v => this.onChange('email', v)}
                            />
                        </ContainerSection>
                        <ContainerSection>
                            <Input
                                label='Enter New Password'
                                placeholder='Enter new password'
                                onChangeText={val => this.onChange('newPassword', val)}
                                value={newPassword}
                            />
                        </ContainerSection>

                        <ContainerSection>
                            <Input
                                label={'Confirmation New password'}
                                placeholder='Confirmation new password'
                                onChangeText={val => this.onChange('confirmPassword', val)}
                                value={confirmPassword}
                            />
                        </ContainerSection>

                        <View style={{ marginTop: 15 }}>
                            <ContainerSection>
                                {this.renderButton()}
                            </ContainerSection>
                        </View>
                    </ScrollView>
                </Container>
            </View>
        );
    }

}

const styles = {
    image: {
        width: 150,
        height: 50
    },
    buttonSend: {
        backgroundColor: 'rgb(209, 0, 0)',
        width: '100%',
        height: 40,
        justifyContent: 'center',
        borderRadius: 20
    }
}

export default ForgotPasswordPage;