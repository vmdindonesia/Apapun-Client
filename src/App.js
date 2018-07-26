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
import { setCustomText } from 'react-native-global-props/src';
import { COLOR } from './shared/config';
import { createStackNavigator } from 'react-navigation';
import { StartScreen } from './pages/StartScreen';
import { DashboardPage } from './pages/dashboard';
import { LoginPage } from './pages/login';
import { OrderPage } from './pages/order';
import { DesignSayaPage } from './pages/DesignSaya';
import { PengaturanBankPage } from './pages/pengaturanBank'
import { InformasiBankPage } from './pages/InformasiBank';
import { DetailTransaksiPage } from './pages/DetailTransaksi';
import { FindingCrafterPage } from './pages/findingCrafter';
import { RegistrationBuyerPage } from './pages/registrationBuyer'
import { RegistrationCrafterPage } from './pages/registrationCrafter'
import { ProfileBuyerPage } from './pages/ProfileBuyer'
import { AkunBankPage } from './pages/AkunBank'
import { EditProfileBuyerPage } from './pages/EditProfileBuyer'
import { SettingAddressBuyerPage } from './pages/SettingAddressBuyer'
import { SettingAddressDetailBuyerPage } from './pages/SettingAddressDetailBuyer'
import { MyOrderPage } from './pages/myOrder';
import { CrafterPage } from './pages/crafter';
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
import { SettingProductPage } from './pages/settingProduct';
import { DetailInformationOrderPage } from './pages/detailInformationOrder';
import { FinalProcessOrderPage } from './pages/finalProcessOrder'
import { ReviewProductPage } from './pages/reviewProduct'
import { ProfileCrafterPage } from './pages/profileCrafter';
import { ForgotPasswordPage } from './pages/forgotPassword';
import { OrderWithTrackPage } from './pages/orderWithTrack';
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
import { crafterMenuListOrderPage } from './pages/crafterMenuListOrder'
import { crafterMenuNotePage } from './pages/crafterMenuNote'
import { addNoteOnCrafterMenuPage } from './pages/addNoteOnCrafterMenu'
import { editNoteOnCrafterMenuPage } from './pages/editNoteOnCrafterMenu'
import { searchOrderPage } from './pages/searchOrder';
import { clickProductOnCrafterMenuPage } from './pages/clickProductOnCrafterMenu';
import { ProductReadyToSendPage } from './pages/ProductReadyToSend';
import { ThanksToOrderAfterSendPage } from './pages/ThanksToOrder';
import { UlasanOnCrafterProfilePage } from './pages/UlasanOnCrafterProfile';
import { ListKemejaPage } from './pages/ListKemeja';
import { ListTshirtPage } from './pages/ListTshirt';
import { ListHoodiePage } from './pages/ListHoodie';
import { onClickProductOnIdeaFashionPage } from './pages/onClickProductOnIdeaFashion';

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
  Dashboard: {
    screen: DashboardPage
  },
  onClickProductOnIdeaFashion: {
    screen: onClickProductOnIdeaFashionPage
  },
  IdeaFashion: {
    screen: IdeaFashionPage
  },
  ProfilePage: {
    screen: ProfileBuyerPage
  },
  ListTshirt: {
    screen: ListTshirtPage
  },
  Order: {
    screen: OrderPage
  },
  ListKemeja: {
    screen: ListKemejaPage
  },
  PageDesign: {
    screen: PageDesignPage
  },
  ProductDetailNya: {
    screen: ProductDetailNyaPage
  },
  ListHoodie: {
    screen: ListHoodiePage
  },
  CrafterMenu: {
    screen: CrafterMenuPage
  },
  FindingCrafter: {
    screen: FindingCrafterPage
  },
  UlasanOnCrafterProfile: {
    screen: UlasanOnCrafterProfilePage
  },
  ThanksToOrderAfterSend: {
    screen: ThanksToOrderAfterSendPage
  },
  ProductReadyToSend: {
    screen: ProductReadyToSendPage
  },
  clickProductOnCrafterMenu: {
    screen: clickProductOnCrafterMenuPage
  },
  crafterMenuListOrder: {
    screen: crafterMenuListOrderPage
  },
  searchOrder: {
    screen: searchOrderPage
  },
  Gambar: {
    screen: GambarPage
  },
  MenuCrafter: {
    screen: MenuCrafterPage
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
  PageDesign: {
    screen: PageDesignPage
  },
  ProductDetailNya: {
    screen: ProductDetailNyaPage
  },
  EditProduct: {
    screen: EditProductPage
  },
  RegistrationCrafter: {
    screen: RegistrationCrafterPage
  },
  RegistrationBuyer: {
    screen: RegistrationBuyerPage
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

  pengaturanBank: {
    screen: PengaturanBankPage
  },
  ProfileCrafter: {
    screen: ProfileCrafterPage
  },
  EditProfileBuyer: {
    screen: EditProfileBuyerPage
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
  CrafterMyOrder: {
    screen: CrafterMyOrderPage
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
