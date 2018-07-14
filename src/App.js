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
  RegistrationCrafter: {
    screen: RegistrationCrafterPage
  },
  PaymentMethod: {
    screen: PaymentMethodPage
  },
  ProfileCrafter: {
    screen: ProfileCrafterPage
  },
  OrderForCrafter: {
    screen: OrderForCrafterPage
  },
  CrafterMenu: {
    screen: CrafterMenuPage
  },
  AkunBank: {
    screen: AkunBankPage
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
  OrderWithTrack: {
    screen: OrderWithTrackPage
  },
  Dashboard: {
    screen: DashboardPage
  },
  RegistrationBuyer: {
    screen: RegistrationBuyerPage
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
  CrafterMenu: {
    screen: CrafterMenuPage
  },
  Catatan: {
    screen: CatatanPage
  },
  EditProfileCrafter: {
    screen: EditProfileCrafterPage
  },
  EditProfileBuyer: {
    screen: EditProfileBuyerPage
  },
  ProfileCrafter: {
    screen: ProfileCrafterPage
  },
  OrderForCrafter: {
    screen: OrderForCrafterPage
  },
  CrafterSent: {
    screen: CrafterSentPage
  },
  CrafterInputResi: {
    screen: CrafterInputResiPage
  },
  RegistrationBuyer: {
    screen: RegistrationBuyerPage
  },

  CrafterMyOrder: {
    screen: CrafterMyOrderPage
  },
  SettingProduct: {
    screen: SettingProductPage
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
  ProfilePage: {
    screen: ProfileBuyerPage
  },
  SettingAddressBuyer: {
    screen: SettingAddressBuyerPage
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

  InformasiBank: {
    screen: InformasiBankPage
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
  DetailTransaksi: {
    screen: DetailTransaksiPage
  },
  pengaturanBank: {
    screen: PengaturanBankPage
  },
  DetailOrder: {
    screen: DetailOrderPage
  },
  DetailOrder: {
    screen: DetailOrderPage
  },
  Order: {
    screen: OrderPage
  },
  Crafter: {
    screen: CrafterPage
  },
  MyOrder: {
    screen: MyOrderPage
  },
  OrderOnMyOrder: {
    screen: OrderOnMyOrderPage
  },
  WhislistOnMyOrder: {
    screen: WishlistOnMyOrderPage
  },
  HistoryOnMyOrder: {
    screen: HistoryOnMyOrderPage
  },
  CrafterList: {
    screen: CrafterListPage
  },
  SettingAddressDetailBuyer: {
    screen: SettingAddressDetailBuyerPage
  },
  Order: {
    screen: OrderPage
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
  EditProfileBuyer: {
    screen: EditProfileBuyerPage
  },

  Crafter: {
    screen: CrafterPage
  }
}, {
    cardStyle: { backgroundColor: '#fafafa' },
    navigationOptions: {
      headerRight: <View />,
      headerTitleStyle: {
        color: '#000',
        fontFamily: 'Quicksand-Bold',
        fontWeight: '300',
        justifyContent: 'space-between',
        textAlign: 'center',
        alignSelf: 'center',
        flex: 1
      },
      headerStyle: {
        backgroundColor: COLOR.headerBar,
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
