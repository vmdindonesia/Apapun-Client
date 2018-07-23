import React, { Component } from 'react'
import { View, Text, Image, TouchableNativeFeedback, TouchableOpacity, ScrollView, StyleSheet, TouchableHighlight } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

export class ReviewPageOnProfilePage extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        headerLeft:

            <TouchableOpacity
                onPress={() => { navigation.goBack(); console.log(navigation.goBack(), 'Props Order') }}
            >
                <Icon size={30} style={{ marginLeft: 25 }} name='ios-arrow-back' />
            </TouchableOpacity>,
        headerTitle: 'Product Detail',
        headerStyle: {
            elevation: 0
        }
    });

    constructor(props) {
        super(props)
        this.state = {
            // screen: 'InformasiBank'
        }

    }


    render() {

        return (
            <View style={{
                flex: 1, justifyContent: 'center'
            }}>
                <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, fontWeight: 'bold', textAlign: 'center' }}>This Page Is Under Development</Text>
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
        borderBottomWidth: 3,
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

export default ReviewPageOnProfilePage;