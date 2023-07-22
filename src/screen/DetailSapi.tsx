import {StyleSheet, Text, View, Linking} from 'react-native';
import React from 'react';
import {Image} from 'react-native';

import {black, blue, green, red, white} from '../utils/color';
import {TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {useNavigation} from '@react-navigation/native';
import {RootStackParams} from '../router';

const DetailSapi = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <View style={styles.firstpage}>
      <ScrollView showsVerticalScrollIndicator={true}>
        <View style={styles.pageup}>
          <Image
            style={styles.cowbackgroundup}
            source={require('../assets/image/Sapi-04.jpeg.png')}
          />
          <Text style={styles.textsapi}>paket sapi</Text>
          <Text style={styles.textkind}>JENIS SAPI YANG KAMI SEDIAKAN :</Text>
          <View style={styles.border}></View>
          <Text style={styles.textkind2}>
            Kami menyediakan beberapa jenis sapi kebutuhan qurban untuk Anda.
          </Text>
        </View>
        {/* {;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;} */}
        <View style={styles.paketreguler}>
          <TouchableOpacity onPress={() => navigation.navigate('paymentform')}>
            <Image
              style={styles.whitecowbackground}
              source={require('../assets/image/Sapi-02-1024x766.jpeg.png')}
            />
          </TouchableOpacity>
          <View style={styles.divtextreguler}>
            <Text style={styles.textpaket}>PAKET REGULER</Text>
            <Text style={styles.textprice}>Rp 23.000.000</Text>
            <Text style={styles.textintro}>
              Bobot -/+ 300 Kg dengan jenis sapi menyesuaikan.
            </Text>
            {/* <Image
                style={styles.rightarrow}
                source={require('../assets/icon/right-arrow2.png')}
              /> */}
          </View>
        </View>
        {/* {;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;} */}
        {/* {;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;} */}
        <View style={styles.paketmedium}>
          <TouchableOpacity>
            <Image
              style={styles.coklatcowbackground}
              source={require('../assets/image/Sapi-01-1024x766.jpeg.png')}
            />
          </TouchableOpacity>

          <View style={styles.divtextmedium}>
            <Text style={styles.textpaket2}>PAKET MEDIUM</Text>
            <Text style={styles.textprice2}>Rp Rp 27.000.000</Text>
            <Text style={styles.textintro2}>
              Bobot -/+ 350 Kg dengan jenis sapi menyesuaikan.
            </Text>
            {/* <Image
                style={styles.rightarrow}
                source={require('../assets/icon/right-arrow2.png')}
              /> */}
          </View>
        </View>
        {/* {;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;} */}
        <View style={styles.paketpremium}>
          <TouchableOpacity>
            <Image
              style={styles.coklatcowbackground2}
              source={require('../assets/image/Sapi-03-1024x766.jpeg.png')}
            />
          </TouchableOpacity>

          <View style={styles.divtextpremium}>
            <Text style={styles.textpaket3}>PAKET PREMIUM</Text>
            <Text style={styles.textprice3}>Rp Rp 32.000.000</Text>
            <Text style={styles.textintro3}>
              Bobot -/+ 430 Kg dengan jenis sapi menyesuaikan.
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate('deliveryform')}>
              <Text style={styles.textpesan3}>PESAN</Text>
            </TouchableOpacity>
            {/* <Image
                style={styles.rightarrow}
                source={require('../assets/icon/right-arrow2.png')}
              /> */}
          </View>
        </View>
        {/* {;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;} */}
        <View style={styles.divdelivery2}>
          <Text style={styles.textnophone2}>
            QurbanYuk.com | Untuk Pemesanan Silahkan Hubungi: Galuh
            0898-5357-324 atau Agung 0852-2883-6410
          </Text>
          <Text style={styles.textadress2}>
            Alamat: Jalan Plaosan Gg V No 382 Purworejo, Jawa Tengah, Indonesia
            54111
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default DetailSapi;

const styles = StyleSheet.create({
  firstpage: {
    flex: 1,
    // backgroundColor: green,
  },
  pageup: {},
  cowbackgroundup: {
    height: 250,
    width: 400,
    // backgroundColor: red,
  },
  textsapi: {
    bottom: 150,
    fontWeight: '700',
    fontSize: 30,
    textAlign: 'center',
    textTransform: 'uppercase',
    color: white,
    letterSpacing: 2,
  },
  textkind: {
    // backgroundColor: red,
    top: 20,
    left: 15,
    width: 350,
    fontWeight: '700',
    fontSize: 25,
    textAlign: 'center',
    textTransform: 'uppercase',
    color: black,
    letterSpacing: 2,
  },
  textkind2: {
    // backgroundColor: red,
    top: 60,
    left: 20,
    width: 350,
    fontWeight: '500',
    fontSize: 13,
    textAlign: 'center',
    textTransform: 'uppercase',
    color: black,
    letterSpacing: 2,
  },
  border: {
    right: 29,
    width: 50,
    // backgroundColor: green,
    borderBottomWidth: 3,
    top: 30,
    paddingBottom: 15,
    marginLeft: 190,
    marginRight: 190,
    borderColor: green,
  },
  // {;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;}
  paketreguler: {
    height: 550,
    // backgroundColor: blue,
    top: 100,
  },
  whitecowbackground: {
    borderRadius: 5,
    marginLeft: 20,
    height: 250,
    top: 30,
    width: 350,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  textpaket: {
    top: 50,
    fontWeight: '700',
    fontSize: 30,
    textAlign: 'center',
    textTransform: 'uppercase',
    color: black,
    letterSpacing: 2,
  },
  divtextreguler: {},
  textprice: {
    top: 60,
    fontWeight: '700',
    fontSize: 25,
    textAlign: 'center',
    textTransform: 'uppercase',
    color: black,
    letterSpacing: 2,
  },
  textintro: {
    top: 80,
    fontWeight: '700',
    fontSize: 15,
    textAlign: 'center',
    // textTransform: 'uppercase',
    color: black,
    letterSpacing: 2,
  },
  // {;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;}
  paketmedium: {
    height: 550,
    // backgroundColor: red,
    top: 100,
  },
  coklatcowbackground: {
    borderRadius: 5,
    marginLeft: 27,
    height: 250,
    top: 30,
    width: 350,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  divtextmedium: {},
  textpaket2: {
    top: 50,
    fontWeight: '700',
    fontSize: 30,
    textAlign: 'center',
    textTransform: 'uppercase',
    color: black,
    letterSpacing: 2,
  },
  textprice2: {
    top: 60,
    fontWeight: '700',
    fontSize: 25,
    textAlign: 'center',
    textTransform: 'uppercase',
    color: black,
    letterSpacing: 2,
  },
  textintro2: {
    top: 80,
    fontWeight: '700',
    fontSize: 15,
    textAlign: 'center',
    // textTransform: 'uppercase',
    color: black,
    letterSpacing: 2,
  },
  // {;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;}
  paketpremium: {
    height: 650,
    // backgroundColor: grey,
    top: 100,
  },
  coklatcowbackground2: {
    borderRadius: 5,
    marginLeft: 27,
    height: 250,
    top: 30,
    width: 350,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  divtextpremium: {},
  textpaket3: {
    top: 50,
    fontWeight: '700',
    fontSize: 30,
    textAlign: 'center',
    textTransform: 'uppercase',
    color: black,
    letterSpacing: 2,
  },
  textprice3: {
    top: 60,
    fontWeight: '700',
    fontSize: 25,
    textAlign: 'center',
    textTransform: 'uppercase',
    color: black,
    letterSpacing: 2,
  },
  textintro3: {
    top: 80,
    fontWeight: '700',
    fontSize: 15,
    textAlign: 'center',
    // textTransform: 'uppercase',
    color: black,
    letterSpacing: 2,
  },
  // {;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;}
  divdelivery2: {
    // height: 200,
    backgroundColor: black,
    height: hp('25%'), // 70% of height device screen
    width: wp('100%'), // 80% of width device screen
  },
  textnophone2: {
    textAlign: 'center',
    left: 20,
    // width: 400,
    top: 45,
    fontWeight: '500',
    fontSize: 17,
    color: white,
    bottom: 100,
    height: hp('10%'), // 70% of height device screen
    width: wp('90%'), // 80% of width device screen
    // backgroundColor: red,
  },
  textadress2: {
    textAlign: 'center',
    left: 20,
    // width: 420,
    top: 40,
    fontWeight: '500',
    fontSize: 17,
    color: white,
    bottom: 100,
    height: hp('6%'), // 70% of height device screen
    width: wp('90%'), // 80% of width device screen
  },
  // {;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;}
  textpesan3: {
    elevation: 7,
    display: 'flex',
    width: 100,
    height: 50,
    left: 140,
    top: 110,
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 17,
    justifyContent: 'center',
    // display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: white,
    // top: 10,
    borderColor: black,
    backgroundColor: green,
    // height: 45,
    paddingLeft: 25,

    paddingRight: 30,
    paddingTop: 15,
    marginRight: 10,
    borderRadius: 30,
    letterSpacing: 1,
  },
});
