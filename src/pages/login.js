import React, { Component } from 'react'
import { View, Text, ImageBackground, Image, AsyncStorage, TouchableOpacity, ToastAndroid, StatusBar, Keyboard } from 'react-native'
import { Container, ContainerSection, Button, InputLogin, Spinner } from '../components/common';
import axios from 'axios';
import { COLOR } from './../shared/config';
import { NavigationActions, StackActions } from 'react-navigation';
import { IPSERVER } from './../shared/config';

export class LoginPage extends React.Component {
	static navigationOptions = {
		header: null
	}

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
		const { email, password } = this.state;
		return (
			<ImageBackground
				source={require('./../assets/images/bg-login.jpg')}
				style={{ width: '100%', height: '100%', backgroundColor: COLOR.secondary_c }}
			>
				<StatusBar
					backgroundColor={COLOR.statusBar}
					barStyle="dark-content"
				/>


				<View style={styles.container}>

					<View style={{ marginBottom: 60 }}>
						<View style={{ alignItems: 'center' }}>
							<Image
								style={styles.image}
								source={require('./../assets/images/ic_logo2.png')}
							/>
							<Text style={{ marginTop: -30, fontSize: 60, color: '#FFFFFF', fontFamily: 'Quicksand-Bold' }}>
								apapun
							</Text>
						</View>
						<Text style={{ marginTop: -8, fontSize: 10, color: '#FFFFFF', fontFamily: 'Quicksand-Bold', marginRight: 75, textAlign: 'right' }}>
							ANYTHING CAN BE
						</Text>
					</View>

					<Container>
						<ContainerSection>
							<InputLogin 
								style={styles.Input}
								placeholder="email or username"
								icon="ic_username"
								icons="ic_garis"
								onChangeText={val => this.onChange('email', val)}
								value={email}
							/>
						</ContainerSection>

						<View style={{ padding: 7 }} />

						<ContainerSection>
							<InputLogin
								secureTextEntry
								placeholder="password"
								icon="ic_password"
								icons="ic_garis"
								onChangeText={val => this.onChange('password', val)}
								value={password}
							/>
						</ContainerSection>

						<View style={{ marginTop: 35 }}>
							<ContainerSection>
								{this.renderButton()}
							</ContainerSection>
						</View>
					</Container>

					<TouchableOpacity
						onPress={() => ToastAndroid.show('Under Development', ToastAndroid.SHORT)}
					>
						<Text style={{ textAlign: 'center', marginTop: 10, color: '#FFFFFF', fontFamily: 'Quicksand-Regular' }}>
							Forget password?
						</Text>
					</TouchableOpacity>

					<TouchableOpacity
						onPress={() => this.props.navigation.navigate('RegistrationBuyer')}
					>
						<Text style={{ textAlign: 'center', marginTop: 10, color: '#FFFFFF', fontFamily: 'Quicksand-Regular' }}>
							Don't have account ? Register!
						</Text>
					</TouchableOpacity>
				</View>
			</ImageBackground >
		)
	}
}

const styles = {
	container: {
		flex: 1,
		justifyContent: 'center'
	},
	input: {
		height: 36,
		padding: 10,
		margin: 18,
		fontSize: 18,
		borderWidth: 1,
		borderRadius: 10,
		borderColor: '#48BBEC',
		backgroundColor: 'rgba(0,0,0,0)',
	},
	image: {
		width: 150,
		height: 150
	}
}

export default LoginPage