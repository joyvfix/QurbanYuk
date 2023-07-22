import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {Splash, Login} from '../screen';
import Register from '../screen/Register';
import PaketQurban from '../screen/PaketQurban';
import DetailSapi from '../screen/DetailSapi';
import DetailDomba from '../screen/DetailDomba';
import HomeScreen from '../screen/HomeScreen';
import Splash from '../screen/Splash';
import Login from '../screen/Login';
import HubungiKami from '../screen/HubungiKami';
import Test from '../screen/DeliveryForm';
import DeliveryForm from '../screen/DeliveryForm';
import DropDown from '../components/DropDown';
import VerifikasiEmail from '../screen/VerifikasiEmail';
import PaymentForm from '../screen/PaymentForm';
import OpenCamera from './OpenCamera';
// import Gesture from '../components/Gesture';
import AdminPage from '../screen/AdminPage';
import Tabs from '../screen/Tabs';
import ProfileScreen from '../screen/ProfileScreen';
import EditProfileScreen from '../components/EditProfil';
import EditProfil from '../components/EditProfil';
import TabView from '../components/ComponentTabs';
import TabViewExample from '../components/TabView';
import Modal from '../components/Modal';
import RiwayatPesanan from '../screen/RiwayatPesanan';
import ForgotPassword from '../screen/ForgotPassword';
// import HubungiKami from '../screen/HubungiKami';
// import Drawer from '../screen/Drawer';

export type RootStackParams = {
  splash: undefined;
  Login: undefined;
  //   BottomTabs: undefined;
  register: undefined;
  paketqurban: undefined;
  detailsapi: undefined;
  detaildomba: undefined;
  homescreen: undefined;
  // drawer: undefined;
  hubungikami: undefined;
  deliveryform: undefined;
  dropdown: undefined;
  verifikasiemail: undefined;
  paymentform: undefined;
  opencamera: undefined;
  tabs: undefined;
  // gesture: undefined;
  adminpage: undefined;
  profilescreen: undefined;
  editprofil: undefined;
  tabview: undefined;
  modal: undefined;
  //   hubungikami: undefined;
  // drawer: undefined;
  adminPage: undefined;
  riwayatpesanan: undefined;
  forgotpassword: undefined;
};

const Stack = createNativeStackNavigator<RootStackParams>();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator /*screenOptions={{headerShown: true}}*/>
        <Stack.Screen
          name="splash"
          component={Splash}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen */}
        {/* name="drawer" */}
        {/* component={Drawer} */}
        {/* options={{headerShown: false}} */}
        {/* /> */}
        <Stack.Screen
          name="register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="paketqurban"
          component={PaketQurban}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="detailsapi"
          component={DetailSapi}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="detaildomba"
          component={DetailDomba}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="homescreen"
          component={HomeScreen}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="hubungikami"
          component={HubungiKami}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="deliveryform"
          component={DeliveryForm}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="dropdown"
          component={DropDown}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="verifikasiemail"
          component={VerifikasiEmail}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="paymentform"
          component={PaymentForm}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="opencamera"
          component={OpenCamera}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name="gesture"
          component={Gesture}
          options={{headerShown: false}}
        /> */}
        <Stack.Screen
          name="adminpage"
          component={AdminPage}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="tabs"
          component={Tabs}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="profilescreen"
          component={ProfileScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="editprofil"
          component={EditProfil}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="tabview"
          component={TabViewExample}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="modal"
          component={Modal}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="adminPage"
          component={AdminPage}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="riwayatpesanan"
          component={RiwayatPesanan}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="forgotpassword"
          component={ForgotPassword}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;

const styles = StyleSheet.create({});
