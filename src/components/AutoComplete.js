import React, { Component } from 'react'
import { Text, View, TextInput } from 'react-native'
import { COLOR } from '../shared/lb.config';

class AutoComplete extends Component {
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

	render() {
		const { label, value, onChangeText, placeholder, suggestions, editable } = this.props
		const { labelStyle, inputStyle, containerStyle, containerSuggestion } = styles

		return (
			<View style={containerStyle}>
				<Text style={labelStyle}>{label}</Text>
				<View style={{...styles.formWrapper, ...((editable === false) ? styles.lockedForm : {}), ...((this.state.isFocus === true) ? styles.onFocus : {})}}>
					<TextInput 
						placeholder={placeholder}
						autoCorrect={false}
						value={value}
						onBlur={() => this.onBlur()}
						onFocus={() => this.onFocus()}
						underlineColorAndroid={'transparent'}
						onChangeText={onChangeText}
						style={inputStyle}
						editable={editable}
					/>
				</View>
				{
					suggestions && suggestions.length ?
						<View style={containerSuggestion}>
							{this.props.children}
						</View>
					:
						<View />
				}
			</View>
		)
	}
}

const styles = {
	containerStyle: {
		flex: 1
	},
	formWrapper: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		borderWidth: 1,
		borderColor: '#a9a9a9',
		borderRadius: 5,
		paddingLeft: 7,
		backgroundColor: '#fff'
	},
	lockedForm: {
		opacity: 0.4
	},
	inputStyle: {
		fontSize: 14,
		flex: 1,
		padding: 8
	},
	containerSuggestion: {
		borderWidth: 1, 
		borderRadius: 1,
		borderColor: '#ddd',
		backgroundColor: 'white',
		borderBottomWidth: 0,
		borderTopWidth: 0,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2 },
		shadowOpacity: 0.1,
		shadowRadius: 2,
		padding: 5,
		elevation: 3
	},
	labelStyle: {
		color: '#5e5e5e',
		fontSize: 14,
		flex: 1,
		marginBottom: 10,
		fontFamily: 'Muli-Regular'
	},
	onFocus: {
		borderColor: COLOR.secondary_a
	}
}

export default AutoComplete
