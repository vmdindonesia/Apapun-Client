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
import Icon from 'react-native-vector-icons/Ionicons';
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
		const imageSource = itemProduct.item;
		console.log(imageSource, 'Idea Market');
		return (
			<TouchableWithoutFeedback onPress={() => { }}>
				<View style={{
					borderRadius: 4,
					elevation: 2,
					marginRight: 2,
					height: 110,
					flex: 1,
					marginTop: 10
				}}>
					<Image
						style={styles.item}
						source={{ uri: `${imageSource}` }}
						resizeMode='contain'
					/>
				</View>
			</TouchableWithoutFeedback>
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
									showsButtons={false}
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
								<View style={styles.containerInsideProfileOne}>
									<View style={styles.containerPhoto}>
										<View>
											<TouchableOpacity style={styles.button}
												onPress={() => this.props.navigation.navigate('')}>
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
											<Text style={{ color: 'grey', fontSize: 9 }}>Hi, Welcome!</Text>
											<Text style={{ color: 'white', fontFamily: 'Quicksand-Bold' }}>Gal Gadot</Text>
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
												<Text style={{ color: 'grey', marginTop: 2, paddingLeft: 35, fontSize: 9 }}>Total Apresiasi Design Anda</Text>
												<Text style={{ color: 'grey', marginTop: 1, paddingLeft: 35, fontSize: 9, color: 'white' }}>Rp. 250.000</Text>
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
								<View style={{ flex: 1, flexDirection: 'row' }}>
									<View style={{ flex: 1, flexDirection: 'column', marginTop: 10, marginLeft: 20 }}>
										<Text style={{ color: 'white' }}>Idea Recently Upload</Text>
										<Text style={{ color: 'grey', fontSize: 10 }}>Checkout our friend new brilliant ideas</Text>
									</View>
									<View>
										<Text style={{ color: 'red', flex: 1, marginTop: 15, marginRight: 17 }}>See all</Text>
									</View>
								</View>
								<View style={{ flex: 1, marginLeft: 20, paddingRight: 7, marginRight: 10, marginTop: -85 }}>
									<FlatList
										data={this.state.images}
										horizontal
										keyExtractor={this.keyExtractor}
										renderItem={this.renderIdeaPhoto.bind(this)}
										showsHorizontalScrollIndicator={false}
									/>
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
																	<Text style={{ paddingLeft: 15, marginTop: 5, color: 'white', fontSize: 20, fontFamily: 'Quicksand-Bold' }}>CRAFTER LIST </Text>
																	<Text style={{ paddingLeft: 15, color: 'white', fontSize: 12.5 }}>Kumpulan crafter dengan keunikannya yang beraneka ragam</Text>

																	<TouchableOpacity style={styles.ButtonCrafterList}
																		onPress={() => this.props.navigation.navigate('CrafterList')}>
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
																				// <View style={styles.containerSomeHomeScreen}>
																				// 	<View style={styles.photoHomeScreen}>
																				// 		<Image
																				// 			style={styles.cngImage}
																				// 			source={require('./../assets/images/order_default.png')}
																				// 		/>
																				// 	</View>
																				// 	<View style={styles.textHomeScreen}>
																				// 		<Text style={{ paddingLeft: 15, marginTop: 35, color: 'white', fontSize: 20, fontFamily: 'Quicksand-Bold' }}>ORDER </Text>
																				// 		<Text style={{ paddingLeft: 15, color: 'white', fontSize: 12.5, textAlign: 'justify' }}>Penuhi keinginanmu sekarang juga dengan 3 fitur yang akan membuat kreasimu menjadi nyata.</Text>
																				// 	</View>
																				// </View>
																				<View style={{
																					flexDirection: 'row',
																					marginTop: 65,
																				}}>
																					<View style={{
																						height: 170,
																						borderRadius: 25
																					}} >
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
																								fontSize: 20, fontFamily: 'Quicksand-Bold'
																							}}>ORDER </Text>
																						<Text style={{ paddingLeft: 15, color: 'white', fontSize: 12.5, textAlign: 'justify', flex: 1 }}>Penuhi keinginanmu sekarang juga dengan 3 fitur yang akan membuat kreasimu menjadi nyata.</Text>
																						<View style={{ flex: 1 }} />
																					</View>
																				</View>
																				:
																				<View style={{}}>
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
																									<Text style={{ paddingLeft: 15, marginTop: 5, color: 'white', fontSize: 20, fontFamily: 'Quicksand-Bold' }}>CUSTOM ORDER</Text>
																									<Text style={{ paddingLeft: 15, color: 'white', fontSize: 12.5, textAlign: 'justify', flex: 1 }}>Dengan imajinasimu dan fitur ini, kamu bisa dapatkan hasil desainmu sendiri.</Text>

																									<TouchableOpacity style={styles.buttonCustom} onPress={() => this.props.navigation.navigate('Order')}>
																										<Text style={{ textAlign: 'center', color: 'white', fontSize: 20, fontFamily: 'Quicksand-Bold' }}>GO</Text>
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
																											<View style={{
																												flex: 1, flexDirection: 'column',
																												borderRadius: 25
																											}} >
																												<Text style={{ paddingLeft: 15, marginTop: 5, color: 'white', fontSize: 20, fontFamily: 'Quicksand-Bold' }}>CAPTURE N GET</Text>
																												<Text style={{ paddingLeft: 15, color: 'white', fontSize: 12.5, textAlign: 'justify', flex: 1 }}>Dengan imajinasimu dan fitur ini, kamu bisa dapatkan hasil desainmu sendiri.</Text>

																												<TouchableOpacity style={styles.buttonCustom} onPress={() => this.props.navigation.navigate('Order')}>
																													<Text style={{ textAlign: 'center', color: 'white', fontSize: 20, fontFamily: 'Quicksand-Bold' }}>GO</Text>
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
																														<View style={{
																															flex: 1, flexDirection: 'column',
																															borderRadius: 25
																														}} >
																															<Text style={{ paddingLeft: 15, marginTop: 5, color: 'white', fontSize: 20, fontFamily: 'Quicksand-Bold' }}>IDEA MARKET</Text>
																															<Text style={{ paddingLeft: 15, color: 'white', fontSize: 12.5, textAlign: 'justify', flex: 1 }}>Dengan imajinasimu dan fitur ini, kamu bisa dapatkan hasil desainmu sendiri.</Text>

																															<TouchableOpacity style={styles.buttonCustom} onPress={() => this.props.navigation.navigate('Order')}>
																																<Text style={{ textAlign: 'center', color: 'white', fontSize: 20, fontFamily: 'Quicksand-Bold' }}>GO</Text>
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
																					<Text style={{ marginTop: 20, color: 'white', fontSize: 16, fontFamily: 'Quicksand-Bold', textAlign: 'center' }}>Custom</Text>
																				</View>
																			</TouchableOpacity>
																			<TouchableOpacity
																				onPress={() => this.OrderStatus('captureAndGet')}
																			>
																				<View style={styles.DefaultBody}>
																					<Image
																						source={require('./../assets/images/linehome.png')}
																					/>
																					<Text style={{ marginTop: 20, color: 'white', fontSize: 16, fontFamily: 'Quicksand-Bold' }}>Capture n` Get</Text>
																				</View>
																			</TouchableOpacity>
																			<TouchableOpacity
																				onPress={() => this.OrderStatus('ideaMarket')}
																			>
																				<View style={styles.DefaultBody}>
																					<Image
																						source={require('./../assets/images/linehome.png')}
																					/>
																					<Text style={{ marginTop: 17, marginBottom: 17, color: 'white', fontSize: 16, fontFamily: 'Quicksand-Bold' }}>Idea Market</Text>
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
																							<Text style={{ color: 'white', marginTop: 12, alignSelf: 'center', fontSize: 20, fontFamily: 'Quicksand-Regular' }}>Gal Gadot</Text>
																							<View style={{ flex: 1 }}>
																								<Image
																									style={styles.locationIcon}
																									source={require('./../assets/images/location_icon.png')}
																								/>
																							</View>
																							<Text style={{ color: 'white', marginTop: 5, alignSelf: 'center', fontSize: 13 }}>Bali</Text>
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

																						<Text style={{ color: 'white', marginTop: 15, alignSelf: 'center', fontSize: 18, fontFamily: 'Quicksand-Bold' }}>PROFILE</Text>
																						<Text style={{ color: 'white', marginTop: 5, alignSelf: 'center', fontSize: 12.5 }}>Lihat dan atur segala informasi</Text>
																						<Text style={{ color: 'white', marginTop: 5, alignSelf: 'center', fontSize: 12.5 }}>profil anda disini </Text>
																					</View>
																					<View style={{ flex: 1, flexDirection: 'column' }}>
																						<TouchableOpacity style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}
																							onPress={() => this.props.navigation.navigate('ProfilePage')}
																						>
																							<Image
																								style={styles.iconProfile}
																								source={require('./../assets/images/edit_profil.png')}
																							/>
																							<Text style={{ color: 'white', marginRight: '25%', marginTop: 7, marginLeft: 10 }}>Edit Profile</Text>
																							<Icon size={24} name="md-arrow-forward" color="#fff" style={{ marginTop: 5 }} />
																						</TouchableOpacity>
																						<TouchableOpacity style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}
																							onPress={() => this.props.navigation.navigate('Login')}
																						>
																							<Image
																								style={[styles.iconProfile, { marginLeft: 63, }]}
																								source={require('./../assets/images/logout.png')}
																								resizeMode='contain'
																							/>
																							<Text style={{
																								textAlign: 'center', color: 'white',
																								marginLeft: 8
																							}}>Log  Out</Text>
																						</TouchableOpacity>

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

																								<View style={{ flex: 1 }}>
																									<Text style={{ color: 'white', paddingLeft: 130, marginTop: 3, fontSize: 13, marginTop: 30, fontFamily: 'Quicksand-Regular' }}>apa itu <Text style={{ color: '#d87115' }}>CRAFTER ?</Text></Text>
																									<Image
																										style={styles.iconQuestion}
																										source={require('./../assets/images/question.png')}
																									/>
																									<TouchableOpacity style={styles.buttonJoin}
																										onPress={() => this.props.navigation.navigate('RegistrationCrafter')}>
																										<Text style={{ textAlign: 'center', color: 'white', fontSize: 15, fontFamily: 'Quicksand-Bold' }}>JOIN</Text>
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

								{/* <View style={{
									flex: 1,
									flexDirection: 'row',
									width: '100%',
									height: 50,
									backgroundColor: 'rgba(70,70,71,0.5)',
									marginBottom: '25%',
									marginTop: 20
								}}>
									<View style={{ width: 73, borderRightWidth: 2, borderRightColor: 'black', height: 76, justifyContent: 'center', alignItems: 'center' }}>
										<TouchableOpacity
											onPress={() => this.statusMenus('home')}
										>
											{
												statusMenu === 'home' ?
													<View>
														<Image
															resizeMode='stretch'
															style={{ width: 30, height: 7 }}
															source={require('./../assets/images/umum-enabled.png')}
														/>
													</View>
													:
													<View>
														<Image
															resizeMode='stretch'
															style={{ width: 30, height: 7, }}
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
								</View> */}
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

					{/* <View style={styles.containerMenu}>

						<TouchableOpacity
							style={styles.containerButtonLogo}
							onPress={() => this.sideMenus('Open')}
						>
							{
								sideMenu === true ?
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
					</View> */}
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
		width: 340,
		// backgroundColor: 'yellow',
		marginTop: 65,
		alignSelf: 'center'
	},
	photoHomeScreen: {
		height: 170,
		borderRadius: 25,
		marginLeft: -7,
		// backgroundColor:'red'
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
		fontSize: 20,
		fontFamily: 'Quicksand-Bold'
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
		// backgroundColor: 'red'
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
		marginLeft: 103,
		marginTop: -15
	}
});

export default DashboardPage;