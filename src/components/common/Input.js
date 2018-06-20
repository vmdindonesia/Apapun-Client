import React, { Component } from 'react'
import { Text, View, TextInput, Image } from 'react-native'
import { COLOR } from './../../shared/config';

class Input extends Component {
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
				return require('../../assets/images/ic_username.png')
			default:
				return require('../../assets/images/ic_password.png')
		}
	}

	render() {
		const { label, value, onChangeText, placeholder, secureTextEntry, keyboardType, multiline, lines, editable, icon, textAlignVertical, onFocus} = this.props
		const { inputStyle, labelStyle, containerStyle } = styles

		return (
			<View style={containerStyle}>
				{
					label ?
						<Text style={labelStyle}>{label}</Text>
					:
						<View />
				}

				<View style={{...styles.formWrapper, ...((editable === false) ? styles.lockedForm : {}), ...((this.state.isFocus === true) ? styles.onFocus : {}) }}>
					{
						icon ? <Image source={this.imageIcon(icon)} style={{width: 24, height: 24}} /> : <View />
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
						onFocus={onFocus}
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
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 1,
		borderColor: '#a9a9a9',
		borderRadius: 4,
		paddingLeft: 7,
		backgroundColor: '#fff'
	},
	lockedForm: {
		opacity: 0.6
	},
	inputStyle: {
		fontSize: 14,
		flex: 1,
		padding: 8,
		fontFamily: 'Quicksand-Regular'
	},
	labelStyle: {
		color: '#5e5e5e',
		fontFamily: 'Quicksand-Bold',
		fontSize: 14,
		flex: 1,
		marginBottom: 10,
		marginTop: 10,
	},
	onFocus: {
		borderColor: COLOR.secondary_a
	},
	containerStyle: {
		flex: 1
	}
}

export { Input }
