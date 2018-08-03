import React, { Component } from 'react';
import { ImageBackground, TouchableOpacity, FlatList, TouchableWithoutFeedback, BackHandler, Alert } from 'react-native';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView
} from 'react-native';
import Swiper from 'react-native-swiper';
import { COLOR, IPSERVER } from '../shared/config';
import { NavigationActions, StackActions } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import BubbleMenu from 'react-native-bubble-menu';

export class DashboardPage extends React.Component {
    static navigationOptions = {
        header: null
    }

    constructor(props) {
        super(props);
        this.state = {
            show: false,
            sideMenu: false,
            statusMenu: 'profile',
            orderStatus: '',
            images: [
                'https://cdn.pixabay.com/photo/2016/04/28/00/28/shell-1357930_960_720.jpg',
                'https://cdn.pixabay.com/photo/2016/04/28/00/28/shell-1357930_960_720.jpg',
                'https://cdn.pixabay.com/photo/2016/04/28/00/28/shell-1357930_960_720.jpg',
                'https://cdn.pixabay.com/photo/2016/04/28/00/28/shell-1357930_960_720.jpg',
                'https://cdn.pixabay.com/photo/2016/04/28/00/28/shell-1357930_960_720.jpg',
                'https://cdn.pixabay.com/photo/2016/04/28/00/28/shell-1357930_960_720.jpg',
            ]
        };
    }

    componentWillMount() {
        console.log(this.state.sideMenu, 'Side Menu Status')
        BackHandler.addEventListener('hardwareBackPress', this.backPressed);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.backPressed);
    }

    backPressed = () => {
        console.log(this.state.sideMenu, 'Side Menu Status')
        if (this.state.sideMenu === true) {
            return this.sideMenus();
        } else if (this.state.sideMenu === false) {
            Alert.alert(
                'Exit App',
                'Exiting the application?', [{
                    text: 'Cancel',
                    onPress: () => {
                        console.log(this.state.sideMenu, 'Sidemenu Cancel Button');
                        console.log('Cancel Pressed')
                    },
                    style: 'cancel'
                }, {
                    text: 'OK',
                    onPress: () => BackHandler.exitApp()
                },]
            )
            return true;
        }
    }

    sideMenus = () => {
        this.setState({
            sideMenu: !this.state.sideMenu
        });
    }

    statusMenus = (value) => {
        console.log(value, 'Value')
        if (value === 'close') {
            this._toggleMenuVisibility();
        } else {
            this.setState({
                statusMenu: value
            })
        }
    }

    keyExtractor = (item) => item.id;

    OrderStatus = (value) => {
        console.log(value, 'Value')
        this.setState({
            orderStatus: value
        })
    }

    renderIdeaPhoto = (itemProduct, index) => {
        console.log(itemProduct, 'Item Dashboard');
        return (
            <View key={index}>
                <TouchableWithoutFeedback onPress={() => { }}>
                    <View style={{ borderRadius: 4, elevation: 2, marginRight: 2, height: 110, flex: 1, marginTop: 10 }}>
                        <Image
                            style={styles.item}
                            source={{ uri: `${itemProduct}` }}
                            resizeMode='contain'
                        />
                    </View>
                </TouchableWithoutFeedback>
            </View>
        )
    }

    _toggleMenuVisibility = () => {
        this.setState(({ show }) => ({
            show: !show,
        }));
    }

    _renderOpenBtn = () => (
        <View style={styles.menuOpenBtn}>
            <TouchableOpacity
                onPress={this._toggleMenuVisibility}
            >
                {
                    this.state.show === true ?
                        <View />
                        :
                        <Image
                            style={{ width: 25, height: 25 }}
                            source={require('./../assets/images/sidemenu/menu.png')}
                            resizeMode='contain'
                        />
                }
            </TouchableOpacity>
        </View>
    )

    _renderItems = () => {
        const { statusMenu } = this.state;
        const icons = [
            {
                name1: require('./../assets/images/sidemenu/profil-disable.png'),
                name2: require('./../assets/images/sidemenu/profil-enable.png'),
                action: 'profile'
            },
            {
                name3: require('./../assets/images/sidemenu/order-disable.png'),
                name4: require('./../assets/images/sidemenu/order-enable.png'),
                action: 'order'
            },
            {
                name5: require('./../assets/images/sidemenu/menu.png'),
                name6: require('./../assets/images/sidemenu/menu.png'),
                action: 'close',
            },
            {
                name7: require('./../assets/images/sidemenu/crafter-list-disable.png'),
                name8: require('./../assets/images/sidemenu/crafter-list-enable.png'),
                action: 'crafterList',
            },
            {
                name9: require('./../assets/images/sidemenu/crafter-menu-disable.png'),
                name10: require('./../assets/images/sidemenu/crafter-menu-enable.png'),
                action: 'crafterMenu',
            }
        ];

        const items = icons.map(({ name1, name2, name3, name4, name5, name6, name7, name8, name9, name10, action }, key) => (
            <View style={styles.menuGeneralIcons}>
                <TouchableOpacity
                    onPress={() => this.statusMenus(action)}
                    key={key}
                >
                    {
                        statusMenu === 'profile' ?
                            <Image
                                style={{ width: 25, height: 25 }}
                                source={name2}
                                resizeMode='contain'
                            />
                            :
                            <Image
                                style={{ width: 25, height: 25 }}
                                source={name1}
                                resizeMode='contain'
                            />
                    }
                    {
                        statusMenu === 'order' ?
                            <Image
                                style={{ width: 25, height: 25 }}
                                source={name4}
                                resizeMode='contain'
                            />
                            :
                            <Image
                                style={{ width: 25, height: 25 }}
                                source={name3}
                                resizeMode='contain'
                            />
                    }
                    {
                        statusMenu ?
                            <Image
                                style={{ width: 25, height: 25 }}
                                source={name6}
                            // resizeMode='contain'
                            />
                            :
                            <Image
                                style={{ width: 25, height: 25 }}
                                source={name5}
                            // resizeMode='contain'
                            />
                    }
                    {
                        statusMenu === 'crafterList' ?
                            <Image
                                style={{ width: 25, height: 25 }}
                                source={name8}
                                resizeMode='contain'
                            />
                            :
                            <Image
                                style={{ width: 25, height: 25 }}
                                source={name7}
                                resizeMode='contain'
                            />
                    }
                    {
                        statusMenu === 'crafterMenu' ?
                            <Image
                                style={{ width: 25, height: 25 }}
                                source={name10}
                                resizeMode='contain'
                            />
                            :
                            <Image
                                style={{ width: 25, height: 25 }}
                                source={name9}
                                resizeMode='contain'
                            />
                    }
                </TouchableOpacity>
            </View>
        ));
        return items;
    }

    render() {
        const { sideMenu, statusMenu, orderStatus, show } = this.state;
        return (
            <View style={{ flex: 1, backgroundColor: '#384058', alignItems: 'center' }}>
                <ImageBackground
                    source={require('./../assets/images/back_home.png')}
                    style={styles.backgroundStyle}
                >
                    <ScrollView>

                        <View style={styles.container}>
                            <View style={styles.containerSlide}>
                                <Swiper
                                    style={styles.wrapper}
                                    autoplay
                                    dot={<View style={styles.formatSwiper} />}
                                >
                                    <View style={styles.slide1}>
                                        <Image
                                            style={styles.imageStyle}
                                            source={require('./../assets/images/swiperFirst.png')}
                                            resizeMode='cover'
                                        />
                                    </View>
                                    <View style={styles.slide2}>
                                        <Image
                                            style={styles.imageStyle}
                                            source={require('./../assets/images/swiperSecond.png')}
                                            resizeMode='cover'
                                        />
                                    </View>
                                    <View style={styles.slide2}>
                                        <Image
                                            style={styles.imageStyle}
                                            source={require('./../assets/images/swiperThird.png')}
                                            resizeMode='cover'
                                        />
                                    </View>
                                    <View style={styles.slide2}>
                                        <Image
                                            style={styles.imageStyle}
                                            source={require('./../assets/images/swiperFour.png')}
                                            resizeMode='cover'
                                        />
                                    </View>
                                    <View style={styles.slide2}>
                                        <Image
                                            style={styles.imageStyle}
                                            source={require('./../assets/images/swiperFive.png')}
                                            resizeMode='cover'
                                        />
                                    </View>
                                </Swiper>
                            </View>


                            <View style={styles.containerDashboard}>
                                <Swiper
                                    style={styles.wrapper}
                                    showsPagination={false}
                                    showsButtons={false}
                                    dot={<View style={styles.formatSwiper} />}
                                >
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={styles.containerInsideProfileOne}>
                                            <View style={styles.containerPhoto}>
                                                <View>
                                                    <TouchableOpacity
                                                        onPress={() => this.props.navigation.navigate('ProfilePage')}>
                                                        <Image
                                                            style={styles.profileImage}
                                                            source={require('./../assets/images/profile.png')}
                                                        />
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </View>

                                        <View style={styles.containerInsideProfileTwo}>
                                            <View style={styles.containerUp}>
                                                <View style={{ marginLeft: 10, marginTop: 15 }}>
                                                    <Text style={{ color: 'grey', fontSize: 13, fontFamily: 'Quicksand-Bold' }}>Hi, Welcome!</Text>
                                                    <Text style={{ color: 'white', fontFamily: 'Quicksand-Bold', fontSize: 15 }}>Gal Gadot</Text>
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
                                                        <Text style={{ color: 'grey', marginTop: 2, paddingLeft: 35, fontSize: 12, fontFamily: 'Quicksand-Regular' }}>Total Apresiasi Design Anda</Text>
                                                        <Text style={{ color: 'grey', marginTop: 1, paddingLeft: 35, fontSize: 15, color: 'white' }}>Rp. 250.000</Text>
                                                    </View>
                                                </View>

                                            </View>

                                            <View style={styles.containerBottomProfileTwo}>
                                                <View style={{ marginLeft: 10, marginTop: 7 }}>
                                                    <View style={{ flex: 1 }}>
                                                        <Image
                                                            style={styles.icons}
                                                            source={require('./../assets/images/ic_design.png')}
                                                        />
                                                    </View>
                                                    <View style={{ flex: 1 }}>
                                                        <Text style={{ color: 'grey', marginTop: 2, paddingLeft: 35, fontSize: 12, fontFamily: 'Quicksand-Regular' }}>Total Design Anda</Text>
                                                        <Text style={{ color: 'grey', marginTop: 1, paddingLeft: 35, fontSize: 15, color: 'white', fontFamily: 'Quicksand-Regular' }}>3 Design</Text>
                                                    </View>
                                                </View>
                                            </View>


                                        </View>
                                    </View>
                                    <View style={{ flexDirection: 'row' }}>
                                        <View style={styles.containerInsideProfileOne}>
                                            <View style={styles.containerPhoto}>
                                                <View>
                                                    <TouchableOpacity style={styles.button}
                                                        onPress={() => this.props.navigation.navigate('ProfileCrafter')}>
                                                        <Image
                                                            style={styles.profileImage}
                                                            source={require('./../assets/images/yukikato.jpg')}
                                                        />
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </View>

                                        <View style={styles.containerInsideProfileTwo}>
                                            <View style={styles.containerUp}>
                                                <View style={{ marginLeft: 10, marginTop: 15 }}>
                                                    <Text style={{ color: 'grey', fontSize: 13, fontFamily: 'Quicksand-Regular' }}>Hi, Welcome!</Text>
                                                    <Text style={{ color: 'white', fontFamily: 'Quicksand-Regular', fontWeight: 'bold', fontSize: 15 }}>Yuki Kato</Text>
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
                                                        <Text style={{ color: 'grey', marginTop: 2, paddingLeft: 35, fontSize: 12 }}>Total Apresiasi Design Anda</Text>
                                                        <Text style={{ color: 'grey', marginTop: 1, paddingLeft: 35, fontSize: 15, color: 'white' }}>Rp. 250.000</Text>
                                                    </View>
                                                </View>

                                            </View>

                                            <View style={styles.containerBottomProfileTwo}>
                                                <View style={{ marginLeft: 10, marginTop: 7 }}>
                                                    <View style={{ flex: 1 }}>
                                                        <Image
                                                            style={styles.icons}
                                                            source={require('./../assets/images/ic_design.png')}
                                                        />
                                                    </View>
                                                    <View style={{ flex: 1 }}>
                                                        <Text style={{ color: 'grey', marginTop: 2, paddingLeft: 35, fontSize: 12, fontFamily: 'Quicksand-Bold' }}>Total Design Anda</Text>
                                                        <Text style={{ color: 'grey', marginTop: 1, paddingLeft: 35, fontSize: 15, color: 'white', fontFamily: 'Quicksand-Regular' }}>3 Design</Text>
                                                    </View>
                                                </View>
                                            </View>


                                        </View>
                                    </View>

                                </Swiper>
                            </View>
                            <View style={styles.containerUploadIdea}>
                                <View style={{ flex: 1, flexDirection: 'row', }}>
                                    <View style={{ flexDirection: 'column', marginTop: 10, marginLeft: 20, }}>
                                        <Text style={{ color: 'white', fontSize: 15, fontFamily: 'Quicksand-Regular', fontWeight: 'bold' }}>Idea Recently Upload</Text>
                                        <Text style={{ color: 'grey', fontSize: 13, fontFamily: 'Quicksand-Regular' }}>Checkout our friend new brilliant ideas</Text>
                                    </View>
                                    <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
                                        <TouchableOpacity
                                            onPress={() => this.props.navigation.navigate('IdeaMarket')}
                                        >
                                            <Text
                                                style={{
                                                    color: 'red', flex: 1, fontFamily: 'Quicksand-Regular', fontSize: 13, paddingTop: 10, paddingRight: 17
                                                }}
                                            >See all</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={{ flex: 1, marginLeft: 20, paddingRight: 7, marginRight: 10, marginTop: -85 }}>
                                    <FlatList
                                        data={this.state.images}
                                        horizontal
                                        renderItem={({ item, index }) => this.renderIdeaPhoto(item, index)}
                                        showsHorizontalScrollIndicator={false}
                                        extraData={this.state}
                                    />
                                </View>
                            </View>
                        </View>
                    </ScrollView>
                    {
                        this.state.show === true ?
                            <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.98)', width: '100%', height: '100%', position: 'absolute' }}>

                                <View style={{ height: '70%' }}>
                                    {
                                        statusMenu === 'home' ?
                                            <View />
                                            :
                                            <View style={{ height: '100%' }}>
                                                {
                                                    statusMenu === 'crafterList' ?
                                                        <View style={styles.containerHomeScreen}>
                                                            <View style={styles.containerHome}>
                                                                <View style={styles.containerHomeLogo}>
                                                                    <TouchableOpacity
                                                                        onPress={() => this.props.navigation.navigate('CrafterMyOrder')}>
                                                                        <Image style={{ marginTop: 15, alignContent: 'center', alignSelf: 'center', width: 50, height: 50 }}
                                                                            source={require('./../assets/images/sidemenu/page-sidemenu/daftar-pesanan.png')}
                                                                        />
                                                                    </TouchableOpacity>
                                                                </View>

                                                                <View style={styles.containerHomeLogo}>
                                                                    <TouchableOpacity
                                                                        onPress={() => this.props.navigation.navigate('NotificationMenu')}>
                                                                        <Image style={{ marginTop: 15, alignContent: 'center', alignSelf: 'center', width: 50, height: 50 }}
                                                                            source={require('./../assets/images/sidemenu/page-sidemenu/notifikasi.png')}
                                                                        />
                                                                    </TouchableOpacity>
                                                                </View>

                                                                <View style={styles.containerHomeLogo}>
                                                                    <TouchableOpacity
                                                                        onPress={() => this.props.navigation.navigate('SettingMenu')}>
                                                                        <Image style={{ marginTop: 15, alignContent: 'center', alignSelf: 'center', width: 50, height: 50 }}
                                                                            source={require('./../assets/images/sidemenu/page-sidemenu/setting.png')}
                                                                        />
                                                                    </TouchableOpacity>
                                                                </View>

                                                                <View style={styles.containerHomeLogo}>
                                                                    <TouchableOpacity
                                                                        onPress={() => this.props.navigation.navigate('HelpMenu')}>
                                                                        <Image style={{ marginTop: 15, alignContent: 'center', alignSelf: 'center', width: 50, height: 50 }}
                                                                            source={require('./../assets/images/sidemenu/page-sidemenu/bantuan.png')}
                                                                        />
                                                                    </TouchableOpacity>
                                                                </View>
                                                            </View>
                                                            <View style={styles.containerSomeHomeScreen}>
                                                                <View style={styles.photoHomeScreen}>
                                                                    <Image
                                                                        style={styles.cngImage}
                                                                        source={require('./../assets/images/crafter_list.png')}
                                                                    />
                                                                </View>
                                                                <View style={{
                                                                    flex: 1, flexDirection: 'column',
                                                                    borderRadius: 25,
                                                                }} >
                                                                    <Text style={{ paddingLeft: 7.5, marginTop: 5, color: 'white', fontSize: 15, fontFamily: 'Quicksand-Bold' }}>CRAFTER LIST</Text>
                                                                    <Text style={{ paddingLeft: 7.5, color: 'white', fontSize: 13.5, textAlign: 'left', flex: 1, fontFamily: 'Quicksand-Regular' }}>Kumpulan crafter dengan keunikannya yang beraneka ragam</Text>

                                                                    <TouchableOpacity
                                                                        style={styles.buttonCustom}
                                                                        onPress={() => {
                                                                            this.props.navigation.navigate('CrafterList');
                                                                            this.setState(({ show }) => ({
                                                                                show: !show,
                                                                            }));
                                                                        }}
                                                                    >
                                                                        <Text style={{ textAlign: 'center', color: 'white', fontSize: 15, fontFamily: 'Quicksand-Bold' }}>GO</Text>
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
                                                                                    source={require('./../assets/images/sidemenu/fashion_crafter.png')}
                                                                                />
                                                                            </View>
                                                                            <View style={{ flex: 1 }}>
                                                                                <Text style={{ color: 'white', marginTop: 15, paddingLeft: 70, fontSize: 13 }}>Fashion</Text>
                                                                                <Text style={{ color: '#d87115', marginTop: 1, paddingLeft: 70, fontSize: 13 }}>1254 Crafter</Text>
                                                                            </View>
                                                                        </View>
                                                                    </View>
                                                                    <View style={styles.CrafterListRight}>
                                                                        <View style={{ marginTop: 6 }}>
                                                                            <View style={{ flex: 1 }}>
                                                                                <Image
                                                                                    style={styles.iconsCrafterMenu}
                                                                                    source={require('./../assets/images/sidemenu/diy_crafter.png')}
                                                                                />
                                                                            </View>
                                                                            <View style={{ flex: 1 }}>
                                                                                <Text style={{ color: 'white', marginTop: 15, paddingLeft: 70, fontSize: 13 }}>DIY, Hobbies, Toys</Text>
                                                                                <Text style={{ color: '#d87115', marginTop: 1, paddingLeft: 70, fontSize: 13 }}>199 Crafter</Text>
                                                                            </View>
                                                                        </View>
                                                                    </View>
                                                                </View>

                                                                <View style={styles.bodyCrafterList}>
                                                                    <View style={styles.CrafterListLeft}>
                                                                        <View style={{ marginLeft: 10, marginTop: 10 }}>
                                                                            <View style={{ flex: 1 }}>
                                                                                <Image
                                                                                    style={styles.iconsCrafterMenu}
                                                                                    source={require('./../assets/images/sidemenu/furniture_crafter.png')}
                                                                                />
                                                                            </View>
                                                                            <View style={{ flex: 1 }}>
                                                                                <Text style={{ color: 'white', marginTop: 15, paddingLeft: 70, fontSize: 13 }}>Furniture</Text>
                                                                                <Text style={{ color: '#d87115', marginTop: 1, paddingLeft: 70, fontSize: 13 }}>723 Crafter</Text>
                                                                            </View>
                                                                        </View>

                                                                    </View>
                                                                    <View style={styles.CrafterListRight}>
                                                                        <View style={{ marginTop: 10 }}>
                                                                            <View style={{ flex: 1 }}>
                                                                                <Image
                                                                                    style={styles.iconsCrafterMenu}
                                                                                    source={require('./../assets/images/sidemenu/beauty_Crafter.png')}
                                                                                />
                                                                            </View >
                                                                            <View style={{ flex: 1 }}>
                                                                                <Text style={{ color: 'white', marginTop: 15, paddingLeft: 70, fontSize: 13 }}>Beauty</Text>
                                                                                <Text style={{ color: '#d87115', marginTop: 1, paddingLeft: 70, fontSize: 13 }}>269 Crafter</Text>
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
                                                                        <View style={styles.containerHome}>
                                                                            <View style={styles.containerHomeLogo}>
                                                                                <TouchableOpacity
                                                                                    onPress={() => this.props.navigation.navigate('CrafterMyOrder')}>
                                                                                    <Image style={{ marginTop: 15, alignContent: 'center', alignSelf: 'center', width: 50, height: 50 }}
                                                                                        source={require('./../assets/images/sidemenu/page-sidemenu/daftar-pesanan.png')}
                                                                                    />
                                                                                </TouchableOpacity>
                                                                            </View>

                                                                            <View style={styles.containerHomeLogo}>
                                                                                <TouchableOpacity
                                                                                    onPress={() => this.props.navigation.navigate('NotificationMenu')}>
                                                                                    <Image style={{ marginTop: 15, alignContent: 'center', alignSelf: 'center', width: 50, height: 50 }}
                                                                                        source={require('./../assets/images/sidemenu/page-sidemenu/notifikasi.png')}
                                                                                    />
                                                                                </TouchableOpacity>
                                                                            </View>

                                                                            <View style={styles.containerHomeLogo}>
                                                                                <TouchableOpacity
                                                                                    onPress={() => this.props.navigation.navigate('SettingMenu')}>
                                                                                    <Image style={{ marginTop: 15, alignContent: 'center', alignSelf: 'center', width: 50, height: 50 }}
                                                                                        source={require('./../assets/images/sidemenu/page-sidemenu/setting.png')}
                                                                                    />
                                                                                </TouchableOpacity>
                                                                            </View>

                                                                            <View style={styles.containerHomeLogo}>
                                                                                <TouchableOpacity
                                                                                    onPress={() => this.props.navigation.navigate('HelpMenu')}>
                                                                                    <Image style={{ marginTop: 15, alignContent: 'center', alignSelf: 'center', width: 50, height: 50 }}
                                                                                        source={require('./../assets/images/sidemenu/page-sidemenu/bantuan.png')}
                                                                                    />
                                                                                </TouchableOpacity>
                                                                            </View>
                                                                        </View>
                                                                        {
                                                                            orderStatus === '' ?

                                                                                <View style={styles.containerSomeHomeScreen}>
                                                                                    <View style={styles.photoHomeScreen}>
                                                                                        <Image
                                                                                            style={styles.cngImage}
                                                                                            source={require('./../assets/images/order_default.png')}
                                                                                        />
                                                                                    </View>
                                                                                    <View style={{
                                                                                        flex: 1, flexDirection: 'column',
                                                                                        borderRadius: 25,
                                                                                    }} >
                                                                                        <Text
                                                                                            style={{
                                                                                                paddingLeft: 7.5, marginTop: 30, color: 'white',
                                                                                                fontSize: 15, fontFamily: 'Quicksand-Bold'
                                                                                            }}>ORDER </Text>
                                                                                        <Text style={{ paddingLeft: 7.5, color: 'white', fontSize: 15, textAlign: 'left', flex: 1, fontFamily: 'Quicksand-Regular' }}>Penuhi keinginanmu sekarang juga dengan 3 fitur yang akan membuat kreasimu menjadi nyata.</Text>
                                                                                        {/* <View style={{ flex: 1 }} /> */}
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
                                                                                                <View style={{
                                                                                                    flex: 1, flexDirection: 'column',
                                                                                                    borderRadius: 25,
                                                                                                }} >
                                                                                                    <Text style={{ paddingLeft: 7.5, marginTop: 5, color: 'white', fontSize: 15, fontFamily: 'Quicksand-Bold' }}>CUSTOM</Text>
                                                                                                    <Text style={{ paddingLeft: 7.5, color: 'white', fontSize: 13.5, textAlign: 'left', flex: 1, fontFamily: 'Quicksand-Regular', }}>Dengan imajinasimu dan fitur ini, kamu bisa dapatkan hasil desainmu sendiri.</Text>

                                                                                                    <TouchableOpacity
                                                                                                        style={styles.buttonCustom}
                                                                                                        onPress={() => {
                                                                                                            this.props.navigation.navigate('Order');
                                                                                                            this.setState(({ show }) => ({
                                                                                                                show: !show,
                                                                                                            }));
                                                                                                        }}>
                                                                                                        <Text style={{ textAlign: 'center', color: 'white', fontSize: 15, fontFamily: 'Quicksand-Bold' }}>GO</Text>
                                                                                                    </TouchableOpacity>
                                                                                                </View>
                                                                                            </View>
                                                                                            :
                                                                                            <View style={{ width: '100%' }}>
                                                                                                {
                                                                                                    orderStatus === 'captureAndGet' ?
                                                                                                        <View style={styles.containerSomeHomeScreen}>
                                                                                                            <View style={styles.photoHomeScreen}>
                                                                                                                <Image
                                                                                                                    style={styles.cngImage}
                                                                                                                    source={require('./../assets/images/CapturenGet.png')}
                                                                                                                />
                                                                                                            </View>
                                                                                                            <View style={{
                                                                                                                flex: 1, flexDirection: 'column',
                                                                                                                borderRadius: 25
                                                                                                            }} >
                                                                                                                <Text style={{ paddingLeft: 7.5, marginTop: 5, color: 'white', fontSize: 15, fontFamily: 'Quicksand-Bold' }}>CAPTURE N' Get</Text>
                                                                                                                <Text style={{ paddingLeft: 7.5, color: 'white', fontSize: 13.5, textAlign: 'left', flex: 1, fontFamily: 'Quicksand-Regular' }}>Cari produk hanya dengan mengupload foto, kamu bisa dapetin produk itu</Text>

                                                                                                                <TouchableOpacity
                                                                                                                    style={styles.buttonCustom}
                                                                                                                    onPress={() => {
                                                                                                                        this.props.navigation.navigate('Captureandget');
                                                                                                                        this.setState(({ show }) => ({
                                                                                                                            show: !show,
                                                                                                                        }));
                                                                                                                    }}>
                                                                                                                    <Text style={{ textAlign: 'center', color: 'white', fontSize: 15, fontFamily: 'Quicksand-Bold' }}>GO</Text>
                                                                                                                </TouchableOpacity>
                                                                                                            </View>
                                                                                                        </View>
                                                                                                        :
                                                                                                        <View style={{ width: '100%', }}>
                                                                                                            {
                                                                                                                orderStatus === 'ideaMarket' ?
                                                                                                                    <View style={styles.containerSomeHomeScreen}>
                                                                                                                        <View style={styles.photoHomeScreen}>
                                                                                                                            <Image
                                                                                                                                style={styles.cngImage}
                                                                                                                                source={require('./../assets/images/idea_market.png')}
                                                                                                                            />
                                                                                                                        </View>
                                                                                                                        <View style={{
                                                                                                                            flex: 1, flexDirection: 'column',
                                                                                                                            borderRadius: 25,
                                                                                                                        }} >
                                                                                                                            <Text style={{ paddingLeft: 7.5, marginTop: 5, color: 'white', fontSize: 15, fontFamily: 'Quicksand-Bold' }}>IDEA MARKET</Text>
                                                                                                                            <Text style={{ paddingLeft: 7.5, color: 'white', fontSize: 13.5, textAlign: 'justify', flex: 1, fontFamily: 'Quicksand-Regular' }}>Dengan imajinasimu dan fitur ini, kamu bisa dapatkan hasil desainmu sendiri.</Text>

                                                                                                                            <TouchableOpacity
                                                                                                                                style={styles.buttonCustom}
                                                                                                                                onPress={() => {
                                                                                                                                    this.props.navigation.navigate('IdeaMarket');
                                                                                                                                    this.setState(({ show }) => ({
                                                                                                                                        show: !show,
                                                                                                                                    }));
                                                                                                                                }}>
                                                                                                                                <Text style={{ textAlign: 'center', color: 'white', fontSize: 15, fontFamily: 'Quicksand-Bold' }}>GO</Text>
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
                                                                            <View style={{ borderTopWidth: 2, borderTopColor: 'white' }}>
                                                                                <TouchableOpacity
                                                                                    onPress={() => this.OrderStatus('custom')}
                                                                                >
                                                                                    <Text style={{ marginTop: 20, marginBottom: 20, color: 'white', fontSize: 15, fontFamily: 'Quicksand-Bold', textAlign: 'center' }}>Custom</Text>
                                                                                </TouchableOpacity>
                                                                            </View>
                                                                            <View style={{ borderTopWidth: 2, borderTopColor: 'white', borderBottomColor: 'white', borderBottomWidth: 2 }}>
                                                                                <TouchableOpacity
                                                                                    onPress={() => this.OrderStatus('captureAndGet')}
                                                                                >
                                                                                    <Text style={{ marginTop: 20, marginBottom: 20, color: 'white', fontSize: 15, fontFamily: 'Quicksand-Bold', textAlign: 'center' }}>Capture n` Get</Text>
                                                                                </TouchableOpacity>
                                                                            </View>
                                                                            <View style={{ borderBottomWidth: 2, borderBottomColor: 'white' }}>
                                                                                <TouchableOpacity
                                                                                    onPress={() => this.OrderStatus('ideaMarket')}
                                                                                >
                                                                                    <Text style={{ marginTop: 20, marginBottom: 20, color: 'white', fontSize: 15, fontFamily: 'Quicksand-Bold', textAlign: 'center' }}>Idea Market</Text>
                                                                                </TouchableOpacity>
                                                                            </View>
                                                                        </View>
                                                                    </View>
                                                                    :
                                                                    <View style={{ height: '100%' }}>
                                                                        {
                                                                            statusMenu === 'profile' ?
                                                                                <View style={{ flex: 1, flexDirection: 'column' }}>
                                                                                    <View style={styles.containerHome}>
                                                                                        <View style={styles.containerHomeLogo}>
                                                                                            <TouchableOpacity
                                                                                                onPress={() => this.props.navigation.navigate('CrafterMyOrder')}>
                                                                                                <Image style={{ marginTop: 15, alignContent: 'center', alignSelf: 'center', width: 50, height: 50 }}
                                                                                                    source={require('./../assets/images/sidemenu/page-sidemenu/daftar-pesanan.png')}
                                                                                                />
                                                                                            </TouchableOpacity>
                                                                                        </View>

                                                                                        <View style={styles.containerHomeLogo}>
                                                                                            <TouchableOpacity
                                                                                                onPress={() => this.props.navigation.navigate('NotificationMenu')}>
                                                                                                <Image style={{ marginTop: 15, alignContent: 'center', alignSelf: 'center', width: 50, height: 50 }}
                                                                                                    source={require('./../assets/images/sidemenu/page-sidemenu/notifikasi.png')}
                                                                                                />
                                                                                            </TouchableOpacity>
                                                                                        </View>

                                                                                        <View style={styles.containerHomeLogo}>
                                                                                            <TouchableOpacity
                                                                                                onPress={() => this.props.navigation.navigate('SettingMenu')}>
                                                                                                <Image style={{ marginTop: 15, alignContent: 'center', alignSelf: 'center', width: 50, height: 50 }}
                                                                                                    source={require('./../assets/images/sidemenu/page-sidemenu/setting.png')}
                                                                                                />
                                                                                            </TouchableOpacity>
                                                                                        </View>

                                                                                        <View style={styles.containerHomeLogo}>
                                                                                            <TouchableOpacity
                                                                                                onPress={() => this.props.navigation.navigate('HelpMenu')}>
                                                                                                <Image style={{ marginTop: 15, alignContent: 'center', alignSelf: 'center', width: 50, height: 50 }}
                                                                                                    source={require('./../assets/images/sidemenu/page-sidemenu/bantuan.png')}
                                                                                                />
                                                                                            </TouchableOpacity>
                                                                                        </View>
                                                                                    </View>
                                                                                    <View style={[styles.profileHomeScreen]}>
                                                                                        <View style={{ flex: 1 }}>
                                                                                            <Text style={{ color: 'white', marginTop: 12, alignSelf: 'center', fontSize: 15, fontFamily: 'Quicksand-Regular' }}>Gal Gadot</Text>
                                                                                            <View style={{ flexDirection: 'row', justifyContent: 'center', alignContent: 'center' }}>
                                                                                                <Image
                                                                                                    style={styles.locationIcon}
                                                                                                    source={require('./../assets/images/location_icon.png')}
                                                                                                />
                                                                                                <Text style={{ color: 'white', marginLeft: 10, marginTop: 5, alignSelf: 'center', fontSize: 13, fontFamily: 'Quicksand-Regular' }}>Bali</Text>
                                                                                            </View>
                                                                                            <View style={{ alignItems: 'center' }}>
                                                                                                <TouchableOpacity style={styles.button}
                                                                                                    onPress={() => this.props.navigation.navigate('')}>
                                                                                                    <Image
                                                                                                        style={styles.photoProfileHomeScreen}
                                                                                                        source={require('./../assets/images/profile.png')}
                                                                                                    />
                                                                                                </TouchableOpacity>
                                                                                            </View>
                                                                                            <Text style={{ color: 'white', marginTop: 15, alignSelf: 'center', fontSize: 15, fontFamily: 'Quicksand-Bold' }}>PROFILE</Text>
                                                                                            <Text style={{ color: 'white', marginTop: 5, alignSelf: 'center', fontSize: 15, fontFamily: 'Quicksand-Regular' }}>Lihat dan atur segala informasi</Text>
                                                                                            <Text style={{ color: 'white', marginTop: 5, alignSelf: 'center', fontSize: 15, fontFamily: 'Quicksand-Regular' }}>profil anda disini </Text>
                                                                                        </View>
                                                                                        <View style={{ height: 70, marginTop: 50, flexDirection: 'row', paddingLeft: 20, paddingRight: 20 }}>
                                                                                            <View style={{ flex: 1 }}>
                                                                                                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }}
                                                                                                    onPress={() => {
                                                                                                        this.props.navigation.navigate('ProfilePage');
                                                                                                        this.setState(({ show }) => ({
                                                                                                            show: !show,
                                                                                                        }));
                                                                                                    }}
                                                                                                >
                                                                                                    <Image
                                                                                                        style={[styles.iconProfile, { marginBottom: 15 }]}
                                                                                                        source={require('./../assets/images/sidemenu/edit_profile.png')}
                                                                                                    />
                                                                                                    <Text style={{ textAlign: 'center', color: 'white', fontFamily: 'Quicksand-Regular', fontSize: 15 }}>Edit Profile</Text>
                                                                                                </TouchableOpacity>
                                                                                            </View>

                                                                                            <View style={{ flex: 1 }}>
                                                                                                <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }}
                                                                                                    onPress={() => {
                                                                                                        const resetAction = StackActions.reset({
                                                                                                            index: 0,
                                                                                                            actions: [NavigationActions.navigate({ routeName: 'MenuLogin' })],
                                                                                                        });
                                                                                                        this.props.navigation.dispatch(resetAction);
                                                                                                    }
                                                                                                    }>
                                                                                                    <Image
                                                                                                        style={[styles.iconProfile, { marginBottom: 15 }]}
                                                                                                        source={require('./../assets/images/sidemenu/logout.png')}
                                                                                                        resizeMode='contain'
                                                                                                    />
                                                                                                    <Text style={{ textAlign: 'center', color: 'white', fontFamily: 'Quicksand-Regular', fontSize: 15 }}>Log Out</Text>
                                                                                                </TouchableOpacity>
                                                                                            </View>
                                                                                        </View>
                                                                                    </View>
                                                                                </View>
                                                                                :
                                                                                <View style={{ height: '100%' }}>
                                                                                    {
                                                                                        statusMenu === 'crafterMenu' ?
                                                                                            <View style={styles.containerBodyJoinCrafter}>
                                                                                                <View style={styles.containerHome}>
                                                                                                    <View style={styles.containerHomeLogo}>
                                                                                                        <TouchableOpacity
                                                                                                            onPress={() => this.props.navigation.navigate('CrafterMyOrder')}>
                                                                                                            <Image style={{ marginTop: 15, alignContent: 'center', alignSelf: 'center', width: 50, height: 50 }}
                                                                                                                source={require('./../assets/images/sidemenu/page-sidemenu/daftar-pesanan.png')}
                                                                                                            />
                                                                                                        </TouchableOpacity>
                                                                                                    </View>

                                                                                                    <View style={styles.containerHomeLogo}>
                                                                                                        <TouchableOpacity
                                                                                                            onPress={() => this.props.navigation.navigate('NotificationMenu')}>
                                                                                                            <Image style={{ marginTop: 15, alignContent: 'center', alignSelf: 'center', width: 50, height: 50 }}
                                                                                                                source={require('./../assets/images/sidemenu/page-sidemenu/notifikasi.png')}
                                                                                                            />
                                                                                                        </TouchableOpacity>
                                                                                                    </View>

                                                                                                    <View style={styles.containerHomeLogo}>
                                                                                                        <TouchableOpacity
                                                                                                            onPress={() => this.props.navigation.navigate('SettingMenu')}>
                                                                                                            <Image style={{ marginTop: 15, alignContent: 'center', alignSelf: 'center', width: 50, height: 50 }}
                                                                                                                source={require('./../assets/images/sidemenu/page-sidemenu/setting.png')}
                                                                                                            />
                                                                                                        </TouchableOpacity>
                                                                                                    </View>

                                                                                                    <View style={styles.containerHomeLogo}>
                                                                                                        <TouchableOpacity
                                                                                                            onPress={() => this.props.navigation.navigate('HelpMenu')}>
                                                                                                            <Image style={{ marginTop: 15, alignContent: 'center', alignSelf: 'center', width: 50, height: 50 }}
                                                                                                                source={require('./../assets/images/sidemenu/page-sidemenu/bantuan.png')}
                                                                                                            />
                                                                                                        </TouchableOpacity>
                                                                                                    </View>
                                                                                                </View>
                                                                                                <View style={{ flex: 1, flexDirection: 'column', marginTop: -250 }}>
                                                                                                    <View style={{ flex: 1, marginTop: -29 }}>
                                                                                                        <View style={styles.photoJoinCrafter}>
                                                                                                            <Image
                                                                                                                style={styles.joinImage}
                                                                                                                source={require('./../assets/images/crafter_menu.png')}
                                                                                                            />
                                                                                                        </View>

                                                                                                        <Text style={{ color: 'white', marginTop: 3, alignSelf: 'center', fontSize: 13, fontFamily: 'Quicksand-Regular' }}>Daftarkan diri anda </Text>
                                                                                                        <Text style={{ color: 'white', marginTop: 3, alignSelf: 'center', fontSize: 13, fontFamily: 'Quicksand-Regular' }}>menjadi partner kami</Text>
                                                                                                        <Text style={{ color: 'white', marginTop: 3, alignSelf: 'center', fontSize: 13, fontFamily: 'Quicksand-Regular' }}>sebagai CRAFTER </Text>
                                                                                                    </View>

                                                                                                    <View style={{ flex: 1 }}>
                                                                                                        <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 80 }}>
                                                                                                            <Image
                                                                                                                style={styles.iconQuestion}
                                                                                                                source={require('./../assets/images/question.png')}
                                                                                                            />
                                                                                                            <Text style={{ marginLeft: 10, color: 'white', fontSize: 13, fontFamily: 'Quicksand-Regular' }}>apa itu <Text style={{ color: '#d87115', fontFamily: 'Quicksand-Regular', fontSize: 13 }}>CRAFTER ?</Text></Text>
                                                                                                        </View>
                                                                                                        <View style={{ flex: 1, marginTop: -100 }}>
                                                                                                            <TouchableOpacity style={styles.buttonJoin}
                                                                                                                onPress={() => {
                                                                                                                    this.props.navigation.navigate('CrafterMenu')
                                                                                                                    this.setState(({ show }) => ({
                                                                                                                        show: !show,
                                                                                                                    }));
                                                                                                                }}>
                                                                                                                <Text style={{ textAlign: 'center', color: 'white', fontSize: 15, fontFamily: 'Quicksand-Bold' }}>JOIN</Text>
                                                                                                            </TouchableOpacity>
                                                                                                        </View>
                                                                                                    </View>
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
                            </View>
                            :
                            <View />
                    }

                    <View style={{ alignItems: 'center', marginBottom: 13 }}>
                        <BubbleMenu
                            items={this._renderItems()}
                            openBtn={this._renderOpenBtn()}
                            show={this.state.show}
                            style={styles.menu}
                        />
                    </View>
                </ImageBackground>
            </View>
        )
    }

};

const styles = StyleSheet.create({
    menu: {
        padding: 15,
        borderRadius: 50,
        justifyContent: 'space-between',
        // backgroundColor: 'red'
    },
    menuGeneralIcons: {
        marginTop: 10,
        width: 50,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'orange',
        marginHorizontal: 10
    },
    menuOpenBtn: {
        width: '100%',
        height: 50,
        alignItems: 'center',
    },
    backgroundStyle: {
        width: '100%',
        height: '100%',
        backgroundColor: COLOR.element_a1
    },
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
    container: {
        flex: 1,
        width: '100%',
        height: '100%',
        alignItems: 'center'
    },
    containerSlide: {
        width: '100%',
        height: 160,
        // backgroundColor: 'red'
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
        // alignContent: 'center',
        height: 175,
        width: '95%',
    },
    containerPhoto: {
        flex: 1,
        width: 125,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red'
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
        width: 130,
        height: 180,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red',
        marginLeft: 10
    },
    containerInsideProfileTwo: {
        flex: 1,
        height: 160,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'yellow'
    },
    containerUp: {
        width: 230,
        height: 60,
        // backgroundColor: 'blue'
    },
    containerMiddleProfileTwo: {
        width: 230,
        height: 50,
        // backgroundColor: 'blue'
    },
    containerBottomProfileTwo: {
        width: 230,
        height: 50,
        // backgroundColor: 'blue'
    },
    containerUploadIdea: {
        flex: 1,
        borderRadius: 20,
        backgroundColor: 'rgba(0,0,0,0.8)',
        shadowColor: '#009',
        shadowOffset: { width: 0, heigth: 2 },
        shadowRadius: 2,
        // flexDirection: 'row',
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
        flex: 1,
        height: 90,
        width: '96%',
        flexDirection: 'row',
        marginBottom: 30,
        marginTop: 10,
        backgroundColor: 'red'
    },
    containerImageInsideIdea: {
        height: 150,
        width: 90,
        alignSelf: 'stretch',
        resizeMode: 'cover'
    },
    containerFlatList: {
        flex: 1,
        marginLeft: -3,
        paddingRight: 13,
        marginTop: -20
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
        height: 85,
        width: 85,
        marginBottom: 25
    },
    Logo2: {
        height: 60,
        width: 60,
    },
    containerHome: {
        flex: 1,
        borderRadius: 20,
        backgroundColor: 'rgba(0,0,0,0)',
        shadowColor: '#000',
        shadowOffset: { width: 0, heigth: 2 },
        shadowRadius: 2,
        flexDirection: 'row',
        height: 50
    },
    containerHomeLogo: {
        flex: 1,
        height: 80,
        width: 50,
        alignItems: 'center',
        justifyContent: 'center',
        top: -7.5,
        backgroundColor: 'transparent'
    },
    containerImageHome: {
        height: 50,
        width: 50,
        marginBottom: 5,
    },
    containerHomeScreen: {
        flex: 1,
        borderRadius: 20,
        backgroundColor: 'rgba(0,0,0,0)',
        shadowColor: '#000',
        shadowOffset: { width: 0, heigth: 2 },
        shadowRadius: 2,
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerSomeHomeScreen: {
        borderRadius: 20,
        flexDirection: 'row',
        height: 170,
        width: '100%',
        marginTop: -75,
        alignSelf: 'center',
        paddingLeft: 4,
        paddingRight: 4,
        // backgroundColor: 'skyblue'
    },
    photoHomeScreen: {
        height: 170,
        borderRadius: 25
    },
    textHomeScreen: {
        height: 165,
        width: 185,
    },
    cngImage: {
        height: 170,
        width: 160,
    },
    buttonCustom: {
        marginTop: 35,
        marginBottom: 18,
        backgroundColor: 'red',
        borderRadius: 20,
        justifyContent: 'center',
        marginLeft: 5,
        marginRight: 5,
        flex: 1,
        // zIndex: 0
    },
    item: {
        height: 85,
        width: 87,
        borderRadius: 4,
        alignSelf: 'stretch',
        resizeMode: 'cover'
    },
    buttonIdea: {
        marginTop: 35,
        marginBottom: 18,
        backgroundColor: 'red',
        borderRadius: 20,
        justifyContent: 'center',
        marginLeft: 10,
        flex: 1
    },
    buttonCapture: {
        marginTop: 35,
        marginBottom: 18,
        backgroundColor: 'red',
        borderRadius: 20,
        justifyContent: 'center',
        marginLeft: 10,
        flex: 1
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
        fontSize: 15,
        fontFamily: 'Quicksand-Bold'
    },

    containerBodyHome: {
        flex: 1,
        borderRadius: 20,
        flexDirection: 'column',
        height: 20,
        width: '95%',
        // backgroundColor: 'blue',
        marginTop: 5,
        // marginLeft: 10,
        // marginRight: 10
    },
    DefaultBody: {
        height: 70,
        width: '100%',
        alignItems: 'center',

    },
    containerBodyCrafter: {
        // flex: 1,
        borderRadius: 20,
        flexDirection: 'column',
        height: '32%',
        width: '100%',
        // backgroundColor: 'pink',
        paddingLeft: 5
    },
    bodyCrafterList: {
        flexDirection: 'row',
        flex: 1
    },
    CrafterListLeft: {
        height: 70,
        flex: 1
    },
    CrafterListRight: {
        height: 70,
        flex: 1
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
        flex: 1,
        marginTop: -300,
        // height: 800,
        alignSelf: 'center',
        width: 300,
        height: 400,
        // flex:1,
        // backgroundColor: 'skyblue'
    },
    photoProfileHomeScreen: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 130,
        width: 130,
        borderRadius: 100,
        marginTop: 15,
    },
    containerProfileHomeScreen: {
        flex: 1,
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, heigth: 2 },
        shadowRadius: 2,
        flexDirection: 'column',
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
        height: '800%',
        backgroundColor: 'red'
    },
    locationIcon: {
        height: 15,
        width: 10,
        marginTop: 8
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
        // marginTop: 10,
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
        height: 40,
        width: 220,
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 70,
        // zIndex: 1
    },
    iconQuestion: {
        height: 20,
        width: 20,
        alignSelf: 'center'
    }
});

export default DashboardPage;