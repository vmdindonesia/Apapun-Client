import React, { Component } from 'react';
import { ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import { Button, ContainerSection, CardSectionRegistration } from './../components/common'
import Swiper from 'react-native-swiper';
import { COLOR } from './../shared/config';
import { Icon } from 'react-native-elements';
// import Icon from 'react-native-vector-icons/FontAwesome';

export class DashboardPage extends React.Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {
            sideMenu: false,
            statusMenu: 'profile',
            orderStatus: ''
        };
    }

    sideMenus = () => {
        this.setState({
            sideMenu: !this.state.sideMenu
        });
    }

    statusMenus = (value) => {
        console.log(value, 'Value')
        this.setState({
            statusMenu: value
        })
    }

    OrderStatus = (value) => {
        console.log(value, 'Value')
        this.setState({
            orderStatus: value
        })
    }

    // ButtonLogo = () => {
    //     if (this.sideMenu) {
    //         return
    //         <TouchableOpacity style={{ color: 'yellow' }}>
    //             <Image
    //                 style={styles.Logo2}
    //                 source={require("./../assets/images/ic_logo2.png")}
    //             />
    //         </TouchableOpacity>
    //     }
    //     return (
    //         <TouchableOpacity
    //             onPress={() => this.sideMenus()}
    //             style={{ color: 'blue' }}>
    //             <Image
    //                 style={styles.Logo}
    //                 source={require("./../assets/images/ic_logo1.png")}
    //             />
    //         </TouchableOpacity>
    //     )
    // }


    render() {
        const { sideMenu, statusMenu, orderStatus } = this.state;
        return (
            <View style={{ flex: 1 }}>
                <ImageBackground
                    source={require('./../assets/images/back_home.png')}
                    style={{ width: '100%', height: '100%', backgroundColor: COLOR.element_a1 }}
                >
                    <View style={styles.container}>
                        <View style={styles.containerSlide}>
                            <Swiper
                                style={styles.wrapper}
                                autoplay
                                showsButtons={false}
                                dot={<View style={{ backgroundColor: '#FFFFFF', width: 5, height: 5, borderRadius: 4, marginLeft: 3, marginRight: 3, marginTop: 3, marginBottom: 3 }} />}
                            >
                                <View style={styles.slide1}>
                                    <Image
                                        style={styles.imageStyle}
                                        source={require('./../assets/images/swiperFirst.png')}
                                        resizeMode='contain'
                                    />
                                </View>
                                <View style={styles.slide2}>
                                    <Image
                                        style={styles.imageStyle}
                                        source={require('./../assets/images/swiperSecond.png')}
                                        resizeMode='contain'
                                    />
                                </View>
                                <View style={styles.slide2}>
                                    <Image
                                        style={styles.imageStyle}
                                        source={require('./../assets/images/swiperThird.png')}
                                        resizeMode='contain'
                                    />
                                </View>
                                <View style={styles.slide2}>
                                    <Image
                                        style={styles.imageStyle}
                                        source={require('./../assets/images/swiperFour.png')}
                                        resizeMode='contain'
                                    />
                                </View>
                                <View style={styles.slide2}>
                                    <Image
                                        style={styles.imageStyle}
                                        source={require('./../assets/images/swiperFive.png')}
                                        resizeMode='contain'
                                    />
                                </View>
                            </Swiper>
                        </View>


                        <View style={styles.containerDashboard}>
                            <View style={styles.containerInsideProfileOne}>
                                <View style={styles.containerPhoto}>
                                    <View>
                                        <Image
                                            style={styles.profileImage}
                                            source={require('./../assets/images/profile.png')}
                                        />
                                    </View>
                                </View>
                            </View>

                            <View style={styles.containerInsideProfileTwo}>
                                <View style={styles.containerUp}>
                                    <View style={{ marginLeft: 10, marginTop: 15 }}>
                                        <Text style={{ color: 'grey' }}>Hi, Welcome!</Text>
                                        <Text style={{ color: 'white' }}>Gal Gadot</Text>
                                    </View>
                                </View>

                                <View style={styles.containerMiddleProfileTwo}>
                                    <View style={{ marginLeft: 10, marginTop: 5 }}>
                                        <View style={{ flex: 1 }}>
                                            <Image
                                                style={styles.icons}
                                                source={require('./../assets/images/ic_wallet.png')}
                                            />
                                        </View>
                                        <View style={{ flex: 1 }}>
                                            <Text style={{ color: 'grey', marginTop: 2, paddingLeft: 35, fontSize: 10 }}>Total Apresiasi Design Anda</Text>
                                            <Text style={{ color: 'grey', marginTop: 1, paddingLeft: 35, fontSize: 10, color: 'white' }}>Rp. 250.000</Text>
                                        </View>
                                    </View>

                                </View>

                                <View style={styles.containerBottomProfileTwo}>
                                    <View style={{ marginLeft: 10, marginTop: -5 }}>
                                        <View style={{ flex: 1 }}>
                                            <Image
                                                style={styles.icons}
                                                source={require('./../assets/images/ic_design.png')}
                                            />
                                        </View>
                                        <View style={{ flex: 1 }}>
                                            <Text style={{ color: 'grey', marginTop: 2, paddingLeft: 35, fontSize: 10 }}>Total Design Anda</Text>
                                            <Text style={{ color: 'grey', marginTop: 1, paddingLeft: 35, fontSize: 10, color: 'white' }}>3 Design</Text>
                                        </View>
                                    </View>
                                </View>


                            </View>
                        </View>



                        <View style={styles.containerUploadIdea}>
                            <View style={{ flex: 1, marginTop: 10, marginLeft: 20 }}>
                                <Text style={{ color: 'white' }}>Idea Recently Upload</Text>
                                <Text style={{ color: 'grey', fontSize: 10 }}>Checkout our friend new brilliant ideas</Text>
                                <Text style={{ color: 'red', alignSelf: 'flex-end', flex: 1, marginRight: 20, marginTop: -25 }}>See all</Text>
                                <View style={styles.containerImageIdea}>
                                    <View style={styles.containerImageInsideIdea}>
                                        <Image
                                            style={styles.containerImageInsideIdea}
                                            source={require('./../assets/images/imageideaone.jpg')}
                                        />
                                    </View>
                                    <View style={styles.containerImageInsideIdea}>
                                        <View style={styles.containerImageInsideIdea}>
                                            <Image
                                                style={styles.containerImageInsideIdea}
                                                source={require('./../assets/images/imageideatwo.jpg')}
                                            />
                                        </View>
                                    </View>

                                    <View style={styles.containerImageInsideIdea}>
                                        <View style={styles.containerImageInsideIdea}>
                                            <Image
                                                style={styles.containerImageInsideIdea}
                                                source={require('./../assets/images/imageideathree.jpg')}
                                            />
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </View>


                    </View>
                    {
                        sideMenu === true ?
                            <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.8)', width: '100%', height: '100%', position: 'absolute' }}>

                                <View style={{ height: '70%' }}>
                                    {
                                        statusMenu === 'home' ?
                                            <View style={styles.containerHome}>
                                                <View style={styles.containerHomeLogo}>
                                                    <Image style={{ marginTop: 15, alignContent: 'center', alignSelf: 'center', width: 50, height: 50 }}
                                                        source={require('./../assets/images/daftar_pesanan.png')}
                                                    />
                                                    <Text style={{ color: 'white', marginTop: 5 }}>Daftar</Text>
                                                    <Text style={{ color: 'white' }}>Pesanan</Text>
                                                </View>
                                                <View style={styles.containerHomeLogo}>
                                                    <Image
                                                        style={styles.containerImageHome}
                                                        source={require('./../assets/images/notifikasi.png')}
                                                    />
                                                    <Text style={{ color: 'white' }}> Notifikasi </Text>
                                                </View>
                                                <View style={styles.containerHomeLogo}>
                                                    <Image
                                                        style={styles.containerImageHome}
                                                        source={require('./../assets/images/setting.png')}
                                                    />
                                                    <Text style={{ color: 'white' }}> Setting </Text>
                                                </View>
                                                <View style={styles.containerHomeLogo}>
                                                    <Image
                                                        style={styles.containerImageHome}
                                                        source={require('./../assets/images/bantuan.png')}
                                                    />
                                                    <Text style={{ color: 'white' }}> Help </Text>
                                                </View>
                                            </View>
                                            :
                                            <View style={{ height: '100%' }}>
                                                {
                                                    statusMenu === 'crafterList' ?
                                                        <View style={styles.containerHomeScreen}>
                                                            <View style={styles.containerSomeHomeScreen}>
                                                                <View style={styles.photoHomeScreen}>
                                                                    <Image
                                                                        style={styles.cngImage}
                                                                        source={require('./../assets/images/crafter_list.png')}
                                                                    />
                                                                </View>
                                                                <View style={styles.textHomeScreen}>
                                                                    <Text style={{ paddingLeft: 15, marginTop: 5, color: 'white', fontSize: 20, fontWeight: 'bold' }}>CRAFTER LIST </Text>
                                                                    <Text style={{ paddingLeft: 15, color: 'white', fontSize: 12.5 }}>Kumpulan crafter dengan keunikannya yang beraneka ragam</Text>

                                                                    <TouchableOpacity style={styles.ButtonCrafterList}>
                                                                        <Text style={styles.TextButtonGo}>GO</Text>
                                                                    </TouchableOpacity>
                                                                </View>
                                                            </View>

                                                            <View style={styles.containerBodyCrafter}>
                                                                <View style={styles.bodyCrafterList}>
                                                                    <View style={styles.CrafterListLeft}>
                                                                        <View style={{ marginLeft: 10, marginTop: 6 }}>
                                                                            <View style={{ flex: 1 }}>
                                                                                <Image
                                                                                    style={styles.iconsCrafterMenu}
                                                                                    source={require('./../assets/images/fashion_crafter.png')}
                                                                                />
                                                                            </View>
                                                                            <View style={{ flex: 1 }}>
                                                                                <Text style={{ color: 'white', marginTop: 15, paddingLeft: 70, fontSize: 12 }}>FASHION</Text>
                                                                                <Text style={{ color: '#d87115', marginTop: 1, paddingLeft: 70, fontSize: 10 }}>1254 Crafter</Text>
                                                                            </View>
                                                                        </View>
                                                                    </View>
                                                                    <View style={styles.CrafterListRight}>
                                                                        <View style={{ marginLeft: 10, marginTop: 6 }}>
                                                                            <View style={{ flex: 1 }}>
                                                                                <Image
                                                                                    style={styles.iconsCrafterMenu}
                                                                                    source={require('./../assets/images/diy_crafter.png')}
                                                                                />
                                                                            </View>
                                                                            <View style={{ flex: 1 }}>
                                                                                <Text style={{ color: 'white', marginTop: 15, paddingLeft: 70, fontSize: 12 }}>DIY, Hobbies, Toys</Text>
                                                                                <Text style={{ color: '#d87115', marginTop: 1, paddingLeft: 70, fontSize: 10 }}>199 Crafter</Text>
                                                                            </View>
                                                                        </View>
                                                                    </View>
                                                                </View>

                                                                <View style={styles.bodyCrafterList}>
                                                                    <View style={styles.CrafterListLeft}>
                                                                        <View style={{ marginLeft: 10, marginTop: 6 }}>
                                                                            <View style={{ flex: 1 }}>
                                                                                <Image
                                                                                    style={styles.iconsCrafterMenu}
                                                                                    source={require('./../assets/images/furniture_crafter.png')}
                                                                                />
                                                                            </View>
                                                                            <View style={{ flex: 1 }}>
                                                                                <Text style={{ color: 'white', marginTop: 15, paddingLeft: 70, fontSize: 12 }}>Furniture</Text>
                                                                                <Text style={{ color: '#d87115', marginTop: 1, paddingLeft: 70, fontSize: 10 }}>723 Crafter</Text>
                                                                            </View>
                                                                        </View>

                                                                    </View>
                                                                    <View style={styles.CrafterListRight}>
                                                                        <View style={{ marginLeft: 10, marginTop: 6 }}>
                                                                            <View style={{ flex: 1 }}>
                                                                                <Image
                                                                                    style={styles.iconsCrafterMenu}
                                                                                    source={require('./../assets/images/beauty_crafter.png')}
                                                                                />
                                                                            </View>
                                                                            <View style={{ flex: 1 }}>
                                                                                <Text style={{ color: 'white', marginTop: 15, paddingLeft: 70, fontSize: 12 }}>Beauty</Text>
                                                                                <Text style={{ color: '#d87115', marginTop: 1, paddingLeft: 70, fontSize: 10 }}>269 Crafter</Text>
                                                                            </View>
                                                                        </View>
                                                                    </View>
                                                                </View>
                                                            </View>
                                                        </View>
                                                        :
                                                        <View style={{ height: '100%' }}>
                                                            {
                                                                statusMenu === 'order' ?
                                                                    <View style={styles.containerHomeScreen}>
                                                                        {
                                                                            orderStatus === '' ?
                                                                                <View style={styles.containerSomeHomeScreen}>
                                                                                    <View style={styles.photoHomeScreen}>
                                                                                        <Image
                                                                                            style={styles.cngImage}
                                                                                            source={require('./../assets/images/order_default.png')}
                                                                                        />
                                                                                    </View>
                                                                                    <View style={styles.textHomeScreen}>
                                                                                        <Text style={{ paddingLeft: 15, marginTop: 35, color: 'white', fontSize: 20, fontWeight: 'bold' }}>ORDER </Text>
                                                                                        <Text style={{ paddingLeft: 15, color: 'white', fontSize: 12.5, textAlign: 'justify' }}>Penuhi keinginanmu sekarang juga dengan 3 fitur yang akan membuat kreasimu menjadi nyata.</Text>
                                                                                    </View>
                                                                                </View>
                                                                                :
                                                                                <View>
                                                                                    {
                                                                                        orderStatus === 'custom' ?
                                                                                            <View style={styles.containerSomeHomeScreen}>
                                                                                                <View style={styles.photoHomeScreen}>
                                                                                                    <Image
                                                                                                        style={styles.cngImage}
                                                                                                        source={require('./../assets/images/Custom.png')}
                                                                                                    />
                                                                                                </View>
                                                                                                <View style={styles.textHomeScreen}>
                                                                                                    <Text style={{ paddingLeft: 15, marginTop: 5, color: 'white', fontSize: 20, fontWeight: 'bold' }}>CUSTOM </Text>
                                                                                                    <Text style={{ paddingLeft: 15, color: 'white', fontSize: 12.5, textAlign: 'justify' }}>Dengan imajinasimu dan fitur ini, kamu bisa dapatkan hasil desainmu sendiri.</Text>

                                                                                                    <TouchableOpacity style={styles.buttonCustom} onPress={() => this.props.navigation.navigate('Order')}>
                                                                                                        <Text style={{ textAlign: 'center', color: 'white', fontSize: 20, fontWeight: 'bold' }}>GO</Text>
                                                                                                    </TouchableOpacity>
                                                                                                </View>
                                                                                            </View>
                                                                                            :
                                                                                            <View>
                                                                                                {
                                                                                                    orderStatus === 'captureAndGet' ?
                                                                                                        <View style={styles.containerSomeHomeScreen}>
                                                                                                            <View style={styles.photoHomeScreen}>
                                                                                                                <Image
                                                                                                                    style={styles.cngImage}
                                                                                                                    source={require('./../assets/images/CapturenGet.png')}
                                                                                                                />
                                                                                                            </View>
                                                                                                            <View style={styles.textHomeScreen}>
                                                                                                                <Text style={{ paddingLeft: 15, marginTop: 5, color: 'white', fontSize: 20, fontWeight: 'bold' }}>CAPTURE N`GET </Text>
                                                                                                                <Text style={{ paddingLeft: 15, color: 'white', fontSize: 12.5, textAlign: 'justify' }}>Cari produk hanya dengan upload foto, kamu bisa dapetin produk itu </Text>

                                                                                                                <TouchableOpacity style={styles.buttonCapture}>
                                                                                                                    <Text style={{ textAlign: 'center', color: 'white', fontSize: 20, fontWeight: 'bold' }}>GO</Text>
                                                                                                                </TouchableOpacity>
                                                                                                            </View>
                                                                                                        </View>
                                                                                                        :
                                                                                                        <View>
                                                                                                            {
                                                                                                                orderStatus === 'ideaMarket' ?
                                                                                                                    <View style={styles.containerSomeHomeScreen}>
                                                                                                                        <View style={styles.photoHomeScreen}>
                                                                                                                            <Image
                                                                                                                                style={styles.cngImage}
                                                                                                                                source={require('./../assets/images/idea_market.png')}
                                                                                                                            />
                                                                                                                        </View>
                                                                                                                        <View style={styles.textHomeScreen}>
                                                                                                                            <Text style={{ paddingLeft: 15, marginTop: 5, color: 'white', fontSize: 20, fontWeight: 'bold' }}>IDEA MARKET </Text>
                                                                                                                            <Text style={{ paddingLeft: 15, color: 'white', fontSize: 12.5, textAlign: 'justify' }}>Disini kamu bisa melihat hasil karya unik dan menarik teman-temanmu dan kamu bisa membelinya loh! </Text>

                                                                                                                            <TouchableOpacity style={styles.buttonIdea}>
                                                                                                                                <Text style={{ textAlign: 'center', color: 'white', fontSize: 20, fontWeight: 'bold' }}>GO</Text>
                                                                                                                            </TouchableOpacity>
                                                                                                                        </View>
                                                                                                                    </View>
                                                                                                                    :
                                                                                                                    <View />

                                                                                                            }
                                                                                                        </View>
                                                                                                }
                                                                                            </View>

                                                                                    }
                                                                                </View>
                                                                        }

                                                                        <View style={styles.containerBodyHome}>
                                                                            <TouchableOpacity
                                                                                onPress={() => this.OrderStatus('custom')}
                                                                            >
                                                                                <View style={styles.DefaultBody}>
                                                                                    <Image
                                                                                        source={require('./../assets/images/linehome.png')}
                                                                                    />
                                                                                    <Text style={{ marginTop: 20, color: 'white', fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>Custom</Text>
                                                                                </View>
                                                                            </TouchableOpacity>
                                                                            <TouchableOpacity
                                                                                onPress={() => this.OrderStatus('captureAndGet')}
                                                                            >
                                                                                <View style={styles.DefaultBody}>
                                                                                    <Image
                                                                                        source={require('./../assets/images/linehome.png')}
                                                                                    />
                                                                                    <Text style={{ marginTop: 20, color: 'white', fontSize: 16, fontWeight: 'bold' }}>Capture n` Get</Text>
                                                                                </View>
                                                                            </TouchableOpacity>
                                                                            <TouchableOpacity
                                                                                onPress={() => this.OrderStatus('ideaMarket')}
                                                                            >
                                                                                <View style={styles.DefaultBody}>
                                                                                    <Image
                                                                                        source={require('./../assets/images/linehome.png')}
                                                                                    />
                                                                                    <Text style={{ marginTop: 17, marginBottom: 17, color: 'white', fontSize: 16, fontWeight: 'bold' }}>Idea Market</Text>
                                                                                    <Image
                                                                                        source={require('./../assets/images/linehome.png')}
                                                                                    />
                                                                                </View>
                                                                            </TouchableOpacity>
                                                                        </View>
                                                                    </View>
                                                                    :
                                                                    <View style={{ height: '100%' }}>
                                                                        {
                                                                            statusMenu === 'profile' ?
                                                                                <View style={styles.containerProfileHomeScreen}>
                                                                                    <View style={styles.profileHomeScreen}>
                                                                                        <View>
                                                                                            <Text style={{ color: 'white', marginTop: 20, alignSelf: 'center', fontSize: 20, fontWeight: 'bold' }}>Gal Gadot</Text>
                                                                                            <View style={{ flex: 1 }}>
                                                                                                <Image
                                                                                                    style={styles.locationIcon}
                                                                                                    source={require('./../assets/images/location_icon.png')}
                                                                                                />
                                                                                            </View>
                                                                                            <Text style={{ color: 'white', marginTop: 5, alignSelf: 'center', fontSize: 13 }}>Bali</Text>
                                                                                        </View>

                                                                                        <View style={{ alignSelf: 'center' }}>
                                                                                            <Image
                                                                                                style={styles.photoProfileHomeScreen}
                                                                                                source={require('./../assets/images/profile.png')}
                                                                                            />
                                                                                        </View>
                                                                                        <Text style={{ color: 'white', marginTop: 15, alignSelf: 'center', fontSize: 18, fontWeight: 'bold' }}>PROFILE</Text>
                                                                                        <Text style={{ color: 'white', marginTop: 5, alignSelf: 'center', fontSize: 12.5 }}>Lihat dan atur segala informasi</Text>
                                                                                        <Text style={{ color: 'white', marginTop: 5, alignSelf: 'center', fontSize: 12.5 }}>profil anda disini </Text>

                                                                                    </View>
                                                                                    <View style={styles.containerBodyProfile}>
                                                                                        <View style={styles.listProfileIcon}>
                                                                                            <View style={styles.profileMenu}>
                                                                                                <View style={{ paddingTop: 25, paddingLeft: 120 }}>
                                                                                                    <Icon
                                                                                                        name='chevron-right'
                                                                                                        color='white'
                                                                                                    />
                                                                                                </View>
                                                                                                {/* <View style={{ marginLeft: 85, marginTop: 25 }}> */}
                                                                                                <View style={{ flex: 1, marginTop: -32, paddingLeft: 85 }}>
                                                                                                    <Image
                                                                                                        style={styles.iconProfile}
                                                                                                        source={require('./../assets/images/edit_profil.png')}
                                                                                                    />
                                                                                                    <Text style={{ color: 'white', paddingLeft: 60, fontSize: 12, marginTop: -27 }}>Edit Profil </Text>
                                                                                                </View>
                                                                                                {/* </View> */}

                                                                                            </View>
                                                                                        </View>

                                                                                        <View style={styles.listProfileIcon}>
                                                                                            <View style={styles.profileMenu}>
                                                                                                <View style={{ marginLeft: 91, marginTop: 15 }}>
                                                                                                    <View style={{ flex: 1 }}>
                                                                                                        <Image
                                                                                                            style={styles.iconLogOut}
                                                                                                            source={require('./../assets/images/logout.png')}
                                                                                                        />
                                                                                                    </View>
                                                                                                    <View style={{ flex: 1 }}>
                                                                                                        <Text style={{ color: 'white', marginTop: 7, paddingLeft: 53, fontSize: 12 }}>Log Out</Text>
                                                                                                    </View>
                                                                                                </View>
                                                                                            </View>
                                                                                        </View>
                                                                                    </View>
                                                                                </View>
                                                                                :
                                                                                <View style={{ height: '100%' }}>
                                                                                    {
                                                                                        statusMenu === 'crafterMenu' ?
                                                                                            <View style={styles.containerBodyJoinCrafter}>

                                                                                                <View style={styles.photoJoinCrafter}>
                                                                                                    <Image
                                                                                                        style={styles.joinImage}
                                                                                                        source={require('./../assets/images/crafter_menu.png')}
                                                                                                    />
                                                                                                </View>

                                                                                                <View styles={{ flex: 1 }}>

                                                                                                    <Text style={{ color: 'white', marginTop: 3, alignSelf: 'center', fontSize: 13 }}>Daftarkan diri anda </Text>
                                                                                                    <Text style={{ color: 'white', marginTop: 3, alignSelf: 'center', fontSize: 13 }}>menjadi partner kami</Text>
                                                                                                    <Text style={{ color: 'white', marginTop: 3, alignSelf: 'center', fontSize: 13 }}>sebagai CRAFTER </Text>

                                                                                                </View>

                                                                                                <View style={{ flex: 1 }}>
                                                                                                    <Text style={{ color: 'white', paddingLeft: 145, marginTop: 3, fontSize: 13, marginTop: 30 }}>apa itu <Text style={{ color: '#d87115' }}>CRAFTER ?</Text></Text>
                                                                                                    <Image
                                                                                                        style={styles.iconQuestion}
                                                                                                        source={require('./../assets/images/question.png')}
                                                                                                    />
                                                                                                    <TouchableOpacity style={styles.buttonJoin}>
                                                                                                        <Text style={{ textAlign: 'center', color: 'white', fontSize: 15, fontWeight: 'bold' }}>JOIN</Text>
                                                                                                    </TouchableOpacity>
                                                                                                </View>
                                                                                            </View>
                                                                                            :
                                                                                            <View />
                                                                                    }
                                                                                </View>
                                                                        }
                                                                    </View>

                                                            }
                                                        </View>
                                                }
                                            </View>
                                    }
                                </View>

                                <View style={{
                                    flex: 1,
                                    flexDirection: 'row',
                                    width: '100%',
                                    height: 50,
                                    backgroundColor: 'rgba(70,70,71,0.5)',
                                    marginBottom: '25%',
                                    marginTop: 20
                                }}>

                                    {/* INI MENU BUTTON */}
                                    <View style={{ width: 73, borderRightWidth: 2, borderRightColor: 'black', height: 76, justifyContent: 'center', alignItems: 'center' }}>
                                        <TouchableOpacity
                                            onPress={() => this.statusMenus('home')}
                                        >
                                            {
                                                statusMenu === 'home' ?
                                                    <View>
                                                        <Image
                                                            style={{ width: 30, height: 30 }}
                                                            source={require('./../assets/images/umum-enabled.png')}
                                                        />
                                                    </View>
                                                    :
                                                    <View>
                                                        <Image
                                                            style={{ width: 30, height: 30, }}
                                                            source={require('./../assets/images/umum-disabled.png')}
                                                        />
                                                    </View>
                                            }
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ width: 73, borderRightWidth: 2, borderRightColor: 'black', height: 76, justifyContent: 'center', alignItems: 'center' }}>
                                        <TouchableOpacity
                                            onPress={() => this.statusMenus('profile')}
                                        >
                                            {
                                                statusMenu === 'profile' ?
                                                    <View>
                                                        <Image
                                                            style={{ width: 30, height: 30, }}
                                                            source={require('./../assets/images/profil-enable.png')}
                                                        />
                                                    </View>
                                                    :
                                                    <View>
                                                        <Image
                                                            style={{ width: 30, height: 30, }}
                                                            source={require('./../assets/images/profil-disable.png')}
                                                        />
                                                    </View>
                                            }
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ width: 73, borderRightWidth: 2, borderRightColor: 'black', height: 76, justifyContent: 'center', alignItems: 'center' }}>
                                        <TouchableOpacity
                                            onPress={() => this.statusMenus('order')}
                                        >
                                            {
                                                statusMenu === 'order' ?
                                                    <View>
                                                        <Image
                                                            style={{ width: 30, height: 30, }}
                                                            source={require('./../assets/images/order-enable.png')}
                                                        />
                                                    </View>
                                                    :
                                                    <View>
                                                        <Image
                                                            style={{ width: 30, height: 30, }}
                                                            source={require('./../assets/images/order-disable.png')}
                                                        />
                                                    </View>
                                            }
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ width: 73, borderRightWidth: 2, borderRightColor: 'black', height: 76, justifyContent: 'center', alignItems: 'center' }}>
                                        <TouchableOpacity
                                            onPress={() => this.statusMenus('crafterList')}
                                        >
                                            {
                                                statusMenu === 'crafterList' ?
                                                    <View>
                                                        <Image
                                                            style={{ width: 30, height: 30, }}
                                                            source={require('./../assets/images/crafter-list-enable.png')}
                                                        />
                                                    </View>
                                                    :
                                                    <View>
                                                        <Image
                                                            style={{ width: 30, height: 30, }}
                                                            source={require('./../assets/images/crafter-list-disable.png')}
                                                        />
                                                    </View>
                                            }
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ width: 73, height: 76, justifyContent: 'center', alignItems: 'center' }}>
                                        <TouchableOpacity
                                            onPress={() => this.statusMenus('crafterMenu')}
                                        >
                                            {
                                                statusMenu === 'crafterMenu' ?
                                                    <View>
                                                        <Image
                                                            style={{ width: 30, height: 30, }}
                                                            source={require('./../assets/images/crafter-menu-enable.png')}
                                                        />
                                                    </View>
                                                    :
                                                    <View>
                                                        <Image
                                                            style={{ width: 50, height: 30, }}
                                                            source={require('./../assets/images/crafter-menu-disable.png')}
                                                        />
                                                    </View>
                                            }
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                            :
                            <View />
                    }
                    <View style={styles.containerMenu}>

                        <TouchableOpacity
                            style={styles.containerButtonLogo}
                            onPress={() => this.sideMenus('Open')}
                        >
                            {
                                sideMenu === 'Open' ?

                                    <Image
                                        style={styles.Logo2}
                                        source={require('./../assets/images/ic_logo2.png')}
                                    />
                                    :
                                    <Image
                                        style={styles.Logo}
                                        source={require('./../assets/images/ic_logo1.png')}
                                    />

                            }
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
            </View>
        )
    }

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },
    containerSlide: {
        width: '100%',
        height: 160
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerDashboard: {
        // flex: 1,
        borderRadius: 20,
        backgroundColor: 'rgba(0,0,0,0.8)',
        shadowColor: '#000',
        shadowOffset: { width: 0, heigth: 2 },
        // shadowRadius: 20,
        // shadowOpacity: 100,
        // borderColor :'black',
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: 175,
        width: '95%',
        // backgroundColor: 'blue'
    },
    containerPhoto: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerInsidePhoto: {
        justifyContent: 'center',
        height: 120,
        width: 120,
        alignSelf: 'center',
        margin: 8,
        borderRadius: 100
    },
    containerInsideProfileOne: {
        width: 150,
        height: 160,
    },
    containerInsideProfileTwo: {
        flex: 3,
        height: 160,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerUp: {
        width: 200,
        height: 60,

    },
    containerMiddleProfileTwo: {
        width: 200,
        height: 50,
    },
    containerBottomProfileTwo: {
        width: 200,
        height: 50,
    },
    containerUploadIdea: {
        // flex: 2,
        borderRadius: 20,
        backgroundColor: 'rgba(0,0,0,0.8)',
        shadowColor: '#009',
        shadowOffset: { width: 0, heigth: 2 },
        shadowRadius: 2,
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 70,
        height: 160,
        width: '95%',
        // backgroundColor: 'yellow'
    },
    containerFlexUp: {
        width: 350,
        height: 125,
    },
    containerCategory: {
        width: 350,
        height: 75,
    },
    imageStyle: {
        resizeMode: 'cover'
    },
    profileImage: {
        height: 110,
        width: 110,
        borderRadius: 100,
    },
    icons: {
        height: 30,
        width: 30,
        borderRadius: 100,
    },
    containerImageIdea: {
        flex: 3,
        height: 70,
        width: 300,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 20,
        marginTop: 10,
        // backgroundColor:'red'
    },
    containerImageInsideIdea: {
        height: 100,
        width: 98,
    },
    containerMenu: {
        position: 'absolute',
        bottom: 0,
        alignSelf: 'center',
        justifyContent: 'center',
        width: 125,
        height: 30 * 2,
        borderRadius: 90,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
        backgroundColor: '#C1C1C1'
    },
    containerButtonLogo: {
        padding: 10,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowRadius: 10,
        shadowOpacity: 0.35,
        marginTop: 15,
        alignItems: 'center'
    },
    Logo: {
        height: 80,
        width: 80,
        marginBottom: 20
    },
    Logo2: {
        height: 50,
        width: 50,
    },
    containerHome: {
        flex: 4,
        borderRadius: 20,
        backgroundColor: 'rgba(0,0,0,0)',
        shadowColor: '#000',
        shadowOffset: { width: 0, heigth: 2 },
        shadowRadius: 2,
        flexDirection: 'row',
        height: '100%',
        width: '100%',
        // backgroundColor: 'yellow'
    },
    containerHomeLogo: {
        flex: 1,
        height: 150,
        width: 50,
        // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 285
    },
    containerImageHome: {
        height: 50,
        width: 50,
        marginBottom: 5,
        // backgroundColor: 'blue'
    },
    containerHomeScreen: {
        flex: 2,
        borderRadius: 20,
        backgroundColor: 'rgba(0,0,0,0)',
        shadowColor: '#000',
        shadowOffset: { width: 0, heigth: 2 },
        shadowRadius: 2,
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        // backgroundColor : 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerSomeHomeScreen: {
        borderRadius: 20,
        flexDirection: 'row',
        height: 170,
        width: 340,
        // backgroundColor: 'yellow',
        marginTop: 65,
        alignSelf: 'center'
    },
    photoHomeScreen: {
        height: 170,
        width: 160,
        borderRadius: 25,
        marginLeft: -7
    },
    textHomeScreen: {
        height: 165,
        width: 185,
        // backgroundColor: 'skyblue'
    },
    cngImage: {
        height: 170,
        width: 160,
    },
    buttonCustom: {
        marginTop: 55,
        backgroundColor: 'red',
        borderRadius: 20,
        height: 35,
        width: 175,
        justifyContent: 'center',
        marginLeft: 12,
        // position: 'relative',
    },
    buttonIdea: {
        marginTop: 42.5,
        marginLeft: 12,
        backgroundColor: 'red',
        borderRadius: 20,
        height: 35,
        width: 175,
        justifyContent: 'center',
    },
    buttonCapture: {
        backgroundColor: 'red',
        borderRadius: 20,
        height: 35,
        width: 175,
        justifyContent: 'center',
        marginTop: 55,
        marginLeft: 12
    },
    ButtonCrafterList: {
        backgroundColor: 'red',
        borderRadius: 20,
        height: 35,
        width: 173,
        justifyContent: 'center',
        marginTop: 50.5,
        marginLeft: 12
    },
    TextButtonGo: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },

    containerBodyHome: {
        flex: 3,
        borderRadius: 20,
        flexDirection: 'column',
        height: 20,
        width: 340,
        // backgroundColor: 'blue',
        marginTop: 5
    },
    DefaultBody: {
        height: 60,
        width: '100%',
        alignItems: 'center',
        // backgroundColor:'skyblue'

    },
    containerBodyCrafter: {
        flex: 1,
        borderRadius: 20,
        flexDirection: 'column',
        height: 20,
        width: '100%',
        // backgroundColor: 'skyblue',
        marginTop: 5,
    },
    bodyCrafterList: {
        flexDirection: 'row',
        height: 70,
        width: 340,

    },
    CrafterListLeft: {
        height: 70,
        width: 150,
    },
    CrafterListRight: {
        height: 70,
        width: 190,
    },
    iconsCrafterMenu: {
        height: 55,
        width: 55,
        // borderRadius: 100,
    },
    crafterMenu: {
        height: 70,
        width: 340,
        marginLeft: 100
    },
    profileHomeScreen: {
        borderRadius: 20,
        flexDirection: 'column',
        height: 250,
        width: 300,
        alignSelf: 'center',
        // backgroundColor: 'blue'
    },
    photoProfileHomeScreen: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: 100,
        borderRadius: 100,
        marginTop: 15,
    },
    containerProfileHomeScreen: {
        flex: 2,
        borderRadius: 20,
        backgroundColor: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, heigth: 2 },
        shadowRadius: 2,
        flexDirection: 'column',
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
        height: 500
    },
    locationIcon: {
        height: 15,
        width: 10,
        marginLeft: 125,
        marginTop: 5
    },
    containerBodyProfile: {
        flex: 2,
        borderRadius: 20,
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        // marginTop: 10,
        // backgroundColor: 'red'
    },
    listProfileIcon: {
        flexDirection: 'row',
        height: 70,
        width: '100%',
        // borderWidth: 0.5,
        // borderColor: '#d6d7da',
        // backgroundColor: 'yellow'
    },
    profileMenu: {
        height: 70,
        width: '100%',
        // backgroundColor: 'blue'
    },
    iconProfile: {
        height: 40,
        width: 40,
    },
    iconLogOut: {
        height: 30,
        width: 27,
    },
    arrowIcon: {
        height: 20,
        width: 5,
        paddingLeft: 70
    },
    cone: {
        width: 0,
        height: 0,
        borderLeftWidth: 30,
        borderLeftColor: 'transparent',
        borderRightWidth: 30,
        borderRightColor: 'transparent',
        borderTopWidth: 60,
        borderTopColor: 'red',
        borderRadius: 55
    },
    containerBodyJoinCrafter: {
        flex: 2,
        borderRadius: 20,
        backgroundColor: 'rgba(0,0,0,0)',
        shadowColor: '#000',
        shadowOffset: { width: 0, heigth: 2 },
        shadowRadius: 2,
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        // backgroundColor: 'blue',
        alignContent: 'center'
    },
    photoJoinCrafter: {
        height: 190,
        width: 190,
        borderRadius: 25,
        alignSelf: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        marginTop: 30,
        // backgroundColor: 'yellow',
    },
    joinImage: {
        height: 190,
        width: 190,
        alignSelf: 'center'
    },
    buttonJoin: {
        backgroundColor: 'red',
        borderRadius: 20,
        height: 35,
        width: 180,
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 50
    },
    iconQuestion: {
        height: 20,
        width: 20,
        marginLeft: 110,
        marginTop: -15
    }
});

export default DashboardPage;