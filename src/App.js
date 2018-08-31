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
import OneSignal from 'react-native-onesignal';
import numeral from 'numeral';
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
import { searchOrderPage } from './pages/searchOrder'
import { crafterMenuListOrderPage } from './pages/crafterMenuListOrder'
import { crafterMenuNotePage } from './pages/crafterMenuNote'
import { addNoteOnCrafterMenuPage } from './pages/addNoteOnCrafterMenu'
import { editNoteOnCrafterMenuPage } from './pages/editNoteOnCrafterMenu'
import { clickProductOnCrafterMenuPage } from './pages/clickProductOnCrafterMenu';
import { ProductReadyToSendPage } from './pages/ProductReadyToSend';
import { ThanksToOrderAfterSendPage } from './pages/ThanksToOrder';
import { UlasanOnCrafterProfilePage } from './pages/UlasanOnCrafterProfile';
import { ListTshirtPage } from './pages/ListTshirt';
import { ListKemejaPage } from './pages/ListKemeja';
import { ListHoodiePage } from './pages/ListHoodie';
import { onClickProductOnIdeaFashionPage } from './pages/onClickProductOnIdeaFashion';
import { detailsendingIdeaPage } from './pages/detailSendingProductIdeaFashion';
import { searchCrafterIdeaMarketPage } from './pages/searchCrafterIdeaMarket';
import { MyOrderIdeaPage } from './pages/myOrderIdea';
import { IntroAppPage } from './pages/introApp';
import { MenuLoginPage } from './pages/menuLogin';
import { MaterialPage } from './pages/material';
import { searchCrafterOnProfilePage } from './pages/searchCrafterOnProfile';
import { CrafterOrderMenuPage } from './pages/CrafterOrderMenu'
import { ImagesProfileCrafterPage } from './pages/imagesProfileCrafter';
import { FinalReviewPage } from './pages/finalReview';
import { RegisToIdeaMarketPage } from './pages/regisToIdeaMarket';
import { NoteProfileCrafterPage } from './pages/noteProfileCrafter';
import { ErrorConnectionPage } from './pages/ErrorConnection';
import { ProcessingProductPage } from './pages/ProcessingProduct';
console.disableYellowBox = true;

// font
const customTextProps = {
  style: {
    fontFamily: 'Quicksand-Regular'
  }
}
setCustomText(customTextProps)


numeral.register('locale', 'id', {
  delimiters: {
    thousands: '.',
    decimal: ','
  },
  ordinal: function (number) {
    return number === 1 ? 'er' : 'ème';
  },
  currency: {
    symbol: 'Rp'
  }
})
numeral.locale('id')


const Routes = createStackNavigator({
  StartScreen: {
    screen: StartScreen
  },
  OrderWithTrack: {
    screen: OrderWithTrackPage
  },
  ThanksToOrderAfterSend: {
    screen: ThanksToOrderAfterSendPage
  },
  ProductReadyToSend: {
    screen: ProductReadyToSendPage
  },
  ProcessingProduct: {
    screen: ProcessingProductPage
  },
  clickProductOnCrafterMenu: {
    screen: clickProductOnCrafterMenuPage
  },
  CrafterOrderMenu: {
    screen: CrafterOrderMenuPage
  },
  Dashboard: {
    screen: DashboardPage
  },
  CrafterMenu: {
    screen: CrafterMenuPage
  },
  searchOrder: {
    screen: searchOrderPage
  },
  ErrorConnection: {
    screen: ErrorConnectionPage
  },
  OrderForCrafter: {
    screen: OrderForCrafterPage
  },
  FindingCrafter: {
    screen: FindingCrafterPage
  },

  OrderTrackConfirm: {
    screen: OrderTrackConfirmPage
  },
  CrafterMyOrder: {
    screen: CrafterMyOrderPage
  },
  ErrorConnection: {
    screen: ErrorConnectionPage
  },
  SettingAddressBuyer: {
    screen: SettingAddressBuyerPage
  },
  OrderOnMyOrder: {
    screen: OrderOnMyOrderPage
  },
  BerandaCrafter: {
    screen: BerandaCrafterPage
  },
  ProfileCrafter: {
    screen: ProfileCrafterPage
  },
  MenuCrafter: {
    screen: MenuCrafterPage
  },
  ImagesProfileCrafter: {
    screen: ImagesProfileCrafterPage
  },
  NoteProfileCrafter: {
    screen: NoteProfileCrafterPage
  },
  IdeaMarket: {
    screen: IdeaMarketPage
  },
  Dashboard: {
    screen: DashboardPage
  },
  detailsendingIdeaPage: {
    screen: detailsendingIdeaPage
  },
  onClickProductOnIdeaFashion: {
    screen: onClickProductOnIdeaFashionPage
  },
  ListTshirt: {
    screen: ListTshirtPage
  },
  PaymentMethod: {
    screen: PaymentMethodPage
  },
  HelpMenu: {
    screen: HelpMenuPage
  },

  searchCrafterOnProfile: {
    screen: searchCrafterOnProfilePage
  },
  Order: {
    screen: OrderPage
  },
  FinalReview: {
    screen: FinalReviewPage
  },
  Crafter: {
    screen: CrafterPage
  },

  Material: {
    screen: MaterialPage
  },
  Captureandget: {
    screen: CaptureandgetPage
  },

  ReviewProduct: {
    screen: ReviewProductPage
  },
  RegisToIdeaMarket: {
    screen: RegisToIdeaMarketPage
  },
  RegistrationCrafter: {
    screen: RegistrationCrafterPage
  },
  RegistrationBuyer: {
    screen: RegistrationBuyerPage
  },
  CrafterList: {
    screen: CrafterListPage
  },
  DetailOrder: {
    screen: DetailOrderPage
  },


  NotificationMenu: {
    screen: NotificationMenuPage
  },
  ProfilePage: {
    screen: ProfileBuyerPage
  },
  ListKemeja: {
    screen: ListKemejaPage
  },
  crafterMenuListOrder: {
    screen: crafterMenuListOrderPage
  },
  WhislistOnMyOrder: {
    screen: WishlistOnMyOrderPage
  },
  IntroApp: {
    screen: IntroAppPage
  },

  UlasanOnCrafterProfile: {
    screen: UlasanOnCrafterProfilePage
  },
  MyOrderIdea: {
    screen: MyOrderIdeaPage
  },
  MyOrder: {
    screen: MyOrderPage
  },
  pengaturanBank: {
    screen: PengaturanBankPage
  },
  ForgotPassword: {
    screen: ForgotPasswordPage
  },
  Login: {
    screen: LoginPage
  },
  MenuLogin: {
    screen: MenuLoginPage
  },
  DesignSaya: {
    screen: DesignSayaPage
  },
  PageDesign: {
    screen: PageDesignPage
  },
  RegistrationCrafter: {
    screen: RegistrationCrafterPage
  },
  FinalProcessOrder: {
    screen: FinalProcessOrderPage
  },
  DetailInformationOrder: {
    screen: DetailInformationOrderPage
  },

  OrderOnMyOrder: {
    screen: OrderOnMyOrderPage
  },
  IdeaFashion: {
    screen: IdeaFashionPage
  },
  searchCrafterIdeaMarket: {
    screen: searchCrafterIdeaMarketPage
  },
  ListHoodie: {
    screen: ListHoodiePage
  },
  Gambar: {
    screen: GambarPage
  },
  crafterMenuNote: {
    screen: crafterMenuNotePage
  },
  addNoteOnCrafterMenu: {
    screen: addNoteOnCrafterMenuPage
  },
  editNoteOnCrafterMenu: {
    screen: editNoteOnCrafterMenuPage
  },
  ProductDetailNya: {
    screen: ProductDetailNyaPage
  },
  EditProduct: {
    screen: EditProductPage
  },
  CrafterMenu: {
    screen: CrafterMenuPage
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
  Order: {
    screen: OrderPage
  },
  SettingAddressDetailBuyer: {
    screen: SettingAddressDetailBuyerPage
  },

  RegistrationBuyer: {
    screen: RegistrationBuyerPage
  },
  EditProfileBuyer: {
    screen: EditProfileBuyerPage
  },
  InformasiBank: {
    screen: InformasiBankPage
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
  Chat: {
    screen: ChatPage
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
  ReviewProduct: {
    screen: ReviewProductPage
  },
  DetailOrder: {
    screen: DetailOrderPage
  },
  HistoryOnMyOrder: {
    screen: HistoryOnMyOrderPage
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
},
  {
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

  componentWillMount() {
    OneSignal.inFocusDisplaying(2);
    OneSignal.init("30bdea8d-4ed0-4df2-8fcf-fc60cbe9893d");
    OneSignal.checkPermissions((permissions) => {
      console.log(permissions);
    });
  }

  componentDidMount() {
    console.log('App.JS');
    OneSignal.init("30bdea8d-4ed0-4df2-8fcf-fc60cbe9893d");
    OneSignal.checkPermissions((permissions) => {
      console.log(permissions);
    });
    OneSignal.configure({});
    OneSignal.addEventListener('received', this.onReceived);
    OneSignal.addEventListener('opened', this.onOpened);
    OneSignal.addEventListener('ids', this.onIds);
  }

  componentWillUnmount() {
    OneSignal.removeEventListener('received', this.onReceived);
    OneSignal.removeEventListener('opened', this.onOpened);
    OneSignal.removeEventListener('ids', this.onIds);
  }

  onReceived(notification) {
    OneSignal.inFocusDisplaying(2);
    console.log('Notification received: ', notification);
  }

  onOpened(openResult) {
    console.log('Message: ', openResult.notification.payload.body);
    console.log('Data: ', openResult.notification.payload.additionalData);
    console.log('isActive: ', openResult.notification.isAppInFocus);
    console.log('openResult: ', openResult);
  }

  onIds(device) {
    console.log('Device info: ', device);
  }

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
