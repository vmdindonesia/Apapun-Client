import React, { Component } from 'react'
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { Container, ContainerSection, Button, InputLogin, Spinner } from '../components/common';
import { COLOR } from './../shared/config'

export class LoginPage extends React.Component {
	static navigationOptions = {
		header: null
	}

	renderButton = () => {
		return (
			<Button
				onPress={() => this.props.navigation.navigate('Dashboard')}
				style={{ backgroundColor: 'rgb(209, 0, 0)', fontFamily: 'Quicksand-Regular' }}
			>
				Login
			</Button>
		)
	}

	render() {
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
							/>
						</ContainerSection>

						<ContainerSection>
							<InputLogin
								placeholder="password"
								icon="ic_password"
								icons="ic_garis"
							/>
						</ContainerSection>

						<View style={{ marginTop: 50 }}>
							<ContainerSection>
								{this.renderButton()}
							</ContainerSection>
						</View>
					</Container>

					<TouchableOpacity>
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