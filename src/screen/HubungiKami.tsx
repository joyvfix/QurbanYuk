import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Linking,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import {black, blue, green, grey, red, white} from '../utils/color';
import {TextInput} from 'react-native';
import {Image} from 'react-native';
import {Button} from 'react-native';

const HubungiKami = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [saran, setPassword] = useState<string>('');

  if (name === '') {
    Alert.alert('ups!', 'nama wajib diisi', [
      {
        text: 'ok',
      },
    ]);
  } else if (email === '') {
    Alert.alert('ups!', 'Email wajib diisi', [
      {
        text: 'ok',
      },
    ]);
  } else if (
    email.split('@')[1] !== 'gmail.com' &&
    email.split('@')[1] !== 'email.com'
  ) {
    Alert.alert('ups!', 'email yg anda masukan salah', [
      {
        text: 'ok',
      },
    ]);
  } else if (saran === '') {
    Alert.alert('ups!', 'pasword wajib diisi', [
      {
        text: 'ok',
      },
    ]);
  }
  // else if (password.length < 6) {
  //   Alert.alert('ups!', 'pasword minimal 6 karakter', [
  //     {
  //       text: 'ok',
  //     },
  //   ]);
  // }
  // else if (password_confirmation !== password) {
  //   Alert.alert('ups!', 'pasword confirmation tidak sama', [
  //     {
  //       text: 'ok',
  //     },
  //   ]);
  // } else {
  //   setLoading(true);
  //   var formdata = new FormData();
  //   formdata.append('name', name);
  //   formdata.append('email', email);
  //   formdata.append('password', password);
  //   formdata.append('password_confirmation', password_confirmation);

  //   var requestOptions = {
  //     method: 'POST',
  //     body: formdata,
  //     redirect: 'follow',
  //   };

  //   fetch(
  //     // 'http://127.0.0.1:8000/api/register'
  //     // 'https://4352-2001-448a-4041-6d4e-ae44-c089-aa20-d7e.ngrok-free.app/api/register',
  //     'https://094f-2001-448a-404b-1e88-c893-d3c6-80c7-7788.ngrok-free.app/api/register',
  //     requestOptions,
  //   )
  //     .then(response => response.json())
  //     .then(result => {
  //       console.log(result);
  //       ToastAndroid.show('akun terdaftar', ToastAndroid.SHORT);
  //       Navigation.navigate('Login');
  //     })
  //     .catch(error => console.log('error', error))
  //     .finally(() => setLoading(false));
  // }
  // }; /*ini dillihat dulu kkondisinya*/

  return (
    // <TouchableOpacity>
    //   {/* <View>
    //     <Text style={styles.texthub}>HubungiKami</Text>
    //   </View> */}
    //   <TextInput placeholder="password confirmation" style={styles.boxinput} />
    // </TouchableOpacity>
    <ScrollView style={styles.scrollview}>
      <View style={styles.mainlogin}>
        {/* <Text style={styles.TextA}>A</Text> */}
        <View>
          <Text style={styles.logintext}>TULIS SARAN KEPADA KAMI:</Text>
        </View>

        <View style={styles.inputscreen}>
          <TextInput
            placeholder="Tuliskan Nama "
            style={styles.username}></TextInput>

          <TextInput
            placeholder="Tuliskan Email"
            style={styles.password}></TextInput>

          <TextInput
            placeholder="Tuliskan Saran"
            style={styles.saran}></TextInput>
          <TouchableOpacity
          // style={styles.divtextopacity}
          >
            <Text style={styles.textopacity}>KIRIM</Text>
          </TouchableOpacity>

          <View>
            <Text style={styles.calltext}>HUBUNGI KAMI</Text>
            <Text style={styles.addresstext}>Alamat:</Text>
            <Text style={styles.address}>
              Jalan Plaosan Gg V No 382Purworejo,Jawa Tengah ,Indonesia 5411
            </Text>
            <Text style={styles.emailtext}>Email:</Text>
            <Text style={styles.email}>QurbanYuk@gmail.com</Text>
            <Text style={styles.whatsapptext}>Whatsapp</Text>
            <Text style={styles.whatsapp1}>
              Galuh Dawlius Suhendra:085246082261
            </Text>
            <Text style={styles.whatsapp2}>Tsabit Ramadhan:082148722436</Text>
            <Text style={styles.whatsapp3}>Ahmad Faqih:082311061530</Text>
            <Text style={styles.followus}>Follow Us</Text>
          </View>
          <View style={styles.packicon}>
            <TouchableOpacity>
              <Image
                source={require('../assets/icon/facebook.png')}
                style={styles.facebookicon}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../assets/icon/logoig.png')}
                style={styles.igicon}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                source={require('../assets/icon/twitterlogo.png')}
                style={styles.twittericon}
              />
            </TouchableOpacity>
          </View>

          {/* <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/2889/2889676.png',
          }}
          style={styles.passwordicon}
        /> */}

          {/* <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/2102/2102647.png',
          }}
          style={styles.usericon}
        /> */}
          {/* <Image
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/128/709/709612.png',
          }}
          style={styles.eye}
        /> */}
        </View>
        <View>
          {/* <Text style={styles.textopti}>Forgot Password?</Text> */}
        </View>
        {/* <View> */}
        <TouchableOpacity>
          {/* <Text
          // onPress={() => Navigation.navigate('HomeScreen')}
          style={styles.textlogin}>
          Login
        </Text> */}
        </TouchableOpacity>
        {/* </View> */}
        {/* <View style={styles.viewor}>
        <View style={styles.border1}></View>
        <Text style={styles.textor}>OR</Text>
        <View style={styles.border2}></View>
      </View> */}
        {/* <View style={styles.viewicon}>
        <TouchableOpacity>
          <Image
            source={require('../assets/icon/facebook.png')}
            style={styles.fbicon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../assets/icon/google-plus.png')}
            style={styles.googleplusicon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={require('../assets/icon/apple.png')}
            style={styles.appleicon}
          />
        </TouchableOpacity>
      </View> */}
        {/* <View style={styles.lasttext}>
        <View>
          <Text style={styles.option}>don't have an account?</Text>
        </View>
        <View>
          <TouchableOpacity>
            <Text style={styles.signup}>sign up</Text>
          </TouchableOpacity>
        </View>
      </View> */}
      </View>
    </ScrollView>
  );
};

export default HubungiKami;

const styles = StyleSheet.create({
  // texthub: {
  //   fontWeight: 'bold',
  //   textAlign: 'center',
  //   top: 50,
  //   fontSize: 20,
  //   color: black,
  // },
  // boxinput: {},
  scrollview: {
    // backgroundColor: grey,
  },
  mainlogin: {
    alignItems: 'center',
  },
  // TextA: {
  //   position: 'absolute',
  //   color: white,
  //   fontWeight: 'bold',
  //   fontSize: 38,
  //   borderRadius: 50,
  //   top: 80,
  //   width: 76,
  //   height: 76,
  //   paddingLeft: 25,
  //   paddingTop: 10,
  //   backgroundColor: '#6C70EB',
  // },
  logintext: {
    // backgroundColor: red,
    paddingTop: 50,
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 30,
    color: black,
    letterSpacing: 0.7,
  },
  inputscreen: {},
  username: {
    // position:'absolute',
    width: 366,
    height: 55,
    left: 3,
    paddingLeft: 20,
    borderRadius: 5,
    borderColor: black,
    // backgroundColor: blue,
    elevation: 3,
    top: 30,
  },
  password: {
    // position:'absolute',
    width: 366,
    height: 55,
    left: 3,
    elevation: 3,
    borderRadius: 5,
    top: 50,
    paddingLeft: 20,
  },
  saran: {
    // backgroundColor: green,
    // position:'absolute',
    width: 366,
    height: 200,
    left: 3,
    elevation: 3,
    borderRadius: 5,
    top: 70,
    paddingBottom: 150,
    paddingLeft: 20,
  },
  usericon: {
    width: 20,
    height: 20,
    bottom: 83,
    left: 25,
  },
  passwordicon: {
    width: 20,
    height: 20,
    top: 13,
    left: 25,
  },
  eye: {
    width: 20,
    height: 20,
    bottom: 25,
    left: 330,
  },
  textopti: {
    fontWeight: '500',
    lineHeight: 50,
    color: black,
    letterSpacing: 0.7,
  },
  textlogin: {
    paddingTop: 12,
    fontSize: 20,
    fontWeight: '200',
    lineHeight: 30,
    color: white,
    letterSpacing: 0.7,
    backgroundColor: '#6C70EB',
    width: 366,
    height: 55,
    marginBottom: 10,
    textAlign: 'center',
    borderRadius: 5,
  },
  textor: {
    height: 20,
    width: 20,
    left: 75,
  },
  border1: {
    borderBottomWidth: 0.5,
    width: 170,
    right: 110,
    top: 10,
    paddingleft: 10,
  },
  border2: {
    borderBottomWidth: 0.5,
    width: 170,
    right: 130,
    top: 10,
    left: 110,
    marginTop: -20,
  },
  viewor: {
    top: 20,
  },
  fbicon: {
    marginRight: 15,
    top: 30,
    width: 35,
    height: 35,
    borderRadius: 20,
  },
  googleplusicon: {
    top: 30,
    marginRight: 35,
    marginLeft: 19,
    width: 35,
    height: 35,
  },
  appleicon: {
    top: 30,
    // marginRight: 5,

    width: 35,
    height: 35,
  },
  viewicon: {
    // position: 'absolute',
    flexDirection: 'row',
    alignContent: 'space-around',
    bottom: -35,
  },
  lasttext: {
    flexDirection: 'row',
    top: 120,
  },
  option: {
    fontWeight: '500',
    fontSize: 15,
  },
  signup: {
    fontWeight: '500',
    fontSize: 18,
    bottom: 2,
    marginLeft: 5,
    color: '#6C70EB',
  },
  divtextopacity: {
    backgroundColor: red,
    height: 50,
    top: 90,
  },
  textopacity: {
    elevation: 7,
    width: 130,
    height: 45,
    left: 110,
    top: 1,
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 20,
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
    marginTop: 95,
    paddingTop: 10,
    marginRight: 10,
    borderRadius: 30,
    letterSpacing: 1,
  },
  calltext: {
    marginTop: 200,
    width: 120,
    // backgroundColor: blue,
    top: 20,
    height: 90,
    paddingTop: 5,
    left: 120,
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 70,
    color: black,
    letterSpacing: 0.7,
  },
  addresstext: {
    width: 130,
    height: 40,
    left: 110,
    top: 7,
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 15,
    justifyContent: 'center',
    // display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: black,
    // top: 10,
    borderColor: black,
    // backgroundColor: green,
    // height: 45,
    paddingLeft: 25,
    paddingRight: 30,
    marginTop: 5,
    paddingTop: 5,
    marginRight: 10,
    borderRadius: 30,
    letterSpacing: 1,
  },
  address: {
    // width: 130,
    height: 40,
    left: 1,
    bottom: 5,
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 10,
    justifyContent: 'center',
    // display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: black,
    // top: 10,
    borderColor: black,
    // backgroundColor: green,
    // height: 45,
    paddingLeft: 25,
    paddingRight: 30,
    marginTop: 5,
    paddingTop: 5,
    marginRight: 10,
    borderRadius: 30,
    letterSpacing: 1,
  },
  emailtext: {
    width: 130,
    height: 40,
    left: 110,
    bottom: 5,
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 15,
    justifyContent: 'center',
    // display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: black,
    // top: 10,
    borderColor: black,
    // backgroundColor: green,
    // height: 45,
    paddingLeft: 25,
    paddingRight: 30,
    marginTop: 5,
    paddingTop: 5,
    marginRight: 10,
    borderRadius: 30,
    letterSpacing: 1,
  },
  email: {
    // width: 130,
    height: 40,
    left: 1,
    bottom: 15,
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 10,
    justifyContent: 'center',
    // display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    // textTransform: 'uppercase',
    color: black,
    // top: 10,
    borderColor: black,
    // backgroundColor: green,
    // height: 45,
    paddingLeft: 25,
    paddingRight: 30,
    marginTop: 5,
    paddingTop: 5,
    marginRight: 10,
    borderRadius: 30,
    letterSpacing: 1,
  },
  whatsapptext: {
    width: 130,
    height: 40,
    left: 110,
    bottom: 25,
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 15,
    justifyContent: 'center',
    // display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: black,
    // top: 10,
    borderColor: black,
    // backgroundColor: green,
    // height: 45,
    paddingLeft: 25,
    paddingRight: 30,
    marginTop: 5,
    paddingTop: 5,
    marginRight: 10,
    borderRadius: 30,
    letterSpacing: 1,
  },
  whatsapp1: {
    // width: 130,
    height: 40,
    left: 1,
    bottom: 30,
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 10,
    justifyContent: 'center',
    // display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: black,
    // top: 10,
    borderColor: black,
    // backgroundColor: green,
    // height: 45,
    paddingLeft: 25,
    paddingRight: 30,
    marginTop: 5,
    paddingTop: 5,
    marginRight: 10,
    borderRadius: 30,
    letterSpacing: 1,
  },
  whatsapp2: {
    // width: 130,
    height: 40,
    left: 1,
    bottom: 50,
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 10,
    justifyContent: 'center',
    // display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: black,
    // top: 10,
    borderColor: black,
    // backgroundColor: green,
    // height: 45,
    paddingLeft: 25,
    paddingRight: 30,
    marginTop: 5,
    paddingTop: 5,
    marginRight: 10,
    borderRadius: 30,
    letterSpacing: 1,
  },
  whatsapp3: {
    // width: 130,
    height: 40,
    left: 1,
    bottom: 70,
    fontStyle: 'normal',
    fontWeight: '500',
    fontSize: 10,
    justifyContent: 'center',
    // display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: black,
    // top: 10,
    borderColor: black,
    // backgroundColor: green,
    // height: 45,
    paddingLeft: 25,
    paddingRight: 30,
    marginTop: 5,
    paddingTop: 5,
    marginRight: 10,
    borderRadius: 30,
    letterSpacing: 1,
  },
  followus: {
    width: 130,
    height: 40,
    left: 110,
    bottom: 75,
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 15,
    justifyContent: 'center',
    // display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    textTransform: 'uppercase',
    color: black,
    // top: 10,
    borderColor: black,
    // backgroundColor: green,
    // height: 45,
    paddingLeft: 25,
    paddingRight: 30,
    marginTop: 5,
    paddingTop: 5,
    marginRight: 10,
    borderRadius: 30,
    letterSpacing: 1,
  },
  packicon: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    // backgroundColor: red,
    bottom: 70,
    width: 350,
  },
  facebookicon: {
    width: 30,
    height: 30,
    left: 50,
    // backgroundColor: green,
  },
  igicon: {
    width: 30,
    height: 30,
    // backgroundColor: green,
  },
  twittericon: {
    width: 30,
    height: 30,
    right: 50,
    // backgroundColor: green,
  },
});
