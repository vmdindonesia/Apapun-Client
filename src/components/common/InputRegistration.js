import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'


class InputRegistration extends Component {
	render() {
		const { label, value, onChangeText, placeholder, inlineImageLeft, secureTextEntry, keyboardType, multiline, numberOfLines, editable, maxLength } = this.props
		const { inputStyle, labelStyle, containerStyle } = styles

		return (
			<View style={containerStyle}>
				<Text style={labelStyle}>{label}</Text>
				<View style={styles.inputContainer}>
					<TextInput
						secureTextEntry={secureTextEntry}
						placeholder={placeholder}
						autoCorrect={false}
						value={value}
						onChangeText={onChangeText}
						style={inputStyle}
						keyboardType={keyboardType}
						editable={editable}
						maxLength={maxLength}
						multiline={multiline}
						numberOfLines={numberOfLines}
						underlineColorAndroid='transparent'
						inlineImageLeft={inlineImageLeft}
					/>
				</View>
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
		flex: 1
	},
	labelStyle: {
		fontSize: 16,
		flex: 1,
		color: 'black',
		fontFamily: 'muli'
	},
	containerStyle: {
		flex: 1,
	},
	inputContainer: {
		flexDirection: 'row',
		borderColor: '#555',
		borderRadius: 3,
		borderWidth: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#fff'
	},
}

export { InputRegistration }
