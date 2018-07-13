import React, { Component } from 'react'
import { View } from 'react-native'

class Card extends Component {
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
    borderRadius: 2,
    elevation: 1,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
    backgroundColor: '#fff'
  }
}

export { Card }
