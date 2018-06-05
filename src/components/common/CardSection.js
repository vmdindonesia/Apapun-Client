import React, { Component } from 'react'
import { View } from 'react-native'

class CardSection extends Component {
  render() {
    return (
      <View style={styles.containerStyle}>
        {this.props.children}
      </View>
    )
  }
}

const styles = {
  containerStyle: {
    borderBottomWidth: 1, 
    padding: 5,
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative',
    backgroundColor: '#fff'
  }
}

export { CardSection }
