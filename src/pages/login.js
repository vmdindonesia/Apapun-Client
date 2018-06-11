import React, { Component } from 'react'
import { View, Text, ImageBackground, AsyncStorage, TouchableOpacity } from 'react-native'
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

	componentWillMount() {
		AsyncStorage.getItem('VMDDEVELOPER', (err, result) => {
			console.log(result, 'STORAGE')
			if (result) {
				const resetAction = StackActions.reset({
					index: 0,
					actions: [NavigationActions.navigate({ routeName: 'Dashboard' })],
				});
				this.props.navigation.dispatch(resetAction);
			}
		})
	}

	onChange = (name, value) => {
		this.setState({ [name]: value }, () => {
			console.log(this.state[name]);
		})
	}

	loginIn = () => {
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
				console.log(response.data.id);
				this.setState({
					email: '',
					password: '',
					loading: false
				});
				AsyncStorage.setItem('VMDDEVELOPER', response.data, () => {
					AsyncStorage.getItem('VMDDEVELOPER', (error, result) => {
						console.log(result, 'Result');
					})
					// const resetAction = StackActions.reset({
					// 	index: 0,
					// 	actions: [NavigationActions.navigate({ routeName: 'Dashboard' })],
					// });
					// this.props.navigation.dispatch(resetAction);
				});
			}).catch(error => {
				console.log(error, 'ERROR LOGIN');
				this.setState({ loading: false });
			});
	}

	renderButton = () => {
		if (this.state.loading) {
			return <Spinner size="small" />
		}
		return (
			<Button
				onPress={() => this.loginIn()}
				style={{ backgroundColor: 'rgb(209, 0, 0)' }}
			>
				Login
			</Button>
		)
	}

	render() {
		const { email, password } = this.state;
		return (
			<ImageBackground
				source={require('./../assets/images/bg.jpg')}
				style={{ width: '100%', height: '100%', backgroundColor: COLOR.secondary_c }}
			>
				<View style={styles.container}>
					<Container>
						<ContainerSection>
							<InputLogin style={styles.Input}
								placeholder="email or username"
								icon="ic_username"
								icons="ic_garis"
								onChangeText={val => this.onChange('email', val)}
								value={email}
							/>
						</ContainerSection>

						<ContainerSection>
							<InputLogin
								placeholder="password"
								icon="ic_password"
								icons="ic_garis"
								onChangeText={val => this.onChange('password', val)}
								value={password}
							/>
						</ContainerSection>

						<View style={{ marginTop: 50 }}>
							<ContainerSection>
								{this.renderButton()}
							</ContainerSection>
						</View>
					</Container>

					<TouchableOpacity
						onPress={() => this.loginIn()}
					>
						<Text style={{ textAlign: 'center', marginTop: 10, color: '#FFFFFF', fontFamily: 'Quicksand-Regular' }}>
							Lupa Kata Sandi?
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
		justifyContent: 'center',
		marginTop: 200
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
	}
}

export default LoginPage