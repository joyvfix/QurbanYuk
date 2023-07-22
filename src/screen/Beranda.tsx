import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking,
} from 'react-native';
import React from 'react';

import {
  NativeStackNavigationProp,
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import {RootStackParams} from '../router';
import {useNavigation} from '@react-navigation/native';
import {ScrollView} from 'react-native';
import {black, crimson, green, greensaltegg, red, white} from '../utils/color';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Beranda = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();
  return (
    <View style={styles.pagefirst}>
      <ScrollView showsVerticalScrollIndicator={true}>
        <Image
          style={styles.firstbackground}
          source={require('../assets/image/Sapi-04.jpeg.png')}
        />
        <Text style={styles.texttittle}>QurbanYuk.com</Text>
        <View style={styles.border}></View>
        <Text style={styles.textsecond}>
          Salurkan Qurban dan Aqiqah Terbaik Anda Bersama Kami{' '}
        </Text>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('paketqurban')}>
            <Text style={styles.optipacket}>PILIH PAKET QURBAN</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.textthird}>PAKET PILIHAN </Text>
        <View style={styles.border2}></View>
        <View style={styles.paketsapi}>
          <Image
            style={styles.twobackground}
            source={require('../assets/image/bull-3594366-2048x1365.jpg.png')}
          />
          <Text style={styles.textsapi}>SAPI </Text>
          <TouchableOpacity onPress={() => navigation.navigate('detailsapi')}>
            <View style={styles.divtextdetail}>
              <Text style={styles.textdetail}>LIHAT DETAIL</Text>
              {/* <Image
                style={styles.rightarrow}
                source={require('../assets/icon/right-arrow2.png')}
              /> */}
            </View>
          </TouchableOpacity>
        </View>
        {/* {;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;} */}
        <View style={styles.paketdomba}>
          <Image
            style={styles.threebackground}
            source={require('../assets/image/sheep-1320940.jpg.png')}
          />
          <Text style={styles.textdomba}>KAMBING/ DOMBA </Text>
          <TouchableOpacity onPress={() => navigation.navigate('detaildomba')}>
            <View style={styles.divtextdetail}>
              <Text style={styles.textdetail}>LIHAT DETAIL</Text>
              {/* <Image
                style={styles.rightarrow}
                source={require('../assets/icon/right-arrow2.png')}
              /> */}
            </View>
          </TouchableOpacity>
        </View>
        {/* {;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;} */}
        <View style={styles.intropromo}>
          <Image
            style={styles.backgroundpromo}
            source={require('../assets/image/sabana3.jpg')}
          />
          <Text style={styles.textpromo}>MENGAPA MEMILIH KAMI </Text>
          <View style={styles.border3}></View>
          <View style={styles.divtext}>
            <Text style={styles.text1}>Sasaran Tepat</Text>
            <Text style={styles.text11}>
              Kami siap menyalurkan sesuai dengan permintaan Anda atau kepada
              saudara-saudara kita yang membutuhkan dan berhak sesuai dengan
              rekomendasi kami.{' '}
            </Text>

            <Text style={styles.text2}>Transparan</Text>
            <Text style={styles.text22}>
              Kami akan memberikan laporan penyaluran hewan qurbandengan
              disertai bukti penyaluran.
            </Text>

            <Text style={styles.text3}>Cara Mudah</Text>
            <Text style={styles.text33}>
              Kami menyediakan platform untuk mempermudah Anda melakukan
              pemesanan tanpa mengganggu aktivitas atau kesibukan Anda.
            </Text>
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('hubungikami')}>
            <View style={styles.divtextdetailpromo}>
              <Text style={styles.textdetail}>LIHAT DETAIL</Text>
              {/* <Image
                style={styles.rightarrowpromo}
                source={require('../assets/icon/right-arrow2.png')}
              /> */}
            </View>
          </TouchableOpacity>
        </View>
        {/* {;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;} */}
        <View style={styles.paketplus}>
          <Image
            style={styles.threebackground}
            source={require('../assets/image/kambing-aqiqah-purworejo-1024x683.jpg.png')}
          />
          <Text style={styles.textplus}>
            KAMI JUGA MENYEDIAKAN HEWAN UNTUK KEBUTUHAN AQIQAH UNTUK ANDA DAN
            KELUARGA ANDA, BAIK HEWAN UTUH MAUPUN SUDAH OLAHAN{' '}
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('hubungikami')}>
            <View style={styles.divtextdetaillast}>
              <Text style={styles.textdetail}>HUBUNGI KAMI</Text>
              {/* <Image
                style={styles.rightarrow}
                source={require('../assets/icon/right-arrow2.png')}
              /> */}
            </View>
          </TouchableOpacity>
        </View>
        {/* {;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;} */}
        <View style={styles.divdelivery}>
          <Text style={styles.textnophone}>
            QurbanMU.com | Untuk Pemesanan Silahkan Hubungi: Galuh 0898-5357-324
            atau Agung 0852-2883-6410
          </Text>
          <Text style={styles.textadress}>
            Alamat: Jalan Plaosan Gg V No 382 Purworejo, Jawa Tengah, Indonesia
            54111
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Beranda;

const styles = StyleSheet.create({
  pagefirst: {
    flex: 1,
    // paddingRight: 100,
    // backgroundColor: green,
    // height: hp('50%'), // 70% of height device screen
    // width: wp('100%'), // 80% of width device screen
  },
  firstbackground: {},
  paketsapi: {
    width: 385,
    right: 1,
    height: 450,
    // backgroundColor: red,
  },
  paketplus: {
    height: 800,
    // backgroundColor: blue,
    bottom: 10,
  },
  paketdomba: {
    width: 385,
    right: 1,
    height: 450,
    // backgroundColor: blue,
  },
  intropromo: {
    height: 900,
    // backgroundColor: grey,
    bottom: 15,
  },
  textpromo: {
    position: 'absolute',
    width: 350,
    height: 50,
    left: 25,
    paddingRight: 10,
    top: 80,
    // backgroundColor: red,
    // font-family: 'Montserrat';
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 30,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: white,
  },
  textplus: {
    // backgroundColor: red,
    textAlign: 'center',
    left: 95,
    width: 200,
    top: 70,
    fontWeight: 'bold',
    fontSize: 25,
    color: black,
    bottom: 100,
  },
  divtext: {
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 590,
  },
  divdelivery: {
    // height: 200,
    backgroundColor: black,
    height: hp('25%'), // 70% of height device screen
    width: wp('100%'), // 80% of width device screen
  },
  textnophone: {
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
  textadress: {
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
    // backgroundColor: red,
  },
  text1: {
    fontWeight: '700',
    fontSize: 25,
    color: white,
    bottom: 100,
  },
  text11: {
    width: 370,
    textAlign: 'center',
    // justifyContent: 'center',
    // alignItems: 'center',
    // alignContent: 'center',
    fontWeight: '500',
    fontSize: 20,
    color: white,
    bottom: 100,
    left: 1,
    // backgroundColor: red,
  },
  text2: {
    fontWeight: '700',
    fontSize: 25,
    color: white,
    bottom: 60,
  },
  text22: {
    width: 370,
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 20,
    color: white,
    bottom: 60,
    left: 1,
    // backgroundColor: red,
  },
  text3: {
    fontWeight: '700',
    fontSize: 25,
    color: white,
    bottom: 30,
  },
  text33: {
    // backgroundColor: red,
    textAlign: 'center',
    width: 370,
    left: 1,
    fontWeight: '500',
    fontSize: 20,
    color: white,
    bottom: 30,
  },
  twobackground: {
    borderRadius: 5,
    marginLeft: 20,
    height: 250,
    top: 30,
    width: 350,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  threebackground: {
    borderRadius: 5,
    marginLeft: 20,
    height: 250,
    top: 30,
    width: 350,
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
  },
  backgroundpromo: {
    // borderRadius: 5,
    // marginLeft: 27,
    height: 850,
    top: 30,
    width: 500,
    // justifyContent: 'center',
    // alignItems: 'center',
    // alignContent: 'center',
  },
  textsapi: {
    elevation: 20,
    position: 'absolute',
    width: 91,
    height: 35,
    left: 150,
    paddingRight: 10,
    top: 310,
    // backgroundColor: grey,
    // font-family: 'Montserrat';
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 35,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: black,
  },
  textdomba: {
    position: 'absolute',
    width: 250,
    height: 35,
    left: 70,
    paddingRight: 10,
    top: 310,
    // backgroundColor: red,
    // font-family: 'Montserrat';
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 35,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: black,
  },
  texttittle: {
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 370,
    color: white,
    fontSize: 24,
    fontWeight: '700',
    // backgroundColor: red,
    textAlign: 'center',
    // lineHeight: 33.6,
    // borderBottomWidth: 3,
    // paddingBottom: 15,
    // marginLeft: 150,
    // marginRight: 150,
  },
  textsecond: {
    elevation: 30,
    position: 'absolute',
    width: 870,
    height: 110,
    left: -10,

    paddingRight: 470,
    top: 130,
    // backgroundColor: red,
    // font-family: 'Montserrat';
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 35,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: white,
  },
  textthird: {
    position: 'absolute',
    width: 919,
    height: 110,
    left: 1,
    paddingRight: 540,
    top: 455,
    // backgroundColor: red,
    // font-family: 'Montserrat';
    fontStyle: 'normal',
    fontWeight: '700',
    fontSize: 30,
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: black,
  },
  optipacket: {
    width: 20,
    height: 50,
    left: 75,
    bottom: 190,
    // font-family: 'Noto Sans';
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
    // lineheight: 14,
    /* identical to box height, or 100% */
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
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 15,
    marginRight: 20,
    borderRadius: 30,
    letterSpacing: 1,
  },
  divtextdetail: {
    flexDirection: 'row',
    elevation: 7,
    backgroundColor: red,
  },
  divtextdetailpromo: {
    flexDirection: 'row',
    bottom: 670,
  },
  divtextdetaillast: {
    flexDirection: 'row',
    bottom: 30,
    // top: 20,
  },
  rightarrow: {
    height: 30,
    width: 30,
    // backgroundColor: black,
    top: 140,
    left: 33,
  },
  rightarrowpromo: {
    height: 30,
    width: 30,
    // backgroundColor: black,
    top: 140,
    left: 33,
  },
  textdetail: {
    elevation: 3,
    width: 230,
    height: 50,
    left: 75,
    top: 130,
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 14,
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
  border: {
    borderBottomWidth: 3,
    bottom: 370,
    paddingBottom: 15,
    marginLeft: 160,
    marginRight: 160,
    borderColor: green,
  },
  border2: {
    borderBottomWidth: 3,
    bottom: 20,
    paddingBottom: 15,
    marginLeft: 180,
    marginRight: 180,
    borderColor: green,
  },
  border3: {
    borderBottomWidth: 3,
    bottom: 720,
    paddingBottom: 15,
    marginLeft: 170,
    marginRight: 170,
    borderColor: green,
  },
});
