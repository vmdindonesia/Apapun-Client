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

console.disableYellowBox = true;

// font
const customTextProps = {
  style: {
    fontFamily: 'Quicksand-Regular'
  }
}
setCustomText(customTextProps)

const Routes = createStackNavigator({
  RegistrationBuyer: {
    screen: RegistrationBuyerPage
  },
  RegistrationCrafter: {
    screen: RegistrationCrafterPage
  },
  OrderForCrafter: {
    screen: OrderForCrafterPage
  },
  CrafterMenu: {
    screen: CrafterMenuPage
  },
  StartScreen: {
    screen: StartScreen
  },
  FindingCrafter: {
    screen: FindingCrafterPage
  },
  CrafterMyOrder: {
    screen: CrafterMyOrderPage
  },
  OrderReceived: {
    screen: OrderReceivedPage
  },
  OrderTrackConfirm: {
    screen: OrderTrackConfirmPage
  },
  OrderWithTrack: {
    screen: OrderWithTrackPage
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
  PageDesign: {
    screen: PageDesignPage
  },
  DesignSaya: {
    screen: DesignSayaPage
  },
  Dashboard: {
    screen: DashboardPage
  },
  AkunBank: {
    screen: AkunBankPage
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

  ProfileCrafter: {
    screen: ProfileCrafterPage
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
  FinalProcessOrder: {
    screen: FinalProcessOrderPage
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
  FindingCrafter: {
    screen: FindingCrafterPage
  },
  MyOrder: {
    screen: MyOrderPage
  },
  Dashboard: {
    screen: DashboardPage
  },
  SettingAddressBuyer: {
    screen: SettingAddressBuyerPage
  },
  SettingAddressDetailBuyer: {
    screen: SettingAddressDetailBuyerPage
  },
  EditProfileBuyer: {
    screen: EditProfileBuyerPage
  },
  ProfilePage: {
    screen: ProfileBuyerPage
  },
  FindingCrafter: {
    screen: FindingCrafterPage
  },
  Dashboard: {
    screen: DashboardPage
  },
  Dashboard: {
    screen: DashboardPage
  },
  Order: {
    screen: OrderPage
  },
  Dashboard: {
    screen: DashboardPage
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
  SettingAddressBuyerPage: {
    screen: SettingAddressBuyerPage
  },
  SettingAddressBuyerPage: {
    screen: SettingAddressBuyerPage
  },

  EditProfileBuyer: {
    screen: EditProfileBuyerPage
  },
  FindingCrafter: {
    screen: FindingCrafterPage
  },
  Order: {
    screen: OrderPage
  },
  Crafter: {
    screen: CrafterPage
  }
}, {
    cardStyle: { backgroundColor: '#fafafa' },
    navigationOptions: {
      headerRight: <View/>,
      headerTitleStyle: {
        color: '#000',
        fontFamily: 'Muli-Bold',
        fontWeight: '300',
        justifyContent: 'space-between',
        textAlign: 'center',
        alignSelf:'center',
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
