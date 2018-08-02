import React, { Component } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, ToastAndroid } from 'react-native'
import { Container, ContainerSection, Spinner, Button, Input } from '../components/common';
import { NavigationActions, StackActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';


export class ForgotPasswordPage extends React.Component {
    static navigationOptions = ({ navigation }) => ({
        headerLeft:
            <TouchableOpacity
                onPress={() => { navigation.goBack(); console.log(navigation.goBack(), 'Props Order') }}
            >
                <Icon size={30} style={{ marginLeft: 25, color: '#EF1C25' }} name='ios-arrow-back' />
            </TouchableOpacity>,
        headerTitle: 'Lupa Password'
    });

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
            <Button
                onPress={() => this.onForget()}
                style={styles.buttonSend}
            >
                <Text style={{ color: '#FFFFFF', fontFamily: 'Quicksand-Bold', textAlign: 'center' }}>
                    Kirim
				</Text>
            </Button>
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
            // <View style={{ flex: 1, justifyContent: 'center', backgroundColor: '#422508' }}>
            //     <Container>
            //         <ScrollView
            //             keyboardShouldPersistTaps="always"
            //             ref={ref => this.scrollView = ref}
            //         >

            //             <ContainerSection>
            //                 <Image
            //                     style={styles.image}
            //                     source={require('./../assets/images/text_logo.png')}
            //                     resizeMode='contain'
            //                 />
            //             </ContainerSection>
            //             <ContainerSection>
            //                 <Text style={{ color: '#fff' }}>Please fill the form to recover your account .</Text>
            //             </ContainerSection>
            //             <ContainerSection>
            //                 <Input
            //                     placeholder='Your Email Address'
            //                     label='Your Email Address'
            //                     value={email}
            //                     onChangeText={v => this.onChange('email', v)}
            //                 />
            //             </ContainerSection>
            //             <ContainerSection>
            //                 <Input
            //                     label='Enter New Password'
            //                     placeholder='Enter new password'
            //                     onChangeText={val => this.onChange('newPassword', val)}
            //                     value={newPassword}
            //                 />
            //             </ContainerSection>

            //             <ContainerSection>
            //                 <Input
            //                     label={'Confirmation New password'}
            //                     placeholder='Confirmation new password'
            //                     onChangeText={val => this.onChange('confirmPassword', val)}
            //                     value={confirmPassword}
            //                 />
            //             </ContainerSection>

            //             <View style={{ marginTop: 15 }}>
            //                 <ContainerSection>
            //                     {this.renderButton()}
            //                 </ContainerSection>
            //             </View>
            //         </ScrollView>
            //     </Container>
            // </View>
            <View style={styles.container}>
                <Image
                    style={{ width: 220, height: 100, }}
                    source={require('./../assets/images/logotext.png')}
                    resizeMode='contain'
                />
                <View style={{ width: '100%', height: 75 }}>
                    <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, color: 'black', paddingTop: 10 }}>OOPS, LUPA PASSWORD?</Text>
                    <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 13, color: 'black', paddingTop: 10 }}>Silahkan isi form dibawah ini untuk melakukan reset password</Text>
                </View>
                <View style={styles.containerForm}>
                    <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 13, color: 'black', marginLeft: 20, marginTop: 10 }}>Email</Text>
                    <View style={{ width: '90%', height: 50, marginLeft: 18, marginRight: 10, marginTop: -15 }}>
                        <Input
                            placeholder='Your Email Address'
                            label='Your Email Address'
                            value={email}
                            onChangeText={v => this.onChange('email', v)}
                        />
                    </View>
                    <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 13, color: 'black', marginLeft: 20, marginTop: 25 }}>Masukan Password Baru</Text>
                    <View style={{ width: '90%', height: 50, marginLeft: 18, marginRight: 10, marginTop: -15 }}>
                        <Input
                            label='Enter New Password'
                            placeholder='Enter new password'
                            onChangeText={val => this.onChange('newPassword', val)}
                            value={newPassword}
                        />
                    </View>
                    <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 13, color: 'black', marginLeft: 20, marginTop: 25 }}>Konfirmasi Password Baru</Text>
                    <View style={{ width: '90%', height: 50, marginLeft: 18, marginRight: 10, marginTop: -15 }}>
                        <Input
                            label={'Confirmation New password'}
                            placeholder='Confirmation new password'
                            onChangeText={val => this.onChange('confirmPassword', val)}
                            value={confirmPassword}
                        />
                    </View>
                </View>
                <TouchableOpacity style={styles.buttonSignUp}
                    onPress={() => this.onForget()}
                >
                    <Text style={styles.signupButton}>Kirim</Text>
                </TouchableOpacity>
            </View>
        );
    }

}

const styles = {
    container: {
        flex: 1,
        padding: 15
    },
    containerForm: {
        marginTop: 10,
        borderRadius: 20,
        backgroundColor: 'white',
        flexDirection: 'column',
        height: 265,
        width: '100%',
        // justifyContent: 'center',
        // alignItems: 'center',
        zIndex: 1,
        borderWidth: 0,
        borderColor: '#fff',
    },
    buttonSignUp: {
        backgroundColor: 'red',
        borderRadius: 20,
        height: 40,
        width: 110,
        justifyContent: 'center',
        alignSelf: 'center',
        zIndex: 4,
        marginTop: -12,
        // marginBottom: -100
    },
    signupButton: {
        textAlign: 'center',
        color: 'white',
        fontSize: 15,
        fontFamily: 'Quicksand-Bold'
    },
}

export default ForgotPasswordPage;