import React, { Component } from 'react'
import { View, TextInput } from 'react-native'

class InputChat extends Component {
	render() {
		const { value, onChangeText, placeholder, secureTextEntry, keyboardType, multiline } = this.props
		const { inputStyle, containerStyle } = styles

		return (
			<View style={containerStyle}>
				<TextInput 
					secureTextEntry={secureTextEntry}
					placeholder={placeholder}
					autoCorrect={false}
					value={value}
					onChangeText={onChangeText}
					style={inputStyle}
					keyboardType={keyboardType}
					multiline={multiline}
				/>
			</View>
		)
	}
}

const styles = {
	inputStyle: {
		paddingLeft: 5,
		paddingRight: 5,
		paddingBottom: 10,
		fontSize: 16,
		flex: 1,
	},
	containerStyle: {
		minHeight: 60,
		flex: 1,
	}
}

export { InputChat }
