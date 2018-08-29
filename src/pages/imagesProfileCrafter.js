import React, { Component } from 'react';
import {
    View, Text, ImageBackground, Image, TouchableNativeFeedback, Alert,
    TouchableOpacity, ScrollView, TouchableWithoutFeedback, FlatList, StyleSheet
} from 'react-native'

export class ImagesProfileCrafterPage extends React.Component {

    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {
            photo: [
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg'
            ]
        };
    }

    renderProductItem = (data) => {
        console.log(data, '098');
        return (
            <View style={{
                borderRadius: 4,
                elevation: 2,
                marginLeft: 12,
                marginBottom: '2%',
                backgroundColor: '#FFF'
            }}>
                <Image
                    style={{
                        height: 100,
                        width: 120,
                        borderRadius: 4,
                        alignSelf: 'stretch',
                        resizeMode: 'cover',
                    }}
                    source={{ uri: data.item }}
                />
            </View>
        )
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <FlatList
                    data={this.state.photo}
                    renderItem={this.renderProductItem.bind(this)}
                    showsHorizontalScrollIndicator={false}
                    horizontal={false}
                    numColumns={3}
                />
            </View>
        )
    }
}

export default ImagesProfileCrafterPage;