import React, { Component } from 'react'
import { Text, View, TouchableNativeFeedback, Image } from 'react-native'
import { COLOR } from '../../shared/lb.config';

class ButtonOrder extends Component {
  render() {
    const { secondary, style, textStyle } = this.props

    return (
      <TouchableNativeFeedback
        onPress={this.props.onPress}
        background={TouchableNativeFeedback.SelectableBackground()}
      >
        <View style={[secondary ? styles.secondaryButtonStyle : styles.primaryButtonStyle, style]}>
          <View style={{margin: 5, marginRight: 10}}>
            <Image source={require('../../assets/images/buat-permintaan.png')} style={{width: 24, height: 24}} />
          </View>
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
    paddingTop: 8,
    paddingBottom: 12,
    fontFamily: 'Muli-Regular',
  },
  secondaryTextStyle: {
    alignSelf: 'center',
    color: COLOR.secondary_a,
    fontSize: 16,
    paddingTop: 8,
    paddingBottom: 12,
    fontFamily: 'Muli-Regular',
  },
  primaryButtonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: COLOR.secondary_a,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  secondaryButtonStyle: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'center'

  }
}

export { ButtonOrder }
