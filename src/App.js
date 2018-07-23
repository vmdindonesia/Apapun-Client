/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import { setCustomText } from 'react-native-global-props';
import { COLOR } from './shared/config';
import { createStackNavigator } from 'react-navigation';
import { StartScreen } from './pages/StartScreen';
import { DashboardPage } from './pages/dashboard.js';
import { LoginPage } from './pages/login.js';
import { OrderPage } from './pages/order.js';
import { DesignSayaPage } from './pages/DesignSaya.js';
import { PengaturanBankPage } from './pages/pengaturanBank.js'
import { InformasiBankPage } from './pages/InformasiBank.js';
import { DetailTransaksiPage } from './pages/DetailTransaksi.js';
import { FindingCrafterPage } from './pages/findingCrafter';
import { RegistrationBuyerPage } from './pages/registrationBuyer.js'
import { RegistrationCrafterPage } from './pages/registrationCrafter.js'
import { ProfileBuyerPage } from './pages/ProfileBuyer.js'
import { AkunBankPage } from './pages/AkunBank'
import { EditProfileBuyerPage } from './pages/EditProfileBuyer.js'
import { SettingAddressBuyerPage } from './pages/SettingAddressBuyer.js'
import { SettingAddressDetailBuyerPage } from './pages/SettingAddressDetailBuyer'
import { MyOrderPage } from './pages/myOrder.js';
import { CrafterPage } from './pages/crafter.js';
import { CrafterListPage } from './pages/CrafterList';
import { BerandaCrafterPage } from './pages/BerandaCrafter';
import { FashionCrafterPage } from './pages/FashionCrafter';
import { FurnitureCrafterPage } from './pages/FurnitureCrafter';
import { BeautyCrafterPage } from './pages/BeautyCrafter';
import { DetailOrderPage } from './pages/DetailOrderOnMyOrder';
import { CrafterMyOrderPage } from './pages/CrafterMyOder';
import { OrderOnMyOrderPage } from './pages/OrderOnMyOder';
import { WishlistOnMyOrderPage } from './pages/WishListOnMyOrder';
import { HistoryOnMyOrderPage } from './pages/HistoryOnMyOrder';
import { PageDesignPage } from './pages/PageDesign';
import { SettingProductPage } from './pages/settingProduct.js';
import { DetailInformationOrderPage } from './pages/detailInformationOrder';
import { FinalProcessOrderPage } from './pages/finalProcessOrder'
import { ReviewProductPage } from './pages/reviewProduct'
import { ProfileCrafterPage } from './pages/profileCrafter';
import { ForgotPasswordPage } from './pages/forgotPassword';
import { OrderWithTrackPage } from './pages/orderWithTrack.js';
import { OrderTrackConfirmPage } from './pages/orderTrackConfirm';
import { OrderReceivedPage } from './pages/orderReceived';
import { CrafterMenuPage } from './pages/crafterMenu';
import { OrderForCrafterPage } from './pages/orderForCrafter';
import { IdeaMarketPage } from './pages/IdeaMarket';
import { IdeaFashionPage } from './pages/IdeaFashion';
import { HelpMenuPage } from './pages/HelpMenu';
import { SettingManuPage } from './pages/SettingMenu';
import { TermsAndAgreementPage } from './pages/TermsAgreement';
import { ThanksToPage } from './pages/ThanksTo';
import { NotificationMenuPage } from './pages/NotificationMenu';
import { NotificationSystemPage } from './pages/NotificationSystem';
import { NotificationTransactionPage } from './pages/NotificationTransaction';
import { CrafterInputResiPage } from './pages/crafterInputResi';
import { CrafterSentPage } from './pages/crafterSent';
import { MenuCrafterPage } from './pages/menuCrafter';
import { EditProfileCrafterPage } from './pages/editProfileCrafter';
import { CatatanPage } from './pages/catatan';
import { GambarPage } from './pages/gambar';
import { UlasanPage } from './pages/ulasan';
import { EditCatatanPage } from './pages/editCatatan';
import { DetailDeliveryPage } from './pages/detailDelivery';
import { ChatPage } from './pages/Chat';
import { PaymentMethodPage } from './pages/PaymentMethod';
import { CaptureandgetPage } from './pages/CaptureNGet';
import { IdeaFurniturePage } from './pages/IdeaFurniture';
import { IdeadhtPage } from './pages/IdeaDHT';
import { IdeaBeautyPage } from './pages/IdeaBeauty';
import { EditProductPage } from './pages/EditProduct';
import { ProductDetailNyaPage } from './pages/ProductDetailNya';
import { ProductDetailOnProfilePage } from './pages/ProductDetailOnProfile';
import { NewAddressOnProfilePage } from './pages/NewAddressOnProfile';
import { ProductDetailProfPage } from './pages/ProductDetail';
import { ReviewPageOnProfilePage } from './pages/reviewOnProfile';
import { searchCustomOrderPage } from './pages/seachCustomOrder';
import { searchCustomCaptureAndGetPage } from './pages/searchCaptureAndGet';
import { searchIdeaMarketPage } from './pages/searchIdeaMarket';
import { crafterMenuListOrderPage } from './pages/crafterMenuListOrder';
import { crafterMenuNotePage } from './pages/crafterMenuNote';
import { editNoteOnCrafterMenuPage } from './pages/editNoteOnCrafterMenu';
import { addNoteOnCrafterMenuPage } from './pages/addNoteOnCrafterMenu';

console.disableYellowBox = true;

// font
const customTextProps = {
  style: {
    fontFamily: 'Quicksand-Regular'
  }
}
setCustomText(customTextProps)

const Routes = createStackNavigator({
  StartScreen: {
    screen: StartScreen
  },
  crafterMenuNote: {
    screen: crafterMenuNotePage
  },
  DetailOrder: {
    screen: DetailOrderPage
  },
  addNoteOnCrafterMenu: {
    screen: addNoteOnCrafterMenuPage
  },
  editNoteOnCrafterMenu: {
    screen: editNoteOnCrafterMenuPage
  },
  ProfilePage: {
    screen: ProfileBuyerPage
  },
  crafterMenuListOrder: {
    screen: crafterMenuListOrderPage
  },
  CrafterMyOrder: {
    screen: CrafterMyOrderPage
  },
  RegistrationCrafter: {
    screen: RegistrationCrafterPage
  },
  ProfileCrafter: {
    screen: ProfileCrafterPage
  },
  Dashboard: {
    screen: DashboardPage
  },
  RegistrationBuyer: {
    screen: RegistrationBuyerPage
  },
  CrafterMenu: {
    screen: CrafterMenuPage
  },
  searchCustomOrder: {
    screen: searchCustomOrderPage
  },
  searchCaptureAndGet: {
    screen: searchCustomCaptureAndGetPage
  },
  searchIdeaMarket: {
    screen: searchIdeaMarketPage
  },
  SettingProduct: {
    screen: SettingProductPage
  },
  ProductDetailProf: {
    screen: ProductDetailProfPage
  },
  ReviewPageOnProfile: {
    screen: ReviewPageOnProfilePage
  },
  AkunBank: {
    screen: AkunBankPage
  },
  DetailTransaksi: {
    screen: DetailTransaksiPage
  },
  NewAddressOnProfile: {
    screen: NewAddressOnProfilePage
  },
  ProductDetailOnProfile: {
    screen: ProductDetailOnProfilePage
  },
  FindingCrafter: {
    screen: FindingCrafterPage
  },
  Crafter: {
    screen: CrafterPage
  },
  Order: {
    screen: OrderPage
  },
  SettingAddressDetailBuyer: {
    screen: SettingAddressDetailBuyerPage
  },
  SettingAddressBuyer: {
    screen: SettingAddressBuyerPage
  },
  RegistrationBuyer: {
    screen: RegistrationBuyerPage
  },
  RegistrationCrafter: {
    screen: RegistrationCrafterPage
  },
  EditProduct: {
    screen: EditProductPage
  },
  pengaturanBank: {
    screen: PengaturanBankPage
  },
  EditProfileBuyer: {
    screen: EditProfileBuyerPage
  },
  ProductDetailNya: {
    screen: ProductDetailNyaPage
  },
  InformasiBank: {
    screen: InformasiBankPage
  },
  OrderOnMyOrder: {
    screen: OrderOnMyOrderPage
  },
  OrderWithTrack: {
    screen: OrderWithTrackPage
  },
  CrafterList: {
    screen: CrafterListPage
  },
  OrderForCrafter: {
    screen: OrderForCrafterPage
  },
  IdeaBeauty: {
    screen: IdeaBeautyPage
  },
  Ideadht: {
    screen: IdeadhtPage
  },
  IdeaFurniture: {
    screen: IdeaFurniturePage
  },
  Captureandget: {
    screen: CaptureandgetPage
  },
  Chat: {
    screen: ChatPage
  },
  OrderTrackConfirm: {
    screen: OrderTrackConfirmPage
  },
  FinalProcessOrder: {
    screen: FinalProcessOrderPage
  },
  OrderReceived: {
    screen: OrderReceivedPage
  },
  DetailDelivery: {
    screen: DetailDeliveryPage
  },
  Gambar: {
    screen: GambarPage
  },
  EditCatatan: {
    screen: EditCatatanPage
  },
  Ulasan: {
    screen: UlasanPage
  },
  MenuCrafter: {
    screen: MenuCrafterPage
  },
  Catatan: {
    screen: CatatanPage
  },
  EditProfileCrafter: {
    screen: EditProfileCrafterPage
  },
  CrafterSent: {
    screen: CrafterSentPage
  },
  CrafterInputResi: {
    screen: CrafterInputResiPage
  },
  ForgotPassword: {
    screen: ForgotPasswordPage
  },
  Login: {
    screen: LoginPage
  },
  NotificationMenu: {
    screen: NotificationMenuPage
  },
  NotificationSystem: {
    screen: NotificationSystemPage
  },
  NotificationTransaction: {
    screen: NotificationTransactionPage
  },
  ThanksTo: {
    screen: ThanksToPage
  },
  TermsAndAgreement: {
    screen: TermsAndAgreementPage
  },
  SettingMenu: {
    screen: SettingManuPage
  },
  HelpMenu: {
    screen: HelpMenuPage
  },
  IdeaMarket: {
    screen: IdeaMarketPage
  },
  IdeaFashion: {
    screen: IdeaFashionPage
  },
  PageDesign: {
    screen: PageDesignPage
  },
  DesignSaya: {
    screen: DesignSayaPage
  },
  ReviewProduct: {
    screen: ReviewProductPage
  },
  DetailInformationOrder: {
    screen: DetailInformationOrderPage
  },
  DetailOrder: {
    screen: DetailOrderPage
  },
  MyOrder: {
    screen: MyOrderPage
  },
  WhislistOnMyOrder: {
    screen: WishlistOnMyOrderPage
  },
  HistoryOnMyOrder: {
    screen: HistoryOnMyOrderPage
  },
  BerandaCrafter: {
    screen: BerandaCrafterPage
  },
  FashionCrafter: {
    screen: FashionCrafterPage
  },
  FurnitureCrafter: {
    screen: FurnitureCrafterPage
  },
  BeautyCrafter: {
    screen: BeautyCrafterPage
  },
}, {
    cardStyle: { backgroundColor: '#fafafa' },
    navigationOptions: {
      headerRight: <View />,
      headerTitleStyle: {
        color: '#000',
        fontFamily: 'Quicksand-Regular',
        fontWeight: '300',
        justifyContent: 'space-between',
        textAlign: 'center',
        alignSelf: 'center',
        flex: 1
      },
      headerStyle: {
        backgroundColor: COLOR.headerBar,
        shadowOpacity: 0,
        elevation: 1,
        borderBottomColor: 'white',
        borderBottomWidth: 1.5
      },
      headerTintColor: '#000',
    }
  });

class App extends Component<{}> {


  render() {
    return (
      // <View>
      <Routes />
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default App;
