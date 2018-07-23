import React, { Component } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, TouchableWithoutFeedback, FlatList, TouchableOpacity } from 'react-native'
import { InputSearch } from '../components/common';
// import axios from 'axios';

export class BerandaCrafterPage extends React.Component {

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
            ],
            photos: [
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',
                'http://animaster.com/wp-content/uploads/2018/02/after-10-12-art-design-college.jpg',
            ]
        }
    }

    renderCrafterPro = (data) => {
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
                <Text style={{ textAlign: 'center', fontFamily: 'Quicksand-Bold', fontSize: 13, marginTop: 5 }}>Gal Gadot</Text>
                <View style={{ paddingTop: 5 }}>
                    <Image
                        style={{
                            height: 20,
                            width: 20,
                            borderRadius: 0,
                            alignSelf: 'center'
                        }}
                        source={require('./../assets/images/kiss_icon.jpg')}
                    />
                </View>
            </TouchableOpacity>
        )
    }

    renderCrafterDebut = (data) => {
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
                <Text style={{ textAlign: 'center', fontFamily: 'Quicksand-Bold', fontSize: 13, marginTop: 5 }}>Rasia</Text>
                <View style={{ paddingTop: 5 }}>
                    <Image
                        style={{
                            height: 20,
                            width: 20,
                            borderRadius: 0,
                            alignSelf: 'center'
                        }}
                        source={require('./../assets/images/kiss_icon.jpg')}
                    />
                </View>
            </TouchableOpacity>
        )
    }

    render() {
        return (
            <ScrollView>
                <View style={{
                    flex: 1
                }}>
                    <View style={{
                        backgroundColor: '#e5e5e5',
                        width: '100%',
                        height: 50,
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
                                placeholder="Cari Crafter..."
                                icon="ic_search"
                            />
                        </View>
                    </View>

                    <View style={{
                        flex: 4,
                        height: '100%',
                        width: '100%',
                        alignItems: 'center',
                        flexDirection: 'column'
                    }}>


                        <View style={{
                            flex: 1,
                            width: '90%',
                            height: 250,
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}>
                            <View style={{
                                width: '100%',
                                height: '85%',
                                borderRadius: 15
                            }}>
                                <Image style={styles.imageCommercial}
                                    source={require('./../assets/images/crafter_pic.jpg')}
                                />
                            </View>
                        </View>
                        <View style={{ borderBottomWidth: 1.3, borderColor: '#e5e5e5', width: '90%' }} />
                        <View style={{
                            flex: 1,
                            height: 60,
                            width: '95%',
                            marginTop: 17,
                            flexDirection: 'row',
                            justifyContent: 'center',

                        }}>

                            <View style={{
                                height: '10%',
                                width: '75%'
                            }}>
                                <Text style={{ fontWeight: 'bold', fontSize: 15, }}>Profesional Crafter</Text>
                                <Text style={{ color: 'black', fontSize: 13, paddingTop: 2, }}>Crafter ini sudah memiliki sejarah dalam keahlian crafting dibidangnya masing-masing</Text>
                            </View>

                            <View style={{
                                height: '10%',
                                width: '20%'
                            }}>
                                <TouchableWithoutFeedback>
                                    <Text style={{ color: 'red', fontSize: 13, fontWeight: 'bold', paddingLeft: 15, }}>See All</Text>
                                </TouchableWithoutFeedback>
                            </View>
                        </View>

                        <View style={{
                            height: 150, width: '100%', marginTop: 15,
                            flexDirection: 'row', justifyContent: 'center', borderColor: 'gray',
                            flex: 1, paddingLeft: 10, paddingRight: 10
                        }}>
                            <View style={{ flex: 1 }}>
                                <FlatList
                                    data={this.state.photo}
                                    horizontal
                                    renderItem={this.renderCrafterPro.bind(this)}
                                    showsHorizontalScrollIndicator={false}
                                />
                            </View>
                        </View>

                        <View style={{ borderBottomWidth: 1.3, borderColor: '#e5e5e5', width: '90%', marginTop: 5 }} />
                        <View style={{
                            flex: 1,
                            height: 30,
                            width: '95%',
                            marginTop: 17,
                            flexDirection: 'row',
                            justifyContent: 'center'
                        }}>

                            <View style={{
                                height: '5%',
                                width: '75%'
                            }}>
                                <Text style={{ paddingLeft: 5, fontSize: 15, fontWeight: 'bold' }}>Crafter On Debut</Text>
                            </View>
                            <View style={{
                                height: '10%',
                                width: '20%',
                            }}>
                                <TouchableWithoutFeedback>
                                    <Text style={{ color: 'red', fontSize: 13, fontWeight: 'bold', paddingLeft: 15 }}>See All</Text>
                                </TouchableWithoutFeedback>
                            </View>
                        </View>
                        <View style={{
                            height: 150, width: '100%', marginTop: 15,
                            flexDirection: 'row', justifyContent: 'center', borderColor: 'gray',
                            flex: 1, paddingLeft: 10, paddingRight: 10
                        }}>
                            <View style={{ flex: 1 }}>
                                <FlatList
                                    data={this.state.photos}
                                    horizontal
                                    renderItem={this.renderCrafterDebut.bind(this)}
                                    showsHorizontalScrollIndicator={false}
                                />
                            </View>
                        </View>

                    </View>
                </View>
            </ScrollView>
        )
    }

}

const styles = StyleSheet.create({
    imageCommercial: {
        width: '100%',
        height: '100%',
        borderRadius: 10
    },
    item: {
        height: 90,
        width: 90,
        borderRadius: 100,
        alignSelf: 'center'
    },
    list: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    }
});

export default BerandaCrafterPage;

