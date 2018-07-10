import React, { Component } from 'react'
import { View, Text, Image, AsyncStorage, TouchableOpacity, ToastAndroid, } from 'react-native'
import { Container, ContainerSection, Spinner, Input } from '../components/common';


export class ForgotPasswordPage extends React.Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props)

        this.state = {
            email: '',
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
                onPress={() => this.onLogin()}
                style={styles.buttonSend}
            >
                <Text style={{ color: '#FFFFFF', fontFamily: 'Quicksand-Bold', textAlign: 'center' }}>
                    Kirim
				</Text>
            </TouchableOpacity>
        )
    }


    render() {
        const { email } = this.state;

        return (
            <View style={{ flex: 1, backgroundColor: '#422508', justifyContent: 'center' }}>
            <Container>
                    
                        <Image
                            style={styles.image}
                            source={require('./../assets/images/text_logo.png')}
                            resizeMode='contain'
                        />

                    </Container>
                <Container>
                    <ContainerSection>
                        <Text style={{ color: '#fff' }}>Please fill the form to recover your account .</Text>
                    </ContainerSection>
                </Container>
                <Container>
                    <ContainerSection>
                        <Text style={{ color: '#fff' }}>Enter your email</Text>
                    </ContainerSection>
                    <ContainerSection>
                        <Input
                            placeholder='Enter your email'
                            onChangeText={val => this.onChange('email', val)}
                            value={email}
                        />
                    </ContainerSection>
                    <ContainerSection>
                        <Text style={{ color: '#fff' }}>Enter new password</Text>
                    </ContainerSection>
                    <ContainerSection>
                        <Input
                            placeholder='Enter new password'
                        // onChangeText={val => this.onChange('email', val)}
                        // value={email}
                        />
                    </ContainerSection>
                    <ContainerSection>
                        <Text style={{ color: '#fff' }}>Confirmation new password</Text>
                    </ContainerSection>
                    <ContainerSection>
                        <Input
                            placeholder='Confirmation new password'
                        // onChangeText={val => this.onChange('email', val)}
                        // value={email}
                        />
                    </ContainerSection>

                    <ContainerSection>
                        {this.renderButton()}
                    </ContainerSection>
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
        borderRadius: 3,
        marginTop: 5
    }
}

export default ForgotPasswordPage;