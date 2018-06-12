import React, { Component } from 'react';
import { ScrollView, ImageBackground, TouchableOpacity } from 'react-native';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';
import { Button } from './../components/common'
import Swiper from 'react-native-swiper';
import { COLOR } from './../shared/config';
import { Icon } from 'react-native-elements';


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

    render() {
        const { sideMenu, statusMenu, orderStatus } = this.state;
        return (
            <View style={{ flex: 1 }}>
                <ImageBackground
                    source={require('./../assets/images/bg-dashboard.png')}
                    style={{ width: '100%', height: '100%', backgroundColor: COLOR.element_a1 }}
                >
                    <ScrollView>
                        <View style={{ height: 250, flex: 1 }}>
                            <Swiper
                                style={styles.wrapper}
                                autoplay
                                showsButtons={true}
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

                        <View style={styles.containerProfile}>
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
                                    <View style={{ marginLeft: 10, marginTop: 20 }}>
                                        <Text style={{ color: 'grey' }}>Hi, Welcome!</Text>
                                        <Text style={{ color: 'white' }}>HENDRI CHIE</Text>
                                    </View>
                                </View>

                                <View style={styles.containerMiddleProfileTwo}>
                                    <View style={{ marginLeft: 10, marginTop: 10 }}>
                                        <View style={{ flex: 1 }}>
                                            <Image
                                                style={styles.icons}
                                                source={require('./../assets/images/wallet.png')}
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
                                                source={require('./../assets/images/paper.png')}
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
                                <Text style={{ color: 'red', alignSelf: 'flex-end', flex: 1, marginRight: 30, marginTop: -25 }}>See all</Text>

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
                    </ScrollView>
                    {
                        sideMenu === true ?
                            <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.8)', width: '100%', height: '100%', position: 'absolute' }}>

                                <View style={{ height: '70%' }}>
                                    {
                                        statusMenu === 'home' ?
                                            <View style={styles.containerHome}>
                                                <View style={styles.containerHomeLogo}>
                                                    <Image
                                                        style={{ height: 50, width: 50, marginBottom: 5, marginTop: 15 }}
                                                        source={require('./../assets/images/daftar_pesanan.png')}
                                                    />
                                                    <Text style={{ color: 'white' }}>Daftar</Text>
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
                                                                    <Text style={{ marginTop: 5, color: 'white', fontSize: 20, fontWeight: 'bold' }}>CRAFTER LIST </Text>
                                                                    <Text style={{ color: 'white', fontSize: 12.5 }}>Kumpulan crafter dengan keunikannya yang beraneka ragam</Text>

                                                                    <TouchableOpacity style={[styles.buttonGo, style={marginTop: 40}]}>
                                                                        <Text style={{ textAlign: 'center', color: 'white', fontSize: 20, fontWeight: 'bold' }}>GO</Text>
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
                                                                                        <Text style={{ marginTop: 5, color: 'white', fontSize: 20, fontWeight: 'bold' }}>ORDER </Text>
                                                                                        <Text style={{ color: 'white', fontSize: 12.5 }}>Penuhi keinginanmu sekarang juga dengan 3 fitur yang akan membuat kreasimu menjadi nyata.</Text>
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
                                                                                                    <Text style={{ marginTop: 5, color: 'white', fontSize: 20, fontWeight: 'bold' }}>CUSTOM </Text>
                                                                                                    <Text style={{ color: 'white', fontSize: 12.5 }}>Dengan imajinasimu dan fitur ini, kamu bisa dapatkan hasil desainmu sendiri.</Text>

                                                                                                    <TouchableOpacity style={styles.buttonCustom}>
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
                                                                                                                <Text style={{ marginTop: 5, color: 'white', fontSize: 20, fontWeight: 'bold' }}>CAPTURE N`GET </Text>
                                                                                                                <Text style={{ color: 'white', fontSize: 12.5 }}>Cari produk hanya dengan upload foto, kamu bisa dapetin produk itu </Text>

                                                                                                                <TouchableOpacity style={[styles.buttonGo, style={marginTop: 40}]}>
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
                                                                                                                            <Text style={{ marginTop: 5, color: 'white', fontSize: 20, fontWeight: 'bold' }}>IDEA MARKET </Text>
                                                                                                                            <Text style={{ color: 'white', fontSize: 12.5 }}>Disini kamu bisa melihat hasil karya unik dan menarik teman-temanmu dan kamu bisa membelinya loh! </Text>

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
                                                                                    <Text style={{ marginTop: 20, marginBottom: 20, color: 'white', fontSize: 16, fontWeight: 'bold' }}>Idea Market</Text>
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
                                                                                            <Text style={{ color: 'white', marginTop: 20, alignSelf: 'center', fontSize: 16, fontWeight: 'bold' }}>Gal Gadot</Text>
                                                                                            <View style={{ flex: 1 }}>
                                                                                                <Icon size={10} name="md-map-marker" color="e00" />
                                                                                            </View>
                                                                                            <Text style={{ color: 'white', alignSelf: 'center', fontSize: 12 }}>Bali</Text>
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
                                                                                                <View style={{ marginLeft: 80, marginTop: 6 }}>
                                                                                                    <View style={{ flex: 1 }}>
                                                                                                        <Image
                                                                                                            style={styles.iconProfile}
                                                                                                            source={require('./../assets/images/edit_profil.png')}
                                                                                                        />
                                                                                                    </View>
                                                                                                    <View style={{ flex: 1 }}>
                                                                                                        <Text style={{ color: 'white', marginTop: 18, paddingLeft: 70, fontSize: 12 }}>Edit Profil</Text>
                                                                                                    </View>
                                                                                                    <View style={{ flex: 1 }}>
                                                                                                        <Icon
                                                                                                            size={20}
                                                                                                            name="md-angle-right"
                                                                                                            color="#fff"
                                                                                                        />
                                                                                                    </View>
                                                                                                </View>
                                                                                            </View>

                                                                                        </View>

                                                                                        <View style={styles.listProfileIcon}>
                                                                                            <View style={styles.profileMenu}>
                                                                                                <View style={{ marginLeft: 85, marginTop: 25 }}>
                                                                                                    <View style={{ flex: 1 }}>
                                                                                                        <Image
                                                                                                            style={styles.iconLogOut}
                                                                                                            source={require('./../assets/images/logout.png')}
                                                                                                        />
                                                                                                    </View>
                                                                                                    <View style={{ flex: 1 }}>
                                                                                                        <Text style={{ color: 'white', marginTop: 7, paddingLeft: 65, fontSize: 12 }}>Log Out</Text>
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
                                                                                                    <Icon size={15} name="md-question-mark" color="#fff" />
                                                                                                    <Text style={{ color: 'white', marginTop: 3, paddingLeft: 125, fontSize: 13, marginTop: 30 }}>apa itu <Text style={{ color: '#d87115' }}>CRAFTER ?</Text></Text>
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
                                    marginTop: 5
                                }}>

                                    {/* INI MENU BUTTON */}
                                    <View style={{ width: 64, borderRightWidth: 2, borderRightColor: 'black', height: 76, justifyContent: 'center', alignItems: 'center' }}>
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
                                    <View style={{ width: 64, borderRightWidth: 2, borderRightColor: 'black', height: 76, justifyContent: 'center', alignItems: 'center' }}>
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
                                    <View style={{ width: 64, borderRightWidth: 2, borderRightColor: 'black', height: 76, justifyContent: 'center', alignItems: 'center' }}>
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
                                    <View style={{ width: 64, borderRightWidth: 2, borderRightColor: 'black', height: 76, justifyContent: 'center', alignItems: 'center' }}>
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
                                    <View style={{ width: 64, borderRightWidth: 2, borderRightColor: 'black', height: 76, justifyContent: 'center', alignItems: 'center' }}>
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
                                                            style={{ width: 30, height: 30, }}
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
                            onPress={() => this.sideMenus()}
                        >
                            <Image style={styles.Logo} source={require("./../assets/images/Logo.png")} />
                        </TouchableOpacity>
                    </View>
                </ImageBackground>
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
        justifyContent: 'center',
        alignItems: 'center'
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerSearchBox: {
        flex: 1,
        marginTop: 15,
        // marginBottom: 5,
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 50
    },
    containerProfile: {
        flex: 1,
        borderRadius: 20,
        backgroundColor: 'rgba(0,0,0,0.5)',
        shadowColor: '#000',
        shadowOffset: { width: 0, heigth: 2 },
        shadowRadius: 2,
        flexDirection: 'row',
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
        height: 160
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
        flex: 2,
        borderRadius: 20,
        backgroundColor: 'rgba(0,0,0,0.5)',
        shadowColor: '#000',
        shadowOffset: { width: 0, heigth: 2 },
        shadowRadius: 2,
        flexDirection: 'row',
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 70,
        height: 160
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
        width: 280,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: 20,
    },
    containerImageInsideIdea: {
        height: 100,
        width: 91,
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
        backgroundColor: 'white'
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
        height: 50,
        width: 50,
    },
    containerHome: {
        flex: 4,
        borderRadius: 20,
        backgroundColor: 'rgba(0,0,0,0.5)',
        shadowColor: '#000',
        shadowOffset: { width: 0, heigth: 2 },
        shadowRadius: 2,
        flexDirection: 'row',
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
        height: 160
    },
    containerHomeLogo: {
        flex: 1,
        height: 50,
        width: 50,
        // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 60
    },
    containerImageHome: {
        height: 50,
        width: 50,
        marginBottom: 5,
    },
    containerHomeScreen: {
        flex: 2,
        borderRadius: 20,
        backgroundColor: 'rgba(0,0,0,0.5)',
        shadowColor: '#000',
        shadowOffset: { width: 0, heigth: 2 },
        shadowRadius: 2,
        flexDirection: 'column',
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
        height: 360
    },
    containerSomeHomeScreen: {
        borderRadius: 20,
        flexDirection: 'row',
        height: 170,
        width: 340,
        // backgroundColor: 'red'
    },
    photoHomeScreen: {
        height: 170,
        width: 150,
        borderRadius: 25,
    },
    textHomeScreen: {
        height: 165,
        width: 170,
        // marginTop: 5,
        // backgroundColor: 'skyblue'
    },
    cngImage: {
        height: 170,
        width: 140,
    },
    buttonGo: {
        backgroundColor: 'red',
        borderRadius: 20,
        height: 35,
        width: 150,
        justifyContent: 'center'
    },
    buttonIdea: {
        marginTop: 25,
        backgroundColor: 'red',
        borderRadius: 20,
        height: 35,
        width: 150,
        justifyContent: 'center'
    },
    buttonCustom: {
        marginTop: 30,
        backgroundColor: 'red',
        borderRadius: 20,
        height: 35,
        width: 150,
        justifyContent: 'center'
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
        height: 55,
        width: 340,
        // backgroundColor: 'yellow',
        // borderWidth: 0.5,
        // borderColor: '#d6d7da',
        alignItems: 'center',
        // justifyContent :'center'
    },
    containerBodyCrafter: {
        flex: 1,
        borderRadius: 20,
        flexDirection: 'column',
        height: 20,
        width: 340,
        // backgroundColor: 'blue',
        marginTop: 5,
    },
    bodyCrafterList: {
        // flex: 2,
        flexDirection: 'row',
        height: 70,
        width: 340,
        // alignItems: 'center',
        // backgroundColor: 'yellow',
        // borderWidth: 0.5,
        // borderColor: '#d6d7da',

    },
    CrafterListLeft: {
        height: 70,
        width: 150,
        // justifyContent: 'center',
        // backgroundColor: 'blue',
        // borderWidth: 0.5,
        // borderColor: '#d6d7da',
    },
    CrafterListRight: {
        height: 70,
        width: 190,
        // alignItems: 'center',
        // backgroundColor: 'yellow',
        // borderWidth: 0.5,
        // borderColor: '#d6d7da',
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
        height: 350,
        width: 300
    },
    photoProfileHomeScreen: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 100,
        width: 100,
        borderRadius: 100,
        marginTop: 15
    },
    containerProfileHomeScreen: {
        flex: 2,
        borderRadius: 20,
        backgroundColor: 'rgba(0,0,0,0.5)',
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
        marginLeft: 145,
        marginTop: 5
    },
    containerBodyProfile: {
        flex: 1,
        borderRadius: 20,
        flexDirection: 'column',
        height: 20,
        width: 340,
        marginTop: 20
    },
    listProfileIcon: {
        flexDirection: 'row',
        height: 70,
        width: 340,
    },
    profileMenu: {
        height: 70,
        width: 340,
        // marginLeft: 100,
        // backgroundColor: 'blue'
    },
    iconProfile: {
        height: 40,
        width: 40,
    },
    iconLogOut: {
        height: 25,
        width: 35,
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
        backgroundColor: 'rgba(0,0,0,0.5)',
        shadowColor: '#000',
        shadowOffset: { width: 0, heigth: 2 },
        shadowRadius: 2,
        flexDirection: 'column',
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
        height: 500
    },
    bodyJoinCrafter: {
        borderRadius: 20,
        flexDirection: 'column',
        height: 320,
        width: 340,
        // backgroundColor: 'yellow'
    },
    photoJoinCrafter: {
        height: 180,
        width: 170,
        borderRadius: 25,
        alignSelf: 'center',
        marginTop: 30

    },
    joinImage: {
        height: 180,
        width: 170,
    },
    buttonJoin: {
        // marginTop: 30,
        backgroundColor: 'red',
        borderRadius: 20,
        height: 35,
        width: 180,
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 60
    },
    iconQuestion: {
        height: 18,
        width: 15,
        marginLeft: 99,
        marginTop: -15
    }
});

export default DashboardPage;