import React, { Component } from 'react'
import { View, Text, ImageBackground, Image, TouchableOpacity } from 'react-native'
import { Container, ContainerSection, Button, InputLogin, Spinner } from '../components/common';
import { COLOR } from './../shared/config'

export class StartScreenPage extends React.Component {
	static navigationOptions = {
		header: null
	}

	renderButton = () => {
		return (
			<Button
				onPress={() => this.props.navigation.navigate('Dashboard')}
				style={{ backgroundColor: 'rgb(209, 0, 0)' }}
			>
				Login
			</Button>
		)
	}

	render() {
		return (
			<ImageBackground
				source={require('./../assets/images/bg.jpg')}
				style={{ width: '100%', height: '100%', backgroundColor: COLOR.element_a1 }}
			>
				<View style={styles.container}>
					{/* <View style={{ marginTop: -100 }}>
						<Text style={{ fontFamily: 'Quicksand-Regular', textAlign: 'center', fontWeight: 'bold', marginBottom: 120, fontSize: 100, color: 'white' }}>apapun</Text>
					</View> */}
					<Container>

						<ContainerSection>
							<InputLogin style={styles.Input}
								placeholder="email or username"
								icon="ic_username"
								icons="ic_garis"
							/>
						</ContainerSection>

						<View style={{ marginTop: 15 }} />

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
						<Text style={{ textAlign: 'center', marginTop: 10, color: '#fff' }}>
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
		marginTop: 250
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

export default StartScreenPage