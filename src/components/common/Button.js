import React, { Component } from 'react'
import { Text, View, TouchableNativeFeedback } from 'react-native'
import { COLOR } from '../../shared/lb.config';

class Button extends Component {
  render() {
    const { secondary, style, textStyle } = this.props

    return (
      <TouchableNativeFeedback
        onPress={this.props.onPress}
        background={TouchableNativeFeedback.SelectableBackground()}
      >
        <View style={[secondary ? styles.secondaryButtonStyle : styles.primaryButtonStyle, style]}>
          <Text style={[secondary ? styles.secondaryTextStyle : styles.primaryTextStyle, textStyle]}>{this.props.children}</Text>
        </View>
      </TouchableNativeFeedback>
    )
  }
}

const styles = {
  primaryTextStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    paddingTop: 12,
    paddingBottom: 12,
    fontFamily: 'Muli-Bold'
  },
  secondaryTextStyle: {
    alignSelf: 'center',
    color: COLOR.secondary_a,
    fontSize: 16,
    paddingTop: 12,
    paddingBottom: 12,
    fontFamily: 'Muli-Bold'
  },
  primaryButtonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: COLOR.secondary_a,
    borderRadius: 8,
  },
  secondaryButtonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 8,
  }
}

export { Button }
