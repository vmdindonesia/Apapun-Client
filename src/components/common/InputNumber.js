import React, { Component } from 'react';
import { Text, View, TextInput, Image, TouchableNativeFeedback } from 'react-native'
import { COLOR } from '../../shared/config';

class InputNumber extends Component {
	constructor(props) {
		super(props)
		this.state = {
			isFocus: false
		}
	}

	onBlur = () => {
		this.setState({
			isFocus: false,
		})
	}

	minus = () => {
		console.log('PROPS MINUS');
		// this.props.isMinus();
	}

	plus = () => {
		console.log('PROPS PLUS');
		// this.props.isPlus();
	}

	imageIcon = (icon) => {
		switch (icon) {
			case 'minus':
				return require('../../assets/images/minus.png')
			case 'plus':
				return require('../../assets/images/plus.png')
			default:
				return require('../../assets/images/plus.png')
		}
	}

	imageIcons = (icons) => {
		switch (icons) {
			case 'minus':
				return require('../../assets/images/minus.png')
			case 'plus':
				return require('../../assets/images/plus.png')
			default:
				return require('../../assets/images/plus.png')
		}
	}

	render() {
		const { label, value, onChangeText, placeholder, onFocus, secureTextEntry, keyboardType, multiline, lines, editable, icon, icons, textAlignVertical } = this.props
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
						icon ?
							<Image source={this.imageIcon(icon)} style={{ width: 24, height: 24 }} />
							:
							<View />
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
					{
						icons ?
							<Image source={this.imageIcons(icons)} style={{ width: 21, height: 21 }} />
							:
							<View />
					}
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
		paddingRight: 7,
		backgroundColor: '#fff'
	},
	lockedForm: {
		opacity: 0.6
	},
	inputStyle: {
		fontSize: 14,
		flex: 1,
		padding: 8,
		fontFamily: 'Muli-Regular'
	},
	labelStyle: {
		color: '#5e5e5e',
		fontSize: 14,
		flex: 1,
		fontFamily: 'Muli-Regular',
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

export { InputNumber }
