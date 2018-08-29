import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, StyleSheet } from 'react-native'
import { InputSearch } from '../components/common';

export class FashionCrafterPage extends React.Component {

    // static navigationOptions = {
    //     headerTitle: 'Crafter List'
    // }

    constructor(props) {
        super(props)
        this.state = {
            photo: [
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',
            ]
        }
    }

    renderCrafterFashion = (data) => {
        console.log(data, '098');
        return (
            <TouchableOpacity
                style={{
                    borderRadius: 4,
                    marginRight: 15,
                    flex: 1,
                    padding: 5,
                    marginBottom: 5
                }}
            >
                <Image
                    style={styles.item}
                    source={{ uri: data.item }}
                />
                <Text style={{ textAlign: 'center', fontFamily: 'Quicksand-Bold', fontSize: 13, marginTop: 5, color:'black' }}>Gal Gadot</Text>
                <View style={{ paddingTop: 5 }}>
                    <Image
                        style={{
                            height: 20,
                            width: 30,
                            borderRadius: 0,
                            alignSelf: 'center'
                        }}
                        source={require('./../assets/images/Cukup.png')}
                        resizeMode='contain'
                    />
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <View style={{
                flex: 1,
            }}>

                <View style={{
                    backgroundColor: '#e5e5e5',
                    width: '100%',
                    height: 70,
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <View style={{
                        width: '90%',
                        height: 50,
                        justifyContent: 'center'
                    }}>
                        <InputSearch
                            // onFocus={() => navigate('FilterBefore')}
                            placeholder="     Cari Crafter..."
                            icon="ic_search"
                        />
                    </View>
                </View>

                <View style={{
                    backgroundColor: '#e5e5e5',
                    width: '100%',
                    height: '100%',
                    flexDirection: 'row',
                    justifyContent: 'center',
                }}>
                        <View style={{
                            height: 150, width: '100%', marginTop: 15,
                            flexDirection: 'row', justifyContent: 'center', borderColor: 'gray',
                            flex: 1, paddingLeft: 10, paddingRight: 10
                        }}>
                            <View style={{ flex: 1 }}>
                                <FlatList
                                    data={this.state.photo}
                                    horizontal
                                    renderItem={this.renderCrafterFashion.bind(this)}
                                    showsHorizontalScrollIndicator={false}
                                />
                            </View>
                        </View>
                    </View>
                </View>
        )
    }

}

const styles = StyleSheet.create({
    item: {
        height: 90,
        width: 90,
        borderRadius: 100,
        alignSelf: 'center',
    },
})

export default FashionCrafterPage

