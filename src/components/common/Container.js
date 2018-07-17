import React, { Component } from 'react'
import { View } from 'react-native'

class Container extends Component {
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
		marginLeft: 25,
		marginRight: 25,
		marginTop: 10
	}
}

export { Container }
