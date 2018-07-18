import React, { Component } from 'react'
import { View, Text, Image, AsyncStorage, TouchableOpacity, ScrollView, StyleSheet, FlatList } from 'react-native'
import { Container, Button } from '../components/common';
import Icon from 'react-native-vector-icons/Ionicons';

export class GambarPage extends React.Component {

    static navigationOptions = ({ navigation }) => ({
        headerLeft:
            <TouchableOpacity
                onPress={() => { navigation.goBack(); console.log(navigation.goBack(), 'Props Order') }}
            >
                <Icon size={30} style={{ marginLeft: 25, color: '#EF1C25' }} name='ios-arrow-back' />
            </TouchableOpacity>,
        headerTitle: 'Gambar'
    });

    constructor(props) {
        super(props)
        this.state = {
            photo: [
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg'
            ],
        }
    }

    renderProductItem = (data) => {
        console.log(data, '098');
        return (
            <TouchableOpacity style={{ marginBottom: 7, paddingLeft: 7 }}>
                <Image
                    style={styles.item}
                    source={{ uri: data.item }}
                />
            </TouchableOpacity>
        )
    }

    renderButton = () => {
        // if (this.state.loading) {
        //     return <Spinner size="small" />
        // }
        return (
            <Button
                style={{
                    backgroundColor: '#000',
                    justifyContent: 'center',
                    borderRadius: 30,
                }}
            // onPress={() => this.onValidation()}
            >
                <Text style={{ color: '#FFFFFF', fontFamily: 'Quicksand-Bold' }}>Tambah Gambar</Text>
            </Button>
        )
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <View style={{ width: '85%', height: 40, alignSelf: 'center', marginTop: 20 }}>
                    {this.renderButton()}
                </View>
                <View style={{ flex: 1, marginTop: 10, backgroundColor: '#fff' }}>
                    <View>
                        <FlatList
                            data={this.state.photo}
                            contentContainerStyle={styles.list}
                            renderItem={this.renderProductItem.bind(this)}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        height: 100,
        width: 110,
        borderRadius: 4,
        alignSelf: 'stretch',
        resizeMode: 'cover',

    },
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})

export default GambarPage;
