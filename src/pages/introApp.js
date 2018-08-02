import React, { Component } from 'react';
import { StyleSheet, View, ImageBackground, Image, Text, TouchableHighlight, AsyncStorage } from 'react-native';
import Swiper from 'react-native-swiper';

import { NavigationActions, StackActions } from 'react-navigation';

export class IntroAppPage extends React.Component {

    static navigationOptions = {
        header: null
    }

    render() {
        return (
            // <ImageBackground
            //     style={{ flex: 1 }}
            //     source={require('./../assets/images/bg-login.png')}
            //     resizeMode='cover'
            //     keyboardShouldPersistTaps="always"
            //     ref={ref => this.scrollView = ref}
            // >
            //     <View style={{ flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.5 )', margin: 30, borderRadius: 30 }}>
            //         <Swiper
            //             loop={false}
            //             dot={<View style={styles.formatSwiper} />}
            //             nextButton
            //         >
            //             <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center' }}>
            //                 <Image
            //                     style={{ width: 250, height: 220 }}
            //                     source={require('./../assets/images/1.png')}
            //                     resizeMode='contain'
            //                 />
            //                 <View style={{ marginTop: 40 }}>
            //                     <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, color: 'white' }}>
            //                         BUAT IDE-MU JADI KENYATAAN
            //                 </Text>
            //                 </View>
            //                 <View style={{ marginTop: 10, marginLeft: 20, marginRight: 20 }}>
            //                     <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 13, color: 'white', textAlign: 'center' }}>
            //                         Kamu punya ide atau desain barang yang sudah kamu rancang sendiri? Kamu tinggal upload rancangan-mu
            //                         dan biarkan para crafter membuat ide-mu menjadi kenyataan
            //                 </Text>
            //                 </View>
            //             </View>
            //             <View style={{ alignItems: 'center', flex: 1, justifyContent: 'center', marginTop: -25 }}>
            //                 <Image
            //                     style={{ width: 250, height: 220 }}
            //                     source={require('./../assets/images/3.png')}
            //                     resizeMode='contain'
            //                 />
            //                 <View style={{ marginTop: 55 }}>
            //                     <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, color: 'white' }}>
            //                         HARGAI IDE KAMU
            //                 </Text>
            //                 </View>
            //                 <View style={{ marginTop: 10, marginLeft: 20, marginRight: 20 }}>
            //                     <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 13, color: 'white', textAlign: 'center' }}>
            //                         Setelah melihat hasil nyata dari ide kamu dan merasa puas dengan hasilnya, kamu bisa jual ide kamu
            //                         di market yang kami telah sediakan
            //                 </Text>
            //                 </View>
            //             </View>
            //             <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            //                 <View style={{ height: 250 }}>
            //                     <Image
            //                         style={{ width: 250, height: 220 }}
            //                         source={require('./../assets/images/2.png')}
            //                         resizeMode='contain'
            //                     />
            //                 </View>
            //                 <View style={{ height: 20 }}>
            //                     <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, color: 'white' }}>
            //                         CARI BARANG
            //                 </Text>
            //                 </View>
            //                 <View style={{ height: 60, paddingLeft: 15, paddingRight: 15 }}>
            //                     <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 13, color: 'white', textAlign: 'center' }}>
            //                         Kamu juga bisa mencari barang yang kamu inginkan dengan hanya foto barangnya lalu upload dan teman-teman akan bantu cari barang kamu
            //                 </Text>
            //                 </View>
            //                 <View style={{ height: 30, backgroundColor: 'pink', width: '100%', top: 100, justifyContent: 'center', position: 'relative' }}>
            //                     <TouchableHighlight
            //                         onPress={() => this.props.navigation.navigate('MenuLogin')}
            //                     >
            //                         <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, color: 'red', textAlign: 'right' }}>NEXT</Text>
            //                     </TouchableHighlight>
            //                 </View>
            //             </View>
            //         </Swiper>
            //     </View>
            // </ImageBackground>
            <ImageBackground
                style={{ flex: 1, padding: 30 }}
                source={require('./../assets/images/bg-login.png')}
                resizeMode='cover'
                keyboardShouldPersistTaps="always"
                ref={ref => this.scrollView = ref}>
                <View style={styles.containerDashboard}>
                    <Swiper
                        loop={false}
                        dot={<View style={styles.formatSwiper} />}
                        nextButton
                    >
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <View style={{ width: '100%', height: 250, alignItems: 'center' }}>
                                <Image
                                    style={{ width: 250, height: 220 }}
                                    source={require('./../assets/images/1.png')}
                                    resizeMode='contain'
                                />
                            </View>
                            <View style={{ width: '100%', height: 20 }} >
                                <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, color: 'white', textAlign: 'center' }}>
                                    BUAT IDE-MU JADI KENYATAAN
                             </Text>
                            </View>
                            <View style={{ width: '100%', height: 65, paddingLeft: 10, paddingRight: 10 }} >
                                <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 13, color: 'white', textAlign: 'center' }}>
                                    Kamu punya ide atau desain barang yang sudah kamu rancang sendiri? Kamu tinggal upload rancangan-mu
                                 dan biarkan para crafter membuat ide-mu menjadi kenyataan </Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <View style={{ width: '100%', height: 250, alignItems: 'center' }}>
                                <Image
                                    style={{ width: 250, height: 220 }}
                                    source={require('./../assets/images/3.png')}
                                    resizeMode='contain'
                                />
                            </View>
                            <View style={{ width: '100%', height: 20 }} >
                                <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, color: 'white', textAlign: 'center' }}>
                                    HARGAI IDE KAMU
                             </Text>
                            </View>
                            <View style={{ width: '100%', height: 65, paddingLeft: 10, paddingRight: 10 }} >
                                <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 13, color: 'white', textAlign: 'center' }}>
                                    Setelah melihat hasil nyata dari ide kamu dan merasa puas dengan hasilnya, kamu bisa jual ide kamu
                                di market yang kami telah sediakan </Text>
                            </View>
                        </View>
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <View style={{ alignItems: 'center', width: '100%', marginTop: 30, position: 'absolute' }}>
                                <View style={{ width: '100%', height: 250, alignItems: 'center' }}>
                                    <Image
                                        style={{ width: 250, height: 220 }}
                                        source={require('./../assets/images/2.png')}
                                        resizeMode='contain'
                                    />
                                </View>
                                <View style={{ width: '100%', height: 20 }} >
                                    <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, color: 'white', textAlign: 'center' }}>
                                        CARI BARANG
                             </Text>
                                </View>
                                <View style={{ width: '100%', height: 65, paddingLeft: 10, paddingRight: 10 }} >
                                    <Text style={{ fontFamily: 'Quicksand-Regular', fontSize: 13, color: 'white', textAlign: 'center' }}>
                                        Kamu juga bisa mencari barang yang kamu inginkan dengan hanya foto barangnya lalu upload dan teman-teman akan bantu cari barang kamu
                             </Text>
                                </View>
                            </View>
                            <View style={{ flex: 1, width: '100%', justifyContent: 'flex-end', position: 'relative', marginBottom: 23, paddingRight: 45 }}>
                                <TouchableHighlight
                                    onPress={() => {
                                        const intro = true;
                                        AsyncStorage.setItem('INTRODUCTION', JSON.stringify(intro), () => {
                                            const resetAction = StackActions.reset({
                                                index: 0,
                                                actions: [NavigationActions.navigate({ routeName: 'MenuLogin' })],
                                            });
                                            this.props.navigation.dispatch(resetAction);
                                        });
                                    }}
                                >
                                    <Text style={{ fontFamily: 'Quicksand-Bold', fontSize: 15, color: 'red', textAlign: 'right' }}>NEXT</Text>
                                </TouchableHighlight>
                            </View>
                        </View>
                    </Swiper>
                </View>
            </ImageBackground >
        );
    }
}

const styles = StyleSheet.create({
    formatSwiper: {
        backgroundColor: '#FFFFFF',
        width: 5,
        height: 5,
        borderRadius: 4,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: 3
    },
    containerDashboard: {
        borderRadius: 20,
        backgroundColor: 'rgba(0,0,0,0.8)',
        height: '100%',
        width: '100%',
    },

});

export default IntroAppPage;