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
import { COLOR, IPSERVER } from './../shared/config';
import { NavigationActions, StackActions } from 'react-navigation';
import ActionButton from 'react-native-circular-action-menu';

export class DashboardPage extends React.Component {
	static navigationOptions = {
		header: null
	}

	constructor(props) {
		super(props);
		this.state = {
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
		this.setState({
			statusMenu: value
		})
	}

	keyExtractor = (item) => item.id;



	OrderStatus = (value) => {
		console.log(value, 'Value')
		this.setState({
			orderStatus: value
		})
	}

	renderIdeaPhoto = (itemProduct) => {
		return (
			<View>
				<TouchableWithoutFeedback onPress={() => { }}>
					<View style={{ borderRadius: 4, elevation: 2, marginRight: 2, height: 110, flex: 1, marginTop: 10 }}>
						<Image
							style={styles.item}
							source={{ uri: `${itemProduct.item}` }}
							resizeMode='contain'
						/>
					</View>
				</TouchableWithoutFeedback>
			</View>
		)
	}


	render() {
		const { sideMenu, statusMenu, orderStatus } = this.state;
		return (
			<View style={{ flex: 1 }}>
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
														<Text style={{ color: 'grey', marginTop: 2, paddingLeft: 35, fontSize: 13 }}>Total Apresiasi Design Anda</Text>
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
														<Text style={{ color: 'grey', marginTop: 2, paddingLeft: 35, fontSize: 13, fontFamily: 'Quicksand-Bold' }}>Total Design Anda</Text>
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
														onPress={() => this.props.navigation.navigate('')}>
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
													<Text style={{ color: 'grey', fontSize: 13, fontFamily: 'Quicksand-Bold' }}>Hi, Welcome!</Text>
													<Text style={{ color: 'white', fontFamily: 'Quicksand-Bold', fontSize: 15 }}>Yuki Kato</Text>
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
														<Text style={{ color: 'grey', marginTop: 2, paddingLeft: 35, fontSize: 13 }}>Total Apresiasi Design Anda</Text>
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
														<Text style={{ color: 'grey', marginTop: 2, paddingLeft: 35, fontSize: 13, fontFamily: 'Quicksand-Bold' }}>Total Design Anda</Text>
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
										<Text style={{ color: 'white', fontSize: 15, fontFamily: 'Quicksand-Bold' }}>Idea Recently Upload</Text>
										<Text style={{ color: 'grey', fontSize: 13, fontFamily: 'Quicksand-Regular' }}>Checkout our friend new brilliant ideas</Text>
									</View>
									<View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end' }}>
										<TouchableOpacity
											onPress={() => this.props.navigation.navigate('IdeaMarket')}
										>
											<Text
												style={{
													color: 'red', flex: 1, fontFamily: 'Quicksand-Regular', fontSize: 13, paddingTop: 20, paddingRight: 20
												}}
											>See all</Text>
										</TouchableOpacity>
									</View>
								</View>
								<View style={{ flex: 1, marginLeft: 20, paddingRight: 7, marginRight: 10, marginTop: -85 }}>
									<FlatList
										data={this.state.images}
										horizontal
										keyExtractor={this.keyExtractor}
										renderItem={this.renderIdeaPhoto.bind(this)}
										showsHorizontalScrollIndicator={false}
										extraData={this.state}
									/>
								</View>
							</View>
						</View>
					</ScrollView>
					{
						sideMenu === true ?
							<View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.98)', width: '100%', height: '100%', position: 'absolute' }}>

								<View style={{ height: '70%' }}>
									{
										statusMenu === 'home' ?
											<View style={styles.containerHome}>
												<View style={styles.containerHomeLogo}>
													<TouchableOpacity
														onPress={() => this.props.navigation.navigate('CrafterMyOrder')}>
														<Image style={{ marginTop: 15, alignContent: 'center', alignSelf: 'center', width: 50, height: 50 }}
															source={require('./../assets/images/daftar_pesanan.png')}
														/>
													</TouchableOpacity>
													<Text style={{ color: 'white', marginTop: 5, fontFamily: 'Quicksand-Regular', fontSize: 15, textAlign: 'center' }}>Daftar</Text>
													<Text style={{ color: 'white', fontFamily: 'Quicksand-Regular', fontSize: 15, textAlign: 'center' }}>Pesanan</Text>
												</View>
												<View style={styles.containerHomeLogo}>
													<TouchableOpacity
														onPress={() => this.props.navigation.navigate('NotificationMenu')}
													>
														<Image
															style={{ marginTop: 15, alignContent: 'center', alignSelf: 'center', width: 50, height: 50, marginBottom: 15 }}
															source={require('./../assets/images/notifikasi.png')}
														/>
														<Text style={{ color: 'white', fontFamily: 'Quicksand-Regular', fontSize: 15, textAlign: 'center' }}> Notifikasi </Text>
													</TouchableOpacity>
												</View>
												<View style={styles.containerHomeLogo}>
													<TouchableOpacity
														onPress={() => this.props.navigation.navigate('SettingMenu')}
													>
														<Image
															style={{ marginTop: 15, alignContent: 'center', alignSelf: 'center', width: 50, height: 50, marginBottom: 15 }}
															source={require('./../assets/images/setting.png')}
														/>
														<Text style={{ color: 'white', fontFamily: 'Quicksand-Regular', fontSize: 15, textAlign: 'center' }}> Setting </Text>
													</TouchableOpacity>
												</View>
												<View style={styles.containerHomeLogo}>
													<TouchableOpacity
														onPress={() => this.props.navigation.navigate('HelpMenu')}
													>
														<Image
															style={{ marginTop: 15, alignContent: 'center', alignSelf: 'center', width: 50, height: 50, marginBottom: 15 }}
															source={require('./../assets/images/bantuan.png')}
														/>
														<Text style={{ color: 'white', fontFamily: 'Quicksand-Regular', fontSize: 15, textAlign: 'center' }}> Help </Text>
													</TouchableOpacity>
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
																<View style={{
																	flex: 1, flexDirection: 'column',
																	borderRadius: 25
																}} >
																	<Text style={{ paddingLeft: 15, marginTop: 5, color: 'white', fontSize: 15, fontFamily: 'Quicksand-Bold' }}>CRAFTER LIST</Text>
																	<Text style={{ paddingLeft: 15, color: 'white', fontSize: 13, textAlign: 'left', flex: 1, fontFamily: 'Quicksand-Regular' }}>Kumpulan crafter dengan keunikannya yang beraneka ragam</Text>

																	<TouchableOpacity style={styles.buttonCustom} onPress={() => this.props.navigation.navigate('CrafterList')}>
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
																					source={require('./../assets/images/fashion_crafter.png')}
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
																					source={require('./../assets/images/diy_crafter.png')}
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
																					source={require('./../assets/images/furniture_crafter.png')}
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
																					source={require('./../assets/images/beauty_crafter.png')}
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
																						borderRadius: 25
																					}} >
																						<Text
																							style={{
																								paddingLeft: 15, marginTop: 5, color: 'white',
																								fontSize: 15, fontFamily: 'Quicksand-Bold'
																							}}>ORDER </Text>
																						<Text style={{ paddingLeft: 15, color: 'white', fontSize: 13, textAlign: 'left', flex: 1, fontFamily: 'Quicksand-Regular' }}>Penuhi keinginanmu sekarang juga dengan 3 fitur yang akan membuat kreasimu menjadi nyata.</Text>
																						<View style={{ flex: 1 }} />
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
																									borderRadius: 25
																								}} >
																									<Text style={{ paddingLeft: 15, marginTop: 5, color: 'white', fontSize: 15, fontFamily: 'Quicksand-Bold' }}>CUSTOM</Text>
																									<Text style={{ paddingLeft: 15, color: 'white', fontSize: 13, textAlign: 'left', flex: 1, fontFamily: 'Quicksand-Regular' }}>Dengan imajinasimu dan fitur ini, kamu bisa dapatkan hasil desainmu sendiri.</Text>

																									<TouchableOpacity style={styles.buttonCustom} onPress={() => this.props.navigation.navigate('Order')}>
																										<Text style={{ textAlign: 'center', color: 'white', fontSize: 15, fontFamily: 'Quicksand-Bold' }}>GO</Text>
																									</TouchableOpacity>
																								</View>
																							</View>
																							:
																							<View style={{ width: '100%', height: 235 }}>
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
																												<Text style={{ paddingLeft: 15, marginTop: 5, color: 'white', fontSize: 15, fontFamily: 'Quicksand-Bold' }}>CAPTURE N' Get</Text>
																												<Text style={{ paddingLeft: 15, color: 'white', fontSize: 13, textAlign: 'left', flex: 1, fontFamily: 'Quicksand-Regular' }}>Cari produk hanya dengan mengupload foto, kamu bisa dapetin produk itu</Text>

																												<TouchableOpacity style={styles.buttonCustom} onPress={() => this.props.navigation.navigate('Captureandget')}>
																													<Text style={{ textAlign: 'center', color: 'white', fontSize: 15, fontFamily: 'Quicksand-Bold' }}>GO</Text>
																												</TouchableOpacity>
																											</View>
																										</View>
																										:
																										<View style={{ width: '100%', height: 235 }}>
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
																															borderRadius: 25
																														}} >
																															<Text style={{ paddingLeft: 15, marginTop: 5, color: 'white', fontSize: 15, fontFamily: 'Quicksand-Bold' }}>IDEA MARKET</Text>
																															<Text style={{ paddingLeft: 15, color: 'white', fontSize: 13, textAlign: 'justify', flex: 1, fontFamily: 'Quicksand-Regular' }}>Dengan imajinasimu dan fitur ini, kamu bisa dapatkan hasil desainmu sendiri.</Text>

																															<TouchableOpacity style={styles.buttonCustom} onPress={() => this.props.navigation.navigate('IdeaMarket')}>
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
																			<TouchableOpacity
																				onPress={() => this.OrderStatus('custom')}
																			>
																				<View style={{ borderTopWidth: 2, borderTopColor: 'white' }}>
																					<Text style={{ marginTop: 20, marginBottom: 20, color: 'white', fontSize: 15, fontFamily: 'Quicksand-Bold', textAlign: 'center' }}>Custom</Text>
																				</View>
																			</TouchableOpacity>
																			<TouchableOpacity
																				onPress={() => this.OrderStatus('captureAndGet')}
																			>
																				<View style={{ borderTopWidth: 2, borderTopColor: 'white' }}>
																					<Text style={{ marginTop: 20, marginBottom: 20, color: 'white', fontSize: 15, fontFamily: 'Quicksand-Bold', textAlign: 'center' }}>Capture n` Get</Text>
																				</View>
																			</TouchableOpacity>
																			<TouchableOpacity
																				onPress={() => this.OrderStatus('ideaMarket')}
																			>
																				<View style={{ borderBottomWidth: 2, borderTopWidth: 2, borderTopColor: 'white', borderBottomColor: 'white' }}>
																					<Text style={{ marginTop: 20, marginBottom: 20, color: 'white', fontSize: 15, fontFamily: 'Quicksand-Bold', textAlign: 'center' }}>Idea Market</Text>
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
																							<Text style={{ color: 'white', marginTop: 12, alignSelf: 'center', fontSize: 15, fontFamily: 'Quicksand-Regular' }}>Gal Gadot</Text>
																							<View style={{ flex: 1 }}>
																								<Image
																									style={styles.locationIcon}
																									source={require('./../assets/images/location_icon.png')}
																								/>
																							</View>
																							<Text style={{ color: 'white', marginTop: 5, alignSelf: 'center', fontSize: 13, fontFamily: 'Quicksand-Regular' }}>Bali</Text>
																						</View>


																						<View style={{ alignSelf: 'center' }}>
																							<TouchableOpacity style={styles.button}
																								onPress={() => this.props.navigation.navigate('')}>
																								<Image
																									style={styles.photoProfileHomeScreen}
																									source={require('./../assets/images/profile.png')}
																								/>
																							</TouchableOpacity>
																						</View>

																						<Text style={{ color: 'white', marginTop: 15, alignSelf: 'center', fontSize: 15, fontFamily: 'Quicksand-Bold' }}>PROFILE</Text>
																						<Text style={{ color: 'white', marginTop: 5, alignSelf: 'center', fontSize: 13, fontFamily: 'Quicksand-Regular' }}>Lihat dan atur segala informasi</Text>
																						<Text style={{ color: 'white', marginTop: 5, alignSelf: 'center', fontSize: 13, fontFamily: 'Quicksand-Regular' }}>profil anda disini </Text>
																					</View>


																					<View style={{ paddingTop: 50, flex: 1, flexDirection: 'row', paddingLeft: 30, paddingRight: 30 }}>
																						<View style={{ flex: 1 }}>
																							<TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }}
																								onPress={() => this.props.navigation.navigate('ProfilePage')}
																							>
																								<Image
																									style={[styles.iconProfile, { marginBottom: 15 }]}
																									source={require('./../assets/images/edit_profil.png')}
																								/>
																								<Text style={{ textAlign: 'center', color: 'white', fontFamily: 'Quicksand-Regular', fontSize: 13 }}>Edit Profile</Text>
																							</TouchableOpacity>
																						</View>

																						<View style={{ flex: 1 }}>
																							<TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center' }}
																								onPress={() => {
																									const resetAction = StackActions.reset({
																										index: 0,
																										actions: [NavigationActions.navigate({ routeName: 'Login' })],
																									});
																									this.props.navigation.dispatch(resetAction);
																								}
																								}>
																								<Image
																									style={[styles.iconProfile, { marginBottom: 15 }]}
																									source={require('./../assets/images/logout.png')}
																									resizeMode='contain'
																								/>
																								<Text style={{ textAlign: 'center', color: 'white', fontFamily: 'Quicksand-Regular', fontSize: 13 }}>Log Out</Text>
																							</TouchableOpacity>
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

																									<Text style={{ color: 'white', marginTop: 3, alignSelf: 'center', fontSize: 13, fontFamily: 'Quicksand-Regular' }}>Daftarkan diri anda </Text>
																									<Text style={{ color: 'white', marginTop: 3, alignSelf: 'center', fontSize: 13, fontFamily: 'Quicksand-Regular' }}>menjadi partner kami</Text>
																									<Text style={{ color: 'white', marginTop: 3, alignSelf: 'center', fontSize: 13, fontFamily: 'Quicksand-Regular' }}>sebagai CRAFTER </Text>

																								</View>
																								<View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center' }}>
																									<Image
																										style={styles.iconQuestion}
																										source={require('./../assets/images/question.png')}
																									/>
																									<Text style={{ marginLeft: 5, color: 'white', fontSize: 13, marginTop: 40, fontFamily: 'Quicksand-Regular' }}>apa itu <Text style={{ color: '#d87115', fontFamily: 'Quicksand-Regular', fontSize: 13 }}>CRAFTER ?</Text></Text>
																								</View>
																								<TouchableOpacity style={styles.buttonJoin}
																									onPress={() => this.props.navigation.navigate('RegistrationCrafter')}>
																									<Text style={{ textAlign: 'center', color: 'white', fontSize: 15, fontFamily: 'Quicksand-Bold' }}>JOIN</Text>
																								</TouchableOpacity>
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

					<ActionButton buttonColor="#C1C1C1" onPress={() => this.sideMenus('Open')}>
						<ActionButton.Item buttonColor='rgba(70,70,71,0.5)' title="New Task" onPress={() => this.statusMenus('home')}>
							{
								statusMenu === 'home' ?
									<View>
										<Image
											style={{ width: 20, height: 20, }}
											source={require('./../assets/images/umum-enabled.png')}
											resizeMode='contain'
										/>
									</View>
									:
									<View>
										<Image
											style={{ width: 20, height: 20, }}
											source={require('./../assets/images/umum-disabled.png')}
											resizeMode='contain'
										/>
									</View>
							}
						</ActionButton.Item>
						<ActionButton.Item buttonColor='rgba(70,70,71,0.5)' title="Notifications" onPress={() => this.statusMenus('profile')}>
							{
								statusMenu === 'profile' ?
									<View>
										<Image
											style={{ width: 20, height: 20, }}
											source={require('./../assets/images/profil-enable.png')}
										/>
									</View>
									:
									<View>
										<Image
											style={{ width: 20, height: 20, }}
											source={require('./../assets/images/profil-disable.png')}
										/>
									</View>
							}
						</ActionButton.Item>
						<ActionButton.Item buttonColor='rgba(70,70,71,0.5)' title="All Tasks" onPress={() => this.statusMenus('order')}>
							{
								statusMenu === 'order' ?
									<View>
										<Image
											style={{ width: 20, height: 20, }}
											source={require('./../assets/images/order-enable.png')}
										/>
									</View>
									:
									<View>
										<Image
											style={{ width: 20, height: 20, }}
											source={require('./../assets/images/order-disable.png')}
										/>
									</View>
							}
						</ActionButton.Item>
						<ActionButton.Item buttonColor='rgba(70,70,71,0.5)' title="All Tasks" onPress={() => this.statusMenus('crafterList')}>
							{
								statusMenu === 'crafterList' ?
									<View>
										<Image
											style={{ width: 20, height: 20, }}
											source={require('./../assets/images/crafter-list-enable.png')}
										/>
									</View>
									:
									<View>
										<Image
											style={{ width: 20, height: 20, }}
											source={require('./../assets/images/crafter-list-disable.png')}
										/>
									</View>
							}
						</ActionButton.Item>
						<ActionButton.Item buttonColor='rgba(70,70,71,0.5)' title="All Tasks" onPress={() => this.statusMenus('crafterMenu')}>
							{
								statusMenu === 'crafterMenu' ?
									<View>
										<Image
											style={{ width: 20, height: 20, }}
											source={require('./../assets/images/crafter-menu-enable.png')}
										/>
									</View>
									:
									<View>
										<Image
											style={{ width: 20, height: 20, }}
											source={require('./../assets/images/crafter-menu-disable.png')}
										/>
									</View>
							}
						</ActionButton.Item>
					</ActionButton>
				</ImageBackground>
			</View>
		)
	}

};

const styles = StyleSheet.create({
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
		width: 130,
		height: 160,
	},
	containerInsideProfileTwo: {
		flex: 1,
		height: 160,
		justifyContent: 'center',
		alignItems: 'center'
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
		height: 100,
		width: 100,
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
		height: '100%',
		width: '100%',
		// backgroundColor: 'yellow'
	},
	containerHomeLogo: {
		flex: 1,
		height: 150,
		width: 50,
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: 285
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
		marginTop: 65,
		alignSelf: 'center',
		paddingLeft: 4,
		paddingRight: 4
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
		marginLeft: 10,
		flex: 1
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
		width: '100%',
		// backgroundColor: 'blue',
		marginTop: 5
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
		flex: 1,
		borderRadius: 20,
		backgroundColor: 0,
		shadowColor: '#000',
		shadowOffset: { width: 0, heigth: 2 },
		shadowRadius: 2,
		flexDirection: 'column',
		marginTop: 15,
		marginLeft: 10,
		marginRight: 10,
		height: 500,
		// backgroundColor: 'red'f
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
		// marginTop: 10,
		height: 35,
		width: 35,
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
		marginTop: 38
	}
});

export default DashboardPage;