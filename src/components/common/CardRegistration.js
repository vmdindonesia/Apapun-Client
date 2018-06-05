import React, { Component } from 'react'
import { View } from 'react-native'

class CardRegistration extends Component {
	render() {
		return (
			<View style={[styles.containerStyle, this.props.style]}>
				{this.props.children}
			</View>
		)
	}
}

const styles = {
	containerStyle: {
		elevation: 1,
		marginLeft: 15,
		marginRight: 15,
		marginTop: 10
	}
}

export { CardRegistration }
