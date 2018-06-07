import React, { Component } from 'react'
import { Text, View, TextInput, Image } from 'react-native'
import { COLOR } from './../../shared/config';

class InputLogin extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isFocus: false
		}
	}

	onFocus = () => {
		this.setState({
			isFocus: true,
		})
	}

	onBlur = () => {
		this.setState({
			isFocus: false,
		})
	}

	imageIcon = (icon) => {
		switch (icon) {
			case 'ic_username':
				return require('./../../assets/images/ic_username.png')
			default:
				return require('./../../assets/images/ic_password.png')
		}
	}

	imageIcons = (icons) => {
		switch (icons) {
			case 'ic_garis':
				return require('./../../assets/images/ic_garis.png')
			default:
				return require('./../../assets/images/ic_garis.png')
		}
	}

	render() {
		const { label, value, onChangeText, placeholder, icons, secureTextEntry, keyboardType, multiline, lines, editable, icon, textAlignVertical } = this.props
		const { inputStyle, labelStyle, containerStyle } = styles

		return (
			<View style={containerStyle}>
				{
					label ?
						<Text style={labelStyle}>{label}</Text>
						:
						<View />
				}

				<View style={{ ...styles.formWrapper, ...((editable === false) ? styles.lockedForm : {}), ...((this.state.isFocus === true) ? styles.onFocus : {}) }}>
					{
						icon ? <Image source={this.imageIcon(icon)} style={{ marginLeft: 5, width: 24, height: 24 }} /> : <View />
					}
					{
						icons ? <Image source={this.imageIcons(icons)} style={{ marginLeft: 15, marginRight: 15, width: 1, height: 24 }} /> : <View />
					}
					<TextInput
						secureTextEntry={secureTextEntry}
						placeholder={placeholder}
						autoCorrect={false}
						value={value}
						onChangeText={onChangeText}
						style={inputStyle}
						keyboardType={keyboardType}
						multiline={multiline}
						editable={editable}
						onBlur={() => this.onBlur()}
						onFocus={() => this.onFocus()}
						underlineColorAndroid={'transparent'}
						numberOfLines={lines || 1}
						textAlignVertical={textAlignVertical}
					/>
				</View>
			</View>
		)
	}
}

const styles = {
	formWrapper: {
		height: 50,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 1,
		borderColor: '#a9a9a9',
		borderRadius: 9,
		paddingLeft: 7,
		// backgroundColor: '#fff'
		backgroundColor: 'rgba(110,104,104,0.5)'
	},
	lockedForm: {
		opacity: 0.6
	},
	inputStyle: {
		fontSize: 14,
		flex: 1,
		// padding: 8,
	},
	labelStyle: {
		color: '#5e5e5e',
		fontWeight: 'bold',
		fontSize: 14,
		flex: 1,
		marginBottom: 10,
		// marginTop: 10,
	},
	onFocus: {
		borderColor: COLOR.secondary_a
	},
	containerStyle: {
		flex: 1
	}
}

export { InputLogin }
