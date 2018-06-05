import React, { Component } from 'react';

import {
    AppRegistry,
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import { InputSearch } from './../components/common'
import Swiper from 'react-native-swiper';


export class DashboardPage extends React.Component {
    static navigationOptions = {
        header: null
    }

    render() {
        return (


            <View style={{ height: 250 }}>
                <Swiper
                    style={styles.wrapper}
                    autoplay
                    showsButtons={true}
                    dot={<View style={{ backgroundColor: '#FFFFFF', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3 }} />}
                >
                    <View style={styles.slide1}>
                        <Image
                            style={styles.imageStyle}
                            source={require('./../assets/images/Cat-1.jpg')}
                        />
                    </View>
                    <View style={styles.slide2}>
                        <Image
                            style={styles.imageStyle}
                            source={require('./../assets/images/Cat-2.jpg')}
                        />
                    </View>
                </Swiper>

                <View style={styles.headerText}>
                    <InputSearch
                        // onFocus={() => navigate('FilterBefore')}
                        placeholder="Cari Komoditas..."
                        icon="ic_search"
                    />
                </View>




            </View>


        )
    }

};

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    slide1: {
        flex: 1,
        // height: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    slide2: {
        flex: 1,
        // weight: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText: {
        flex: 1,
        marginTop: 12,
        marginBottom: 12,
    }
});

export default DashboardPage;