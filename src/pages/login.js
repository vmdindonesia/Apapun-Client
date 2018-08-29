import React, { Component } from 'react';
import { View, Text, Image, AsyncStorage, TouchableOpacity, ToastAndroid, Keyboard, ScrollView } from 'react-native'
import { Container, ContainerSection, Button, InputLogin, Spinner, Input } from '../components/common';
import axios from 'axios';
import Icon from 'react-native-vector-icons/Ionicons';
import { COLOR } from '../shared/config';
import { NavigationActions, StackActions } from 'react-navigation';
import { IPSERVER } from '../shared/config';

export class LoginPage extends React.Component {
	static navigationOptions = ({ navigation }) => ({
		headerLeft:
			<TouchableOpacity
				onPress={() => { navigation.goBack(); console.log(navigation.goBack(), 'Props Order') }}
			>
				<Icon size={30} style={{ marginLeft: 25, color: '#EF1C25' }} name='ios-arrow-back' />
			</TouchableOpacity>,
		headerTitle: 'Login'
	});

	constructor(props) {
		super(props)

		this.state = {
			email: '',
			password: '',
			loading: false
		}
	}

	componentDidMount() {
		AsyncStorage.removeItem('VMDDEVELOPER');
	}

	onChange = (name, value) => {
		this.setState({ [name]: value }, () => {
			console.log(this.state[name]);
		})
	}

	onLogin() {
		Keyboard.dismiss();
		const { username, password } = this.state;
		switch (username) {
			case '':
				return ToastAndroid.show('Email/Username Tidak Boleh Kosong', ToastAndroid.SHORT);
			default:
				switch (password) {
					case '':
						return ToastAndroid.show('Password Tidak Boleh Kosong', ToastAndroid.SHORT);
					default:
						console.log('Password Tidak Kosong');
						return this.onLoginFire();
				}
		}
	}

	onLoginFire = () => {
		Keyboard.dismiss();
		this.setState({ loading: true });

		const { email, password } = this.state;
		axios.post(`${IPSERVER}/ApapunUsers/UserAuth`, {
			email,
			password
		}, {
				headers: {
					'Content-Type': 'application/json',
				}
			}).then(response => {
				console.log(response.data, 'Data Login');
				const IdUser = response.data;
				AsyncStorage.setItem('VMDDEVELOPER', JSON.stringify(IdUser), () => {
					const resetAction = StackActions.reset({
						index: 0,
						actions: [NavigationActions.navigate({ routeName: 'Dashboard' })],
					});
					this.props.navigation.dispatch(resetAction);
				});
			}).catch(error => {
				console.log(error, 'ERROR LOGIN');
				this.setState({ loading: false });
				return ToastAndroid.show('Username atau Password salah', ToastAndroid.SHORT);
			});
	}

	renderButton = () => {
		if (this.state.loading) {
			return <Spinner size="small" />
		}
		return (
			<Button
				onPress={() => this.onLogin()}
				style={{ backgroundColor: 'rgb(209, 0, 0)' }}
			>
				<Text style={{ color: '#FFFFFF', fontFamily: 'Quicksand-Bold' }}>
					Login
				</Text>
			</Button>
		)
	}

	render() {
		const { email, password, loading } = this.state;
		return (
			<View style={styles.container}>
				<Image
					style={{ width: 220, height: 100, }}
					source={require('./../assets/images/logotext.png')}
					resizeMode='contain'
				/>
				<View style={{ width: '100%', height: 75 }}>
					<Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, color: 'black', paddingTop: 10 }}>HI, WELCOME!</Text>
					<Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 13, color: 'black', paddingTop: 10 }}>Silahkan masukan Email/ID akun yang sudah kamu daftarkan</Text>
				</View>
				<View style={styles.containerForm}>
					<View style={{ width: '90%', height: 50 }}>
						<Input
							placeholder="Email or username"
							icon="ic_username"
							onChangeText={val => this.onChange('email', val)}
							value={email}
						/>
					</View>

					<View style={{ width: '90%', height: 50, marginTop: 10 }}>
						<Input
							secureTextEntry
							placeholder="Password"
							icon="ic_password"
							onChangeText={val => this.onChange('password', val)}
							value={password}
						/>
					</View>
				</View>
				{
					loading ?
						<Spinner size="small" />
						:
						<TouchableOpacity style={styles.buttonSignUp}
							onPress={() => this.onLogin()}
						>
							<Text style={styles.signupButton}>Login</Text>
						</TouchableOpacity>
				}
			</View>
		)
	}
}

const styles = {
	container: {
		flex: 1,
		padding: 15,
		backgroundColor: '#eaeaea'
	},
	containerForm: {
		marginTop: 10,
		borderRadius: 20,
		backgroundColor: '#ffffff',
		flexDirection: 'column',
		height: 200,
		width: '100%',
		justifyContent: 'center',
		alignItems: 'center',
		zIndex: 1,
		borderWidth: 0,
		borderColor: '#fff',
	},
	buttonSignUp: {
		// marginTop: 60,
		backgroundColor: '#ef1c25',
		borderRadius: 20,
		height: 40,
		width: 110,
		justifyContent: 'center',
		alignSelf: 'center',
		zIndex: 4,
		marginTop: -22.5,
		marginBottom: -30
	},
	signupButton: {
		textAlign: 'center',
		color: 'white',
		fontSize: 15,
		fontFamily: 'Quicksand-Bold'
	},

}

export default LoginPage