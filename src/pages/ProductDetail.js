import React, { Component } from 'react';
import { View, Text, Image, TouchableNativeFeedback, TouchableOpacity, ScrollView, StyleSheet, TouchableHighlight } from 'react-native'
import { ProductDetailOnProfilePage } from './ProductDetailOnProfile';
import { ReviewPageOnProfilePage } from './reviewOnProfile';
import Icon from 'react-native-vector-icons/Ionicons';

export class ProductDetailProfPage extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        headerLeft:

            <TouchableOpacity
                onPress={() => { navigation.goBack(); console.log(navigation.goBack(), 'Props Order') }}
            >
                <Icon size={30} style={{ marginLeft: 25 }} name='ios-arrow-back' />
            </TouchableOpacity>,
        headerTitle: 'Produk Detail',
        headerStyle: {
            elevation: 0
        }
    });

    constructor(props) {
        super(props)
        this.state = {
            screen: 'ProductDetailOnProfile'
        }

    }

    renderScreen = () => {
        if (this.state.screen === 'ProductDetailOnProfile') {
            return <ProductDetailOnProfilePage navi={this.props.navigation} />
        } else if (this.state.screen === 'reviewOnProfile') {
            return <ReviewPageOnProfilePage navi={this.props.navigation} />
        }
    }

    render() {
        const { screen } = this.state;

        const {
            menuContainerStyle, tabContainer, tabContainerActive, tabText, tabTextActive
        } = styles;

        return (
            <View style={{
                flex: 1
            }}>

                <View style={{
                    width: '100%',
                    flexDirection: 'row',
                    borderBottomWidth: 2,
                    marginBottom: 3,
                    // flex: 1,
                    borderColor: '#e5e5e5'
                }}>

                    <View
                        style={{
                            flex: 1,
                            height: 50,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                        <TouchableNativeFeedback onPress={() => this.setState({ screen: 'ProductDetailOnProfile' })}>
                            <View style={screen === 'ProductDetailOnProfile' ? tabContainerActive : tabContainer}>
                                <Text style={screen === 'ProductDetailOnProfile' ? tabTextActive : tabText}>Detail</Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>


                    <View
                        style={{
                            flex: 1,
                            height: 50,
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                        <TouchableNativeFeedback onPress={() => this.setState({ screen: 'reviewOnProfile' })}>
                            <View style={screen === 'reviewOnProfile' ? tabContainerActive : tabContainer}>
                                <Text style={screen === 'reviewOnProfile' ? tabTextActive : tabText}>Review</Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                </View>


                {this.renderScreen()}
            </View>


        )
    }
}

const styles = StyleSheet.create({
    tabContainer: {
        height: 50,
        justifyContent: 'center'
    },
    tabContainerActive: {
        height: 50,
        justifyContent: 'center',
        borderBottomWidth: 4,
        borderColor: 'red'
    },
    tabText: {
        color: '#c6c6c6',
        textAlign: 'center',
        fontSize: 15,
        fontFamily: 'Quicksand-Regular',

    },
    tabTextActive: {
        color: 'black',
        textAlign: 'center',
        fontSize: 15,
        fontFamily: 'Quicksand-Regular',
        // fontWeight: 'bold'
    }
})

export default ProductDetailProfPage;